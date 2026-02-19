import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import logo from "../../assets/images/logo/port_logo.svg";
import {
  Container,
  Image,
  ImageWrapper,
  MainTitle,
  RoleContainer,
  RoleBadge,
  TextWrapper,
  Wrapper,
  Divider,
  DescriptionText,
} from "./styles";

const MotionStack = motion(Stack);
const MotionBox = motion(Box);

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const roleVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -2,
      transition: { duration: 0.2 },
    },
  };

  return (
    <Container
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <Wrapper
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <MotionStack
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            width: "100%",
            alignItems: { xs: "center", sm: "center" },
            gap: { xs: "2rem", sm: "3rem" },
            justifyContent: "center",
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <ImageWrapper
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src={logo}
              alt="avatar"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.3 }}
            />
          </ImageWrapper>

          <TextWrapper
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <MotionBox
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <MainTitle>Victor Olorunda</MainTitle>
            </MotionBox>

            <Divider
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            />

            <RoleContainer
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {["UI/UX Designer", "Web Developer"].map((role, index) => (
                <RoleBadge
                  key={index}
                  custom={index}
                  variants={roleVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {role}
                </RoleBadge>
              ))}
            </RoleContainer>

            <DescriptionText
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              Crafting beautiful, functional digital experiences through design & development
            </DescriptionText>
          </TextWrapper>
        </MotionStack>
      </Wrapper>
    </Container>
  );
};
