import Box from "@mui/material/Box";
import logo from "../../assets/images/logo/port_logo.svg";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import Phone from "@mui/icons-material/PhoneRounded";
import LinkedIn from "@mui/icons-material/LinkedIn";
import AlternateEmail from "@mui/icons-material/AlternateEmailRounded";
import WhatsApp from "@mui/icons-material/WhatsApp";
import { styled } from "@mui/material";
import { GitHub } from "@mui/icons-material";

const Words = styled(Typography)(() => ({
  color: "#cfcfcf",
  fontWeight: 700,
}));
export const Links = () => {
  return (
    <Box
      sx={{
        margin: "8rem 0",
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
            <Words component="a" href="https://linkedin.com/in/victor-olorunda">
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
              <GitHub color="primary" />
            </ListItemIcon>
            <Words component="a" href="https://github.com/KeithV978">
              KeithV978
            </Words>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Phone color="primary" />
            </ListItemIcon>
            <Words component="a" href="tel:+2348152038183">
              {"Call Me"}
            </Words>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <WhatsApp color="primary" />
            </ListItemIcon>
            <Words component="a" href="https://wa.me/+2348152038183">
              {"Message Me"}
            </Words>
          </ListItem>
        </List>

        <Box sx={{ marginTop: "4rem", maxWidth: "500px" }}>
          <Typography
            variant="h5"
            color="white"
            textAlign="center"
            sx={{ textShadow: "4px 7px 20px 1px #000" }}
          >
            "Man is still the most extraordinary computer of all."
          </Typography>
        </Box>
      </div>
    </Box>
  );
};
