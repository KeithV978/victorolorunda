import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export const Wrapper = styled(MotionBox)(({ theme }) => ({
  width: "100%",
  maxWidth: "450px",
  margin: "auto",
  
  [theme.breakpoints.up("sm")]: {
    maxWidth: "520px",
  },
}));

export const Body = styled(MotionBox)(({ theme }) => ({
  position: "relative",
  // border: "1px solid rgba(96, 24, 231, 0.6)",
  borderRadius: "20px",
  borderTopRightRadius: "5px",
  background: "linear-gradient(135deg, rgba(80, 80, 80, 0.25) 0%, rgba(77, 77, 77, 0.21) 100%)",
  backdropFilter: "blur(10px)", 
  padding: "2rem 1.75rem",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.05)",
  overflow: "hidden",
    
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    right: 0,
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderWidth: "0 40px 40px 0",
    borderColor: `transparent var(--primary) transparent transparent`,
    boxShadow: "-2px 2px 4px rgba(0, 0, 0, 0.88)",
  },
  
  "&:hover": {
    borderColor: "rgba(96, 24, 231, 0.6)",
    boxShadow: "0 12px 48px rgba(96, 24, 231, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.08)",
    transform: "translateY(-2px)",
  },

  [theme.breakpoints.up("sm")]: {
    padding: "2.25rem 2rem",
    borderRadius: "24px",
  },
}));

export const CodeBlock = styled(Box)(({ theme }) => ({
  fontFamily: '"Monaco", "Courier New", monospace',
  fontSize: "0.85rem",
  lineHeight: "1.8",
  color: "#cfcfcf",
  
  [theme.breakpoints.up("sm")]: {
    fontSize: "0.9rem",
  },
}));

export const ImportLine = styled(Box)(({ theme }) => ({
  marginBottom: "1rem",
  display: "flex",
  gap: "0.3rem",
  alignItems: "center",
  
  "& .keyword": {
    color: "var(--primary)",
    fontWeight: 700,
  },
  
  "& .brace": {
    color: "var(--text-secondary)",
    fontWeight: 600,
  },
}));

export const TechList = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
  margin: "1rem 0",
  paddingLeft: "1.5rem",
}));

export const Paragraph = styled(motion.a)(({ theme }) => ({
  color: "var(--text-secondary)",
  fontSize: "inherit",
  fontWeight: 500,
  fontFamily: "inherit",
  textDecoration: "none",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  display: "inline-block",
  position: "relative",
  cursor: "pointer",
  
  "&::before": {
    content: '""',
    position: "absolute",
    left: "-1.2rem",
    width: "4px",
    height: "4px",
    backgroundColor: "var(--primary)",
    borderRadius: "50%",
    top: "50%",
    transform: "translateY(-50%)",
    transition: "all 0.3s ease",
  },
  
  "&:hover": {
    color: "var(--primary)",
    transform: "translateX(4px)",
    textShadow: "0 0 12px rgba(110, 35, 250, 0.4)",
    
    "&::before": {
      width: "8px",
      height: "4px",
      boxShadow: "0 0 8px rgba(110, 35, 250, 0.5)",
    },
  },
}));

export const Footer = styled(Box)(({ theme }) => ({
  marginTop: "1rem",
  display: "flex",
  gap: "0.3rem",
  alignItems: "center",
  flexWrap: "wrap",
  
  "& .brace": {
    color: "#cfcfcf",
    fontWeight: 600,
  },
  
  "& .keyword": {
    color: "var(--primary)",
    fontWeight: 700,
  },
  
  "& .string": {
    color: "#7ec8a3",
  },
  
  "& .punctuation": {
    color: "#cfcfcf",
  },
}));
