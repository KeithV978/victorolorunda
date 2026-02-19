import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export const Wrapper = styled(MotionBox)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  margin: "3rem auto",
  width: "100%",
  padding: "0 1rem",
  maxWidth: "360px",
  minWidth: "360px",
  minHeight: "60vh",
  perspective: "1200px",

  [theme.breakpoints.up("sm")]: {
    maxWidth: "580px",
    padding: "initial",
  },
  [theme.breakpoints.up("md")]: {
    maxWidth: "620px",
  },
}));

export const GitScreen = styled(MotionBox)(({ theme }) => ({
  background: "linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(10, 10, 10, 0.95) 100%)",
  borderColor: "rgba(255, 127, 80, 0.3)",
  borderWidth: "2px",
  borderStyle: "solid",
  borderRadius: "16px",
  minWidth: "200px",
  height: "400px",
  color: "#fff",
  width: "100%",
  boxShadow: "0 12px 48px rgba(255, 127, 80, 0.15), inset 0 0 40px rgba(255, 127, 80, 0.05)",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  overflow: "hidden",
  
  "&:hover": {
    borderColor: "rgba(255, 127, 80, 0.5)",
    boxShadow: "0 16px 64px rgba(255, 127, 80, 0.25), inset 0 0 60px rgba(255, 127, 80, 0.08)",
  },
  
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "1px",
    background: "linear-gradient(90deg, transparent, rgba(255, 127, 80, 0.3), transparent)",
  },

  [theme.breakpoints.up("sm")]: {
    width: "40rem",
  },
  [theme.breakpoints.up("md")]: {
    width: "42rem",
  },
}));

export const Table = styled("table")(({ theme }) => ({
  width: "100%",
  borderCollapse: "collapse",
}));

export const ScreenHeader = styled("thead")(({ theme }) => ({
  width: "100%",
}));

export const ScreenHeaderRow = styled("tr")(({ theme }) => ({
  background: "linear-gradient(90deg, rgba(26, 26, 26, 0.8) 0%, rgba(20, 20, 20, 0.9) 100%)",
  borderBottom: "2px solid rgba(255, 127, 80, 0.3)",
  display: "table-row",
  width: "100%",
  transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
}));

export const TableHeaderCell = styled("th")(({ theme }) => ({
  borderRight: "1px solid rgba(255, 127, 80, 0.15)",
  textAlign: "center",
  color: "#ff7f50",
  padding: "1rem 0.75rem",
  fontWeight: 700,
  fontSize: "0.95rem",
  letterSpacing: "0.05em",
  transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
  textTransform: "uppercase",
  
  "&:hover": {
    color: "#ff8a62",
    textShadow: "0 0 10px rgba(255, 127, 80, 0.5)",
  },
  
  "&:last-child": {
    borderRight: "none",
  },
}));

export const TableBody = styled("tbody")(({ theme }) => ({
  width: "100%",
  textAlign: "left",
  color: "#fcfcfc",
}));

export const TableRow = styled(motion.tr)(({ theme }) => ({
  padding: "1rem 0",
  borderBottom: "1px solid rgba(255, 127, 80, 0.08)",
  transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
  background: "transparent",
  cursor: "pointer",
  
  "&:hover": {
    backgroundColor: "rgba(255, 127, 80, 0.08)",
    borderBottomColor: "rgba(255, 127, 80, 0.25)",
    transform: "translateX(4px)",
  },
  
  "&:last-child": {
    borderBottom: "none",
  },
}));

export const TableCell = styled("td")(({ theme }) => ({
  color: "#cfcfcf",
  padding: "1rem 0.75rem",
  fontSize: "0.95rem",
  fontWeight: 500,
  transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
  
  "&:hover": {
    color: "#ff7f50",
  },
}));
