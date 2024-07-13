import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Dependency } from "../components/Dependency";
import { PBSheep } from "../components/PBSHEEP";
import { Links } from "../components/Links";
import { AboutMe } from "../components/AboutMe";

export const Left = () => {
  return (
    <Grid item xs={12} sm={5}>
      <Box
        sx={{
          display: { sm: "block", xs: "none" },
        }}
      >
        <Dependency />
        <PBSheep />
        <Links />
      </Box>
      <Box
        sx={{
          display: { sm: "none", xs: "block" },
        }}
      >
        <AboutMe />
        <Dependency />
        <PBSheep />
      </Box>
    </Grid>
  );
};
