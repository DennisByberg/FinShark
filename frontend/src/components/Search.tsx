import { Box, Button, TextField } from "@mui/material";
import { searchSX } from "./styles/SearchSX";
import { ISearchProps } from "../interfaces/interfaceProps";

function Search({
  handleInputSearch,
  inputValue,
  handleInputChange,
}: ISearchProps) {
  return (
    <Box sx={searchSX}>
      <TextField
        value={inputValue}
        onChange={handleInputChange}
        id="outlined-basic"
        label="Search"
        variant="outlined"
      />
      <Button variant="outlined" onClick={handleInputSearch}>
        SEARCH
      </Button>
    </Box>
  );
}

export default Search;
