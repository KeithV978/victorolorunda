import CodeRounded from "@mui/icons-material/DataObjectRounded";
import { motion } from "framer-motion";
import { Body, Paragraph, Wrapper, CodeBlock, ImportLine, TechList, Footer } from "./styles";
import { Header } from "../AboutMe/styles";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const technologies = [
  { name: "React", url: "https://react.org" },
  { name: "TypeScript", url: "https://typescriptlang.org" },
  { name: "Node.js", url: "https://nodejs.org" },
  { name: "Express", url: "https://expressjs.com" },
  { name: "MongoDB", url: "https://mongodb.com" },
  { name: "Firebase", url: "https://firebase.google.com" },
  { name: "Material-UI", url: "https://mui.com" },
  { name: "Framer Motion", url: "https://framer.com" },
];

export const Dependency = () => {
  return (
    <Wrapper id="Dependecies" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <Header variant="h5" as={motion.div} variants={itemVariants}>
        <CodeRounded sx={{ marginRight: ".5rem" }} />
        Tech Stack
      </Header>

      <Body as={motion.div} variants={itemVariants}>
        <CodeBlock>
          <ImportLine>
            <span className="keyword">import</span> <span className="brace">{"{ "}</span>
          </ImportLine>

          <TechList>
            {technologies.map((tech, index) => (
              <Paragraph
                key={tech.name}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                as={motion.a}
                variants={itemVariants}
              >
                {tech.name}{index < technologies.length - 1 ? "," : ""}
              </Paragraph>
            ))}
          </TechList>

          <Footer>
            <span className="brace">{"} "}</span><span className="keyword">from</span> <span className="string">"victor-olorunda"</span><span className="punctuation">;</span>
          </Footer>
        </CodeBlock>
      </Body>
    </Wrapper>
  );
};
