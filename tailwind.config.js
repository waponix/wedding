/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Parisienne', 'Yellowtail', 'Caveat'],
        'serif': ['EB Garamond'],
        'highlight': ['Caveat'],
        'normal': ['Work Sans']
      },
      colors: {
        'gray': '#4B4D4B',
        'primary': '#BF214B',
        'secondary': '#7BA692',
        'light': '#EEF2D0'
      },
      backgroundImage: {
        'paper': "url('img/paper_texture.jpg')",
        'cloth': "url('img/cloth_bg.jpg')",
      },
      backgroundColor: {
        'green': '#91A644',
        'peach': '#BF9D8A',
        'light': '#EEF2D0',
        'primary': '#BF214B',
        'secondary': '#7BA692'
      }
    }
  },
  plugins: [],
}

