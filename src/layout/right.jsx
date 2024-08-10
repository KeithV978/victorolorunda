import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { AboutMe } from "../components/AboutMe";
import { Github } from "../components/Github";
import { Player } from "../components/Player";
import { ContactForm } from "../components/ContactForm";
import { CenterLine } from "./center";
import { styled } from "@mui/material";
import { Links } from "../components/Links";

const FormAndPlayer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  marginTop: "1rem",
  padding: "0 1rem",

  [theme.breakpoints.up("sm")]: {
    justifyContent: "flex-end",
    marginTop: "2rem",
  },
}));
const FormAndPlayerWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "650px",
  marginTop: "2rem",

  [theme.breakpoints.up("sm")]: {
    width: "360px",
    marginTop: "6rem",
  },
}));

export const Right = React.memo(() => {
  return (
    <Grid item xs={12} sm={7}>
      <Box
        sx={{
          display: { sm: "initial", xs: "none" },
          justifyContent: "space-around",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <CenterLine />
          <AboutMe />
          <Github />
        </Box>
        <FormAndPlayer id="Contact">
          <FormAndPlayerWrapper>
            <Player />
            <ContactForm />
          </FormAndPlayerWrapper>
        </FormAndPlayer>
      </Box>
      <Box
        sx={{
          display: { sm: "none", xs: "block" },
          justifyContent: "space-around",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Github />
        </Box>
        <FormAndPlayer>
          <FormAndPlayerWrapper>
            <Player />
            <ContactForm />
            <Links />
          </FormAndPlayerWrapper>
        </FormAndPlayer>
      </Box>
    </Grid>
  );
});
