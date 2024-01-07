import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
        justifyContent: "center",
        textAlign: "center",
        marginInline: 3,
      }}
    >
      <Box
        component="img"
        sx={{ maxWidth: 300 }}
        src={"https://pngimg.com/d/shark_PNG18831.png"}
      />
      <Typography variant="h1" fontSize={30}>
        Financial data with no news.
      </Typography>
      <Typography variant="h2" fontSize={18} fontStyle={"italic"}>
        Search relevant financial documents without fear mongering and fake
        news.
      </Typography>
      <Button component={Link} variant="contained" to={"/search"}>
        Get Started
      </Button>
    </Box>
  );
}

export default Hero;
