import { styled } from "@mui/material";
import Box from "@mui/material/Box";

export const Wrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: ".5rem",
  borderRadius: "15px",
  backgroundColor: "#fff",
  boxShadow: "-17px 20px 28px 3px #000",
  maxWidth: "360px",
  minWidth: "300px",
  margin: "0 auto 2rem",
  [theme.breakpoints.up("sm")]: {
    borderRadius: "25px",
  },
}));

export const AudioWave = styled(Box)(({ theme }) => ({
  width: "100%",
  //   minHeight: "20px",
  padding: ".7rem",
  borderRadius: "20px",
  backgroundColor: "#222121",
  marginLeft: ".2rem",
  transition: "all ease .3s",

  [theme.breakpoints.up("sm")]: {
    minHeight: "40px",
    marginLeft: ".5rem",
    borderRadius: "25px",
  },
}));
