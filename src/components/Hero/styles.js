import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export const Container = styled(MotionBox)(({ theme }) => ({
  position: "relative",
  height: "auto",
  minHeight: "70vh",
  width: "100%",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "3rem 1rem",
  overflow: "hidden",
  background: "linear-gradient(135deg, rgba(15, 15, 15, 0.95) 0%, rgba(26, 26, 26, 0.98) 100%)",
  
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    background: "radial-gradient(circle at 25% 35%, rgba(255, 127, 80, 0.08) 0%, transparent 50%)",
    pointerEvents: "none",
  },

  [theme.breakpoints.up("sm")]: {
    padding: "4rem 2rem",
    minHeight: "75vh",
  },
}));

export const Wrapper = styled(MotionBox)(({ theme }) => ({
  position: "relative",
  maxWidth: "900px",
  width: "100%",
  background: "linear-gradient(135deg, rgba(26, 26, 26, 0.5) 0%, rgba(30, 30, 30, 0.4) 100%)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 127, 80, 0.15)",
  padding: "3rem 1.5rem",
  borderRadius: "24px",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.1)",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",

  [theme.breakpoints.up("sm")]: {
    padding: "4rem 3rem",
    borderRadius: "32px",
    
    "&:hover": {
      borderColor: "rgba(255, 127, 80, 0.3)",
      boxShadow: "0 12px 48px rgba(255, 127, 80, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.15)",
    },
  },
}));

export const ImageWrapper = styled(MotionBox)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    justifyContent: "center",
  },
}));

export const Image = styled(motion.img)(({ theme }) => ({
  width: "120px",
  height: "120px",
  borderRadius: "20px",
  filter: "drop-shadow(0 10px 30px rgba(255, 127, 80, 0.25))",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  border: "2px solid rgba(255, 127, 80, 0.3)",
  
  [theme.breakpoints.up("sm")]: {
    width: "140px",
    height: "140px",
    borderRadius: "24px",
    
    "&:hover": {
      filter: "drop-shadow(0 15px 40px rgba(255, 127, 80, 0.4))",
      borderColor: "rgba(255, 127, 80, 0.6)",
    },
  },
}));

export const TextWrapper = styled(MotionBox)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: { xs: "center", sm: "flex-start" },
  gap: "1.5rem",
  textAlign: { xs: "center", sm: "left" },
}));

export const MainTitle = styled(motion(Typography))(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: 800,
  letterSpacing: "-0.02em",
  background: "linear-gradient(135deg, #ffffff 0%, #cfcfcf 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  lineHeight: 1.2,
  margin: 0,
  
  [theme.breakpoints.up("sm")]: {
    fontSize: "2.8rem",
  },
}));

export const Divider = styled(MotionBox)(({ theme }) => ({
  width: "60px",
  height: "3px",
  background: "linear-gradient(90deg, #ff7f50 0%, #ff6b35 50%, transparent 100%)",
  borderRadius: "2px",
  boxShadow: "0 0 20px rgba(255, 127, 80, 0.4)",
  margin: "0.5rem auto 0 auto",
  
  [theme.breakpoints.up("sm")]: {
    margin: "0.5rem 0 0 0",
  },
}));

export const RoleContainer = styled(MotionBox)(({ theme }) => ({
  display: "flex",
  flexDirection: { xs: "column", sm: "row" },
  gap: "0.75rem",
  alignItems: "center",
  justifyContent: { xs: "center", sm: "flex-start" },
}));

export const RoleBadge = styled(motion(Box))(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.6rem 1.2rem",
  background: "linear-gradient(135deg, rgba(255, 127, 80, 0.15) 0%, rgba(255, 107, 53, 0.1) 100%)",
  border: "1.5px solid rgba(255, 127, 80, 0.4)",
  borderRadius: "12px",
  color: "#ff7f50",
  fontSize: "0.95rem",
  fontWeight: 600,
  letterSpacing: "0.05em",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",
  textTransform: "uppercase",
  backdropFilter: "blur(10px)",
  boxShadow: "0 4px 15px rgba(255, 127, 80, 0.1)",
  
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    background: "linear-gradient(135deg, rgba(255, 127, 80, 0.2) 0%, transparent 100%)",
    opacity: 0,
    transition: "opacity 0.3s ease",
  },
  
  "&:hover": {
    borderColor: "rgba(255, 127, 80, 0.7)",
    background: "linear-gradient(135deg, rgba(255, 127, 80, 0.25) 0%, rgba(255, 107, 53, 0.15) 100%)",
    color: "#ff8a62",
    boxShadow: "0 8px 30px rgba(255, 127, 80, 0.25)",
    transform: "translateY(-2px)",
    
    "&::before": {
      opacity: 1,
    },
  },

  [theme.breakpoints.up("sm")]: {
    fontSize: "1rem",
    padding: "0.7rem 1.4rem",
    borderRadius: "14px",
  },
}));

export const DescriptionText = styled(motion(Typography))(({ theme }) => ({
  fontSize: "0.95rem",
  fontWeight: 500,
  color: "#cfcfcf",
  lineHeight: 1.6,
  letterSpacing: "0.02em",
  maxWidth: "400px",
  transition: "color 0.3s ease",
  
  [theme.breakpoints.up("sm")]: {
    fontSize: "1rem",
    maxWidth: "450px",
  },
}));

// Legacy exports for backwards compatibility
export const Text = styled(motion(Typography))(({ theme }) => ({
  color: "inherit",
  fontWeight: 700,
  lineHeight: 1.4,
  letterSpacing: "0.05em",
}));

export const StyledCreative = styled(motion.span)(({ theme }) => ({
  background: "linear-gradient(135deg, #ff7f50 0%, #ff6b35 100%)",
  fontWeight: 800,
  letterSpacing: "0.1em",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
}));
