import ContactPageRounded from "@mui/icons-material/ContactPageRounded";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import { Body, Header, Paragraph, Wrapper, RoleTagsContainer, RoleTag, HighlightText } from "./styles";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const AboutMe = () => {
  return (
    <Wrapper id="About" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <Box
        sx={{
          maxWidth: "420px",
          width: "100%",
        }}
      >
        <Header variant="h5" as={motion.div} variants={itemVariants}>
          <ContactPageRounded sx={{ marginRight: ".5rem" }} />
          About Me
        </Header>

        <Body as={motion.div} variants={itemVariants}>
          <RoleTagsContainer>
            <RoleTag>UI/UX Designer</RoleTag>
            <RoleTag>Web Developer</RoleTag>
          </RoleTagsContainer>

          <Paragraph variant="body2">
            I craft <HighlightText>beautiful, functional digital experiences</HighlightText> by blending design thinking with clean code.
          </Paragraph>

          <Paragraph variant="body2">
            With a strong foundation in both <HighlightText>UI/UX design and fullstack development</HighlightText>, I approach every project holistically—ensuring aesthetics and functionality work in perfect harmony.
          </Paragraph>

          <Paragraph variant="body2">
            From concept to deployment, I focus on creating <HighlightText>intuitive interfaces</HighlightText> and <HighlightText>robust solutions</HighlightText> that users love to interact with.
          </Paragraph>

          <Paragraph variant="body2">
            Everything I build—from design systems to full-featured applications—reflects my commitment to quality, attention to detail, and user-centered design principles.
          </Paragraph>
        </Body>
      </Box>
    </Wrapper>
  );
};
