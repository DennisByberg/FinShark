import { Button, FormControl, Input } from "@mui/material";
import { IDeletePortfolioProps } from "../../interfaces/interfaceProps";
import DeleteIcon from "@mui/icons-material/Delete";

function DeletePortfolio({
  onPortfolioDelete,
  portfolioValue,
}: IDeletePortfolioProps) {
  return (
    <form onSubmit={onPortfolioDelete}>
      <FormControl sx={{ position: "absolute", bottom: 5, right: 5 }}>
        <Input style={{ display: "none" }} value={portfolioValue} />
        <Button size="small" color="error" variant="contained" type="submit">
          <DeleteIcon fontSize="small" />
        </Button>
      </FormControl>
    </form>
  );
}

export default DeletePortfolio;
