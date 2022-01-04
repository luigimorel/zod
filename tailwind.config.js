module.exports = {
 content: ['./resources/**/*.blade.php', './resources/**/*.tsx'],
 theme: {
  extend: {
   colors: {
    'bg-featured': '#e6ecfa',
    'single-image': '#4c4c43',
    'logo-color': '#1a2b6d',
    main: '#21759B',
    cta: '#172236',
   },
   backgroundImage: {
    jumbo: "url('resources/assets/images/jumboo.png')",
    overlay:
     'linear-gradient(89.4deg, #1d4e18 9.52%, rgba(24, 24, 27, 0.5) 89.41%)',
    sidebar: ' linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);',
   },
  },
 },
 plugins: [require('@tailwindcss/forms')],
}
