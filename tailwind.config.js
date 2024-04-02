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
      },
    },
  },
  plugins: [],
};
