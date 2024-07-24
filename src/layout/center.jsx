import { styled } from "@mui/material";

const Line = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "50px",
  left: "50px",
  // transform: "translate(-50%, -50%)",
  borderRight: `2px solid ${[theme.palette.primary.main]}`,
  height: "130%",
  // height: "1590px",
  // width: "0",
  zIndex: -1,
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));
const Bulb = styled("div")(({ theme }) => ({
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  marginRight: "-50px",
  backgroundColor: "#fff",
  [theme.breakpoints.up("sm")]: {
    // width: "80px",
    // height: "80px",
    // marginRight: "-40px",
  },
}));

export const CenterLine = () => {
  return (
    <Line>
      <Bulb />
      <Bulb sx={{ marginBottom: "20rem" }} />
      <Bulb />
    </Line>
  );
};
