import { InfoRounded } from "@mui/icons-material";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Wrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  // height: "60vh",
  minHeight: "600px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.up("sm")]: {
    justifyContent: "flex-end",
  },
  // margin: { sm: "7rem 0 0 0", xs: "2rem 0" },
  // border: "1px solid purple",
}));
const Header = styled(Typography)(() => ({
  background:
    "linear-gradient(90.0deg, #FFFFFF -3.9426819962552817%, #FFFFFF00 116.52852113156786%)",
  padding: ".3rem",
  color: "#1A1A1A",
  fontWeight: 800,
  fontSize: "20px",
  marginBottom: "1.5rem",
  display: "flex",
  alignItems: "center",
  boxShadow: "4px 7px 20px 1px #000",
}));
const Paragraph = styled(Typography)(() => ({
  color: "#cfcfcf",
  fontSize: "17px",
  fontWeight: 700,
  lineHeight: "22px",
}));
export const AboutMe = () => {
  return (
    <Wrapper>
      <Box
        sx={{
          maxWidth: "360px",
          // border: "1px solid red",
        }}
      >
        <Header variant="h5">
          <InfoRounded sx={{ marginRight: ".2rem" }} /> About Me{" "}
        </Header>

        <Box>
          <Paragraph variant="body2">
            ... <br /> Hi again. <br /> My name is Victor Olorunda, and i'm a
            fullstack web developer.
          </Paragraph>
          <br />
          <Paragraph variant="body2">
            Hi again. My name is Victor Olorunda, and i'm a fullstack web
            developer
          </Paragraph>
          <br />
          <Paragraph variant="body2">
            Hi again. My name is Victor Olorunda, and i'm a fullstack web
            developer
          </Paragraph>
          <br />
          <Paragraph variant="body2">
            Hi again. My name is Victor Olorunda, and i'm a fullstack web
            developer
            <br />
            ...
          </Paragraph>
        </Box>
      </Box>
    </Wrapper>
  );
};
