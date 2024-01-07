import { Box, Typography } from "@mui/material";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";
import { ICardListProps } from "../interfaces/interfaceProps";

function CardList({ searchResult, onPortfolioCreate }: ICardListProps) {
  return (
    <Box>
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
    </Box>
  );
}

export default CardList;
