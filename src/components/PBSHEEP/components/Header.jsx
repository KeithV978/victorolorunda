import { styled } from "@mui/material";
import Box from "@mui/material/Box";

const Wrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const Header = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
