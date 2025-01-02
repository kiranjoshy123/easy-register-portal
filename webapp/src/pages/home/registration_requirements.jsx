import React from "react";
import { Grid, Paper, Typography, Box, Grow } from "@mui/material";

const requirements = [
  {
    title: "Office Address",
    content:
      "You need a registered UK office address for official correspondence, such as letters from Companies House.",
  },
  {
    title: "Business Information",
    content:
      "Basic details about your company, including a brief description of its activities and relevant SIC codes, are required. These details can be updated later if necessary.",
  },
  {
    title: "Director and Shareholder Details",
    content:
      "Information such as your name, nationality, date of birth, occupation, address, and proof of identity needs to be provided.",
  },
];

const RegistrationRequirements = () => {
  return (
    <Box sx={{ pt: 4, flexGrow: 1 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        Documents required for Company Registration
      </Typography>
      <Grid container spacing={3}>
        {requirements.map((requirement, index) => (
          <Grid item xs={12} sm={4} sx={{ display: "flex" }} key={index}>
            <Grow in={true} style={{ transformOrigin: "0 0 0" }} timeout={1000}>
              <Paper
                elevation={3}
                style={{
                  padding: "20px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h5" gutterBottom>
                  {requirement.title}
                </Typography>
                <Typography variant="body1">{requirement.content}</Typography>
              </Paper>
            </Grow>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RegistrationRequirements;
