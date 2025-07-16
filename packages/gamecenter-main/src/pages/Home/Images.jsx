import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const images = [
  //veriler map'te
  { src: "/images/bingo.png", alt: "Tombala" },
  { src: "/images/leon.jpg", alt: "Leon" },
  { src: "/images/monsterdash.jpg", alt: "Monster" },
];

export default function Images() {
  return (
    <>
      <Typography
        variant="h4"
        align="center"
        sx={{ mt: 4, fontWeight: "bold" ,color:"white"}}
      >
        En Sevdiğin Oyunlar, Tek Noktada
      </Typography>
      <Typography variant="h5" align="center" sx={{ mb: 4,color: "white" }}>
        GameBuss!
      </Typography>

      <Grid
        container
        spacing={2} //2*8px =16px boşluk
        sx={{ maxWidth: 900, margin: "auto", mt: { xs: 2, md: 4 } }}
      >
        {images.map((img, index) => (
          <Grid item xs={12} sm={6} md={4} key={img.src}>
            {/*xs:12-> mobilde tüm satırı kaplar
        sm=6 ->tablette yarım
        md->4 masaüstünde üçte 1
        key->zorunlu src'lerini kullandım*/}
            <Box
              sx={{
                position: "relative",
                width: 200,
                height: 300,
                borderRadius: 2,
                overflow: "hidden", //taşma gizlenir.
                boxShadow: 3,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 8,
                  cursor: "pointer",
                },
              }}
            >
              <Box
                component="img"
                src={img.src}
                alt={img.alt}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", //resmi kırparak en düzgün şekilde sığdır.
                  display: "block", //satır boşluğu olmasın diye
                }}
              />
              {/* Hover'da çıkan başlık */}
              <Box
                sx={{
                  position: "absolute", //üstte sabitlenir.tüm kapsayıcıyı kaplar.
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "rgba(0, 0, 0, 0.4)",
                  opacity: 0, //normalde görünmez.
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "opacity 0.3s ease",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <Typography //text alanı için
                  variant="subtitle1"
                  sx={{
                    color: "#fff",
                    fontWeight: "bold",
                    textShadow: "1px 1px 4px rgba(0,0,0,0.8)",
                    textAlign: "center",
                  }}
                >
                  {img.alt}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
