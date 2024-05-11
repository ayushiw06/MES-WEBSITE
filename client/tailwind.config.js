/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aliceblue: "#ecf5ff",
        primary: "#674bb1",
        black: "#000",
        whitesmoke: "#f9f9f9",
        slateblue: "rgba(103, 75, 177, 0.5)",
        white: "#fff",
        gainsboro: "rgba(217, 217, 217, 0.3)",
        tertiary: "#8f9cf8",
        secondary: "#8972da",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "passions-conflict": "'Passions Conflict'",
      },
      borderRadius: {
        "33xl": "52px",
        "41xl": "60px",
        "29xl": "48px",
        "2xl": "21px",
        "9xl": "28px",
        "89xl": "108px",
        "31xl": "50px",
        "49xl": "68px",
      },
    },
    fontSize: {
      "9xl": "28px",
      "13xl": "32px",
      "5xl": "24px",
      "23xl": "42px",
      xl: "20px",
      base: "16px",
      xs: "12px",
      "33xl": "52px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: true,
  },
}

