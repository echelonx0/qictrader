/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#154D71",
          light: "#1C6EA4",
        },
        accent: "#33A1E0",
        success: "#FFF9AF",
      },
    },
  },
};
