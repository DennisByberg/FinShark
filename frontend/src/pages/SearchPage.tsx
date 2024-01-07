import { useState, ChangeEvent } from "react";
import { searchCompanies } from "../api";
import CardList from "../components/CardList";
import ListPortfolio from "../components/Portfolio/ListPortfolio";
import { CompanySearch } from "../interfaces/interfaces";
import Search from "../components/Search";

function SearchPage() {
  const [inputValue, setInputValue] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function onPortfolioCreate(e: React.FormEvent) {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      0: { value: string };
    };
    const exists = portfolioValues.find((value) => value === target[0].value);

    if (exists) return;

    const updatedPortfolio = [...portfolioValues, target[0].value];
    setPortfolioValues(updatedPortfolio);
  }

  async function handleInputSearch() {
    const result = await searchCompanies(inputValue);
    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }
    console.log(searchResult);
  }

  function onPortfolioDelete(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const input = target.elements[0] as HTMLInputElement;
    const removed = portfolioValues.filter((value) => {
      return value !== input.value;
    });
    setPortfolioValues(removed);
  }

  return (
    <>
      <Search
        inputValue={inputValue}
        handleInputSearch={handleInputSearch}
        handleInputChange={handleInputChange}
      />
      {serverError && <h1>{serverError}</h1>}
      <ListPortfolio
        portfolioValues={portfolioValues}
        onPortfolioDelete={onPortfolioDelete}
      />
      <CardList
        searchResult={searchResult}
        onPortfolioCreate={onPortfolioCreate}
      />
    </>
  );
}

export default SearchPage;
