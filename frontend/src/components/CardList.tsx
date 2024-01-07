import { List, Typography } from "@mui/material";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";
import { ICardListProps } from "../interfaces/interfaceProps";
import { cardListSX } from "./styles/CardListSX";

function CardList({ searchResult, onPortfolioCreate }: ICardListProps) {
  return (
    <List sx={cardListSX}>
      {searchResult.length > 0 ? (
        searchResult.map((result) => {
          return (
            <Card
              id={result.symbol}
              key={uuidv4()}
              searchResult={result}
              onPortfolioCreate={onPortfolioCreate}
            />
          );
        })
      ) : (
        <Typography>No results</Typography>
      )}
    </List>
  );
}

export default CardList;
