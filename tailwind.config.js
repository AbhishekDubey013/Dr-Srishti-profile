/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        medical: {
          50: "#effaf8",
          100: "#d8f1ed",
          500: "#178b83",
          600: "#0f766e",
          700: "#115e59",
          900: "#143f3c",
        },
        ink: "#102a32",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(15, 118, 110, 0.12)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Merriweather", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
