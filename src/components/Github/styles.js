import { styled } from "@mui/material";
import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";

export const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  margin: "3rem auto",
  width: "100%",
  padding: "0 1rem",
  maxWidth: "360px",
  minWidth: "360px",
  minHeigh: "60vh",

  [theme.breakpoints.up("sm")]: {
    // justifyContent: "right",
    // marginLeft: "-1rem",
    maxWidth: "560px",
    padding: "initial",
  },
  [theme.breakpoints.up("md")]: {
    maxWidth: "600px",
  },
}));
export const GitScreen = styled(Box)(({ theme }) => ({
  backgroundColor: "#000",
  borderColor: `${[theme.palette.primary.main]}`,
  borderWidth: "1px",
  borderStyle: "solid",
  // borderImage: `linear-gradient(to bottom, transparent 10%,${[
  //   theme.palette.primary.main,
  // ]} 20%, transparent 100%)1 100%`,
  minWidth: "200px",
  // width: "100%",
  height: "350px",
  color: "#fff",
  boxShadow: "-17px 20px 28px 3px #000",
  width: "100%",
  // [theme.breakpoints.up("sp")]: {
  //   width: "32rem",
  // },
  [theme.breakpoints.up("sm")]: {
    width: "38rem",
  },
  [theme.breakpoints.up("md")]: {
    width: "40rem",
  },
}));
export const Table = styled("table")(({ theme }) => ({
  width: "100%",
}));

export const ScreenHeader = styled("thead")(({ theme }) => ({
  width: "100%",
}));
export const ScreenHeaderRow = styled("tr")(({ theme }) => ({
  backgroundColor: "#222222",
  display: "table-row",
  width: "100%",
}));
export const TableHeaderCell = styled("th")(({ theme }) => ({
  borderRight: "1px solid #9d9d9d",
  textAlign: "center",
  color: "#9d9d9d",
  padding: ".5rem",
}));
export const TableBody = styled("tbody")(({ theme }) => ({
  width: "100%",
  textAlign: "left",
  color: "#fcfcfc",
  padding: "1rem 0",
}));

export const TableRow = styled("tr")(() => ({
  padding: "2rem 0",
}));
export const TableCell = styled("td")(() => ({
  color: "#ccc",
}));
