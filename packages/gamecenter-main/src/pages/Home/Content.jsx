import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const images = [
  { src: '/images/bingo.png', alt: 'Oyun 1' },
  { src: '/images/leon.jpg', alt: 'Oyun 2' },
  { src: '/images/monsterdash.jpg', alt: 'Oyun 3' },
];

export default function Gallery() {
  return (
    <Grid container spacing={2} sx={{ maxWidth: 900, margin: 'auto', mt: 4 }}>
      {images.map((img, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Box
            component="img"
            src={img.src}
            alt={img.alt}
            sx={{
              width: 200,
              height: 300,
              objectFit: 'cover',
              borderRadius: 2,
              boxShadow: 3,
              marginBottom: 1,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: 6,
                cursor: 'pointer',
              },
            }}
          />
          <Typography align="center" variant="subtitle1" color="text.primary">
            {img.alt}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}
