import { Typography } from "@mui/material";
import { ICardPortfolioProps } from "../../interfaces/interfaceProps";
import DeletePortfolio from "./DeletePortfolio";

function CardPortfolio({
  portfolioValue,
  onPortfolioDelete,
}: ICardPortfolioProps) {
  return (
    <>
      <Typography variant="h4">{portfolioValue}</Typography>
      <DeletePortfolio
        onPortfolioDelete={onPortfolioDelete}
        portfolioValue={portfolioValue}
      />
    </>
  );
}

export default CardPortfolio;
