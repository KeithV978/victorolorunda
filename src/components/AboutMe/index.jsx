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
          {/* <br /> */}
          <Paragraph variant="body2">
            I have been freelancing for the most part of my tech career. With
            two years of experience in Customer Support. I am not entirely self
            taught but for the most part, I am.
          </Paragraph>
          {/* <br /> */}
          <Paragraph variant="body2">
            I have a knack for creating things and making things beautiful.
          </Paragraph>
          {/* <br /> */}
          <Paragraph variant="body2">
            I have worked and few a few projects that have gone live.
            <br />
            My portfolio as well as the other things I have worked on have been
            designed by myself.
            <br />
            ...
          </Paragraph>
        </Body>
      </Box>
    </Wrapper>
  );
};
