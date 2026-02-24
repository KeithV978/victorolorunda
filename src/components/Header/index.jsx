import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { motion } from "framer-motion";
import logo from "../../assets/images/logo/port_logo.svg";
import { Link, Links, Scrolled, Unscrolled } from "./styles";

const MotionContainer = motion(Container);

export const Header = () => {
  const [scrolledHeight, setScrollHeight] = React.useState(window.scrollY);

  const handleScroll = () => setScrollHeight(window.scrollY);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { link: "#Dependencies", text: "Dependencies" },
    { link: "#About", text: "About" },
    {
      link: "https://olorunda.space",
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
  ];

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -2,
      transition: { duration: 0.2 },
    },
  };

  if (scrolledHeight > 100) {
    return (
      <Scrolled
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <MotionContainer>
          <nav>
            <Links>
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  custom={index}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  sx={{
                    display: item.link === "https://olorunda.space" && {
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
        </MotionContainer>
      </Scrolled>
    );
  }

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  return (
    <Unscrolled
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <MotionContainer>
        <motion.div
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          style={{ display: "inline-block", cursor: "pointer" }}
        >
          <Typography
            component="a"
            href="https://olorunda.space"
            sx={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Box
              sx={{
                width: "24px",
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
              sx={{
                color: "#fff",
                fontWeight: 700,
                letterSpacing: "0.1em",
                fontSize: { xs: "1rem", sm: "1.2rem" },
                // background: "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)",
                // WebkitBackgroundClip: "text",
                // WebkitTextFillColor: "transparent",
                // backgroundClip: "text",
                transition: "all 0.3s ease",
                
                "&:hover": {
                  textShadow: "0 0 20px rgba(100, 200, 255, 0.5)",
                },
              }}
            >
              OLORUNDA.SPACE
            </Typography>
          </Typography>
        </motion.div>
      </MotionContainer>
    </Unscrolled>
  );
};
