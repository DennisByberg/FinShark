import React, { SyntheticEvent } from "react";

export interface ICardProps {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

export interface ICardPortfolioProps {
  portfolioValue: string;
  onPortfolioDelete: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface ISearchProps {
  inputValue: string | undefined;
  handleInputSearch: () => Promise<void>;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IListPortfolioProps {
  portfolioValues: string[];
  onPortfolioDelete: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface ICardListProps {
  searchResult: CompanySearch[];
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

export interface IDeletePortfolioProps {
  onPortfolioDelete: (e: React.FormEvent<HTMLFormElement>) => void;
  portfolioValue: string;
}

interface IAddPortfolioProps {
  onPortfolioCreate: (e: SyntheticEvent) => void;
  symbol: string;
}
