import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CompanyProfile } from "../interfaces/interfaces";
import { getCompanyProfile } from "../api";

function CompanyPage() {
  const { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    async function getProfileInit() {
      const result = await getCompanyProfile(ticker!);
      setCompany(result?.data[0]);
    }
    getProfileInit();
  }, [ticker]);

  return (
    <>
      {company ? (
        <Box>{company.companyName}</Box>
      ) : (
        <Box>Company not found</Box>
      )}
    </>
  );
}

export default CompanyPage;
