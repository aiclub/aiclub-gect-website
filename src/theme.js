// Overriding DefaultTheme. Defining custom theme.

import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0158AE",
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

    // Team member card title
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
  },
});

export default theme;
