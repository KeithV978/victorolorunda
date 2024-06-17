import * as React from "react";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import { styled } from "@mui/material";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Close from "@mui/icons-material/Close";
import { data } from "./data";

const PreviewContentWrapper = styled(Box)(() => ({
  padding: "1rem",
}));

const Header = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}));
const Body = styled(Box)(() => ({
  padding: "2rem 0",
}));

const StyledAccordion = styled(Accordion)(() => ({
  backgroundColor: "transparent",
  border: "none",
  boxShadow: "none",
}));

const PreviewContent = ({ layoutId, close }) => {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  let index = layoutId - 1;
  return (
    <PreviewContentWrapper>
      <Header>
        <Typography
          variant="h6"
          color="primary"
          display="flex"
          alignItems="center"
        >
          {data[index]?.icon}
          {data[index]?.title}
        </Typography>
        <IconButton
          sx={{
            backgroundColor: "primary.main",
            "&:hover": { backgroundColor: "primary.main" },
          }}
          size="small"
          onClick={close}
        >
          <Close sx={{ color: "white" }} />
        </IconButton>
      </Header>
      <Body>
        <List>
          {data[index]?.content.map((cont, index) => {
            return (
              <ListItem
                key={index}
                sx={{
                  padding: "1rem 0",
                  transition: "ease .2s .1s",
                  cursor: "pointer",
                }}
              >
                <StyledAccordion
                  expanded={expanded === `panel${index}`}
                  onChange={handleChange(`panel${index}`)}
                  sx={{ color: "inherit" }}
                >
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                    sx={{
                      color: "inherit",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      "&:hover": {
                        backgroundColor: "primary.main",
                        color: "#fff",
                      },
                    }}
                  >
                    <Typography
                      variant="body1"
                      color="primary"
                      fontWeight={700}
                    >
                      Job Description
                    </Typography>
                    <Typography variant="body1">{cont.subtitle}</Typography>
                    <Typography variant="body1">{cont.duration}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      {cont?.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                    {/* {console.log(cont.details)} */}
                  </AccordionDetails>
                </StyledAccordion>
              </ListItem>
            );
          })}
        </List>
      </Body>
    </PreviewContentWrapper>
  );
};

export default PreviewContent;
