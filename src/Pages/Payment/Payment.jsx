import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Typography, IconButton, Radio, RadioGroup, FormControlLabel, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';


const SelectPaymentMethodPage = () => {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleCloseClick = () => {
    navigate('/fund-wallet')
  };

  const handlePaymentClick = () => {
    // Handle payment logic
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: '3rem', padding: '1rem' }}>
      {/* Header Section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <Typography
          variant="h6"
          sx={{
            marginLeft: { xs: '7rem', sm: '0rem' },
            flexGrow: { sm: 1 },
            textAlign: { sm: 'left' }
          }}
        >
          Select Payment Method
        </Typography>
        <IconButton onClick={handleCloseClick}>
          <CloseIcon />
        </IconButton>
      </Box>
      
      

      {/* Amount Section */}
        <Box sx={{ marginTop: '2rem', marginBottom: '1rem', textAlign: { xs: 'center', sm: 'left' } }}>
          <Typography variant="body1">You pay</Typography>
          <Box sx={{
            backgroundColor: '#FFF7F5',
            padding: '0.5rem 1rem',
            borderRadius: '2rem',
            marginTop: '0.5rem',
            display: 'inline-block',
            minWidth: 'fit-content' // Ensures the box can grow to accommodate larger numbers
          }}>
            <Typography variant="h6" sx={{ color: '#F6613F', whiteSpace: 'nowrap' }}>N500.00</Typography>
          </Box>
        </Box>

      
      

      {/* Payment Methods Section */}
      <RadioGroup value={selectedValue} onChange={handleChange} sx={{ marginTop: '3rem' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '1rem', flexWrap: 'wrap' }}>
          <CreditCardIcon sx={{ marginRight: '1rem', fontSize: '3rem' }} />
          <Typography variant="body1">Pay with Card</Typography>
          <FormControlLabel
            value="card"
            control={
              <Radio
                sx={{
                  '&.Mui-checked': {
                    color: '#F6613F'
                  }
                }}
              />
            }
            sx={{ marginLeft: 'auto', marginRight: 0 }}
          />
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
          <AccountBalanceIcon sx={{ marginRight: '1rem', fontSize: '3rem' }} />
          <Typography variant="body1">Pay with Bank</Typography>
          <FormControlLabel
            value="bank"
            control={
              <Radio
                sx={{
                  '&.Mui-checked': {
                    color: '#F6613F'
                  }
                }}
              />
            }
            sx={{ marginLeft: 'auto', marginRight: 0 }}
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
          <CreditCardIcon sx={{ marginRight: '1rem', fontSize: '3rem' }} />
          <Typography variant="body1">Pay with Transfer</Typography>
          <FormControlLabel
            value="transfer"
            control={
              <Radio
                sx={{
                  '&.Mui-checked': {
                    color: '#F6613F'
                  }
                }}
              />
            }
            sx={{ marginLeft: 'auto', marginRight: 0 }}
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
          <CreditCardIcon sx={{ marginRight: '1rem', fontSize: '3rem' }} />
          <Typography variant="body1">Pay with USSD</Typography>
          <FormControlLabel
            value="ussd"
            control={
              <Radio
                sx={{
                  '&.Mui-checked': {
                    color: '#F6613F'
                  }
                }}
              />
            }
            sx={{ marginLeft: 'auto', marginRight: 0 }}
          />
        </Box>
      </RadioGroup>

      {/* Make Payment Button */}
      <Button 
        variant="contained"
        fullWidth
        sx={{ 
          backgroundColor: '#F6613F',
          height: '45px',
          marginTop: '5rem',
          '&:hover': { 
            backgroundColor: '#E65530' 
          } 
        }}
        onClick={handlePaymentClick}
      >
        Make Payment
      </Button>
    </Container>
  );
};

export default SelectPaymentMethodPage;
