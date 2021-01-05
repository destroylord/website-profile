const mix = require('laravel-mix');

const tailwindcss = require('tailwindcss');
require('laravel-mix-purgecss');

mix.js('src/app.js', 'js')
   .sass('src/app.scss', 'css')

   .options({
      processCssUrls: false,
      postCss: [ tailwindcss('./tailwind.config.js') ]
   })
  .purgeCss()
   .setPublicPath('dist');