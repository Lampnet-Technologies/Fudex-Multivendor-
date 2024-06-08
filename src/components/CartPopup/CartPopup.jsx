import React from 'react';
import { Box, Typography, IconButton, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

const CartPopup = ({ cartItems, onRemove, onClose }) => {
  const navigate = useNavigate();

  const handleViewCart = () => {
    navigate('/cart');
    onClose(); 
  };

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
        width: '300px',
        maxHeight: '400px',
        overflowY: 'auto',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <Typography variant="h6">Cart</Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      {cartItems.length === 0 ? (
        <Typography variant="body1">Your cart is empty.</Typography>
      ) : (
        cartItems.map((item) => (
          <Box key={item.id} sx={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
            <img src={item.imageUrl} alt={item.title} style={{ width: '50px', height: '50px', marginRight: '1rem' }} />
            <Box sx={{ flex: 1 }}>
              <Typography variant="body1">{item.title}</Typography>
              <Typography variant="body2" color="textSecondary">${item.price} x {item.quantity}</Typography>
            </Box>
            <IconButton onClick={() => onRemove(item.id)}>
              <DeleteIcon />
            </IconButton>
          </Box>
        ))
      )}
      <Button
        variant="contained"
        color="primary"
        sx={{ backgroundColor: '#F6613F', marginTop: '1rem' }}
        fullWidth
        onClick={handleViewCart}
      >
        View Cart
      </Button>
    </Box>
  );
};

export default CartPopup;
