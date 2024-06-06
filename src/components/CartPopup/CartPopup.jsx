import React from 'react';
import { Box, Typography } from '@mui/material';

const CartPopup = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#FFF',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        padding: '1rem',
        borderRadius: '8px',
        zIndex: 1000,
      }}
    >
      <Typography variant="body1">Item added to cart!</Typography>
    </Box>
  );
};

export default CartPopup;
