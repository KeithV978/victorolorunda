import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import logo from "../../assets/images/logo/port_logo.svg";
import bg from "../../assets/images/bg_patterns/mark.png";

export const Hero = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        height: "85vh",
        width: "100%",
        color: "#fff",
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "space",
        borderRadius: "50%",
        margin: "2rem 0 10rem 0",
        // boxShadow: "-17px 5px 8px 3px #000",

        // borderLeftWidth: "3px",
        // borderLeftStyle: "solid",
        // borderRightWidth: "3px",
        // borderRightStyle: "solid",
        // borderImage: `linear-gradient(to bottom, transparent 20% ,${[
        //   theme.palette.primary.main,
        // ]} 30%, transparent 70%)1 100%`,

        // borderLefImage: "linear-gradient(to bottom, green, red)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "50%",
          backgroundColor: "#1a1a1a",
          padding: "5rem 0",
          borderRadius: "50%",
          // clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        }}
      >
        <Stack direction="row" sx={{ width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
              width: "100%",
            }}
          >
            <img
              src={logo}
              alt="avatar"
              width={120}
              style={{ display: "inline-block" }}
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              borderColor: "primary.main",
              borderLeftWidth: "3px",
              borderLeftStyle: "solid",
              // borderImage: `linear-gradient(to bottom, transparent 20%, ${[
              //   theme.palette.primary.main,
              // ]} 30%, transparent 80%)1 100%`,
              // borderLeft: `1px solid ${[theme.palette.primary.main]}`,
              padding: "0 1rem",
              marginLeft: "1rem",
              color: "#fff",
              // height: "100%",
            }}
          >
            <div>
              <Typography
                variant="h5"
                color="inherit"
                fontWeight="bold"
                lineHeight={1.3}
              >
                Hi!
              </Typography>
              <Typography
                variant="h5"
                color="inherit"
                fontWeight="bold"
                lineHeight={1.3}
              >
                My name is
              </Typography>
              <Typography
                variant="h5"
                color="inherit"
                fontWeight={700}
                lineHeight={1.3}
                component="a"
                href="https://olorunda.xyz"
              >
                {" "}
                Victor Olorunda,
              </Typography>

              <Typography
                variant="h5"
                color="inherit"
                fontWeight="bold"
                lineHeight={1.3}
                width="100%"
                // sx={{ minWidth: "180px" }}
              >
                and I'm a{" "}
                <span
                  style={{
                    background: `linear-gradient( ${[
                      theme.palette.primary.main,
                    ]}, #222222) `,
                    fontWeight: 800,
                    fontSize: "2rem",
                    letterSpacing: ".1rem",
                    // background: `webkit-linear-gradient( ${[
                    //   theme.palette.primary.main,
                    // ]}, #eee) `,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  CREATIVE
                </span>
              </Typography>
            </div>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
