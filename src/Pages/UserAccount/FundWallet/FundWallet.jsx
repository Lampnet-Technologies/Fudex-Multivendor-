import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';
import ChevronBox from '../../../Components/ChevronBox/ChevronBox'



const FundWallet = () => {
    const navigate = useNavigate();

    const handleChevronClick = () => {
        navigate('/');
      };
  return (
    <Container maxWidth="xl" sx={{ padding: '2rem', display: 'flex', justifyContent: 'flex-start' }}>
        <Box sx={{ maxWidth: '800px', width: '100%' }}>

        {/* Top Section */}
        <Box
            display="flex"
            alignItems="center"
            sx={{ cursor: 'pointer', marginBottom: '2rem' }}
            onClick={handleChevronClick}
            >
            <ChevronBox text="Fund Wallet" handleClick={handleChevronClick} />
        </Box>

        </Box>
    </Container>
  )
}

export default FundWallet