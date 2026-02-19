import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export const Wrapper = styled(MotionBox)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "1.5rem",
  flexWrap: "wrap",
  width: "100%",
  margin: "2rem auto",
  perspective: "1000px",

  [theme.breakpoints.up("sm")]: {
    gap: "2rem",
  },
}));

export const Link = styled(motion.a)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "50px",
  height: "50px",
  borderRadius: "12px",
  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
  border: "1px solid rgba(255, 127, 80, 0.2)",
  color: "#ff7f50",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  backdropFilter: "blur(10px)",
  boxShadow: "0 4px 20px rgba(255, 127, 80, 0.1)",
  cursor: "pointer",
  textDecoration: "none",
  position: "relative",
  overflow: "hidden",

  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    background: "linear-gradient(135deg, #ff7f50 0%, #ff6b35 100%)",
    opacity: 0,
    transition: "opacity 0.3s ease",
    zIndex: -1,
  },

  "&:hover": {
    borderColor: "rgba(255, 127, 80, 0.6)",
    color: "#ffffff",
    boxShadow: "0 8px 40px rgba(255, 127, 80, 0.3)",
    transform: "translateY(-4px) scale(1.1)",

    "&::before": {
      opacity: 1,
    },
  },

  "&:active": {
    transform: "translateY(-2px) scale(1.05)",
  },

  [theme.breakpoints.up("sm")]: {
    width: "56px",
    height: "56px",
    borderRadius: "14px",

    "&:hover": {
      transform: "translateY(-6px) scale(1.12)",
    },
  },

  "& svg": {
    fontSize: "1.5rem",
    position: "relative",
    zIndex: 1,
    transition: "all 0.3s ease",
  },
}));
