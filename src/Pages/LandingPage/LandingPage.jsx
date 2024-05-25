import React from 'react';
import LandingPageHeader from '../../components/LandingPageHeader/LandingPageHeader';
import { Container, Box, Typography, Button, Grid } from '@mui/material';

const LandingPageBody = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: '2rem' }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ flex: 1, paddingRight: { sm: '2rem' }, textAlign: { xs: 'center', sm: 'left' } }}>
              <Typography variant="h2" gutterBottom>
                Experience speed in food delivery with Fudex
              </Typography>
              <Typography variant="body1" gutterBottom>
                Discover the amazing features and benefits we offer.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#F6613F',
                  '&:hover': {
                    backgroundColor: '#D95436',
                  },
                  marginTop: '1rem',
                }}
              >
                Order Now
              </Button>
            </Box>
            <Box
              sx={{
                flex: 1,
                minHeight: { xs: '500px', sm: '600px' },
                width: '100%',
                backgroundImage: `url('/images/hero-img.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderRadius: '8px',
                marginTop: { xs: '1rem', sm: '0' },
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

const LandingPage = () => {
  return (
    <div>
      <LandingPageHeader />
      <LandingPageBody />
    </div>
  );
};

export default LandingPage;
