const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    mode: "all",
    enabled: false,
    content: [
      "./components/**/*.{vue, js, jsx, ts, tsx, html}",
      "./pages/**/*.{vue, js, jsx, ts, tsx, html}",
    ],
    preserveHtmlElements: true,
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mulish: ["Mulish", "system-ui"],
      },
      colors: {
        lime: colors.lime,
        gray: colors.gray,
        green: colors.green,
      },
      animation: {},
      keyframes: {
        scrollText: {
          from: {
            marginRight: "0%",
          },
          to: {
            marginRight: "100%",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
