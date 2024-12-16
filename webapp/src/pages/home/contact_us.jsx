// Import necessary dependencies
import React from "react";
import { Box, Typography, Grid, Stack } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const ContactUs = () => {
  return (
    <Box sx={{ p: 2, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", mb: 0 }}>
        Have a question? Get in touch today
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ mb: 2 }}>
        We can provide free qualified guidance to help get you started with your
        business needs.
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={16}
        justifyContent="center"
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <PhoneIcon sx={{ fontSize: 40 }} color="primary" />
          <Box sx={{ pl: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Call us at
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              +44 (0) 207 689 7888
            </Typography>
          </Box>
        </Box>

        {/* Email Us At */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <EmailIcon sx={{ fontSize: 40 }} color="primary" />
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Email us at
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              info@yourcompanyformations.co.uk
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default ContactUs;
