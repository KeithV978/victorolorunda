import { createTheme } from "@mui/material";
import ArialB from "./fonts/ARLRDBD.ttf";
import  MonsieurRegular from "./fonts/MonsieurLaDoulaise-Regular.ttf";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#6e23fa",
      light: "#faeeea", 
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#e22727",
      light: "#e5e5e5",
      dark: "#a0a0a0",
    },
    background: {
      default: "#0f0f0f",
      paper: "#1a1a1a",
    },
    text: {
      primary: "#ffffff",
      secondary: "#cfcfcf",
      disabled: "#666666",
    },
    divider: "#2a2a2a",
    success: {
      main: "#4caf50",
    },
    error: {
      main: "#f44336",
    },
    warning: {
      main: "#ff9800",
    },
    info: {
      main: "#2196f3",
    },
  },
  typography: {
    fontFamily: '"ArialB",  sans-serif',
    h1: {
      fontSize: "3.5rem",
      fontWeight: 700,
      letterSpacing: "0.02em",
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "2.8rem",
      fontWeight: 700,
      letterSpacing: "0.01em",
      lineHeight: 1.3,
    },
    h3: {
      fontSize: "2.2rem",
      fontWeight: 700,
      letterSpacing: "0.01em",
      lineHeight: 1.3,
    },
    h4: {
      fontSize: "1.8rem",
      fontWeight: 700,
      letterSpacing: "0.01em",
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 700,
      letterSpacing: "0.02em",
    },
    h6: {
      fontSize: "1.2rem",
      fontWeight: 700,
      letterSpacing: "0.02em",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: "0.01em",
    },
    body2: {
      fontSize: "0.95rem",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "0.01em",
    },
    caption: {
      fontSize: "0.85rem",
      fontWeight: 500,
      letterSpacing: "0.03em",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 700,
          textTransform: "none",
          borderRadius: "8px",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: "0 4px 20px rgba(255, 127, 80, 0.15)",
          "&:hover": {
            boxShadow: "0 8px 40px rgba(255, 127, 80, 0.3)",
            transform: "translateY(-2px)",
          },
          "&:active": {
            transform: "translateY(0px)",
          },
        },
        contained: {
          background: "linear-gradient(135deg, #ff7f50 0%, #ff6b35 100%)",
          "&:hover": {
            background: "linear-gradient(135deg, #ff8a62 0%, #ff7644 100%)",
          },
        },
        outlined: {
          borderColor: "#ff7f50",
          color: "#ff7f50",
          "&:hover": {
            backgroundColor: "rgba(255, 127, 80, 0.08)",
            borderColor: "#ff8a62",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "rgba(26, 26, 26, 0.7)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 127, 80, 0.1)",
          borderRadius: "16px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            borderColor: "rgba(255, 127, 80, 0.3)",
            boxShadow: "0 12px 48px rgba(255, 127, 80, 0.2)",
            transform: "translateY(-4px)",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: "8px",
            transition: "all 0.3s ease",
            "&:hover": {
              background: "rgba(255, 255, 255, 0.08)",
            },
            "&.Mui-focused": {
              background: "rgba(255, 255, 255, 0.1)",
              boxShadow: "0 0 0 2px rgba(255, 127, 80, 0.2)",
            },
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255, 127, 80, 0.3)",
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#ff7f50",
          cursor: "pointer",
          transition: "all 0.3s ease",
          position: "relative",
          "&:hover": {
            color: "#ff8a62",
          },
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
          "&:hover::after": {
            width: "100%",
          },
        },
      },
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [ArialB, MonsieurRegular]
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 1200,
      md: 1400,
    },
  },
});

export default theme;
