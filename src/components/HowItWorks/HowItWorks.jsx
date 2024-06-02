import React from 'react';
import { Container, Box, Typography, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';


const HowItWorks = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: '8rem', marginBottom: '4rem', textAlign: 'center', minHeight: '20rem' }}>
      <Typography variant="h6" sx={{ color: '#F6613F', fontWeight: '700', marginBottom: '1rem' }}>
        Order now
      </Typography>
      <Typography variant="h4" 
        sx={{ 
            color: '#333333',
            fontSize: {
                xs: '1.5rem',
                sm: '2rem',
            },
            fontWeight: 'bold', 
            marginBottom: '3rem' }}>
        How it works
      </Typography>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={4}>
          <Box sx={{ textAlign: 'center' }}>
            <SearchIcon sx={{ fontSize: { xs: '3rem', sm: '5rem' }, color: '#F6613F' }} />
            <Typography variant="body1" sx={{ marginTop: '1rem', fontFamily: 'sans-serif' }}>
              Search for your favorite meals
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box sx={{ textAlign: 'center' }}>
            <ShoppingCartIcon sx={{ fontSize: { xs: '3rem', sm: '5rem' }, color: '#F6613F' }} />
            <Typography variant="body1" sx={{ marginTop: '1rem' }}>
              Add them to your cart
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box sx={{ textAlign: 'center' }}>
            <LocalShippingIcon sx={{ fontSize: { xs: '3rem', sm: '5rem' }, color: '#F6613F' }} />
            <Typography variant="body1" sx={{ marginTop: '1rem' }}>
              Get it delivered to your door
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HowItWorks;
