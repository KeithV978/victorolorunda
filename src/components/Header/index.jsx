import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import logo from "../../assets/images/logo/port_logo.svg";
import { Link, Links, Scrolled, Unscrolled } from "./styles";

export const Header = () => {
  const [scrolledHeight, setScrollHeight] = React.useState(window.scrollY);

  const handleScroll = () => setScrollHeight(window.scrollY);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (scrolledHeight > 100) {
    return (
      <Scrolled>
        <Container>
          <nav>
            <Links>
              {[
                { link: "#Dependecies", text: "Dependecies" },
                { link: "#About", text: "About" },
                {
                  link: "https://olorunda.xyz",
                  text: (
                    <img
                      src={logo}
                      alt="logo"
                      style={{ display: "block", width: "10%" }}
                    />
                  ),
                },
                { link: "#Resume", text: "Resume" },
                { link: "#Contact", text: "Contact" },
              ].map((item, index) => (
                <Link
                  key={index}
                  sx={{
                    display: item.link === "https://olorunda.xyz" && {
                      xs: "none",
                      sm: "block",
                    },
                  }}
                >
                  <a href={item.link}>{item.text}</a>
                </Link>
              ))}
            </Links>
          </nav>
        </Container>
      </Scrolled>
    );
  }
  return (
    <Unscrolled>
      <Container>
        <Typography component="a" href="https://olorunda.xyz">
          <Box
            sx={{
              padding: "1rem 0",
              width: "fit-content",
            }}
          >
            <Box
              sx={{
                width: "20px",
                marginRight: "1rem",
                display: { sm: "none", xs: "none" },
              }}
            >
              <img
                src={logo}
                alt="logo"
                width="100%"
                style={{ display: "inline-block" }}
              />
            </Box>
            <Typography
              variant="h6"
              color="#fff"
              fontWeight="bold"
              letterSpacing={6}
              sx={{
                width: "fit-content",
                background: `linear-gradient(#222222, #fff) `,
                fontWeight: 700,
                fontSize: { xs: "1rem", sm: "auto" },
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              olorunda.xyz
            </Typography>
          </Box>
        </Typography>
      </Container>
    </Unscrolled>
  );
};
