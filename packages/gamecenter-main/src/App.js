import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home/Home";
import Navbar from "./pages/components/Navbar";
// import Footer from "./pages/components/Footer"; TODO
import { ThemeProvider, CssBaseline, Button, GlobalStyles } from "@mui/material";
import { lightTheme, darkTheme } from "./shared/theme";
import BrightnessIcon from "@mui/icons-material/Brightness5";
import DarkModeIcon from "@mui/icons-material/DarkMode";


function App() {
  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? darkTheme : lightTheme;
  const toggleTheme = () => setIsDark((prev) => !prev);

  return (

    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <CssBaseline /> {/* Temaya göre body arka plan vs. ayarlar */}
       <GlobalStyles
        styles={{
          body: {
            margin: 0,
            minHeight: '100vh',
            background: theme.custom.backgroundGradient,
          },
          '#root': {
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
          },
        }}
      />
      
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        
        {/* Tema değiştirme butonu */}
        <Button
          variant="outlined"
          onClick={toggleTheme}
          sx={{
            position: "fixed",
            bottom: 20,
            right: 20,
            zIndex: 1300,
            borderRadius: "50%",
            minWidth: 40,
            minHeight: 40,
            padding: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            lineHeight: 1,
            fontSize: "24px",
          }}
        >
          {isDark ? <DarkModeIcon fontSize="inherit" /> : <BrightnessIcon fontSize="inherit" />}
        </Button>
      </Router>
    </ThemeProvider>
  );
}

export default App;
