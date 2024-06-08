import React from 'react';
import { Container, Typography, Box, Grid, TextField, Button } from '@mui/material';
import LandingPageHeader from '../../components/LandingPageHeader/LandingPageHeader';
import Footer from '../../components/LandingPageFooter/LandingPageFooter';

const OrderSummary = ({ cartItems }) => {
  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <>
      <LandingPageHeader />
      <Container sx={{ paddingY: '2rem' }}>
        <Grid container spacing={4}>
          {/* Left Section - Delivery Information */}
          <Grid item xs={12} md={6}>
            <Box sx={{ marginTop: '3rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
              <Typography variant="h6" gutterBottom>Delivery Information</Typography>
              <TextField 
                label="Name" 
                variant="outlined" 
                fullWidth 
                margin="normal" 
              />
              <TextField 
                label="Address" 
                variant="outlined" 
                fullWidth 
                margin="normal" 
              />
              <TextField 
                label="Landmark" 
                variant="outlined" 
                fullWidth 
                margin="normal" 
              />
              <TextField 
                label="Phone Number" 
                variant="outlined" 
                fullWidth 
                margin="normal" 
              />
              <Typography variant="body2" color="textSecondary" sx={{ marginTop: '1rem' }}>
                Already have an account? <Button color="primary">Log In</Button>
              </Typography>
            </Box>
          </Grid>
          
          {/* Right Section - Order Summary */}
          <Grid item xs={12} md={6}>
            <Box sx={{ 
              padding: '1rem', 
              border: '1px solid #ccc', 
              borderRadius: '8px',
              backgroundColor: 'white',
              marginTop: '3rem',
              height: '100%', 
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <Box>
                <Typography variant="h6">Order Summary</Typography>
                    <Typography variant="caption" gutterBottom>
                        Complete your order and proceed to checkout
                    </Typography>
                {cartItems.map((item) => (
                  <Box key={item.id} sx={{ display: 'flex', justifyContent: 'space-between', marginY: '3rem' }}>
                    <Typography variant="body1">{item.title}</Typography>
                    <Typography variant="body1">${(item.price * item.quantity).toFixed(2)}</Typography>
                  </Box>
                ))}
              </Box>
              <Box sx={{ marginTop: '1rem' }}>
                <Typography variant="h6">Cart Summary</Typography>
                <Typography variant="body1">Total: ${getTotal()}</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ backgroundColor: '#F6613F', marginTop: '1rem' }}
                  fullWidth
                >
                  Proceed to Pay
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default OrderSummary;
