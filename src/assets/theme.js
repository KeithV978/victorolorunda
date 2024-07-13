import { createTheme } from "@mui/material";
import ArialB from "./fonts/ARLRDBD.ttf";

const theme = createTheme({
  palette: {
    primary: {
      // main: "#673AB7",
      main: "#ff7f50",
      light: "#faeeea",
    },
    secondary: {
      main: "#cfcfcf",
    },
  },
  typography: {
    fontFamily: '"ArialB", sans-serif',
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [ArialB],
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 1200,
      md: 1400,
      // sp: 1185,
    },
  },
});

export default theme;
