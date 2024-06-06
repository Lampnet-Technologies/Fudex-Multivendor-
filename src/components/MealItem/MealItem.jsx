import React from 'react';
import { Box, Typography, IconButton, Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const MealItem = ({ imageUrl, title, rating, price, isFavorite, onFavoriteToggle, onAddToCart }) => {
    
  return (

    <Box sx={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px', textAlign: 'left' }}>
      <Box sx={{ position: 'relative', height: '200px', overflow: 'hidden', borderRadius: '8px' }}>
        <img src={imageUrl} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <IconButton
          onClick={onFavoriteToggle}
          sx={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            backgroundColor: 'white',
            borderRadius: '50%',
            padding: '0.5rem',
          }}
        >
          {isFavorite ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
        </IconButton>
      </Box>
      <Typography variant="caption" sx={{ marginTop: '1rem' }}>
        {title}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', marginTop: '0.5rem' }}>
        <StarIcon sx={{ color: '#F6613F' }} />
        <Typography variant="body2" sx={{ marginLeft: '0.5rem' }}>
          {rating}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          ${price}
        </Typography>
        <Button
          variant="contained"
          onClick={onAddToCart}
          sx={{ backgroundColor: '#F6613F', '&:hover': { backgroundColor: '#D95436' } }}
          startIcon={<ShoppingCartIcon />}
        >
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
};

export default MealItem;
