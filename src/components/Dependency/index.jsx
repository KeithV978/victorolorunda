import CodeRounded from "@mui/icons-material/DataObjectRounded";

import Typography from "@mui/material/Typography";
import { Body, Paragraph, Wrapper } from "./styles";
import { Header } from "../AboutMe/styles";
import { useTheme } from "@mui/material";

export const Dependency = () => {
  const theme = useTheme();
  return (
    <Wrapper>
      <Header variant="h5">
        <CodeRounded sx={{ marginRight: ".2rem" }} />
        If I Were A Dependency
      </Header>

      <Body>
        <Typography
          color="primary"
          fontSize="17px"
          fontWeight={700}
          lineHeight="22px"
        >
          import <span style={{ color: "#fff" }}>{"{"} </span>
        </Typography>
        <Paragraph href="https://react.org">React,</Paragraph> <br />
        <Paragraph href="https://redux.com">
          Redux{" "}
          <span style={{ color: `${[theme.palette.primary.main]}` }}> as </span>{" "}
          redux-saga,
        </Paragraph>
        <br />
        <Paragraph href="https://express.com">Express,</Paragraph> <br />
        <Paragraph href="https://express.com">Node,</Paragraph> <br />
        <Paragraph href="https://mui.com">Material-ui,</Paragraph> <br />
        <Paragraph href="https://mongodb.com">MongoDB,</Paragraph> <br />
        <Paragraph href="https://firebase.com">Firebase,</Paragraph> <br />
        <Paragraph href="https://mysql.com">MySQL,</Paragraph> <br />
        <Paragraph href="https://php.com">PHP</Paragraph>
        <Typography
          color="primary"
          fontSize="17px"
          fontWeight={700}
          component="a"
          href="https://olorunda.xyz"
        >
          <span style={{ color: "#fff" }}>{"}"}</span> from "victor-olorunda";
        </Typography>
      </Body>
    </Wrapper>
  );
};
