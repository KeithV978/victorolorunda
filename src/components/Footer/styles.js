import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

export const Wrapper = styled(MotionBox)(({ theme }) => ({
  width: "100%",
  padding: "3rem 1rem",
  marginTop: "4rem",
  borderTop: "1px solid rgba(255, 127, 80, 0.2)",
  background: "linear-gradient(180deg, transparent 0%, rgba(255, 127, 80, 0.05) 100%)",
  textAlign: "center",
  position: "relative",
  overflow: "hidden",

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
    padding: "4rem 2rem",
  },
}));

export const Text = styled(MotionTypography)(({ theme }) => ({
  color: "#cfcfcf",
  fontSize: "0.95rem",
  fontWeight: 600,
  letterSpacing: "0.02em",
  transition: "all 0.3s ease",

  "& a": {
    color: "#ff7f50",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    position: "relative",

    "&::after": {
      content: '""',
      position: "absolute",
      bottom: "-2px",
      left: 0,
      width: 0,
      height: "2px",
      background: "linear-gradient(90deg, #ff7f50, #ff6b35)",
      transition: "width 0.3s ease",
    },

    "&:hover": {
      textShadow: "0 0 10px rgba(255, 127, 80, 0.5)",

      "&::after": {
        width: "100%",
      },
    },
  },

  [theme.breakpoints.up("sm")]: {
    fontSize: "1rem",
  },
}));
