import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Box, TextField, Button } from '@mui/material';
import ChevronBox from '../../../components/ChevronBoxx/ChevronBox';

const FundWallet = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');

  const handleChevronClick = () => {
    navigate('/');
  };

  const handleContinueClick = () => {
    navigate('/other-payment-method')
  };

  const handleInputChange = (event) => {
    setAmount(event.target.value);
};

  return (
    <Container maxWidth="xl" sx={{ marginTop: '3rem', padding: '2rem', display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ maxWidth: '600px', width: '100%' }}>

        {/* Top Section */}
        <Box
          sx={{ justifyContent: 'flex-start', cursor: 'pointer', marginBottom: '2rem' }}
        >
        <ChevronBox text="Fund Wallet" handleClick={handleChevronClick} />
        </Box>

        {/* Enter Amount Section */}
        <Box sx={{ marginTop: '2rem', marginLeft: '1rem' }}>
          <Typography variant="h6" gutterBottom>Enter Amount</Typography>
          <Typography variant="body1" gutterBottom>Enter amount you want to fund your account</Typography>
        </Box>

        {/* Amount Input Section */}
        <Box sx={{
          backgroundColor: '#f0f0f0',
          padding: '1rem',
          borderRadius: '4px',
          marginTop: '4rem',
          marginLeft: '1rem'
        }}>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="Amount"
            value={amount}
            onChange={handleInputChange}
            InputProps={{
              sx: {
                backgroundColor: '#ffffff',
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
              }
            }}
          />
        </Box>

        {/* Continue Button Section */}
        <Box sx={{ marginTop: '4rem', marginLeft: '1rem' }}>
          <Button
            variant="contained"
            fullWidth
            sx={{
                backgroundColor: amount ? '#F6613F' : '#6B7280',
                height: '45px',
                color: '#ffffff',
                '&:hover': {
                    backgroundColor: amount ? '#e45b3c' : '#4B5563'
                }
            }}
            onClick={handleContinueClick}
          >
            Continue
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default FundWallet;
