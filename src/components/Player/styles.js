import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export const Wrapper = styled(MotionBox)(({ theme }) => ({
  width: "100%",
  padding: "0.75rem",
  borderRadius: "20px",
  background: "linear-gradient(135deg, #ffffff 0%, #faf9f8 100%)",
  boxShadow: "0 12px 48px rgba(0, 0, 0, 0.2)",
  border: "1px solid rgba(255, 127, 80, 0.15)",
  maxWidth: "360px",
  minWidth: "300px",
  margin: "0 auto 2rem",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  
  "&:hover": {
    boxShadow: "0 16px 64px rgba(255, 127, 80, 0.2)",
    borderColor: "rgba(255, 127, 80, 0.3)",
    transform: "translateY(-2px)",
  },
  
  [theme.breakpoints.up("sm")]: {
    borderRadius: "28px",
    padding: "1rem",
  },
}));

export const AudioWave = styled(MotionBox)(({ theme }) => ({
  width: "100%",
  padding: "0.75rem 1rem",
  borderRadius: "16px",
  background: "linear-gradient(135deg, rgba(34, 33, 33, 0.95) 0%, rgba(26, 26, 26, 0.9) 100%)",
  border: "1px solid rgba(255, 127, 80, 0.15)",
  marginLeft: "0.2rem",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  boxShadow: "inset 0 2px 10px rgba(0, 0, 0, 0.3)",
  
  "&:hover": {
    borderColor: "rgba(255, 127, 80, 0.3)",
    boxShadow: "inset 0 2px 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 127, 80, 0.1)",
  },

  [theme.breakpoints.up("sm")]: {
    minHeight: "50px",
    marginLeft: "0.5rem",
    borderRadius: "20px",
    padding: "0.75rem 1.5rem",
  },
}));
