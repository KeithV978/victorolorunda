import { styled } from "@mui/material";
import { motion } from "framer-motion";

export const Form = styled(motion.form)(({ theme }) => ({
  width: "100%",
  padding: "2rem 1.5rem",
  borderRadius: "20px",
  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 238, 234, 0.95) 100%)",
  backdropFilter: "blur(10px)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
  border: "1px solid rgba(255, 127, 80, 0.1)",
  maxWidth: "360px",
  minWidth: "300px",
  margin: "0 auto 5rem",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  
  "&:hover": {
    boxShadow: "0 12px 48px rgba(255, 127, 80, 0.2)",
    borderColor: "rgba(255, 127, 80, 0.3)",
  },
}));

export const InputWrapper = styled(motion.div)(({ theme }) => ({
  width: "100%",
  padding: "0.75rem 1rem",
  borderRadius: "12px",
  background: "rgba(34, 33, 33, 0.9)",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  border: "1px solid rgba(255, 127, 80, 0.2)",
  marginBottom: "1rem",
  
  "&:focus-within": {
    background: "rgba(34, 33, 33, 0.95)",
    borderColor: "rgba(255, 127, 80, 0.5)",
    boxShadow: "0 0 0 2px rgba(255, 127, 80, 0.15)",
  },
  
  "&:hover": {
    borderColor: "rgba(255, 127, 80, 0.4)",
  },
}));

export const Input = styled("input")(({ theme }) => ({
  border: "none",
  outline: "none",
  width: "100%",
  padding: "0.5rem 0.25rem",
  color: "#ffffff",
  fontWeight: 700,
  backgroundColor: "transparent",
  transition: "all 0.3s ease",
  fontFamily: "ArialBold, sans-serif",
  fontSize: "1rem",
  letterSpacing: "0.01em",
  
  "&::placeholder": {
    fontWeight: 600,
    color: "#888888",
    opacity: 0.8,
  },
  
  "&:focus": {
    color: "#ffffff",
    
    "&::placeholder": {
      opacity: 0.4,
    },
  },
}));

export const TextArea = styled("textarea")(({ theme }) => ({
  border: "none",
  outline: "none",
  width: "100%",
  padding: "0.75rem",
  color: "#ffffff",
  fontWeight: 600,
  backgroundColor: "rgba(34, 33, 33, 0.9)",
  borderRadius: "12px",
  fontFamily: "ArialBold, sans-serif",
  fontSize: "0.95rem",
  lineHeight: 1.5,
  letterSpacing: "0.01em",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  // border: "1px solid rgba(255, 127, 80, 0.2)",
  marginBottom: "1rem",
  resize: "vertical",
  minHeight: "120px",
  
  "&::placeholder": {
    color: "#888888",
    fontWeight: 600,
  },
  
  "&:focus": {
    color: "#ffffff",
    borderColor: "rgba(255, 127, 80, 0.5)",
    boxShadow: "0 0 0 2px rgba(255, 127, 80, 0.15)",
  },
  
  "&:hover": {
    borderColor: "rgba(255, 127, 80, 0.4)",
  },
}));

export const ErrorMessage = styled(motion.p)(({ theme }) => ({
  fontSize: "0.85rem",
  color: "#ff6b6b",
  marginTop: "0.5rem",
  paddingLeft: "1rem",
  marginBottom: "1rem",
  fontWeight: 600,
  animation: "slideInLeft 0.3s ease-out",
}));

export const Header = styled(motion.div)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "1.5rem",
}));
