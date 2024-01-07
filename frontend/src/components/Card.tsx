import { ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import {
  cardFirstListItemSX,
  cardListItemSX,
  cardSX,
  cardCurrencySX,
} from "./styles/CardSX";
import AddPortfolio from "./Portfolio/AddPortfolio";
import { ICardProps } from "../interfaces/interfaceProps";

function Card({ searchResult, onPortfolioCreate }: ICardProps) {
  return (
    <ListItem sx={cardSX}>
      <Typography
        component={Link}
        to={`/company/${searchResult.symbol}`}
        sx={cardFirstListItemSX}
      >
        {searchResult.name} ({searchResult.symbol})
      </Typography>

      <Typography sx={cardListItemSX} variant="body1">
        {searchResult.exchangeShortName} - {searchResult.stockExchange}
      </Typography>

      <Typography sx={cardCurrencySX} variant="body1">
        ${searchResult.currency}
      </Typography>

      <AddPortfolio
        onPortfolioCreate={onPortfolioCreate}
        symbol={searchResult.symbol}
      />
    </ListItem>
  );
}

export default Card;
