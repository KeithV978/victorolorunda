import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";

export const Header = styled(Box)(() => ({
  padding: "2rem 0",
  display: "flex",
  justifyContent: "space-between",
}));
export const Body = styled(Box)(({ theme }) => ({
  padding: "1rem .5rem 0 0",
  margin: ".5rem",
  borderRadius: "8px",
  color: `${[theme.palette.primary.main]}`,
  //   border: `1px solid ${[theme.palette.primary.main]}`,
  backgroundColor: `${[theme.palette.primary.light]}`,
  [theme.breakpoints.up("sm")]: {
    padding: "2rem 1rem",
    borderRadius: "12px",
  },
}));

export const ContentWrapper = styled("div")(({ theme }) => ({
  maxWidth: "350px",
  // minWidth: "300px",

  width: "100%",
  // height: "100vh",
  margin: "5rem auto 1rem",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "400px",
    height: "750px",
    margin: " 5rem auto 1rem",
  },
}));

export const CellWrapper = styled(motion.div)(() => ({
  height: "100%",
  width: "100%",
  cursor: "pointer",
  position: "relative",
}));

export const Cell = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  color: "#222222",
  fontSize: "5rem",
  height: "100%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all ease .3s .2s",
  "&:hover": {
    backgroundColor: `${[theme.palette.primary.main]}`,
    color: "#fff",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "5rem",
  },
}));
