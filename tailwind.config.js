/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  safelist: [
    'bg-dendro','bg-electro', 'bg-cryo','bg-pyro','bg-geo',
    'bg-anemo', 'bg-hydro',

    'bg-neutral-800', 'rounded-md', 'border', 'border-black', 'hover:border-white', 'hover:cursor-pointer',
    'shadow-lg', 'p-4', 'flex', 'flex-col', 'items-center', 'flex-grow', 'h-full', 'h-36', 'w-36', 'py-2',
    'text-2xl', 'text-white', 'text-center', 'font-bold', 'text-wrap', 'flex-row', 'flex-wrap', 'justify-center',
    'gap-1', 'pb-3', 'font-semibold', 'text-sm', 'align-middle', 'h-5', 'px-3', 'mx-1', 'bg-neutral-400', 'rounded-md'
    
    
  ],
  theme: {
    extend: {
      colors: {
        'electro': '#e600e6',
        'cryo': '#00ffff',
        'dendro': '#00ff00',
        'pyro': '#ff1a1a',
        'geo': '#ffff00',
        'anemo': '#99ffcc',
        'hydro': '#0066ff',
        'discord' : '#7289da',
        'twitter' : '#008AD8'
        
      }
    },
    
  },
  plugins: [],
}

