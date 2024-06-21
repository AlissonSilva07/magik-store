/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'branco': '#ffffff',
      'preto': '#000000',
      'roxo': '#802C6E',
      'cinza-800': '#71717A',
      'cinza-100': '#CACACA'
    }
  },
  plugins: [],
}
