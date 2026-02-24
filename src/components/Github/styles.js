import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export const Wrapper = styled(MotionBox)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  margin: "4rem auto",
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
  borderColor: "var(--primary)",
  borderWidth: "2px",
  borderStyle: "solid",
  borderRadius: "16px",
  minWidth: "200px",
  height: "400px",
  color: "#fff",
  width: "100%",
  boxShadow: "0 12px 48px rgba(96, 24, 231, 0.15), inset 0 0 40px rgba(96, 24, 231, 0.05)",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  overflow: "hidden",
  
  "&:hover": {
    borderColor: "rgba(96, 24, 231, 0.6)",
    boxShadow: "0 16px 64px rgba(96, 24, 231, 0.25), inset 0 0 60px rgba(96, 24, 231, 0.08)",
  },
  
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "1px",
    background: "linear-gradient(90deg, transparent, rgba(96, 24, 231, 0.3), transparent)",
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

export const ScreenHeader = styled("tr")(({ theme }) => ({
  width: "100%",
  background: "linear-gradient(90deg, rgba(26, 26, 26, 0.8) 0%, rgba(20, 20, 20, 0.9) 100%)", 
  display: "table-row"
}));

export const ScreenHeaderRow = styled("tr")(({ theme }) => ({
  background: "linear-gradient(90deg, rgba(26, 26, 26, 0.8) 0%, rgba(20, 20, 20, 0.9) 100%)",
  borderBottom: "2px solid var(--primary)",
  display: "table-row",
  width: "100%",
  transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
}));

export const TableHeaderCell = styled("th")(({ theme }) => ({
  borderRight: "1px solid var(--primary)",
  textAlign: "center",
  color: "var(--primary)",
  padding: "1rem 0.75rem",
  fontWeight: 700,
  fontSize: "0.95rem",
  letterSpacing: "0.05em",
  transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
  textTransform: "uppercase",
  
  "&:hover": {
    color: "var(--secondary)",
    textShadow: "0 0 10px rgba(96, 24, 231, 0.5)",
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
  borderBottom: "1px solid rgba(96, 24, 231, 0.15)",
  transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
  background: "rgba(26, 26, 26, 0.3)",
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",
  
  "&::before": {
    content: '""',
    position: "absolute",
    left: 0,
    top: 0,
    height: "100%",
    width: "3px",
    background: "linear-gradient(180deg, var(--primary) 0%, var(--secondary) 100%)",
    transform: "scaleX(0)",
    transformOrigin: "left",
    transition: "transform 0.3s ease",
  },
  
  "&:hover": {
    backgroundColor: "rgba(96, 24, 231, 0.15)",
    borderBottomColor: "rgba(96, 24, 231, 0.4)",
    transform: "translateX(4px)",
    
    "&::before": {
      transform: "scaleX(1)",
    },
  },
  
  "&:last-child": {
    borderBottom: "none",
  },
}));

export const TableCell = styled("td")(({ theme }) => ({
  color: "#cfcfcf",
  padding: "1.2rem 0.75rem",
  fontSize: "0.95rem",
  fontWeight: 500,
  transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
  
  "&:hover": {
    color: "var(--primary)",
  },
}));
