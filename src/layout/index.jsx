import * as React from "react";
import { Top } from "./top";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Footer } from "../components/Footer";
import { Left } from "./left";
import { Right } from "./right";

export const Layout = React.memo(() => {
  return (
    <div>
      <Container
        sx={{
          width: { md: "90%", sm: "95%", xs: "100%" },
          maxWidth: "1290px",
        }}
      >
        <Top />
        <Grid container spacing={2}>
          <Left />
          <Right />
        </Grid>
      </Container>
      <Footer />
    </div>
  );
});
