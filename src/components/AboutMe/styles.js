import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

export const Wrapper = styled(MotionBox)(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "2rem 1rem",
  marginBottom: "4rem",
  perspective: "1200px",
  background: "linear-gradient(135deg, transparent 0%, rgba(96, 24, 231, 0.03) 100%)",
  
  [theme.breakpoints.up("sm")]: {
    justifyContent: "flex-end",
    minHeight: "700px",
    padding: "2rem 3rem",
  },
}));

export const Header = styled(MotionTypography)(({ theme }) => ({
  padding: "0.75rem 1.25rem",
  color: "var(--text-secondary)",
  fontWeight: 900,
  fontSize: "1rem",
  letterSpacing: "-0.5px",
  marginBottom: "1.75rem",
  display: "flex",
  alignItems: "center",
  background: "linear-gradient(135deg, rgba(96, 24, 231, 0.08) 0%, rgba(96, 24, 231, 0.04) 100%)",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(96, 24, 231, 0.4)",
  borderRadius: "14px",
  boxShadow: "0 8px 32px rgba(96, 24, 231, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
  transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
  
  "&:hover": {
    borderColor: "rgba(96, 24, 231, 0.6)",
    boxShadow: "0 16px 48px rgba(96, 24, 231, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
    transform: "translateY(-1px)",
  },
  
  "& svg": {
    marginRight: "0.65rem",
    transition: "transform 0.4s ease",
  },
  
  "&:hover svg": {
    transform: "scale(1.1) rotate(5deg)",
  },
  
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.3rem",
    fontWeight: 900,
    padding: "0.85rem 1.5rem",
  },
}));

export const Body = styled(MotionBox)(({ theme }) => ({
  position: "relative",
  background: "linear-gradient(135deg, rgba(96, 24, 231, 0.06) 0%, rgba(36, 36, 36, 0.03) 100%)",
  backdropFilter: "blur(16px)",
  padding: "2.25rem",
  borderRadius: "20px",
  // border: "1px solid rgba(96, 24, 231, 0.35)",
  transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
  boxShadow: "0 12px 48px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 0 40px rgba(96, 24, 231, 0.05)",
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  overflow: "hidden",
  
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "1px",
    background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
  },
  
  "&:hover": {
    borderColor: "rgba(96, 24, 231, 0.5)",
    boxShadow: "0 20px 64px rgba(96, 24, 231, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.12), 0 0 60px rgba(96, 24, 231, 0.1)",
    transform: "translateY(-4px)",
  },
  
  [theme.breakpoints.up("sm")]: {
    padding: "2.5rem",
    borderRadius: "24px",
    gap: "1.75rem",
  },
}));

export const Paragraph = styled(MotionTypography)(({ theme }) => ({
  color: "var(--text-secondary)",
  fontSize: "0.95rem",
  fontWeight: 400,
  lineHeight: 1.8,
  letterSpacing: "0.02em",
  transition: "all 0.3s ease",
  margin: 0,
  background: "linear-gradient(135deg, var(--text-secondary) 0%, rgba(255, 255, 255, 0.7) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  
  [theme.breakpoints.up("sm")]: {
    fontSize: "1rem",
    lineHeight: 1.9,
  },
}));

export const HighlightText = styled("span")(({ theme }) => ({
  color: "var(--primary)",
  fontWeight: 700,
  transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
  background: "linear-gradient(135deg, var(--primary) 0%, #ff8a62 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  backgroundSize: "200% 200%",
  
  "&:hover": {
    backgroundPosition: "100% 100%",
    filter: "brightness(1.2)",
  },
}));

export const RoleTagsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.6rem",
  marginBottom: "0.5rem",
  justifyContent: "flex-start",
}));

export const RoleTag = styled(motion.span)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.6rem 1.2rem",
  background: "linear-gradient(135deg, rgba(255, 127, 80, 0.15) 0%, rgba(255, 107, 53, 0.08) 100%)",
  border: "1.5px solid rgba(255, 127, 80, 0.35)",
  borderRadius: "12px",
  color: "#ff8a62",
  fontSize: "0.8rem",
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  backdropFilter: "blur(12px)",
  transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
  boxShadow: "0 4px 15px rgba(255, 127, 80, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
  cursor: "default",
  
  "&:hover": {
    borderColor: "rgba(255, 127, 80, 0.6)",
    background: "linear-gradient(135deg, rgba(255, 127, 80, 0.22) 0%, rgba(255, 107, 53, 0.15) 100%)",
    boxShadow: "0 8px 25px rgba(255, 127, 80, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
    transform: "translateY(-2px) scale(1.05)",
  },
}));
