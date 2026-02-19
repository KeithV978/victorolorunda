import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const LoaderWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 9999,
  background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)",
  backdropFilter: "blur(10px)",
}));
