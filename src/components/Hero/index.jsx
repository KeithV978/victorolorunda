import Stack from "@mui/material/Stack";
// import Typography from "@mui/material/Typography";
import logo from "../../assets/images/logo/port_logo.svg";
import {
  Container,
  Image,
  ImageWrapper,
  StyledCreative,
  Text,
  TextWrapper,
  Wrapper,
} from "./styles";

export const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <Stack
          sx={{
            flexDirection: "row",
            // justifyContent: "space-evenly",
            // border: "1px solid green",

            width: "100%",
          }}
        >
          <ImageWrapper>
            <Image src={logo} alt="avatar" />
          </ImageWrapper>
          <TextWrapper>
            <div>
              <Text variant="h5">
                Hi!
                <br />
                My name is
                <br />
                Victor Olorunda,
              </Text>

              <Text variant="h5">
                and I'm a <StyledCreative>CREATIVE.</StyledCreative>
              </Text>
            </div>
          </TextWrapper>
        </Stack>
      </Wrapper>
    </Container>
  );
};
