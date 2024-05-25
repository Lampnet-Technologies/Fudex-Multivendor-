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

  return (
    <Container maxWidth="lg" sx={{ marginTop: '8rem' }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', color: '#1F2937', fontWeight: '700' }}>
        Our Top Partners
      </Typography>
      <Box className="top-partners-container">
        <Box className="scrolling-wrapper">
          {partners.map((partner, index) => (
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
