import React from "react";
import { Top } from "./top";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Footer } from "../components/Footer";
import { Left } from "./left";
import { Right } from "./right";
// import { CenterLine } from "./center";

export const Layout = () => {
  return (
    <div>
      <Container
        sx={{
          width: { md: "80%", sm: "85%", xs: "90%" },
          maxWidth: "1290px",
        }}
      >
        <Top />
        <Grid container spacing={2}>
          <Left />
          {/* <CenterLine /> */}
          <Right />
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};
