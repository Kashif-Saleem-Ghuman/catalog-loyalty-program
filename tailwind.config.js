/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        desktop: "8.5vw",
        mob: "20vw",
        tab: "9.5vw",
      },
      fontSize: {
        "mob-25": "25.6vw",
        "10xl": "11vw",
        "tab-9": "12.5vw",
        "1-vw": "1.1vw",
        "4vw": "4vw",
      },
      padding: {
        "12vw": "12vw",
      },
      margin: {
        "12vw": "12vw",
        "7.5vw": "7.5vw",
      },
      backgroundImage: {
        waves: "url('/assets/images/waves.png')",
      },
      letterSpacing: {
        "24%": "0.24em",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        "Neutral-0": "##FFFFFF",
        "Neutral-100": "#F5F9FF",
        "Neutral-200": "#E6EDF7",
        "Neutral-300": "#DAE4F2",
        "Neutral-500": "#8FA3BF",
        "Neutral-600": "#7C899C",
        "Neutral-900": "#252F3D",
        "Brand-Default": "#176FEB & #FF80FF",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
