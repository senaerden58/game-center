import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button , Alert} from '@mui/material';
import { useNavigate } from 'react-router-dom'; 

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // {/*sayfa yenilenmesini engeller*/}
    if (email === 'sena@gmail.com' && password === '123') {
      alert('Giriş başarılı!');
      setError('');
       navigate('/Home'); // Başarılıysa ana sayfaya yönlendir
      //Todoooooo
    } else {
      setError('Hatalı email veya şifre');
    }
  };

  return (
     <Container maxWidth="xs">
        {/* sayfa içeriğini ortalar */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          mt: 8,
        //   margin yani boşluk bırakıyor
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          //boşluk bırakır.
          alignItems: 'center',
        }}
      >
        <Typography variant="h5">Giriş Yap</Typography>
         {error && <Alert severity="error">{error}</Alert>}
         {/* Eğer error truthy (yani boş değil, değer varsa)
          ise sağdaki JSX <Alert ...> çalışır ve gösterilir.

            Eğer error falsy (örneğin boş string '' veya null, 
            undefined gibi) ise, sağdaki JSX hiç render edilmez, 
            yani ekran boş kalır. */}
        <TextField
          label="Email"
          type="email"
          required
          fullWidth
          value={email}
          error={!!error}
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          label="Şifre"
          type="password"
          required
          fullWidth
          value={password}
          error={!!error}
          //bos mu diye bakar
          onChange={e => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" fullWidth>
          Giriş Yap
        </Button>
      </Box>
    </Container>
  );
}
