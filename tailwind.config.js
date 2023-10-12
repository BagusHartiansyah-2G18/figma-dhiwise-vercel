module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        lime: { 200: "#dee99c", 700: "#cdab35" },
        gray: {
          400: "#b3b3b3",
          900: "#121212",
          "100_af": "#f6f6f6af",
          "900_7f": "#112a2a7f",
        },
        blue_gray: { 100: "#d9d9d9" },
        amber: { 500: "#ffc807" },
        black: {
          900: "#000000",
          "900_90": "#00000090",
          "900_3f": "#0000003f",
          "900_01": "#0d0d0d",
        },
        indigo: { 900: "#270d70", A200: "#4175f9" },
        teal: { 100: "#a1dce4", 300: "#45a1ae" },
        blue: { 400: "#43b4f3" },
        white: { A700: "#ffffff" },
      },
      boxShadow: {
        bs: "0px 4px  18px 0px #0000003f",
        bs1: "0px 4px  20px 0px #0000003f",
      },
      fontFamily: {
        poppins: "Poppins",
        inter: "Inter",
        notosans: "Noto Sans",
        pacifico: "Pacifico",
        bebasneue: "Bebas Neue",
        pontanosans: "Pontano Sans",
      },
      backgroundImage: { gradient: "linear-gradient(139deg ,#a1dce4,#dee99c)" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
