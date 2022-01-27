const mix = require('laravel-mix')
require('laravel-mix-purgecss')
require('laravel-mix-bundle-analyzer')

if (!mix.inProduction()) {
 mix.bundleAnalyzer()
}

mix
 .ts('resources/js/app.js', 'public/js')
 .react()
 .postCss('resources/css/app.css', 'public/css', [require('tailwindcss')])
 .purgeCss()
 .version()
