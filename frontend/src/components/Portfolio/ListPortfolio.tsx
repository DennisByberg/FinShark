import { List } from "@mui/material";
import CardPortfolio from "./CardPortfolio";
import { IListPortfolioProps } from "../../interfaces/interfaceProps";

function ListPortfolio({
  portfolioValues,
  onPortfolioDelete,
}: IListPortfolioProps) {
  return (
    <>
      <h3>My Portfolio</h3>
      <List>
        {portfolioValues &&
          portfolioValues.map((portfolioValue) => {
            return (
              <CardPortfolio
                portfolioValue={portfolioValue}
                onPortfolioDelete={onPortfolioDelete}
              />
            );
          })}
      </List>
    </>
  );
}

export default ListPortfolio;
