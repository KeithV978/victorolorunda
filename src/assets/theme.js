import { createTheme } from "@mui/material";
import ArialB from "./fonts/ARLRDBD.ttf";

const theme = createTheme({
  palette: {
    primary: {
      main: "#673AB7",
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
});

export default theme;
