import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(15 35% 18%)",
        foreground: "hsl(35 62% 89%)",
        primary: "hsl(35 62% 89%)",
        secondary: "hsl(25 35% 43%)",
        "cafe-warm-accent": "hsl(35 62% 89%)",
        "cafe-dark": "hsl(15 35% 18%)",
        muted: "hsl(25 25% 35%)",
        border: "hsl(25 25% 35%)",
        accent: "hsl(30 45% 50%)",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Poppins", "sans-serif"],
      },
      animation: {
        float: "float 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
});
