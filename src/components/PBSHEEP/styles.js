import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";

export const Header = styled(motion(Box))(({ theme }) => ({
  padding: "2rem 0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "1rem",
  animation: "fadeInUp 0.8s ease-out",
}));

export const Body = styled(motion(Box))(({ theme }) => ({
  padding: "1rem .5rem 0 0",
  margin: ".5rem",
  borderRadius: "12px",
  color: "#222222",
  background: "linear-gradient(135deg, #faeeea 0%, #fff5f0 100%)",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  boxShadow: "0 4px 20px rgba(255, 127, 80, 0.1)",
  border: "1px solid rgba(255, 127, 80, 0.15)",
  
  "&:hover": {
    boxShadow: "0 8px 40px rgba(255, 127, 80, 0.2)",
    transform: "translateY(-2px)",
  },

  [theme.breakpoints.up("sm")]: {
    padding: "2rem 1.5rem",
    borderRadius: "16px",
    fontSize: "1.1rem",
  },
}));

export const ContentWrapper = styled("div")(({ theme }) => ({
  maxWidth: "350px",
  width: "100%",
  margin: "5rem auto 1rem",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  gap: "0.5rem",
  perspective: "1000px",
  
  [theme.breakpoints.up("sm")]: {
    maxWidth: "420px",
    height: "800px",
    margin: "5rem auto 1rem",
    gap: "0.75rem",
  },
}));

export const CellWrapper = styled(motion.div)(() => ({
  height: "100%",
  width: "100%",
  cursor: "pointer",
  position: "relative",
  transformStyle: "preserve-3d",
}));

export const Cell = styled(Box)(({ theme }) => ({
  backgroundColor: "#ffffff",
  color: "#222222",
  fontSize: "4rem",
  height: "100%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "12px",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
  border: "1px solid rgba(255, 127, 80, 0.1)",
  position: "relative",
  overflow: "hidden",
  fontWeight: 700,
  letterSpacing: "0.05em",
  
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    background: "linear-gradient(135deg, transparent 0%, rgba(255, 127, 80, 0.1) 100%)",
    opacity: 0,
    transition: "opacity 0.3s ease",
  },
  
  "&:hover": {
    backgroundColor: "linear-gradient(135deg, #ff7f50 0%, #ff6b35 100%)",
    background: "linear-gradient(135deg, #ff7f50 0%, #ff6b35 100%)",
    color: "#ffffff",
    boxShadow: "0 12px 48px rgba(255, 127, 80, 0.4)",
    transform: "translateY(-4px) scale(1.02)",
    
    "&::before": {
      opacity: 1,
    },
  },
  
  [theme.breakpoints.up("sm")]: {
    fontSize: "5rem",
    borderRadius: "16px",
  },
}));
