/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    mode: 'jit',
  theme: {
    extend:
    {
      colors:
        {
          primary: "#00040f",
          secondary: "#00f6ff",
          dimWhite: "rgba(255, 255, 255, 0.7)",
          dimBlue: "rgba(9, 151, 124, 0.1)",
          customLinen: 'rgb(252, 248, 243)',
          beige: "rgba(249, 241, 231, 1)",
          linkColor: "rgba(249, 241, 231, 1)"
        },
      fontFamily: 
       {
         poppins: ["poppins", "sans-serif"]
       },
    },
     backgroundImage: {
        'hero-pattern': "url('../src/assets/heroimg.jpg')",
        'hero-pattern-shop': "url('../src/assets/shopHero.png')",
      },
     screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
     }
    },
  plugins: [],
}

