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
    <Box sx={{ padding: { sm: "1rem", xs: "0 .5rem" } }}>
      <Header>
        <Typography
          variant="h6"
          color="primary"
          display="flex"
          alignItems="center"
          sx={{ fontSize: { sm: "inherit", xs: "1.1rem" } }}
        >
          {data?.icon}
          {data?.title}
        </Typography>
        <IconButton
          sx={{
            float: "right",
            backgroundColor: "primary.main",
            "&:hover": { backgroundColor: "primary.main" },
            width: { sm: "1.8rem", xs: "1.3rem" },
            height: { sm: "1.8rem", xs: "1.3rem" },
          }}
          size="small"
          onClick={() => setSelectedId(null)}
        >
          <Close
            sx={{ color: "white", fontSize: { xs: "1rem", sm: "1.2rem" } }}
          />
        </IconButton>
      </Header>
      <Body>
        <List>
          {data?.items.map((item, index) => {
            return (
              <ListItem
                key={index}
                sx={{
                  // padding: ".8rem 0",
                  width: "100%",
                  transition: "ease .2s .1s",
                  // cursor: "pointer",
                  color: "primary.main",
                  display: "flex",
                  flexDirection: "row",
                  gap: 1,
                  alignItems: "center",
                  borderBottom: "1px solid grey",
                  borderColor: "#fdd5c6",
                  minHeight: "8vh",
                }}
              >
                {item.heading}
                <Typography variant="body2" fontWeight={300}>
                  {item.value}
                </Typography>
              </ListItem>
            );
          })}
        </List>
      </Body>
    </Box>
  );
});
export default Preview;
