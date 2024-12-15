import axios from "axios";
import { useEffect } from "react";
import CompanyChecker from "./company_checker";
import { Box, Container, Stack } from "@mui/material";
import SetupCompany from "./setupcompany";
import CompanyFormationBenefits from "./company_formation_benefits";
import RegistrationRequirements from "./registration_requirements";
import ContactUs from "./contact_us";

// const API_KEY = "1cb23741-9727-4861-872f-0d4ffefc6fd1";
// const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

// const API_BASE_URL = "https://api.company-information.service.gov.uk/search";

// const fetchData = async (companyName) => {
//   try {
//     const authHeader = btoa(`${API_KEY}:`);
//     const response = await axios.get(
//       `${CORS_PROXY}${API_BASE_URL}?q=${companyName}`,
//       {
//         headers: {
//           Authorization: `Basic ${authHeader}`,
//           Accept: "application/json",
//         },
//       }
//     );
//     return response.data;
//   } catch (error) {
//     if (error.response) {
//       console.error("Server Error:", error.response.data);
//     } else if (error.request) {
//       console.error("Network Error:", error.request);
//     } else {
//       console.error("Error:", error.message);
//     }
//     throw error;
//   }
// };

// const checkCompanyName = async (companyName) => {
//   try {
//     const data = await fetchData(companyName);
//     if (data && data.items && data.items.length > 0) {
//       console.log(`Company "${companyName}" is already registered.`);
//       return true;
//     } else {
//       console.log(`Company "${companyName}" is not registered.`);
//       return false;
//     }
//   } catch (error) {
//     console.error("Error checking company name:", error);
//     return false;
//   }
// };

const Home = () => {
  return (
    // backgroundColor: "#f5f5f5"
    <Container sx={{ pt: 2 }}>
      <Stack direction={"column"} spacing={8}>
        <CompanyChecker />
        <SetupCompany />
        <CompanyFormationBenefits />
        <RegistrationRequirements />
        <ContactUs />
      </Stack>
    </Container>
  );
};

export default Home;
