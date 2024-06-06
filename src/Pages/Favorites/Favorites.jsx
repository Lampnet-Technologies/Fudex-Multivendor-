import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import LandingPageHeader from '../../components/LandingPageHeader/LandingPageHeader';
import ImageSection from '../../components/ImageSection/ImageSection';
import MealItem from '../../components/MealItem/MealItem';
import Footer from '../../components/LandingPageFooter/LandingPageFooter';

const FavoritesPage = ({ favoriteMeals }) => {
  return (
    <div>
      <LandingPageHeader />
      <ImageSection imageUrl="/images/trial.jpeg" height="300px" />
      <Container maxWidth="lg" sx={{ marginTop: '4rem' }}>
        <Grid container spacing={4}>
          {favoriteMeals.length > 0 ? (
            favoriteMeals.map((meal, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <MealItem
                  imageUrl={meal.imageUrl}
                  title={meal.title}
                  rating={meal.rating}
                  price={meal.price}
                  isFavorite={true}
                  onFavoriteToggle={() => {}} // No toggle on favorites page
                />
              </Grid>
            ))
          ) : (
            <Typography variant="h6" sx={{ margin: 'auto', marginTop: '4rem' }}>
              No favorite meals yet.
            </Typography>
          )}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default FavoritesPage;
