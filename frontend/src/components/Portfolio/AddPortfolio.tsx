import { Button, FormControl, Input } from "@mui/material";
import { IAddPortfolioProps } from "../../interfaces/interfaceProps";

const AddPortfolio = ({ onPortfolioCreate, symbol }: IAddPortfolioProps) => {
  return (
    <form onSubmit={onPortfolioCreate}>
      <FormControl>
        <Input
          id="my-input"
          aria-describedby="my-helper-text"
          inputProps={{ readOnly: true }}
          style={{ display: "none" }}
          value={symbol}
        />
        <Button variant="contained" type="submit">
          Add
        </Button>
      </FormControl>
    </form>
  );
};

export default AddPortfolio;
