import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import '../../Pages/LandingPage/LandingPage.css';

const TopPartners = () => {
  const partners = [
    '/images/sensation.jpg',
    '/images/place.jpg',
    '/images/chow.jpg',
    '/images/place.jpg',
    '/images/sensation.jpg',
    '/images/chow.jpg',
  ];

  // Duplicate the partners array to create a seamless loop effect
  const duplicatedPartners = [...partners, ...partners];

  return (
    <Container maxWidth="lg" sx={{ marginTop: '8rem' }}>
      <Typography variant="h4" gutterBottom 
        sx={{ 
        textAlign: 'center', 
        color: '#1F2937', 
        fontWeight: '700', 
        fontSize: {
          xs: '1.5rem',
          sm: '2rem',
      } 
      }}
      >
        Top Partners and more
      </Typography>
      <Box className="top-partners-container" marginTop={4}>
        <Box className="scrolling-wrapper">
          {duplicatedPartners.map((partner, index) => (
            <Box key={index} className="partner">
              <img src={partner} alt={`Partner ${index + 1}`} />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default TopPartners;
