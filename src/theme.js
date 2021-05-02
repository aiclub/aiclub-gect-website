// Overriding DefaultTheme. Defining custom theme.

import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0158AE",
      light: "#408AD3",
    },
    secondary: {
      main: "#288FB0",
      light: "#408AD3",
    },
  },
  typography: {
    fontFamily: "Lato",

    // Pre-registration form title
    subtitle1: {
      fontFamily: "Poppins",
      fontSize: 30,
      fontWeight: 800,
    },

    // Pre-registration form body
    body1: {
      fontFamily: "Lato",
      fontSize: 15,
    },

    // Team member card title, Pre-register button in committee
    subtitle2: {
      fontFamily: "Lato",
      fontWeight: 800,
      fontSize: 25,
    },

    // Team member card body
    body2: {
      fontFamily: "Lato",
      fontSize: 14,
    },

    // Main Title
    h1: {
      fontFamily: "Azonix",
      fontSize: 90,
      letterSpacing: 5,
      fontWeight: 800,
    },

    // Styles for registered member count
    h2: {
      fontFamily: "Orbitron",
      fontSize: 90,
      fontWeight: 900,
    },

    // Main title wrapper text
    h3: {
      fontFamily: "Passion-One",
      fontSize: 60,
      letterSpacing: 2,
      fontWeight: 700,
    },
  },
});

export default theme;
