import { Box, Typography } from "@mui/material";
import { cardImageSX, cardSX } from "./styles/CardSX";
import AddPortfolio from "./Portfolio/AddPortfolio";
import { ICardProps } from "../interfaces/interfaceProps";

function Card({ searchResult, onPortfolioCreate }: ICardProps) {
  return (
    <Box sx={cardSX}>
      <Box sx={cardImageSX} alt="company logo" component={"img"}></Box>
      <Box>
        <Typography sx={{ fontSize: "1.2rem" }} variant="h2">
          {searchResult.name} ({searchResult.symbol})
        </Typography>
        <Typography variant="body1">${searchResult.currency}</Typography>
      </Box>
      <Typography variant="body1">
        {searchResult.exchangeShortName} - {searchResult.stockExchange}
      </Typography>
      <AddPortfolio
        onPortfolioCreate={onPortfolioCreate}
        symbol={searchResult.symbol}
      />
    </Box>
  );
}

export default Card;
