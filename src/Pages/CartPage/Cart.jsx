import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Grid, IconButton, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import LandingPageHeader from '../../components/LandingPageHeader/LandingPageHeader';
import Footer from '../../components/LandingPageFooter/LandingPageFooter';
import ImageSection from '../../components/ImageSection/ImageSection';

const CartItem = ({ item, onIncrement, onDecrement, onRemove }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
      <img src={item.imageUrl} alt={item.title} style={{ width: '80px', height: '80px', marginRight: '1rem' }} />
      <Box sx={{ flex: 1 }}>
        <Typography variant="body1">{item.title}</Typography>
        <Typography variant="body2" color="textSecondary">${item.price}</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton onClick={onDecrement}>
          <RemoveIcon />
        </IconButton>
        <Typography variant="body1" sx={{ marginX: '0.5rem' }}>{item.quantity}</Typography>
        <IconButton onClick={onIncrement}>
          <AddIcon />
        </IconButton>
        <IconButton onClick={onRemove}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

const Cart = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate();

  const handleIncrement = (item) => {
    const updatedItems = cartItems.map((cartItem) => 
      cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
    setCartItems(updatedItems);
  };

  const handleDecrement = (item) => {
    const updatedItems = cartItems.map((cartItem) => 
      cartItem.id === item.id && cartItem.quantity > 1 ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    );
    setCartItems(updatedItems);
  };

  const handleRemove = (item) => {
    const updatedItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedItems);
  };

  const handleCheckout = () => {
    console.log('Proceed to checkout');
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  useEffect(() => {
    console.log('Cart Items:', cartItems);
  }, [cartItems]);

  return (
    <>
      <LandingPageHeader cartItems={cartItems} />
      <ImageSection imageUrl="/images/orange2.jpeg" height="300px" />
      <Container sx={{ paddingY: '2rem' }}>
        <Typography variant="h4" gutterBottom>
          Cart
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            {cartItems.length === 0 ? (
              <Typography variant="body1">Your cart is empty.</Typography>
            ) : (
              cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onIncrement={() => handleIncrement(item)}
                  onDecrement={() => handleDecrement(item)}
                  onRemove={() => handleRemove(item)}
                />
              ))
            )}
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
              <Typography variant="h6">Cart Summary</Typography>
              <Typography variant="body1">Total: ${getTotal()}</Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={handleCheckout}
                sx={{ marginTop: '1rem' }}
                fullWidth
              >
                Proceed to Checkout
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Button variant="text" color="primary" onClick={() => navigate('/meals')}>
          Continue Shopping
        </Button>
      </Container>
      <Footer />
    </>
  );
};

export default Cart;
