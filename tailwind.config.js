/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#606040",
        secondary: "#00e5cc",
        paragraph: "#9090a7",
        accent: "#000020",
        background: "#ecf9ff",
      },
    },
  },
  plugins: [],
};
