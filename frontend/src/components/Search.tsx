import { Box, Button, TextField } from "@mui/material";
import { searchSX, SearchInputSX, searchButtonSX } from "./styles/SearchSX";
import { ISearchProps } from "../interfaces/interfaceProps";
import SearchIcon from "@mui/icons-material/Search";

function Search({
  handleInputSearch,
  inputValue,
  handleInputChange,
}: ISearchProps) {
  return (
    <Box sx={searchSX}>
      <TextField
        sx={SearchInputSX}
        value={inputValue}
        onChange={handleInputChange}
        id="outlined-basic"
        label="Search"
        variant="outlined"
      />
      <Button sx={searchButtonSX} onClick={handleInputSearch}>
        <SearchIcon />
      </Button>
    </Box>
  );
}

export default Search;
