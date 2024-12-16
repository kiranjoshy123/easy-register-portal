import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  MenuItem,
  Grid,
  Box,
  CircularProgress,
  Backdrop,
  Paper,
} from "@mui/material";
import axios from "axios";

const API_KEY = "1cb23741-9727-4861-872f-0d4ffefc6fd1";
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

const API_BASE_URL = "https://api.company-information.service.gov.uk/search";

const CompanyChecker = () => {
  const [companyName, setCompanyName] = useState("");
  const [companyType, setCompanyType] = useState("LTD");
  const [isRegistered, setIsRegistered] = useState(null);
  const [loading, setLoading] = useState(false);

  const companyTypes = [
    { value: "Limited", label: "Limited" },
    { value: "LTD", label: "LTD" },
  ];

  const handleCompanyNameChange = (event) => {
    setCompanyName(event.target.value);
  };

  const handleCompanyTypeChange = (event) => {
    setCompanyType(event.target.value);
  };

  const fetchData = async (fullCompanyName) => {
    try {
      const authHeader = btoa(`${API_KEY}:`);
      const response = await axios.get(
        `${CORS_PROXY}${API_BASE_URL}?q=${fullCompanyName}`,
        {
          headers: {
            Authorization: `Basic ${authHeader}`,
            Accept: "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        console.error("Server Error:", error.response.data);
      } else if (error.request) {
        console.error("Network Error:", error.request);
      } else {
        console.error("Error:", error.message);
      }
      throw error;
    }
  };

  const checkCompanyName = async () => {
    setLoading(true);
    const fullCompanyName = `${companyName} ${companyType}`;
    try {
      const data = await fetchData(fullCompanyName);
      if (data && data.items && data.items.length > 0) {
        console.log(`Company "${fullCompanyName}" is already registered.`);
        setIsRegistered(() => true);
      } else {
        console.log(`Company "${fullCompanyName}" is not registered.`);
        setIsRegistered(() => false);
      }
    } catch (error) {
      console.error("Error checking company name:", error);
      setIsRegistered(() => false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box align="center">
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ fontWeight: "bold" }}
        mb={0}
      >
        Kickstart Your Venture with Ease!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Starting a business? You can quickly and effortlessly register your
        Limited Company.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Get started today and set your business on the path to success with our
        streamlined registration process. Simple, efficient, and hassle-free!
      </Typography>
      <Box mt={4}>
        <Paper elevation={12} square={false} sx={{ p: 2.5 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={8}>
              <TextField
                fullWidth
                label="Company Name"
                value={companyName}
                onChange={handleCompanyNameChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField
                select
                fullWidth
                value={companyType}
                onChange={handleCompanyTypeChange}
              >
                {companyTypes.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={checkCompanyName}
              >
                Check
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
      {isRegistered !== null && (
        <Box mt={4}>
          {isRegistered ? (
            <Typography variant="h6" color={"error"}>
              The company name "{companyName} {companyType}" is already
              registered.
            </Typography>
          ) : (
            <Typography variant="h6" color={"success"}>
              The company name "{companyName} {companyType}" is available.
            </Typography>
          )}
        </Box>
      )}
      <Backdrop open={loading} style={{ zIndex: 9999, color: "#fff" }}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
};

export default CompanyChecker;
