import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const LoaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 9999,
  backdropFilter: "blur(10px)",
}));

const LoaderRing = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "80px",
  height: "80px",
  margin: "20px auto",
  
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #ff7f50 0%, #ff6b35 100%)",
    padding: "2px",
    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkaskClip: "padding-box, border-box",
    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    maskClip: "padding-box, border-box",
    animation: "$spin 3s linear infinite",
  },

  "@keyframes spin": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
}));

const LoaderText = styled(Typography)(({ theme }) => ({
  marginTop: "24px",
  fontSize: "1.2rem",
  fontWeight: 700,
  letterSpacing: "0.05em",
  background: "linear-gradient(90deg, #ff7f50 0%, #ff6b35 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  animation: "pulse 2s ease-in-out infinite",
}));

const DotContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "8px",
  marginTop: "12px",
  justifyContent: "center",
}));

const AnimatedDot = styled(motion.div)({
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  background: "linear-gradient(135deg, #ff7f50 0%, #ff6b35 100%)",
});

export const Loader = ({ isLoading = true, message = "Loading..." }) => {
  if (!isLoading) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const dotVariants = {
    hidden: { y: 0, opacity: 0.5 },
    visible: {
      y: [-10, 0, -10],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1.4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <LoaderContainer
      as={MotionBox}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <MotionBox
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <MotionBox variants={itemVariants}>
          <LoaderRing />
        </MotionBox>

        <MotionBox variants={itemVariants}>
          <LoaderText>{message}</LoaderText>
        </MotionBox>

        <MotionBox variants={itemVariants}>
          <DotContainer>
            {[0, 1, 2].map((dot) => (
              <AnimatedDot
                key={dot}
                variants={dotVariants}
                initial="hidden"
                animate="visible"
              />
            ))}
          </DotContainer>
        </MotionBox>
      </MotionBox>
    </LoaderContainer>
  );
};

export default Loader;
