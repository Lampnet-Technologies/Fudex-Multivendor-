import React from 'react';
import { Container, Box, Typography, Grid, Button } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './OurServices.css';

const OurServices = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: '4rem', marginBottom: '4rem', textAlign: 'center', minHeight: '30rem' }}>
      <Typography variant="h6" sx={{ color: '#F6613F', marginBottom: '1rem', fontWeight: 'bold' }}>
        Our Services
      </Typography>
      <Typography variant="h4" 
        sx={{ 
          color: '#333333',
          fontWeight: 'bold', 
          marginBottom: '2rem' 
          }}
        >
        Best cooks and best delivery guys at your service
      </Typography>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={6}>
          <Box className="service-card">
            <Button
              variant="contained"
              color="primary"
              endIcon={<ChevronRightIcon />}
              sx={{
                backgroundColor: '#F6613F',
                color: '#fff',
                '&:hover': { backgroundColor: '#E55631' },
                marginBottom: '1rem',
              }}
            >
              Apply Now
            </Button>
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Rider
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className="service-card">
            <Button
              variant="contained"
              color="primary"
              endIcon={<ChevronRightIcon />}
              sx={{
                backgroundColor: '#F6613F',
                color: '#fff',
                '&:hover': { backgroundColor: '#E55631' },
                marginBottom: '1rem',
              }}
            >
              Apply Now
            </Button>
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Vendor
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            className="service-image"
            sx={{
              backgroundImage: 'url(/images/rider.jpg)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              height: '300px',
              borderRadius: '10px',
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            className="service-image"
            sx={{
              backgroundImage: 'url(/images/vendor.jpg)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              height: '300px',
              borderRadius: '10px',
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default OurServices;
