import { Button, FormControl, Input } from "@mui/material";
import { IDeletePortfolioProps } from "../../interfaces/interfaceProps";

function DeletePortfolio({
  onPortfolioDelete,
  portfolioValue,
}: IDeletePortfolioProps) {
  return (
    <form onSubmit={onPortfolioDelete}>
      <FormControl>
        <Input style={{ display: "none" }} value={portfolioValue} />
        <Button variant="contained" type="submit">
          X
        </Button>
      </FormControl>
    </form>
  );
}

export default DeletePortfolio;
