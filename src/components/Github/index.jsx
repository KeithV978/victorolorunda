import { GitHub } from "@mui/icons-material";
// import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Github = () => {
  // const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: { xs: "center", sm: "flex-end" },
        margin: { sm: "4rem 0", xs: "3rem 0" },
        width: "100%",
      }}
    >
      <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
        <Box sx={{ width: "100%", justifyContent: "right", display: "flex" }}>
          <Box sx={{ position: "relative" }}>
            <Typography
              color="white"
              sx={{
                fontSize: "20px",
                margin: { sm: "0 0 .7rem 4rem", xs: ".5rem 0" },
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
              }}
            >
              <GitHub color="inherit" sx={{ marginRight: ".5rem" }} /> My Recent
              Github Commits
            </Typography>
            <Box
              sx={{
                backgroundColor: "#000",
                borderColor: "primary.main",
                borderWidth: "2px",
                borderStyle: "solid",
                // borderImage: `linear-gradient(to bottom, transparent 10%,${[
                //   theme.palette.primary.main,
                // ]} 20%, transparent 100%)1 100%`,
                minWidth: "200px",
                width: { xs: "100%", sm: "600px" },
                minHeight: "350px",
                color: "#fff",
                padding: "1rem",
                boxShadow: "-17px 20px 28px 3px #000",
              }}
            >
              <p>{" > _"}</p>
            </Box>
          </Box>
        </Box>
      </div>
    </Box>
  );
};
