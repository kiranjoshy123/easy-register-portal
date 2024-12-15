import React from "react";
import { Backdrop, CircularProgress } from "@mui/material";

const LoadingScreen = ({ loading }) => {
  return (
    <Backdrop
      sx={{
        color: "#fff", // Color of the spinner
        zIndex: (theme) => theme.zIndex.drawer + 1, // Ensure it appears above other components
      }}
      open={loading}
    >
      <CircularProgress />
    </Backdrop>
  );
};

export default LoadingScreen;
