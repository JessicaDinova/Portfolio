/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'cream' : {
          '100': '#F4F0ED',
        },
        'screen' : {
          '100': '#313131',
        },
        'lavander' : {
          '100': '#A2ABCE',
          '200': '#737C9D',
        }
    },
    fontFamily:{
      hand: ["Gochi Hand"],
      work: ["Work Sans"],
      drawn: ["Coming Soon"]
    }
  },
  },
  plugins: [],
}

