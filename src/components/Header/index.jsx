import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import logo from "../../assets/images/logo/port_logo.svg";

export const Header = () => {
  return (
    <Typography component="a" href="https://olorunda.xyz">
      <Box
        sx={{
          // marginTop: "1rem",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: { xs: "center", sm: "left" },
          padding: "1rem 0",
          width: "100%",
          // position: "fixed",
          // top: 0,
          // backgroundColor: "#222222",
          // // width: "100%",
          // zIndex: 10000,
          // boxShadow: "-17px 5px 8px 3px #000",
        }}
      >
        <Box
          sx={{
            width: "20px",
            marginRight: "1rem",
            display: { sm: "none", xs: "none" },
          }}
        >
          <img
            src={logo}
            alt="logo"
            width="100%"
            style={{ display: "inline-block" }}
          />
        </Box>
        <Typography
          variant="h6"
          color="#fff"
          fontWeight="bold"
          letterSpacing={6}
          sx={{
            width: "fit-content",
            background: `linear-gradient(#222222, #fff) `,
            fontWeight: 700,
            fontSize: { xs: "1rem", sm: "auto" },
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          olorunda.xyz
        </Typography>
      </Box>
    </Typography>
  );
};
