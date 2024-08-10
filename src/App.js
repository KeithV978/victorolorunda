import * as React from "react";
// import CssBaseline from "@mui/material/CssBaseline";
// import responsiveFontSizes from "@mui/material/styles/responsiveFontSizes.js";
// import { Loader } from "./components/loader";
import { ThemeProvider } from "@mui/material";
import theme from "./assets/theme.js";

import { Layout } from "./layout";

function App() {
  document.title = "Victor Olorunda - Fullstack Web Developer Portfolio";
  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <Layout />
    </ThemeProvider>
  );
}

export default App;
