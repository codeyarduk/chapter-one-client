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
      },
      fontSize: {
        "2.5xl": "1.75rem",
        "5xl": "2.5rem",
      },
      width: {
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
  plugins: [],
};
