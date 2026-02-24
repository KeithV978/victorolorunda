import { styled } from "@mui/material";
import { motion } from "framer-motion";

export const Links = styled("ul")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export const Link = styled(motion.li)(({ theme }) => ({
  listStyle: "none",
  cursor: "pointer",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  "& a": {
    display: "block",
    padding: "0.5rem 0",
    fontSize: "1rem",
    fontWeight: 700,
    letterSpacing: "0.05em",
    color: "#ffffff",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    position: "relative",
    textDecoration: "none",
    
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: "-4px",
      left: 0,
      width: "0%",
      height: "3px",
      background: "linear-gradient(90deg, primary, primary 100%)",
      transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      borderRadius: "2px",
    },
  },
  
  "&:hover a": {
    color: "var(--primary)",
    textShadow: "0 0 20px rgba(96, 24, 231, 0.5)",
    
    "&::after": {
      width: "100%",
    },
  },
}));

export const Unscrolled = styled(motion.header)(({ theme }) => ({
  width: "100%",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  padding: "2rem 1rem",
  position: "relative",
  zIndex: 100,
}));

export const Scrolled = styled(motion.header)(({ theme }) => ({
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "sticky",
  top: 0,
  width: "100%",
  padding: "1.2rem",
  zIndex: 1000,
  backdropFilter: "blur(10px) saturate(180%)",
  background: "rgba(26, 26, 26, 0.8)", 
  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.3)",
  color: "#fff",
  display: "none",
  animation: "slideInDown 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
  
  "& nav": {
    width: "100%",
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
}));
