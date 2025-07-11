import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const pages = [
  { name: "Ana Sayfa", path: "/Home" },
  { name: "Oyunlar", path: "/games" },
  { name: "İletişim", path: "/contact" },
];

const Navbar = () => {
    const location = useLocation();
  return (
  
    <AppBar
      position="static" //scroll ile kayıyıor
       
      sx={{
        boxShadow:"none",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Toolbar
        //yatayda hizalar
        sx={{
          display: "flex",
          justifyContent: "left",
          gap: 3,
          width: "100%",
          maxWidth: "900px", // çok büyümemesi için
        }}
      >
        {/* Logo */}
        <Typography
          variant="h6"
          component={Link}
          to="/Home"
          sx={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
            flexShrink: 0, // küçük ekranda kaymayı engeller
          }}
        >
          GameBuss
        </Typography>

        <Box sx={{ display: "flex",gap:3}}>
          {pages.map((page) => (
            <Button
              key={page.name}
              component={Link}
              to={page.path}
              sx={{
                color: location.pathname === page.path ? "yellow" : "white",
                textTransform: "none",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                  textDecoration:"underline",
                },
              }}
            >
              {page.name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
