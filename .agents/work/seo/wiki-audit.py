"""Read-only built wiki SEO inventory. Run with the dist directory as argv[1]."""
import json
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit


class Document(HTMLParser):
    def __init__(self, text):
        super().__init__(convert_charrefs=True)
        self.titles = []
        self.descriptions = []
        self.canonicals = []
        self.jsonld = 0
        self.links = []
        self.ids = set()
        self.region = None
        self.in_title = False
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag in ('header', 'footer'):
            self.region = tag
        if 'id' in a:
            self.ids.add(a['id'])
        if tag == 'title':
            self.in_title = True
            self.titles.append('')
        if tag == 'meta' and a.get('name') == 'description':
            self.descriptions.append(a.get('content', ''))
        if tag == 'link' and 'canonical' in (a.get('rel') or '').split():
            self.canonicals.append(a.get('href'))
        if tag == 'script' and a.get('type') == 'application/ld+json':
            self.jsonld += 1
        if tag == 'a' and 'href' in a:
            self.links.append((a['href'], self.region))

    def handle_endtag(self, tag):
        if tag == 'title':
            self.in_title = False
        if tag in ('header', 'footer'):
            self.region = None

    def handle_data(self, data):
        if self.in_title:
            self.titles[-1] += data


def main():
    root = Path(sys.argv[1]).resolve()
    docs = {p: Document(p.read_text()) for p in root.rglob('*.html')}
    rows, broken = [], []
    checked = 0
    for path, doc in sorted(docs.items()):
        route = '/' + path.relative_to(root).as_posix()
        if route.endswith('index.html'):
            route = route[:-10]
        if not route.startswith('/wiki/'):
            continue
        rows.append({
            'route': route, 'titles': doc.titles,
            'title_lengths': [len(t) for t in doc.titles],
            'descriptions': doc.descriptions,
            'description_lengths': [len(t) for t in doc.descriptions],
            'canonicals': doc.canonicals, 'jsonld': doc.jsonld,
            'wiki_header_links': sum(h == '/wiki/' and r == 'header' for h, r in doc.links),
            'wiki_footer_links': sum(h == '/wiki/' and r == 'footer' for h, r in doc.links),
        })
        for href, _ in doc.links:
            url = urlsplit(urljoin('https://audit.invalid' + route, href))
            if url.netloc != 'audit.invalid' or url.scheme not in ('http', 'https'):
                continue
            checked += 1
            target = root / unquote(url.path).lstrip('/')
            if url.path.endswith('/'):
                target /= 'index.html'
            if not target.is_file():
                broken.append({'source': route, 'href': href, 'reason': 'missing file'})
            elif url.fragment and target in docs and unquote(url.fragment) not in docs[target].ids:
                broken.append({'source': route, 'href': href, 'reason': 'missing fragment'})
    report = {
        'dist': str(root), 'wiki_page_count': len(rows), 'pages': rows,
        'wiki_internal_link_occurrences_checked': checked, 'broken_links': broken,
        'sitemaps': [str(p.relative_to(root)) for p in root.rglob('*sitemap*.xml')],
        'note': 'Real build only; absent sections and leaf pages are deferred, not passes.',
    }
    strings_path = Path(__file__).with_name('wiki-strings.json')
    strings = json.loads(strings_path.read_text())
    for row in strings:
        row['title_length'] = len(row['title'])
        row['description_length'] = len(row['description'])
        assert row['title_length'] <= 60 and row['description_length'] <= 155
    report['proposed_strings_measured'] = strings
    print(json.dumps(report, indent=2))


if __name__ == '__main__':
    main()
