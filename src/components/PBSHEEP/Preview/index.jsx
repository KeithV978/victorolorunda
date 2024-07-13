import * as React from "react";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";

import Close from "@mui/icons-material/Close";
// import { Header } from "../../components/Header";
import Box from "@mui/material/Box";
import { Body, Header } from "../styles";

const Preview = React.memo(({ data, setSelectedId }) => {
  return (
    <Box sx={{ padding: "1rem" }}>
      <Header>
        <Typography
          variant="h6"
          color="primary"
          display="flex"
          alignItems="center"
        >
          {data?.icon}
          {data?.title}
        </Typography>
        <IconButton
          sx={{
            float: "right",
            backgroundColor: "primary.main",
            "&:hover": { backgroundColor: "primary.main" },
          }}
          size="small"
          onClick={() => setSelectedId(null)}
        >
          <Close sx={{ color: "white" }} />
        </IconButton>
      </Header>
      <Body>
        <List sx={{ listStyle: "disc" }}>
          {data?.items.map((item, index) => {
            return (
              <ListItem
                key={index}
                sx={{
                  padding: ".8rem 0",
                  transition: "ease .2s .1s",
                  // cursor: "pointer",
                  color: "primary.main",
                  display: "flex",
                  flexDirection: "row",
                  gap: 1,
                  alignItems: "center",
                }}
              >
                {item.heading}
                <Typography variant="body2">{item.value}</Typography>
              </ListItem>
            );
          })}
        </List>
      </Body>
    </Box>
  );
});
export default Preview;
