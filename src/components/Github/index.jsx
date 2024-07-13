import { GitScreen, Wrapper } from "./styles";
import GitHub from "@mui/icons-material/GitHub";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Github = () => {
  return (
    <Wrapper>
      <Box sx={{ width: "100%" }}>
        <Typography
          color="white"
          sx={{
            // fontSize: "",
            fontSize: { sm: "20px", xs: "1rem" },
            margin: { sm: "0 0 .7rem 4rem", xs: ".5rem 0" },
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
          }}
        >
          <GitHub
            color="inherit"
            fontSize="inherit"
            sx={{
              marginRight: ".5rem",
            }}
          />
          My Recent Github Commits
        </Typography>
        <GitScreen>
          <p>{" > _"}</p>
        </GitScreen>
      </Box>
    </Wrapper>
  );
};
