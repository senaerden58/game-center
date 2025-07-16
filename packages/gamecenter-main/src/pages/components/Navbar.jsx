import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import GameBussIcon from "../../shared/GameBussIcon";

const pages = [
  //map ile diziyi döndür
  { name: "AnaSayfa", path: "/Home" },
  { name: "Oyunlar", path: "/games" },
  { name: "İletişim", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  return (
    <AppBar //üst menü çubuğu
      position="sticky"
      sx={{
        boxShadow: "none", //gölge kalkar
        alignItems: "center",
        width: "100%",
      }}
    >
      <Toolbar
        //appbar içeriğini taşır.
        sx={{
          display: "flex", //yataya dizer.
          justifyContent: "left", //elemanları sola yaslar.
          gap: 3, //elemanlar arası boşluk
          width: "100%",
          maxWidth: "900px", // çok büyümemesi için
        }}
      >
        {/* Logo */}
        <Typography //yazı elemanı
          variant="h6"
          component={Link} //tıklanabilir hale getirir.
          to="/Home"
          sx={{
            fontFamily: "'Press Start 2P', cursive",
            color: "white",
            display: "flex",
            alignItems: "center",
            gap: 1,
            textDecoration: "none",
            fontWeight: "bold",
            flexShrink: 0, // küçük ekranda kaymayı engeller
          }}
        >
          <GameBussIcon size={40} />
          GameBuss
        </Typography>

        <Box sx={{ display: "flex", gap: 3 }}>
          {/*butonları kapsayan kutu*/}
          {pages.map(
            (
              page //her sayfa için buton
            ) => (
              <Button
                key={page.name}
                component={Link}
                to={page.path}
                sx={{
                  position: "relative",
                  color: location.pathname === page.path ? "yellow" : "white",
                  fontWeight: "bold",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    bottom: -2,
                    width: "100%",
                    height: "2px",
                    backgroundColor:
                      location.pathname === page.path
                        ? "yellow"
                        : "transparent",
                    transition: "0.3s",
                  },
                  "&:hover": {
                    color: "yellow",
                  },
                }}
              >
                {page.name}
              </Button>
            )
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
