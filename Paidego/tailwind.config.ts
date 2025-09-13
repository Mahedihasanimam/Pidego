import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "300px",
      md: "400px",
      lg: "880px",
      tablet: "1024px",
    },
    extend: {
      fontFamily: {
        // Roboto
        RoboNormal: "Roboto-Regular",
        RoboMedium: "Roboto-Medium",
        RoboBold: "Roboto-Bold",
      },

      colors: {
        primary: "#1D0303",
        textPrimary: "#1D0303",
        subT: "#5e5e5e",
        offWhite: "#E6ECEC",
        secondary: "#F4FAFA",
        white100: "#EFEFEF",
        border: "#DFDFDF",
        primary100: "#EEF6F6",
        primary200: "#9BB3B5",
        danger: "#CE3535",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".btn": {
          padding: '3px', // It's good practice to specify units
          borderRadius: '10px',
          textTransform: `uppercase`,
          backgroundColor: `#333`,
        },
        ".resize-repeat": {
          // Note: resizeMode is not a standard CSS property.
          // This might be for a specific environment like React Native.
          // For web, you might mean 'background-repeat'.
          resizeMode: `repeat`,
        },
      });
    }),
  ],
};

export default config;