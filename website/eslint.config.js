import eslint from '@eslint/js';
import astro from 'eslint-plugin-astro';

export default [
    {
        ignores: ['dist/**', '.astro/**'],
    },
    eslint.configs.recommended,
    ...astro.configs['flat/recommended'],
];
