const mix = require("laravel-mix");

mix.ts("resources/js/app.js", "public/js")
    .react()
    .postCss("resources/css/app.css", "public/css", [require("tailwindcss")]);
