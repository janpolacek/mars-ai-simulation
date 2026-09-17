# Red Horizon scenario (locked)

> **Private scenario canon — locked 16 September 2026.** Red Horizon, its coalition, Asteria Field, RH-01
> Pathfinder, the assignments below, and every programme date and budget figure are fictional. Real places,
> technologies, institutions, and scientific sources are cited only to make the scenario technically grounded. Nothing
> in this document implies participation, approval, funding, or endorsement by a real organisation.

This document is the private scenario canon for Red Horizon: it defines what the programme is internally understood to
be. The numbered steps in `docs/timeline/` are the release order and control when facts may become public. A public
release may use only the facts allowed by its current timeline step, even when later facts are already fixed here.

## Mission identity

| Field                  | Locked scenario value                                                    |
| ---------------------- | ------------------------------------------------------------------------ |
| Programme              | Red Horizon                                                              |
| First mission          | Red Horizon One                                                          |
| Surface vehicle        | RH-01 Pathfinder                                                         |
| Mission type           | Uncrewed international Mars lander-and-rover mission                     |
| Primary science        | Mineralogy and reconstruction of ancient habitable conditions            |
| Landing target         | Asteria Field, a fictional operational designation in Margaritifer Terra |
| Launcher               | Ariane 64 from Europe's Spaceport near Kourou, French Guiana             |
| Launch                 | 17 February 2031                                                         |
| Mars landing           | 16 September 2031                                                        |
| Supported surface life | Two Mars years, ending 21 June 2035                                      |
| Lifecycle budget       | €2.10 billion in constant 2026 euros                                     |

The mission does not search for living organisms, claim evidence of life, return samples to Earth, carry people, or
prepare a crewed landing. Its habitability work asks whether the site once possessed water, chemistry, energy sources,
and environmental stability compatible with life as science understands it.

## Coalition and governance

### Members

France, Germany, Estonia, Norway, Spain, Poland, Czechia, Slovakia, Japan, and Canada are the ten programme partners.
The United States is not a programme participant and Red Horizon does not depend on United States launch, navigation,
relay, or deep-space-network services in the locked architecture.

The countries participate through fictional national programme teams. Except for the limited FEI STU role defined
below, no real agency, university, laboratory, or company is a canonical partner unless the human story owner later
approves the reference and its wording.

### Equal governance

The **Red Horizon Council** has one voting representative from each partner. Financial and hardware contributions are
not equal, but governance is:

- routine programme decisions require six of ten votes;
- changes to mission purpose, landing target, launch date, total budget, or public canon require eight of ten votes;
- launch, landing, and planetary-protection readiness require unanimous safety concurrence;
- the independent Safety and Mission Assurance Panel may stop a test or flight operation without changing programme
  policy;
- science data enter a shared archive after instrument calibration and safety review, with no national exclusivity
  period.

The programme director rotates every eighteen months among partner nominees. The Mission Directorate controls cost,
schedule, and flight execution; the Science Assembly controls observation priorities; the Red Horizon Council resolves
cross-programme decisions. None of these fictional bodies should be presented as a real intergovernmental institution.

### Responsibility split

| Partner  | Scenario responsibility                                                                                         |
| -------- | --------------------------------------------------------------------------------------------------------------- |
| France   | Cruise stage, high-gain communications terminal, launcher interface, and mission-level systems engineering      |
| Germany  | Entry/descent/landing structure, radar, thermal engineering, and environmental qualification                    |
| Estonia  | Secure flight-software toolchain, telemetry integrity, and mission digital twin                                 |
| Norway   | Surface weather package, dust monitoring, and cold-environment test campaign                                    |
| Spain    | Mineralogy science leadership, Raman/visible-near-infrared instrument, and European ground-station coordination |
| Poland   | Contact-arm actuators, abrasion and micro-sample tool, and mechanism life testing                               |
| Czechia  | Power-conditioning electronics, electromagnetic-compatibility testing, and calibration support                  |
| Slovakia | Small sensor-interface and equipment-health-monitoring contribution, including the FEI STU role below           |
| Japan    | Six-wheel mobility, stereo imaging, thermal control, and autonomous navigation hardware                         |
| Canada   | Terrain assessment software, rover autonomy, science-operations planning, and archive tools                     |

**FEI STU scenario role:** the Faculty of Electrical Engineering and Information Technology at the Slovak University of
Technology in Bratislava develops and validates a low-power radiation and equipment-health interface board for the
surface weather package. This is intentionally a small contribution suitable for one restrained later mention. Any
public use of the real institution's name requires separate human approval and must state that Red Horizon is fictional;
the scenario does not imply FEI STU's real participation or endorsement.

## Scientific purpose

Red Horizon One investigates how water changed an ancient equatorial landscape and whether those environments once met
basic conditions for habitability. The mission has four ranked objectives:

1. map the relationship among clay-bearing, chloride-bearing, sulfate-bearing, and basaltic units;
2. determine whether alteration occurred in a long-lived lake or groundwater system, or in shorter episodic events;
3. assess past habitability from mineral chemistry, texture, environmental context, and preservation potential without
   treating habitability as evidence of life;
4. demonstrate repeatable international rover operations, transparent anomaly reporting, and a reusable data archive.

The expected mature scientific result is a constrained environmental history, not a dramatic discovery. A plausible
high-value outcome is evidence that water chemistry changed from relatively mild clay-forming conditions to more saline
evaporitic conditions. The mission may discuss preservation potential but does not detect or announce life.

## Asteria Field

**Asteria Field is fictional.** It is Red Horizon's operational name for a landing and traverse area centred at
**17.80°S, 332.20°E** in Margaritifer Terra. It is not an official International Astronomical Union place name.

The location is grounded in the real Margaritifer Terra context of ancient cratered highlands, basin-margin material,
paleochannel benches, and later eolian modification. These regional characteristics make the area useful for studying
water-rock interaction and changing aqueous conditions without claiming a confirmed local mineral detection. The
canonical mission landing ellipse is **6.4 km by 3.2 km**, oriented 078°/258°, with a **2.4 km by 1.2 km** inner
touchdown zone in its western half. The science plan uses the P0 touchdown zone and S1-S4 points defined in the Asteria
Field dossier and map package.

**Reconciliation — 16 September 2026:** the approved Asteria Field dossier and generated PNG map package supersede the
earlier baseline placeholder of 5.60°S, 353.50°E and the 15 km by 10 km ellipse. The coordinates, ellipse, local units,
science zones, hazards, routes, and communications rules in `docs/area/AREA.md` are now the canonical local
mission definition.

The dedicated Asteria Field task owns the detailed geology, fictional local feature names, traverse zones, hazards,
landing-ellipse refinement, and canonical maps. It may refine local coordinates inside the approved Margaritifer Terra
area but may not move the mission to another Martian region without an eight-vote Council decision.

## Flight system

### Architecture

Red Horizon One uses four flight elements:

1. an Ariane 64 injection and payload-adapter segment;
2. a solar-powered cruise stage for navigation, thermal control, and Earth communications;
3. an aeroshell and powered stationary landing platform for entry, descent, landing, rover deployment, and surface relay;
4. RH-01 Pathfinder, a roughly two-metre, six-wheel rover matching the canonical vehicle dossier.

The target spacecraft mass at launch-vehicle separation is **4,250 kg**, including system margin. The scenario treats
this as a controlled mass ceiling, not a claim of contracted Ariane performance. The landing system uses atmospheric
entry, a supersonic parachute, terrain-relative navigation, and a throttleable terminal-descent stage. RH-01 deploys from
the stationary platform over one of two ramps after landing-site imaging confirms a safe route.

There is no dedicated Red Horizon Mars orbiter. The landing platform provides the primary relay:

- RH-01 communicates with the platform over a redundant UHF link;
- the platform returns science and engineering data to coalition ground stations over steerable X-band;
- RH-01 carries a low-rate direct-to-Earth X-band backup for health packets and commanding;
- existing non-programme Mars orbiters may provide emergency reception only when separately agreed, and are not required
  for mission success.

### Power and thermal design

RH-01 uses a fictional European americium-241 radioisotope power system with rechargeable batteries for peak loads. The
choice preserves the rover's established body and dark equipment deck without adding a large solar array, and supports
two complete Martian seasonal cycles. Radioisotope heater units protect the sample tool and critical electronics during
cold periods.

This is a scenario technology assumption, not a statement that a flight-qualified European unit is available today. It
is grounded in Europe's real ENDURE work on americium-241 radioisotope power for long-duration lunar and Martian use. The
programme's 2028 preliminary design review is the go/no-go point for power-system maturity; failure at that gate forces a
launch delay rather than an unreviewed change to the rover silhouette.

The landing platform uses body-mounted solar arrays, batteries, and radioisotope heaters. It prioritises relay passes,
weather observations, and survival heating rather than continuous operation.

### Payload and onboard samples

The payload remains compact and explainable on the canonical rover:

- mast stereo panorama and navigation cameras;
- close-up context imager on the contact tool;
- combined Raman and visible-near-infrared mineral spectrometer;
- elemental chemistry sensor for rock and regolith context;
- pressure, temperature, wind, and airborne-dust package;
- two-joint contact arm with abrasion, grain capture, and reusable micro-analysis chamber.

For a sample campaign, the contact tool abrades a weathered surface, captures no more than one cubic centimetre of loose
material, and analyses it inside the tool's reusable chamber. The material is then returned to the ground near its source.
RH-01 carries no sealed cache, ascent vehicle, Earth-return capsule, or biological life-detection experiment. In public
language, “sample” must always mean a locally collected and onboard-analysed portion of Martian material.

## Launch and mission dates

All dates are locked scenario dates in UTC. Exact times remain flight-operations details until the relevant timeline
step. The interplanetary dates use a published 17 February 2031 Earth departure with an approximately 210.7-day transfer
as the planning anchor; later mission design may refine hours and targeting parameters without changing the canonical day.

| Date              | Milestone                                                              |
| ----------------- | ---------------------------------------------------------------------- |
| 16 September 2026 | Scenario and two-Mars-year design life approved                        |
| 12 October 2026   | Red Horizon Council charter takes effect                               |
| 19 March 2027     | Mission Concept Review                                                 |
| 24 September 2027 | System Requirements Review and Asteria Field target confirmation       |
| 7 April 2028      | Payload Selection Review                                               |
| 20 October 2028   | Preliminary Design Review and radioisotope-power maturity gate         |
| 13 July 2029      | Critical Design Review and flight-build authorisation                  |
| 11 March 2030     | RH-01 flight-model assembly begins                                     |
| 30 August 2030    | Integrated rover, lander, and cruise-stage test campaign begins        |
| 22 November 2030  | Environmental qualification and landing-system rehearsal complete      |
| 13 January 2031   | Flight stack arrives at Kourou                                         |
| 11 February 2031  | Launch Readiness Review                                                |
| 17 February 2031  | Ariane 64 launch and Earth departure                                   |
| 3 March 2031      | First planned trajectory-correction opportunity                        |
| 20 May 2031       | Cruise checkout and second correction opportunity                      |
| 21 August 2031    | Final approach correction opportunity                                  |
| 16 September 2031 | Atmospheric entry and landing at Asteria Field                         |
| 17 September 2031 | First engineering health packet and platform panorama                  |
| 23 September 2031 | RH-01 egress from the landing platform                                 |
| 30 September 2031 | First controlled drive and mobility assessment                         |
| 31 October 2031   | First onboard sample collection and mineral analysis                   |
| 18 April 2032     | First mineral-stratigraphy campaign completed                          |
| 3 August 2033     | One Mars year of surface operation completed                           |
| 16 September 2034 | Three Earth years after landing; final-year health review              |
| 21 June 2035      | Two Mars years completed; supported surface operations end             |
| 21 July 2035      | Thirty-day listening campaign ends and mission end-of-life is declared |
| 30 June 2036      | Calibrated science archive and final engineering report completed      |

The supported surface interval is exactly **1,374 Earth days**, using 687 Earth days as the planning length of one Mars
year. The 30-day listening campaign is closeout, not an extension of supported science operations. The final-contact cause
and any late-life mitigation remain reserved for timeline step 011 so that they can be made consistent with the anomalies
actually established in earlier releases.

## Lifecycle budget

The locked lifecycle ceiling is **€2.10 billion in constant 2026 euros**. It covers concept work through the final archive
and includes centrally held contingency. These are fictional programme estimates informed by Mars-mission analogues; they
are not prices or commitments from any real supplier.

| Cost element                                            | € million | Scope                                                                               |
| ------------------------------------------------------- | --------: | ----------------------------------------------------------------------------------- |
| Science definition, research, and site characterisation |        90 | Mineral studies, landing analysis, laboratories, and science planning               |
| Programme management, systems engineering, and safety   |       155 | Council support, assurance, reviews, licensing, and mission design                  |
| RH-01 rover platform                                    |       350 | Structure, mobility, autonomy hardware, avionics, thermal system, and flight spares |
| Science payload and sample tool                         |       185 | Instruments, calibration, arm end-effector, and science software                    |
| Cruise stage, aeroshell, landing platform, and relay    |       410 | Interplanetary bus, entry system, descent propulsion, ramps, and X-band relay       |
| Radioisotope power and thermal systems                  |        90 | Power unit, heater units, safety analysis, batteries, and containment               |
| Ground segment, flight software, and simulators         |        90 | Coalition control system, cybersecurity, digital twin, and training                 |
| Integration, qualification, and planetary protection    |       175 | Assembly, vibration, thermal-vacuum, landing tests, and cleanliness controls        |
| Ariane 64 launch service and Kourou campaign            |       180 | Launcher, adapter, integration, range, and campaign support                         |
| Cruise, surface operations, and science archive         |       155 | Flight teams through 2035 and archive completion through June 2036                  |
| Centrally held cost and schedule reserve                |       220 | Unallocated risk reserve controlled by the Red Horizon Council                      |
| **Total**                                               | **2,100** | **Full lifecycle ceiling**                                                          |

### Funding shares

Voting equality is independent of funding share. Contributions may be cash, flight hardware, operations, facilities, or
verified in-kind work valued under a common accounting policy.

| Partner   |    Share | Scenario value (€ million) |
| --------- | -------: | -------------------------: |
| France    |      22% |                        462 |
| Germany   |      22% |                        462 |
| Japan     |      16% |                        336 |
| Canada    |      10% |                        210 |
| Spain     |       9% |                        189 |
| Norway    |       7% |                        147 |
| Poland    |       5% |                        105 |
| Czechia   |       4% |                         84 |
| Estonia   |       3% |                         63 |
| Slovakia  |       2% |                         42 |
| **Total** | **100%** |                  **2,100** |

The €180 million launch line is a programme planning allowance. For scale, NASA reported approximately $243 million for
Mars 2020 launch services and associated processing, while the InSight press kit reported about $163.4 million for its
launch vehicle and launch services. The overall ceiling sits below NASA's $2.44 billion Mars 2020 baseline because RH-01
is smaller and carries no sample cache, while remaining above ESA's €1.3 billion ExoMars programme figure stated in 2008
economic conditions. Currency, year, scope, and accounting differences prevent direct price comparison.

## Programme risks and locked responses

| Risk                                                 | Locked response                                                                                     |
| ---------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 2031 transfer or launch readiness missed             | Replan to the next viable Mars opportunity; do not compress qualification                           |
| Radioisotope power not mature at October 2028 review | Delay the mission; do not redesign the approved rover around a large solar deck                     |
| Entry/descent/landing mass growth                    | Protect rover and science minimums, use central reserve, and descope secondary lander science first |
| Relay-platform failure                               | Preserve low-rate RH-01 direct-to-Earth commanding and health telemetry                             |
| Sample-tool degradation                              | Continue remote mineralogy, imaging, weather, and traverse science                                  |
| Landing ellipse or traverse proves unsafe            | Select safer targets within Asteria Field; do not invent impossible mobility                        |
| Cost exceeds €2.10 billion ceiling                   | Council review at eight-vote threshold; no silent scope or schedule change                          |

## Continuity and release controls

- Timeline steps 001–011 remain the release order. This scenario document does not make later facts public.
- The coalition and the lifecycle budget frame are introduced with the project announcement (step 001); anything beyond
  that frame waits for a later step.
- Payload details wait for step 002; RH-01 imagery waits for step 003; Ariane 64 waits for step 004; exact launch and
  landing dates wait for their authorised release steps.
- Asteria Field is not published until the landing-preparation sequence allows it. Its maps are scenario planning assets. (Note: name, centre coordinates, and plates AF-01/AF-02/AF-03 were partially released 2026-09-17 for article 001 only. H1 decision 2026-09-17 (option i): the plate images may carry the landing-design depiction; no landing-design fact (ellipse geometry, P0 touchdown zone, science-zone plan, hazard inventory, traverse logic, AF-* unit identifiers) may be written into article prose, alt text, or captions. Surface mission lifetime — two Mars years, 1,374 Earth days — released for article 001. All other Asteria Field material remains gated.)
- Generated visuals are labelled as fictional or illustrative and are never presented as documentary mission imagery.
- Real institutions, including FEI STU and Arianespace, require explicit review before any public mention. Their appearance
  in this scenario does not imply real participation.

## Real-world grounding sources

The sources below support the technical scale and real Mars context. They do not support the fictional programme facts.
All were accessed on 16 September 2026.

1. [USGS geologic map of Margaritifer Terra](https://pubs.usgs.gov/publication/sim3041) — ancient highlands, valleys,
   plains, basin deposits, and fluvial history.
2. [Eastern Margaritifer landing-site study](https://marsoweb.nas.nasa.gov/landingsites/msl/memoranda/sites_jan10/Christensen_MSL_Margaritifer_Terra_v3.pdf)
   — example landing ellipse near 5.59°S, 353.52°E and layered chloride/phyllosilicate science targets.
3. [NASA explanation of the Mars year](https://science.nasa.gov/resource/mars-in-a-minute-how-long-is-a-year-on-mars/)
   — one Mars year is approximately 687 Earth days.
4. [Earth–Mars transfer study](https://www.esa.int/gsp/ACT/doc/MAD/pub/ACT-RPR-MAD-2003-DESIGN%20OF%20EARTH-MARS%20TRANSFER%20TRAJECTORIES%20USING%20EVOLUTION-BRANCHING.pdf)
   — 17 February 2031 departure and 210.7-day outbound transfer used as the scenario planning anchor.
5. [Ariane 6 User's Manual](https://www.arianespace.com/wp-content/uploads/2021/03/Mua-6_Issue-2_Revision-0_March-2021.pdf)
   — reference escape performance, payload environment, and mission-interface constraints.
6. [Arianespace's first operational Ariane 64 report](https://newsroom.arianespace.com/arianespace-successfully-launches-32-amazon-leo-satellites-with-the-first-ariane-64/?lang=eng)
   — real four-booster configuration and Kourou operations context.
7. [ESA ExoMars programme FAQ](https://www.esa.int/content/view/full/466936) — architecture and €1.3 billion European
   programme-cost analogue in 2008 economic conditions.
8. [NASA OIG Mars 2020 audit](https://oig.nasa.gov/docs/IG-17-009.pdf) — $2.44 billion lifecycle baseline and programme
   phase/cost context.
9. [NASA Mars 2020 launch-services award](https://www.nasa.gov/news-release/nasa-awards-launch-services-contract-for-mars-2020-rover-mission/)
   — approximately $243 million launch-service and processing analogue.
10. [NASA InSight landing facts](https://www.jpl.nasa.gov/news/press_kits/insight/landing/facts/) — $163.4 million launch
    vehicle/services analogue and long-duration Mars surface-operations context.
11. [ESA ENDURE americium-241 technology context](https://ideas.esa.int/core/servlet/hype?documentId=5b97ca7b7a3225e64d37841fe1fe9a21&documentTableId=6134754942843243628&templateName=&userAction=Browse)
    — European development direction for long-duration lunar and Martian radioisotope power.
12. [FEI STU space-engineering programme](https://www.fei.stuba.sk/en/applicants/applicants/i-want-to-study/study-programmes/postgraduate-study-programmes/space-engineering)
    — real teaching and research areas supporting the fictional small electronics role.
