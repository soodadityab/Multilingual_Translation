import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0f4c81", // Dark blue for primary elements
    },
    secondary: {
      main: "#ffb74d", // Light orange for secondary elements
    },
    background: {
      default: "#f5f5f5", // Light background color
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      color: "#0f4c81",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 500,
      color: "#ffb74d",
    },
    body1: {
      fontSize: "1rem",
      color: "#333",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "20px", // Rounded buttons
          textTransform: "none", // Disable uppercase text
        },
      },
    },
  },
});

export default theme;
