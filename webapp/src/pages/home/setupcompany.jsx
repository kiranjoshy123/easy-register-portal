import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Box,
  Grow,
  Stack,
  Badge,
  Divider,
} from "@mui/material";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

const steps = [
  {
    title: "Choose name",
    description:
      "Prepare at least three potential names for the company to be registered. Search to see if any of your proposed company names are available, starting with the most preferred name. Once you find an available name, proceed to the next step.",
    icon: <ScreenSearchDesktopIcon style={{ fontSize: 40 }} />,
  },
  {
    title: "Choose package",
    description:
      "Determine your preferred limited company structure. Your Company Formations ensures your company is incorporated as fast as possible.",
    icon: <TouchAppIcon style={{ fontSize: 40 }} />,
  },
  {
    title: "Checkout",
    description:
      "Review your order details and proceed to checkout. Enter your Company Formations account information, billing, and card details. After completing the payment, you will receive your login credentials and receipt.",
    icon: <ShoppingCartIcon style={{ fontSize: 40 }} />,
  },
  {
    title: "Submit",
    description:
      "Fill out your company details, including the UK registered office, directors and shareholders information, and leave us to take care of the rest. If you have any questions, please review this company formation UK checklist.",
    icon: <AssignmentTurnedInIcon style={{ fontSize: 40 }} />,
  },
];

const SetupCompany = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{ fontWeight: "bold" }}
      >
        Setup your company today in 4 steps
      </Typography>
      {/* <Box display="flex" justifyContent="center" mb={2}>
        <Divider
          sx={{
            width: "150px",
            borderBottomWidth: 3,
            borderColor: "primary.main",
          }}
        />
      </Box> */}
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {steps.map((step, index) => (
          <Grow in={true} timeout={1000 * (index + 1)} key={index}>
            <Grid item xs={12} md={3} style={{ display: "flex" }}>
              <Stack spacing={2}>
                <Paper
                  elevation={3}
                  style={{
                    padding: "20px",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Stack direction={"row"} spacing={2}>
                    {step.icon}
                    <Typography variant="h6" style={{ alignSelf: "flex-end" }}>
                      {step.title}
                    </Typography>
                  </Stack>
                  <Typography
                    variant="body1"
                    gutterBottom
                    style={{ marginTop: "10px" }}
                  >
                    {step.description}
                  </Typography>
                </Paper>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  sx={{ pt: 2 }}
                >
                  <Badge
                    badgeContent={index + 1}
                    color="primary"
                    anchorOrigin={{ vertical: "top", horizontal: "left" }}
                    sx={{
                      "& .MuiBadge-badge": {
                        minWidth: "38px",
                        height: "38px",
                        fontSize: "24px",
                        borderRadius: "50%",
                      },
                    }}
                  />
                </Box>
              </Stack>
            </Grid>
          </Grow>
        ))}
      </Grid>
    </Box>
  );
};

export default SetupCompany;
