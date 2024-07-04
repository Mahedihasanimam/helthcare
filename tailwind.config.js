/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'myfont': ["'Inter', sans-serif"]
      },
      backgroundImage: {
        'banner-img': "url('/src/assets/resources/Group (1).png')", // update with your image path
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
