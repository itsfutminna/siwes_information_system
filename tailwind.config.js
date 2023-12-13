/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        Futpurple: "#800E80",
        Newpurple: "#CFC3D0",
        PrimaryColor: "#552C7D",
        SecondaryColor: "#A5A6F6",
      },
      colors: {
        Futpurple: "#800E80",
        Newpurple: "#CFC3D0",
      },
    },
  },
  plugins: [],
};
