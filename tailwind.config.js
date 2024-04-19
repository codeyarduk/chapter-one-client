/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        archivoBlack: ["Archivo Black", "sans-serif"],
        sora: ["Sora", "sans-serif"],
      },
      colors: {
        chapterOneLightBlue: "#F0EEFB",
        chapterOneBlue: "#605DFC",
        chapterOneDarkBlue: "#141359",
        chapterOneSuperLightBlue: "#F7F6FB",
        chapterOneRed: "#D91212",
        rating123: "#F61E1E",
        rating45: "#FB7513",
        rating67: "#FFD02A",
        rating810: "#16D429",
      },
      fontSize: {
        "2.5xl": "1.75rem",
        "3.5xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },
      width: {
        small: "336px",
        medium: "536px",
        large: "816px",
        extraLarge: "1136px",
      },
      padding: {
        extraLarge: "269px",
      },
      borderWidth: {
        1.6: "1.6px",
      },
      margin: {
        200: "200px",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
