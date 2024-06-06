import React, { useState } from 'react';
import { Container, Box, Grid, Typography, Collapse, Pagination, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LandingPageHeader from '../../components/LandingPageHeader/LandingPageHeader';
import ImageSection from '../../components/ImageSection/ImageSection';
import CartPopup from '../../components/CartPopup/CartPopup'; 
import MealItem from '../../components/MealItem/MealItem';
import Footer from '../../components/LandingPageFooter/LandingPageFooter';

const Category = ({ title, items, onItemClick }) => {
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
            <Typography key={index} variant="body1" sx={{ marginBottom: '0.5rem', cursor: 'pointer' }} onClick={() => onItemClick(item)}>
              {item}
            </Typography>
          ))}
        </Box>
      </Collapse>
    </Box>
  );
};


const MealsBody = ({ favoriteMeals, setFavoriteMeals, onAddToCart }) => {
  const nigerianDishes = ['Appetizers', 'Salads', 'Pastries', 'Main Dish'];
  const continentalDishes = ['Appetizers', 'Salads', 'Pizzas', 'Sandwiches', 'Burgers', 'Pastas', 'Steaks', 'Desserts'];
  const itemsPerPage = 9;
  const mealData = [
    { imageUrl: '/images/egusi.jpeg', title: 'Pounded Yam and Egusi Soup', rating: '4.5', price: '15.99', category: 'Main Dish' },
    { imageUrl: '/images/afang.jpeg', title: 'Afang Soup', rating: '4.5', price: '15.99', category: 'Main Dish' },
    { imageUrl: '/images/chips.jpeg', title: 'Chicken and Chips', rating: '4.7', price: '12.99', category: 'Main Dish' },
    { imageUrl: '/images/abacha.png', title: 'Abacha and Barbecued Fish', rating: '4.2', price: '10.99', category: 'Main Dish' },
    { imageUrl: '/images/Jollof-rice.jpeg', title: 'Jollof rice', rating: '4.8', price: '10.99', category: 'Main Dish' },
    { imageUrl: '/images/ofada.jpeg', title: 'Ofada rice and Locust Beans Stew', rating: '4.2', price: '10.99', category: 'Main Dish' },
    { imageUrl: '/images/porridge.jpeg', title: 'Yam Porridge', rating: '4.5', price: '15.99', category: 'Main Dish' },
    { imageUrl: '/images/yam.jpeg', title: 'Yam and Egg Sauce', rating: '4.7', price: '12.99', category: 'Main Dish' },
    { imageUrl: '/images/spag.webp', title: 'Spaghetti Bolognese', rating: '4.2', price: '10.99', category: 'Main Dish' },
    { imageUrl: '/images/vegetablesoup.jpeg', title: 'Fufu and Vegetable soup', rating: '4.2', price: '10.99', category: 'Main Dish' },
    { imageUrl: '/images/moimoi.jpeg', title: 'Moi-moi(Bean Pudding)', rating: '4.5', price: '10.99', category: 'Main Dish' },
    { imageUrl: '/images/catfish.jpeg', title: 'Catfish Peppersoup', rating: '4.2', price: '10.99', category: 'Main Dish' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState('priceLowToHigh');
  const [selectedCategory, setSelectedCategory] = useState('Main Dish');

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when category changes
  };

  const handleFavoriteToggle = (meal) => {
    if (favoriteMeals.some((fav) => fav.title === meal.title)) {
      setFavoriteMeals(favoriteMeals.filter((fav) => fav.title !== meal.title));
    } else {
      setFavoriteMeals([...favoriteMeals, meal]);
    }
  };

  const filteredMeals = mealData.filter((meal) => meal.category === selectedCategory);

  const sortedMeals = [...filteredMeals].sort((a, b) => {
    switch (sortOption) {
      case 'priceLowToHigh':
        return a.price - b.price;
      case 'priceHighToLow':
        return b.price - a.price;
      case 'ratingHighToLow':
        return b.rating - a.rating;
      case 'titleAZ':
        return a.title.localeCompare(b.title);
      case 'titleZA':
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });

  const paginatedMeals = sortedMeals.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);


  return (
    <div>
      <ImageSection imageUrl="/images/trial.jpeg" height="300px" />
      <Container maxWidth="lg" sx={{ marginTop: '4rem' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={3}>
            <Category title="Nigerian Dishes" items={nigerianDishes} onItemClick={handleCategoryClick} />
            <Category title="Continental Dishes" items={continentalDishes} onItemClick={handleCategoryClick} />
            <Category title="Italian Dishes" items={['Pastas', 'Pizzas', 'Risottos']} onItemClick={handleCategoryClick} />
            <Category title="Sea Food" items={['Fish', 'Shrimp', 'Crab', 'Lobster']} onItemClick={handleCategoryClick} />
          </Grid>
          <Grid item xs={12} sm={9}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
              <FormControl variant="outlined" size="small" sx={{ minWidth: 120 }}>
                <InputLabel>Sort By</InputLabel>
                <Select
                  value={sortOption}
                  onChange={handleSortChange}
                  label="Sort By"
                >
                  <MenuItem value="priceLowToHigh">Price: Low to High</MenuItem>
                  <MenuItem value="priceHighToLow">Price: High to Low</MenuItem>
                  <MenuItem value="ratingHighToLow">Rating: High to Low</MenuItem>
                  <MenuItem value="titleAZ">Alphabetical: A-Z</MenuItem>
                  <MenuItem value="titleZA">Alphabetical: Z-A</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Grid container spacing={4}>
              {paginatedMeals.map((meal, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <MealItem
                    imageUrl={meal.imageUrl}
                    title={meal.title}
                    rating={meal.rating}
                    price={meal.price}
                    isFavorite={favoriteMeals.some((fav) => fav.title === meal.title)}
                    onFavoriteToggle={() => handleFavoriteToggle(meal)}
                    onAddToCart={() => onAddToCart(meal)}  // Adding cart handler
                  />
                </Grid>
              ))}
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '4rem' }}>
              <Pagination
                count={Math.ceil(filteredMeals.length / itemsPerPage)}
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

const Meals = ({ favoriteMeals, setFavoriteMeals }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = (meal) => {
    setCartItems([...cartItems, meal]);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000); 
  };

  return (
    <div>
      <LandingPageHeader cartItems={cartItems}/>
      <MealsBody 
        favoriteMeals={favoriteMeals} 
        setFavoriteMeals={setFavoriteMeals}
        cartItems={cartItems} 
        setCartItems={setCartItems}
        onAddToCart={handleAddToCart}
        />
      <Footer />
      {showPopup && <CartPopup />}
    </div>
  );
};

export default Meals;
