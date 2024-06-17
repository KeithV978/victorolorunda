// import CodeRounded from "@mui/icons-material/DataObjectRounded";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Wrapper = styled(Box)(() => ({
  width: "350px",
}));
const Header = styled(Typography)(() => ({
  background:
    "linear-gradient(270.0deg, #FFFFFF -3.9426819962552817%, #FFFFFF00 116.52852113156786%)",
  padding: ".3rem",
  color: "#1A1A1A",
  fontWeight: 800,
  fontSize: "20px",
  paddingLeft: "4rem",
  marginBottom: "1.5rem",
  boxShadow: "4px 7px 20px 1px #000",
  // display: "flex",
  // flexDirection: "row",
  // alignItems: "center",
}));
const Paragraph = styled("a")(({ theme }) => ({
  color: "#fff",
  fontSize: "17px",
  fontWeight: 700,
  lineHeight: "24px",
  borderLeft: "2px solid transparent",
  padding: "10px",
  transition: "all ease .2s .2s",
  "&:hover": {
    borderLeft: `3px solid ${[theme.palette.primary.main]}`,
  },
}));

export const Dependency = () => {
  return (
    <Wrapper>
      <Header variant="h5">
        If I Were A Dependency...
        {/* <CodeRounded sx={{ marginRight: ".2rem" }} /> */}
      </Header>

      <Box sx={{ paddingLeft: "6rem" }}>
        <Typography
          color="primary"
          fontSize="17px"
          fontWeight={700}
          lineHeight="22px"
        >
          import <span style={{ color: "#fff" }}>{"{"} </span>
        </Typography>
        <Paragraph href="https://react.org">React,</Paragraph> <br />
        <Paragraph href="https://redux.com">Redux,</Paragraph> <br />
        <Paragraph href="https://express.com">Express,</Paragraph> <br />
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
          <span style={{ color: "#fff" }}>{"}"}</span> from 'victor-olorunda'
        </Typography>
      </Box>
    </Wrapper>
  );
};
