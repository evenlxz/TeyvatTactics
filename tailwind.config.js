/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html',
    './**/*.js',

  ],
  safelist: [
    'bg-dendro','bg-electro', 'bg-cryo','bg-pyro','bg-geo',
    'bg-anemo', 'bg-hydro',

    'bg-neutral-800', 'rounded-md', 'border', 'border-black', 'hover:border-white', 'hover:cursor-pointer',
    'shadow-lg', 'p-4', 'flex', 'flex-col', 'items-center', 'flex-grow', 'h-full', 'h-36', 'w-36', 'py-2',
    'text-2xl', 'text-white', 'text-center', 'font-bold', 'text-wrap', 'flex-row', 'flex-wrap', 'justify-center',
    'gap-1', 'pb-3', 'font-semibold', 'text-sm', 'align-middle', 'h-5', 'px-3', 'mx-1', 'bg-gray-400', 'rounded-md'
    
    
  ],
  theme: {
    extend: {
      colors: {
        'electro': '#945dc4',
        'cryo': '#a0d7e4',
        'dendro': '#608a00',
        'pyro': '#EC4923',
        'geo': '#debd6c',
        'darkerGeo': '#ffd11a',
        'anemo': '#99ffcc',
        'hydro': '#00BFFF',
        'discord' : '#5865f2',
        'twitter' : '#008AD8',
        'discordLight' : '#8b94e8',
        'twitterLight' : '#38abf2'
        
      }
    },
    
  },
  plugins: [],
}

