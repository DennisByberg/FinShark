import { Box } from "@mui/material";
import Card from "./Card";

function CardList() {
  return (
    <Box>
      <Card companyName="Apple" ticker="APPL" price={100} />
      <Card companyName="Microsoft" ticker="MSFT" price={200} />
      <Card companyName="Tesla" ticker="TSLA" price={300} />
    </Box>
  );
}

export default CardList;
