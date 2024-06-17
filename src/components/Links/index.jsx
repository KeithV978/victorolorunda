import Box from "@mui/material/Box";
import logo from "../../assets/images/logo/port_logo.svg";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import Phone from "@mui/icons-material/PhoneRounded";
import LinkedIn from "@mui/icons-material/LinkedIn";
import AlternateEmail from "@mui/icons-material/AlternateEmailRounded";
import { styled } from "@mui/material";

const Words = styled(Typography)(() => ({
  color: "#cfcfcf",
  fontWeight: 700,
}));
export const Links = () => {
  return (
    <Box
      sx={{
        margin: "10rem 0",
        minHeight: "350px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ minHeight: "130px" }}>
          <img
            src={logo}
            alt="avatar"
            width={90}
            style={{ display: "inline-block" }}
          />
        </Box>
        <List>
          <ListItem>
            <ListItemIcon>
              <LinkedIn color="primary" />
            </ListItemIcon>
            <Words component="a" href="https://linkedin.com/">
              {"victor-olorunda"}
            </Words>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AlternateEmail color="primary" />
            </ListItemIcon>
            <Words component="a" href="mailto:victorolorunda6@gmail.com">
              {"victorolorunda6@gmail.com"}
            </Words>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Phone color="primary" />
            </ListItemIcon>
            <Words component="a" href="phone:+2348152038183">
              {"+2348152038183"}
            </Words>
          </ListItem>
        </List>

        <Box sx={{ marginTop: "5rem" }}>
          <Typography
            variant="h5"
            color="white"
            textAlign="center"
            sx={{ textShadow: "4px 7px 20px 1px #000" }}
          >
            "If we're not building, then we're destroying..."
          </Typography>
        </Box>
      </div>
    </Box>
  );
};
