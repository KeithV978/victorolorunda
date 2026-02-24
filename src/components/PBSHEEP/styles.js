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
  borderRadius: "20px",
  color: "var(--text-secondary)",
  background: "linear-gradient(135deg, rgba(26, 26, 26, 0.88) 0%, rgba(36, 36, 36, 0.92) 100%)",
  backdropFilter: "blur(10px)",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.05)",
  border: "1px solid rgba(96, 24, 231, 0.4)",
  
  "&:hover": {
    boxShadow: "0 12px 48px rgba(96, 24, 231, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.08)",
    borderColor: "rgba(96, 24, 231, 0.6)",
    transform: "translateY(-4px)",
  },

  [theme.breakpoints.up("sm")]: {
    padding: "2rem 1.5rem",
    borderRadius: "24px",
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
  color: "var(--text-secondary)",
  fontSize: "4rem",
  height: "100%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "16px",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.05)",
  border: "1px solid rgba(96, 24, 231, 0.3)",
  position: "relative",
  overflow: "hidden",
  fontWeight: 700,
  letterSpacing: "0.05em",
  backdropFilter: "blur(5px)",
  
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    background: "linear-gradient(135deg, rgba(96, 24, 231, 0.2) 0%, rgba(226, 39, 39, 0.1) 100%)",
    opacity: 0,
    transition: "opacity 0.4s ease",
  },
  
  "&:hover": {
    background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)",
    color: "#ffffff",
    boxShadow: "0 16px 64px rgba(96, 24, 231, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.1)",
    transform: "translateY(-6px) scale(1.03)",
    borderColor: "rgba(96, 24, 231, 0.8)",
    
    "&::before": {
      opacity: 1,
    },
  },
  
  [theme.breakpoints.up("sm")]: {
    fontSize: "5rem",
    borderRadius: "16px",
  },
}));
