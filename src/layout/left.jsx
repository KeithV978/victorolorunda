import Grid from "@mui/material/Grid";
import { Dependency } from "../components/Dependency";
import { PBSheep } from "../components/PBSHEEP";
import { Links } from "../components/Links";

export const Left = () => {
  return (
    <Grid item xs={12} sm={5}>
      <Dependency />
      <PBSheep />
      <Links />
    </Grid>
  );
};
