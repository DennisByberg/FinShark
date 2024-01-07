import { Box, List } from "@mui/material";
import CardPortfolio from "./CardPortfolio";
import { IListPortfolioProps } from "../../interfaces/interfaceProps";

function ListPortfolio({
  portfolioValues,
  onPortfolioDelete,
}: IListPortfolioProps) {
  return (
    <Box sx={{ marginInline: 3, textAlign: "center" }}>
      <h3>My Portfolio</h3>
      <List
        sx={{
          gap: "1rem",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
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
    </Box>
  );
}

export default ListPortfolio;
