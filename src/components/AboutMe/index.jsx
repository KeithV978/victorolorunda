import ContactPageRounded from "@mui/icons-material/ContactPageRounded";
import Box from "@mui/material/Box";
import { Body, Header, Paragraph, Wrapper } from "./styles";

export const AboutMe = () => {
  return (
    <Wrapper>
      <Box
        sx={{
          maxWidth: "360px",
          minWidth: "360px",

          // border: "1px solid red",
        }}
      >
        <Header variant="h5">
          <ContactPageRounded sx={{ marginRight: ".2rem" }} />
          About Me{" "}
        </Header>

        <Body>
          <Paragraph variant="body2">
            Hi again. <br /> My name is Victor Olorunda, and i'm a fullstack web
            developer.
          </Paragraph>
          <br />
          <Paragraph variant="body2">
            Hi again. My name is Victor Olorunda, and i'm a fullstack web
            developer
          </Paragraph>
          <br />
          <Paragraph variant="body2">
            I may not have all the experience but then, I am no stranger to
            creativity
          </Paragraph>
          <br />
          <Paragraph variant="body2">
            Hi again. My name is Victor Olorunda, and i'm a fullstack web
            developer
            <br />
            ...
          </Paragraph>
        </Body>
      </Box>
    </Wrapper>
  );
};
