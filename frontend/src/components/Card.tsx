import { Box, SxProps, Typography } from "@mui/material";

function Card() {
  const cardImageSX: SxProps = {
    width: "150px",
    height: "150px",
    borderRadius: "999px",
    border: "1px solid black",
    boxShadow: "2px 2px 5px grey",
  };

  const cardSX: SxProps = {
    boxShadow: "1px 1px 3px grey",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    maxWidth: "350px",
    textAlign: "center",
    gap: "3rem",
    padding: "1rem 0",
    border: "1px solid black",
  };

  return (
    <Box sx={cardSX}>
      <Box
        sx={cardImageSX}
        component={"img"}
        src="https://media.istockphoto.com/id/1251493047/vector/apple-flat-style-vector-icon.jpg?s=612x612&w=0&k=20&c=90r0D6OEq1wNRnfHHftEWibKBjdGe9OgMl6HEpi4d8Q="
      ></Box>
      <Box>
        <Typography variant="h2">AAPL</Typography>
        <Typography variant="body1">$110</Typography>
      </Box>
      <Typography variant="body1">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, neque.
      </Typography>
    </Box>
  );
}

export default Card;
