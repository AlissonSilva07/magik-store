/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Plus Jakarta Sans'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      }
    },
    colors: {
      'branco': '#ffffff',
      'preto': '#000000',
      'roxo': '#590D82',
      'cinza-800': '#71717A',
      'cinza-100': '#CACACA',
      'cinza-border': '#0f172a',
      'amarelo': '#FDE047'
    }
  },
  plugins: [],
}
