import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Button } from '@mui/material';
import ChevronIcon from '../../../Components/ChevronIcon';
import SearchField from '../../../Components/SearchField/SearchField';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const PromotionsPage = () => {
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleChevronClick = () => {
    navigate('/');
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  return (
    <Container maxWidth="xl" sx={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      
      {/* Top Section */}
      <Box
        display="flex"
        alignItems="center"
        sx={{ cursor: 'pointer', marginBottom: '2rem' }}
        onClick={handleChevronClick}
      >
        <ChevronIcon size="2rem" />
        <Typography variant="h6" sx={{ marginLeft: '1rem' }}>Promotions</Typography>
      </Box>

      {/* Search Field */}
      <Box sx={{ width: '100%', maxWidth: '1000px', display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        <SearchField handleAddressChange={handleAddressChange} address={address} />
      </Box>

      {/* Promotion Box */}
      <Box
        sx={{
          border: '2px solid grey',
          borderRadius: '10px',
          padding: '1rem',
          width: '100%',
          maxWidth: '450px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
          <Typography variant="h4" sx={{ marginBottom: '2rem'}}>N500 off</Typography>
          <LocalOfferIcon sx={{ fontSize: '6rem' }} />
        </Box>
        <Typography variant="body1" sx={{ margin: '1rem 0', maxWidth: '300px' }}>
          Valid till 27, August 2024<br/>
          For your first order $5 minimum order
          Delivery orders only
        </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '2rem', paddingBottom: '1rem' }}>
                <Button variant="contained" sx={{ marginRight: '1rem', backgroundColor: '#F6613F' }}>Order Now</Button>
                <Typography variant="body2" sx={{ cursor: 'pointer', marginLeft: '1rem' }}>Detail</Typography>
            </Box>
      </Box>
    </Container>
  );
};

export default PromotionsPage;