import axios from "axios";
import { CompanyProfile, CompanySearch } from "./interfaces/interfaces";

interface ISearchResponse {
  data: CompanySearch[];
}

export async function searchCompanies(query: string) {
  try {
    const data = await axios.get<ISearchResponse>(
      `https://financialmodelingprep.com/api/v3/search?query=${query}&apikey=9550ccfcc44d66567d44739257dd8769`
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message:", error.message);
      return error.message;
    } else {
      console.log("unexpected error occured:", error);
      return "An expected error has occured";
    }
  }
}

export const getCompanyProfile = async (query: string) => {
  try {
    const data = await axios.get<CompanyProfile[]>(
      `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=9550ccfcc44d66567d44739257dd8769`
    );
    return data;
  } catch (error) {
    console.log("error message from api");
  }
};
