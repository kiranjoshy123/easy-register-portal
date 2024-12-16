import CompanyChecker from "./company_checker";
import { Container, Stack } from "@mui/material";
import SetupCompany from "./setupcompany";
import CompanyFormationBenefits from "./company_formation_benefits";
import RegistrationRequirements from "./registration_requirements";
import ContactUs from "./contact_us";
import FAQ from "./faq";

const Home = () => {
  return (
    <Container sx={{ pt: 2 }}>
      <Stack direction={"column"} spacing={8}>
        <CompanyChecker />
        <SetupCompany />
        <CompanyFormationBenefits />
        <RegistrationRequirements />
        <ContactUs />
        <FAQ />
      </Stack>
    </Container>
  );
};

export default Home;
