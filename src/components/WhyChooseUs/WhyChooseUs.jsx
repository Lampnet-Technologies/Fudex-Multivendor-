import React from 'react';
import { Container, Box, Typography, Grid } from '@mui/material';
import '../../Pages/LandingPage/LandingPage.css';

const WhyChooseUs = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: '8rem', marginBottom: '4rem' }}>
      <Typography variant="h4" gutterBottom 
        sx={{ 
            textAlign: 'center', 
            color: '#333333', 
            fontWeight: '700',
            fontSize: {
                xs: '1.5rem',
                sm: '2rem',
            } 
            }}>
        Your preferred food delivery service
      </Typography>
      
      <Grid container spacing={4} justifyContent="center" alignItems="center" gap={10} marginTop={4} >
        <Grid item xs={7} sm={6} md={4} lg={3}>
          <Box className="why-choose-us-image" 
            sx={{ 
                minHeight: { sm: '270px', xs: '285px' }, 
                width: '100%',
                minWidth: '100px',
                backgroundColor: '#E0E0E0', 
                borderRadius: '8px', 
                backgroundImage: `url('/images/easy.jpg')`,
                }}>
          </Box>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <Box className="why-choose-us-image" 
            sx={{ 
                minHeight: { sm:'300px', xs:'285px' }, 
                width: '100%',
                minWidth: '100px',
                backgroundColor: '#E0E0E0', 
                borderRadius: '8px',
                backgroundImage: `url('/images/fast.jpg')`,
                }}>
            
          </Box>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <Box className="why-choose-us-image" 
            sx={{ 
                minHeight: { sm:'265px', xs:'260px' }, 
                width: '100%',
                minWidth: '100px',
                backgroundColor: '#E0E0E0', 
                borderRadius: '8px', 
                backgroundImage: `url('/images/best.jpg')`,
                }}>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WhyChooseUs;
