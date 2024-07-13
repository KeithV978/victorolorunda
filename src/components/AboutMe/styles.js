import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Wrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  // height: "60vh",
  minHeight: "500px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0 1rem",
  marginBottom: "2rem",
  [theme.breakpoints.up("sm")]: {
    justifyContent: "flex-end",
    minHeight: "600px",
    padding: "auto",
  },
  // margin: { sm: "7rem 0 0 0", xs: "2rem 0" },
  // border: "1px solid purple",
}));
export const Header = styled(Typography)(({ theme }) => ({
 // background:
  // "linear-gradient(90.0deg, #FFFFFF -3.9426819962552817%, #FFFFFF00 116.52852113156786%)",
  padding: ".3rem",
  color: "#fff",
  fontWeight: 800,
  fontSize: "1.1rem",
  marginBottom: "1rem",
  display: "flex",
  alignItems: "center",
  background: "linear-gradient(to bottom, #1a1a1a, #242424)",
  borderBottom: `1px solid ${[theme.palette.primary.main]}`,
  // boxShadow: "1px 1px 20px 1px #000",
  [theme.breakpoints.up("sm")]: {
    fontSize: "20px",
  },
}));
export const Body = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundColor: "#232222",
  // border: "1px solid #2b2b2b",
  padding: "1rem",
  borderRadius: "10px",

  "&::before": {
    borderTopLeftRadius: "10px",
    content: "''",
    position: "absolute",
    bottom: "-1px",
    right: "-1px",
    width: 0,
    display: "block",
    borderWidth: "45px 45px 0  0",
    borderStyle: "solid",
    borderColor: `#494848  #1a1a1a`,
    boxShadow: "-8px -5px 10px #111111",
    WebkitBoxShadow: "-8px -5px 10px #111111",
    MozBoxSizing: "-8px -5px 10px #111111",
  },
  [theme.breakpoints.up("sm")]: {
    "&::before": {
      borderWidth: "55px 55px 0  0",
    },
  },
}));
export const Paragraph = styled(Typography)(({ theme }) => ({
  color: "#cfcfcf",
  fontSize: "1rem",
  fontWeight: 700,
  // lineHeight: "15px",
  [theme.breakpoints.up("sm")]: {
    fontSize: "17px",
  },
}));
