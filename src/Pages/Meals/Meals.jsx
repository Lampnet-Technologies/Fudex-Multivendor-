import React, { useState } from 'react';
import { Container, Box, Grid, Typography, IconButton, Collapse, Button, Pagination } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LandingPageHeader from '../../components/LandingPageHeader/LandingPageHeader';
import ImageSection from '../../components/ImageSection/ImageSection';
import Footer from '../../components/LandingPageFooter/LandingPageFooter';

const Category = ({ title, items }) => {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ marginBottom: '1rem' }}>
      <Box
        onClick={() => setOpen(!open)}
        sx={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}
      >
        <Typography variant="h6">{title}</Typography>
        <ExpandMoreIcon sx={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.3s' }} />
      </Box>
      <Collapse in={open}>
        <Box sx={{ marginLeft: '1rem' }}>
          {items.map((item, index) => (
            <Typography key={index} variant="body1" sx={{ marginBottom: '0.5rem' }}>
              {item}
            </Typography>
          ))}
        </Box>
      </Collapse>
    </Box>
  );
};

const MealItem = ({ imageUrl, title, rating, price }) => {
  const [favorite, setFavorite] = useState(false);

  return (
    <Box sx={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px', textAlign: 'left' }}>
      <Box sx={{ position: 'relative', height: '200px', overflow: 'hidden', borderRadius: '8px' }}>
        <img src={imageUrl} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <IconButton
          onClick={() => setFavorite(!favorite)}
          sx={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            backgroundColor: 'white',
            borderRadius: '50%',
            padding: '0.5rem',
          }}
        >
          {favorite ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
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
          sx={{ backgroundColor: '#F6613F', '&:hover': { backgroundColor: '#D95436' } }}
          startIcon={<ShoppingCartIcon />}
        >
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
};

const MealsBody = () => {
  const nigerianDishes = ['Appetizers', 'Salads', 'Pastries', 'Main Dish'];
  const continentalDishes = ['Appetizers', 'Salads', 'Pizzas', 'Sandwiches', 'Burgers', 'Pastas', 'Steaks', 'Desserts'];
  const itemsPerPage = 9;
  const mealData = [
    { imageUrl: '/images/egusi.jpeg', title: 'Pounded Yam and Egusi Soup', rating: '4.5', price: '15.99' },
    { imageUrl: '/images/afang.jpeg', title: 'Afang Soup', rating: '4.5', price: '15.99' },
    { imageUrl: '/images/chips.jpeg', title: 'Chicken and Chips', rating: '4.7', price: '12.99' },
    { imageUrl: '/images/abacha.png', title: 'Abacha and Barbecued Fish', rating: '4.2', price: '10.99' },
    { imageUrl: '/images/Jollof-rice.jpeg', title: 'Jollof rice', rating: '4.8', price: '10.99' },
    { imageUrl: '/images/ofada.jpeg', title: 'Ofada rice and Locust Beans Stew', rating: '4.2', price: '10.99' },
    { imageUrl: '/images/porridge.jpeg', title: 'Yam Porridge', rating: '4.5', price: '15.99' },
    { imageUrl: '/images/yam.jpeg', title: 'Yam and Egg Sauce', rating: '4.7', price: '12.99' },
    { imageUrl: '/images/spag.webp', title: 'Spaghetti Bolognesse', rating: '4.2', price: '10.99' },
    { imageUrl: '/images/catfish.jpeg', title: 'Catfish Peppersoup', rating: '4.2', price: '10.99' },
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const paginatedMeals = mealData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div>
      <ImageSection imageUrl="/images/trial.jpeg" height="300px" />
      <Container maxWidth="lg" sx={{ marginTop: '4rem' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={3}>
            <Category title="Nigerian Dishes" items={nigerianDishes} />
            <Category title="Continental Dishes" items={continentalDishes} />
            <Category title="Italian Dishes" items={['Pastas', 'Pizzas', 'Risottos']} />
            <Category title="Sea Food" items={['Fish', 'Shrimp', 'Crab', 'Lobster']} />
          </Grid>
          <Grid item xs={12} sm={9}>
            <Grid container spacing={4}>
              {paginatedMeals.map((meal, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <MealItem
                    imageUrl={meal.imageUrl}
                    title={meal.title}
                    rating={meal.rating}
                    price={meal.price}
                  />
                </Grid>
              ))}
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '4rem' }}>
              <Pagination
                count={Math.ceil(mealData.length / itemsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

const Meals = () => {
  return (
    <div>
      <LandingPageHeader />
      <MealsBody />
      <Footer />
    </div>
  );
};

export default Meals;
