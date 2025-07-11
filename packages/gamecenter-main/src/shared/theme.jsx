// packages/shared/theme.js
import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  custom: {
    backgroundGradient: 'linear-gradient(90deg, #ff6ec4 0%, #7873f5 50%, #4ade80 100%)',
  },
  palette: {
    mode: "light",
    primary: { main: "#4ade80" }, // navbar bitiş renginden
    background: { default: "#f5f5f5" },
    text: { primary: "#000000" },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          transition: 'background 0.5s ease, color 0.5s ease',
          background: "linear-gradient(90deg, #ff6ec4 0%, #7873f5 50%, #4ade80 100%)",
          boxShadow: "0 4px 15px 0 rgba(72, 186, 115, 0.75)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "white",
          textTransform: "none",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.2)",
          },
          transition: "background-color 0.3s ease",
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  custom: {
    backgroundGradient:
      "linear-gradient(90deg, #1a237e 0%, #4a148c 100%, #000000 50%)",
  },

  palette: {
    mode: "dark",
    primary: { main: "#bb86fc" },
    background: { default: "#121212" },
    text: { primary: "#ffffff" },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          transition: "background 0.5s ease, color 0.5s ease",
          background:
            "linear-gradient(90deg, #1a237e 0%, #4a148c 100%, #000000 50%)",
          boxShadow: "0 4px 10px 0 rgba(74, 20, 140, 0.75)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "white",
          textTransform: "none",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.2)",
          },
          transition: "background-color 0.3s ease",
        },
      },
    },
  },
});
