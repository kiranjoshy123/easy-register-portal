import { createTheme } from "@mui/material/styles";

const customComponents = {
  MuiTab: {
    styleOverrides: {
      root: {
        textTransform: "none",
      },
    },
  },
};

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#2e7d32" },
    secondary: { main: "#d7ccc8" },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
      secondary: "#bbbbbb",
    },
  },
  components: customComponents,
});

const lightTheme = createTheme({
  palette: {
    primary: { main: "#2e7d32" },
    secondary: { main: "#d7ccc8" },
    // background: { default: "#f1f8e9" },
    error: { main: "#c62828" },
  },
});

// const lightTheme = createTheme({
//   palette: {
//     mode: "light",
//     primary: {
//       main: "#1976d2",
//     },
//     secondary: {
//       main: "#d81b60",
//     },
//     background: {
//       default: "#f0f0f0",
//       paper: "#ffffff",
//     },
//     text: {
//       primary: "#000000",
//       secondary: "#333333",
//     },
//   },
//   components: customComponents,
// });

export { darkTheme, lightTheme };
