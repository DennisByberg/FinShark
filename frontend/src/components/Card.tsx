import { Box, Typography } from "@mui/material";
import { cardImageSX, cardSX } from "./styles/CardSx";

function Card({ companyName, ticker, price }: ICardProps) {
  return (
    <Box sx={cardSX}>
      <Box
        sx={cardImageSX}
        component={"img"}
        src="https://media.istockphoto.com/id/1251493047/vector/apple-flat-style-vector-icon.jpg?s=612x612&w=0&k=20&c=90r0D6OEq1wNRnfHHftEWibKBjdGe9OgMl6HEpi4d8Q="
      ></Box>
      <Box>
        <Typography sx={{ fontSize: "1.5rem" }} variant="h2">
          {companyName} ({ticker})
        </Typography>
        <Typography variant="body1">${price}</Typography>
      </Box>
      <Typography variant="body1">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, neque.
      </Typography>
    </Box>
  );
}

export default Card;
