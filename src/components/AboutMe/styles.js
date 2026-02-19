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
  padding: "0 1rem",
  marginBottom: "3rem",
  perspective: "1000px",
  
  [theme.breakpoints.up("sm")]: {
    justifyContent: "flex-end",
    minHeight: "600px",
    padding: "auto",
  },
}));

export const Header = styled(MotionTypography)(({ theme }) => ({
  padding: "0.75rem 1rem",
  color: "#cfcfcf",
  fontWeight: 800,
  fontSize: "1rem",
  marginBottom: "1.5rem",
  display: "flex",
  alignItems: "center",
  background: "linear-gradient(135deg, rgba(26, 26, 26, 0.8) 0%, rgba(36, 36, 36, 0.6) 100%)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 127, 80, 0.3)",
  borderBottomLeftRadius: "12px",
  borderBottomRightRadius: "12px",
  boxShadow: "0 4px 20px rgba(255, 127, 80, 0.1)",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  
  "&:hover": {
    borderColor: "rgba(255, 127, 80, 0.5)",
    boxShadow: "0 8px 40px rgba(255, 127, 80, 0.2)",
  },
  
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.2rem",
  },
}));

export const Body = styled(MotionBox)(({ theme }) => ({
  position: "relative",
  background: "linear-gradient(135deg, rgba(26, 26, 26, 0.6) 0%, rgba(30, 30, 30, 0.4) 100%)",
  backdropFilter: "blur(10px)",
  padding: "1.75rem",
  borderRadius: "18px",
  border: "1px solid rgba(255, 127, 80, 0.15)",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.05)",
  display: "flex",
  flexDirection: "column",
  gap: "1.25rem",
  
  "&:hover": {
    borderColor: "rgba(255, 127, 80, 0.25)",
    boxShadow: "0 12px 48px rgba(255, 127, 80, 0.12), inset 0 1px 1px rgba(255, 255, 255, 0.08)",
    transform: "translateY(-2px)",
  },
  
  [theme.breakpoints.up("sm")]: {
    padding: "2rem",
    borderRadius: "22px",
    gap: "1.5rem",
  },
}));

export const Paragraph = styled(MotionTypography)(({ theme }) => ({
  color: "#cfcfcf",
  fontSize: "0.9rem",
  fontWeight: 500,
  lineHeight: 1.7,
  letterSpacing: "0.015em",
  transition: "all 0.3s ease",
  margin: 0,
  
  [theme.breakpoints.up("sm")]: {
    fontSize: "0.95rem",
  },
}));

export const HighlightText = styled("span")(({ theme }) => ({
  color: "#ff7f50",
  fontWeight: 600,
  transition: "all 0.3s ease",
  background: "linear-gradient(135deg, #ff7f50 0%, #ff8a62 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
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
  padding: "0.5rem 1rem",
  background: "linear-gradient(135deg, rgba(255, 127, 80, 0.12) 0%, rgba(255, 107, 53, 0.08) 100%)",
  border: "1px solid rgba(255, 127, 80, 0.3)",
  borderRadius: "10px",
  color: "#ff8a62",
  fontSize: "0.8rem",
  fontWeight: 600,
  letterSpacing: "0.05em",
  textTransform: "uppercase",
  backdropFilter: "blur(10px)",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  boxShadow: "0 2px 8px rgba(255, 127, 80, 0.08)",
  
  "&:hover": {
    borderColor: "rgba(255, 127, 80, 0.5)",
    background: "linear-gradient(135deg, rgba(255, 127, 80, 0.18) 0%, rgba(255, 107, 53, 0.12) 100%)",
    boxShadow: "0 4px 15px rgba(255, 127, 80, 0.15)",
  },
}));
