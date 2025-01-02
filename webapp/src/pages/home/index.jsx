import CompanyChecker from "./company_checker";
import { Container, Stack } from "@mui/material";
import Steps from "./steps";
import Benefits from "./benefits";
import RegistrationRequirements from "./registration_requirements";
import ContactUs from "./contact_us";
import FAQ from "./faq";

const Home = () => {
  return (
    <Container sx={{ pt: 2 }}>
      <Stack direction={"column"} spacing={8}>
        <CompanyChecker />
        <Steps />
        <Benefits />
        <RegistrationRequirements />
        <ContactUs />
        <FAQ />
      </Stack>
    </Container>
  );
};

export default Home;
