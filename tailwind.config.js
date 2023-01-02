/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],

  theme: {
    screens: {
      dt: "1100px",
      tb: "750px",
      mb: "375px",
    },
    extend: {
      fontFamily: {
        bai: ["Bai Jamjuree"],
      },
      colors: {
        StrongCyan: "hsl(171, 66%, 44%)",
        LightBlue: "hsl(233, 100%, 69%)",
        LightCyan: " hsl(171, 33%, 59%)",
        LighterBlue: "hsl(233, 100%, 77%)",
        DarkGrayishBlue: "hsl(210, 10%, 33%)",
        GrayishBlue: "hsl(201, 11%, 66%)",
        bggg: "rgb(245, 245, 245)",
      },
      backgroundImage: {
        pattern:
          "linear-gradient(to bottom,  rgba(255, 255, 255, 0.2), rgba(255, 255 , 255,.5)), url('../images/bg-header-desktop.png')",
      },
    },
  },
  plugins: [],
};
