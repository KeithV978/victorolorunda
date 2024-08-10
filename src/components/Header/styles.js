import { styled } from "@mui/material";

export const Links = styled("ul")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  // boxShadow: "8px 8px 8px 9px #000",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
}));
export const Link = styled("li")(({ theme }) => ({
  width: "100%",
  listStyle: "none",
  cursor: "pointer",
  transition: "ease all .3s",
  "&:hover": {
    color: `${[theme.palette.primary.main]}`,
  },
}));

export const Unscrolled = styled("header")(({ theme }) => ({
  width: "100%",
  transition: "ease all .3s",
}));
export const Scrolled = styled("header")(({ theme }) => ({
  transition: "ease all .3s",
  position: "fixed",
  top: 0,
  width: "100%",
  padding: "1rem",
  zIndex: 100,
  backgroundColor: "#1a1a1a",
  color: "#fff",
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
}));
