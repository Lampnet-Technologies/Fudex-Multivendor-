import React from 'react';
import { Container, Box, Grid, Typography } from '@mui/material';
import ImageSection from '../../components/ImageSection/ImageSection';
import LandingPageHeader from '../../components/LandingPageHeader/LandingPageHeader';
import Footer from '../../components/LandingPageFooter/LandingPageFooter';


const AboutUsBody = () => {
  return (
    <div>
    <ImageSection imageUrl= "/images/sweet.jpeg" />
    <Container maxWidth="lg" sx={{ marginTop: '2rem' }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Box textAlign="center" marginBottom="2rem" sx={{ marginTop: '4rem' }}>
            <Typography variant="h6" sx={{ color: '#F6613F', fontWeight: 'bold' }}>
              Who are we?
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
              About Us
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '2rem' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper
              porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
              per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            className="hero-container"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                flex: 1,
                minHeight: { xs: '400px', sm: '600px' },
                width: '100%',
                backgroundImage: `url('/images/cook.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderRadius: '8px',
                marginTop: { xs: '1rem', sm: '0' },
              }}
              className="hero-image"
            ></Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
</div>
  );
};

const AboutUs = () => {
  return (
    <div>
      <LandingPageHeader />
      <AboutUsBody />
      <Footer />
    </div>
  );
};

export default AboutUs;
