import { Box, Typography } from "@mui/material";
import { ICardPortfolioProps } from "../../interfaces/interfaceProps";
import DeletePortfolio from "./DeletePortfolio";
import { Link } from "react-router-dom";

function CardPortfolio({
  portfolioValue,
  onPortfolioDelete,
}: ICardPortfolioProps) {
  return (
    <Box
      sx={{
        border: "2px solid black",
        background: "white",
        boxShadow: "3px 3px 2px grey",
        borderRadius: "5px",
        p: 6,
        position: "relative",
      }}
    >
      <Typography
        to={`company/${portfolioValue}`}
        sx={{ fontSize: 17 }}
        component={Link}
      >
        {portfolioValue}
      </Typography>
      <DeletePortfolio
        onPortfolioDelete={onPortfolioDelete}
        portfolioValue={portfolioValue}
      />
    </Box>
  );
}

export default CardPortfolio;
