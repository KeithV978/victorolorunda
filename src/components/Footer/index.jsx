import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        marginTop: "2rem",
        padding: ".5rem",
      }}
    >
      <Typography textAlign="center" color="white" fontWeight={700}>
        &copy; olorunda {new Date().getFullYear()}
      </Typography>
    </Box>
  );
};
