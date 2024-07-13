import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import bg from "../../assets/images/bg_patterns/mark.png";

export const Container = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "85vh",
  width: "100%",
  color: "#fff",
  borderRadius: "40%",
  minWidth: "320px",

  [theme.breakpoints.up("sm")]: {
    margin: "2rem 0 10rem 0",
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "space",
    backgroundPosition: "center",
    borderRadius: "50%",
  },
}));
export const Wrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#1a1a1afc",
  width: "100%",
  //   height: "50%",
  padding: "5rem 0",
  borderRadius: "40%",

  [theme.breakpoints.up("sm")]: {
    backgroundColor: "#1a1a1a",

    width: "50%",
    borderRadius: "50%",
  },
}));

export const ImageWrapper = styled(Box)(({ theme }) => ({
  width: "75%",
  //   maxWidth: "100%",
  display: "flex",
  justifyContent: "end",
  //   border: "1px solid green",
  [theme.breakpoints.up("sm")]: {
    width: "100%",
  },
}));
export const Image = styled("img")(({ theme }) => ({
  maxWidth: "100px",
  width: "100%",
  display: "inline-block",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "120px",
  },
}));
export const TextWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  border: "none",
  color: "#fff",
  borderLeftStyle: "solid",
  borderLeftWidth: "2px",
  marginLeft: ".8rem",
  paddingLeft: ".8rem",
  borderColor: `${[theme.palette.primary.main]}`,
  //   border: "1px solid green",
  [theme.breakpoints.up("sm")]: {
    padding: "0 1rem",
    marginLeft: "1rem",
    paddingLeft: "1rem",
    // borderImage: `linear-gradient(to bottom, transparent 20%, ${[
    //   theme.palette.primary.main,
    // ]} 30%, transparent 80%)1 100%`,
    // borderLeft: `1px solid ${[theme.palette.primary.main]}`,
  },
}));

export const Text = styled(Typography)(({ theme }) => ({
  color: "inherit",
  fotWeight: 800,
  lineHeight: 1.3,
  letterSpacing: ".1rem",
  textAlign: "left",
  width: "100%",
  fontSize: "1.2rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.4rem",
    // textAlign: "left",
  },
}));

export const StyledCreative = styled("span")(({ theme }) => ({
  background: `linear-gradient( ${[theme.palette.primary.main]}, #222222) `,
  fontWeight: 800,
  letterSpacing: ".1rem",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontSize: "1.4rem",

  [theme.breakpoints.up("sm")]: {
    fontSize: "2rem",
  },
}));
