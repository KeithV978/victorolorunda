import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Wrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: "0 1rem",
  maxWidth: "360px",
  minWidth: "360px",

  margin: "auto",
  [theme.breakpoints.up("sm")]: {
    width: "400px",
  },
}));
export const Header = styled(Typography)(({ theme }) => ({
//  background:
  //  "linear-gradient(90.0deg, #FFFFFF -3.9426819962552817%, #FFFFFF00 116.52852113156786%)",
  padding: ".3rem",
 // color: "#1A1A1A",
  color: "#fff",
  fontWeight: 800,
  fontSize: "1.1rem",
  textAlign: "left",
  // paddingLeft: "4rem",
  marginBottom: "1rem",
  display: "flex",
  alignItems: "center",
  background: "linear-gradient(to bottom, #1a1a1a, #242424)",
  borderBottom: `1px solid ${[theme.palette.primary.main]}`,
  // boxShadow: "1px 1px 20px 1px #000",
  [theme.breakpoints.up("sm")]: {
    textAlign: "center",

    background:
      "linear-gradient(270.0deg, #FFFFFF -3.9426819962552817%, #FFFFFF00 116.52852113156786%)",
    fontSize: "20px",
  },
}));
export const Paragraph = styled("a")(({ theme }) => ({
  color: "#fff",
  fontSize: "1rem",
  fontWeight: 700,
  lineHeight: "24px",
  // borderLeft: "2px solid transparent",
  transition: "all ease .2s .2s",
  // "&:hover": {
  // borderLeft: `3px solid ${[theme.palette.primary.main]}`,
  // },
  // padding: "5px",

  [theme.breakpoints.up("sm")]: {
    padding: "10px",
    fontSize: "17px",
  },
}));
export const Body = styled(Box)(({ theme }) => ({
  paddingLeft: "3.5rem",
  paddingTop: "1rem",
  paddingBottom: "1rem",
  position: "relative",
  border: "2px solid #212121",
  borderRadius: "10px",
  backgroundColor: "#232222",

  "&::before": {
    borderBottomRightRadius: "10px",
    content: "''",
    position: "absolute",
    top: "-2px",
    left: "-2px",
    width: 0,
    display: "block",
    borderWidth: "0 0 45px 45px",
    borderStyle: "solid",
    borderColor: `#494848  #1a1a1a`,
    boxShadow: "7px 6px 7px #111111",
    WebkitBoxShadow: "7px 6px 7px #111111",
    MozBoxSizing: "7px 6px 7px #111111",
  },

  [theme.breakpoints.up("sm")]: {
    paddingLeft: "5rem",
  },
}));
