import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ThumbUp from "@mui/icons-material/ThumbUp";
import Phone from "@mui/icons-material/Phone";
import Assignment from "@mui/icons-material/Assignment";
import Home from "@mui/icons-material/Home";
import AccountBalance from "@mui/icons-material/AccountBalance";
import Build from "@mui/icons-material/Build";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const benefitsArray = [
  {
    icon: <ThumbUp style={{ fontSize: 40 }} color="primary" />,
    title: "Simple Setup",
    description:
      "We streamline the company setup process to ensure it is as quick and easy as possible.",
  },
  {
    icon: <Phone style={{ fontSize: 40 }} color="primary" />,
    title: "Phone Assistance",
    description:
      "We can form your company over the phone if you prefer not to do it online.",
  },
  {
    icon: <Assignment style={{ fontSize: 40 }} color="primary" />,
    title: "Application Review",
    description:
      "We review your application before submission to avoid rejections. 10% of applications are rejected. Not yours!",
  },
  {
    icon: <Home style={{ fontSize: 40 }} color="primary" />,
    title: "Office Address Service",
    description:
      "Keep your home address private by using our address as your company’s registered office.",
  },
  {
    icon: <AccountBalance style={{ fontSize: 40 }} color="primary" />,
    title: "Bank Account Setup",
    description:
      "Choose from a range of business bank accounts with easy online applications.",
  },
  // {
  //   icon: <Build style={{ fontSize: 40 }} color="primary" />,
  //   title: "Online Management",
  //   description:
  //     "Manage and update your company details using our advanced online system.",
  // },
  {
    icon: <SupportAgentIcon style={{ fontSize: 40 }} color="primary" />,
    title: "Ongoing Support",
    description:
      "We offer support for the lifetime of your company. Once a client, always a client.",
  },
];

const Benefits = () => {
  return (
    <Box sx={{ pt: 4 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        mb={0}
        sx={{ fontWeight: "bold" }}
      >
        Why Choose a Company Formation Agent?
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom>
        Formation agents provide valuable services that you won't get by
        registering directly with Companies House.
      </Typography>
      <Grid container spacing={4} pt={3}>
        {benefitsArray.map((benefit, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box display="flex" flexDirection="column" alignItems="center">
              {benefit.icon}
              <Typography variant="h6" align="center" gutterBottom>
                {benefit.title}
              </Typography>
              <Typography variant="body1" align="center">
                {benefit.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Benefits;
