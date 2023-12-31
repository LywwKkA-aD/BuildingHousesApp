const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1320px",
    },
    extend: {
      backgroundColor: {
        'footerBackGround': '#212529', // Just an example color
      },
    },
  },
  plugins: [],
});