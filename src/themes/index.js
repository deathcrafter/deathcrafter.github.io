import GlobalStyle from "./GlobalStyle";
import useThemeDetector from "../lib/useThemeDetector";

const breakpoints = {
  breakpoints: {
    large: "1000px",
    medium: "880px",
    small: "450px",
    xsmall: "",
  },
};

const darkTheme = {
  theme: "dark",
  palette: {
    primary: {
      100: "#f3f3f4",
      200: "#dadade",
      300: "#c1c1c9",
      400: "#a9a9b3",
      500: "#90909d",
      600: "#777788",
      700: "#62626f",
      800: "#4c4c56",
      900: "#36363e",
      default: "#25252a",
    },
    accent: {
      default: "#9b78ff",
      brighter: "#c1abff",
    },
    secondary: {
      default: "#5575e7",
      washedOut: "#879eed",
    },
    text: {
      default: "#FEFEFE",
      washedOut: "#b8b8b8",
    },
  },
  ...breakpoints,
};

const lightTheme = {
  theme: "light",
  palette: {
    primary: {
      100: "#25252a",
      200: "#36363e",
      300: "#4c4c56",
      400: "#62626f",
      500: "#777788",
      600: "#90909d",
      700: "#a9a9b3",
      800: "#c1c1c9",
      900: "#dadade",
      default: "#f3f3f4",
    },
    accent: {
      default: "#9b78ff",
      brighter: "#c1abff",
    },
    secondary: {
      default: "#5575e7",
      washedOut: "#879eed",
    },
    text: {
      default: "#000000",
      washedOut: "#505050",
    },
  },
  ...breakpoints,
};

export { GlobalStyle, useThemeDetector, darkTheme, lightTheme };
