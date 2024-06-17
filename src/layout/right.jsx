import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { AboutMe } from "../components/AboutMe";
import { Github } from "../components/Github";
import { Player } from "../components/Player";
import { ContactForm } from "../components/ContactForm";
import { CenterLine } from "./center";

export const Right = () => {
  return (
    <Grid
      item
      xs={12}
      sm={7}
      //   padding="0 0 0 3rem"
      justifyContent="space-around"
    >
      {/* <Grid container>
        <Grid item xs={12} sm={9}> */}
      <Box sx={{ position: "relative" }}>
        <CenterLine />
        <AboutMe />
        <Github />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: { xs: "center", sm: "flex-end" },
          marginTop: { sm: "3rem", xs: "1rem" },
        }}
      >
        <Box
          sx={{
            width: { sm: "360px", xs: "100%" },
            minHeight: "650px",
            marginTop: { sm: "6rem", xs: "2rem" },
          }}
        >
          <Player />
          <ContactForm />
        </Box>
      </Box>
    </Grid>
    //   </Grid>
    // </Grid>
  );
};
