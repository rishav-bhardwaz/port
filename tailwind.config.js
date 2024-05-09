/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        dodgerblue: "#3787ff",
        "dark-brown": "#474306",
        khaki: "#f5ee84",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
    },
    fontSize: {
      "5xl": "24px",
      lgi: "19px",
      xl: "20px",
      base: "16px",
      lg: "18px",
      mini: "15px",
      "81xl": "100px",
      "11xl": "30px",
      "31xl": "50px",
      "9xl": "28px",
      "3xl": "22px",
      inherit: "inherit",
    },
    screens: {
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
