import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import logo from "../../assets/images/logo/port_logo.svg";

export const Header = () => {
  return (
    <Box
      sx={{
        marginTop: "1rem",
        display: { sm: "flex", xs: "none" },
        flexDirection: "row",
        alignItems: "center",
        padding: "1rem 0",
        // position: "fixed",
        // top: 0,
        // backgroundColor: "#222222",
        // // width: "100%",
        // zIndex: 10000,
        // boxShadow: "-17px 5px 8px 3px #000",
      }}
    >
      <Box sx={{ width: "20px", marginRight: "1rem" }}>
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
          background: `linear-gradient( #222222, #fff) `,
          fontWeight: 700,
          // fontSize: "2rem",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        component="a"
        href="https://olorunda.xyz"
      >
        olorunda
      </Typography>
    </Box>
  );
};
