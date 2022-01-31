module.exports = {
 content: ['./resources/**/*.blade.php', './resources/**/*.tsx'],
 theme: {
  extend: {
   screens: {
    tab: { min: '639px', max: '900px' },
   },
   fontFamily: {
    sans: ['"Hind Madurai"', 'cursive'],
   },
   colors: {
    'bg-featured': '#e6ecfa',
    'single-image': '#4c4c43',
    'logo-color': '#1a2b6d',
    main: '#21759B',
    cta: '#172236',
    primary: '#3aa6ef',
   },
   backgroundImage: {
    jumbo: "url('/images/hero.png')",
    overlay:
     'linear-gradient(89.4deg, #3aa6ef 9.52%, rgba(24, 24, 27, 0.7) 89.41%)',
    sidebar: ' linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);',
   },
  },
 },
 plugins: [require('@tailwindcss/forms')],
}
