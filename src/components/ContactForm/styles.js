import { styled } from "@mui/material";

export const Form = styled("form")(() => ({
  width: "100%",
  padding: "1.2rem",
  borderRadius: "25px",
  backgroundColor: "#fff",
  // marginBottom: "5rem",
  boxShadow: "-17px 20px 28px 3px #000",
  maxWidth: "360px",
  minWidth: "300px",

  margin: "0 auto 5rem",
}));

export const InputWrapper = styled("div")(() => ({
  width: "100%",
  padding: ".5rem .8rem",
  borderRadius: "25px",
  backgroundColor: "#222121",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
}));
export const Input = styled("input")(() => ({
  border: "none",
  outline: "none",
  width: "100%",
  padding: ".5rem",
  color: "#fff",
  fontWeight: 700,
  backgroundColor: "transparent",
  transition: "ease .6s ",
  "::placeholder": {
    fontWeight: 700,
    color: "#959595",
    fontFamily: "inherit",
  },
}));
export const TextArea = styled("textarea")(() => ({
  border: "none",
  outline: "none",
  width: "100%",
  padding: ".5rem",
  color: "#fff",
  fontWeight: 700,
  backgroundColor: "transparent",
  "::placeholder": {
    color: "#959595",
    fontFamily: " Arial, sans-serif",
    fontWeight: "bold",
  },
  "&:focus": {
    color: "#fff",
  },
}));

export const ErrorMessage = styled("p")(() => ({
  fontSize: ".8rem",
  color: "#222222",
  marginTop: ".5rem",
  paddingLeft: "1rem",
  marginBottom: "1rem",
}));
export const Header = styled("div")(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}));
