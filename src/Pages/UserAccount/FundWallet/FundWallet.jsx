import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Box, TextField, Button, Modal, Divider } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InfoIcon from '@mui/icons-material/Info';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ChevronBox from '../../../components/ChevronBoxx/ChevronBox';

const FundWallet = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const [open, setOpen] = useState(false);

  const handleChevronClick = () => {
    navigate('/account-page');
  };

  const handleContinueClick = () => {
    setOpen(true);
  };

  const handleInputChange = (event) => {
    setAmount(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
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

      {/* Modal Section */}
      <Modal open={open} onClose={handleClose} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ bgcolor: 'background.paper', borderRadius: 2, boxShadow: 24, p: 4, maxWidth: 500, width: '100%' }}>
          <Typography variant="h6" gutterBottom>Funding Options</Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="body1" gutterBottom>
            Fund your account by making a transfer to this account below.
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', border: '2px solid #F6613F', borderRadius: 4, p: 2, mb: 4, mt: 4 }}>
            <Typography variant="body1"><strong>Bank Name</strong></Typography>
            <Typography variant="body1">Placeholder Bank</Typography>
            <Typography variant="body1"><strong>Account Number</strong></Typography>
            <Typography variant="body1">1234567890</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <InfoIcon color="action" sx={{ mr: 1 }} />
            <Typography variant="body2">For more information, contact support.</Typography>
          </Box>
          <Box
            sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', bgcolor: 'transparent' }}
            onClick={() => navigate('/other-payment-method')}
          >
            <AttachMoneyIcon color="action" sx={{ mr: 1 }} />
            <Typography variant="body2" sx={{ flexGrow: 1 }}>Other funding options</Typography>
            <ChevronRightIcon />
          </Box>
        </Box>
      </Modal>
    </Container>
  );
};

export default FundWallet;
