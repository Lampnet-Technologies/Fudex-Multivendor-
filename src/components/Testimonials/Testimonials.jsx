import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Grid, IconButton, CircularProgress } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import './Testimonials.css';

const placeholderTestimonials = [
  {
    name: 'John Doe',
    date: '2024-05-31',
    text: 'Great service! Fast delivery and the food was still hot. Highly recommended!',
    image: '/images/user1.jpg',
    rating: 4
  },
  {
    name: 'Jane Smith',
    date: '2024-05-25',
    text: 'The app is easy to use and the delivery was on time. I love it!',
    image: '/images/user2.jpg',
    rating: 5
  },
  {
    name: 'Emily Johnson',
    date: '2024-05-20',
    text: 'Excellent experience. The variety of food options is amazing.',
    image: '/images/user3.jpg',
    rating: 5
  },
  {
    name: 'Michael Brown',
    date: '2024-05-18',
    text: 'Quick and reliable service. The food was delicious!',
    image: '/images/user4.jpg',
    rating: 4
  },
  {
    name: 'Sarah Wilson',
    date: '2024-05-15',
    text: 'Fantastic experience. I love the discounts!',
    image: '/images/user5.jpg',
    rating: 5
  },
  {
    name: 'David Clark',
    date: '2024-05-12',
    text: 'Very satisfied with the service. Will order again!',
    image: '/images/user6.jpg',
    rating: 5
  }
];

const Testimonials = () => {
  const [testimonialsData, setTestimonialsData] = useState(placeholderTestimonials);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Uncomment the following lines to fetch data from an API
    /*
    setLoading(true);
    fetch('/api/testimonials')
      .then((response) => response.json())
      .then((data) => {
        setTestimonialsData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching testimonials:', error);
        setError('Failed to load testimonials.');
        setLoading(false);
      });
    */
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Math.ceil(testimonialsData.length / 3) - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === Math.ceil(testimonialsData.length / 3) - 1 ? 0 : prevIndex + 1));
  };

  const displayedTestimonials = testimonialsData.slice(currentIndex * 3, currentIndex * 3 + 3);

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ textAlign: 'center', marginTop: '8rem', marginBottom: '4rem' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ textAlign: 'center', marginTop: '8rem', marginBottom: '4rem' }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ marginTop: '8rem', marginBottom: '4rem', textAlign: 'center' }}>
      <Typography variant="h6" gutterBottom sx={{ color: '#F6613F', fontWeight: '700' }}>
        Testimonials
      </Typography>
      <Box 
        display="flex" 
        flexDirection={{ xs: 'column', md: 'row' }} 
        alignItems="center" 
        justifyContent="center" 
        sx={{ marginBottom: '1.5rem', textAlign: { xs: 'center', md: 'left' }}}
      >
        <Typography 
          variant="h4" 
          sx={{ 
            fontWeight: '700',
            fontSize: { xs: '25px', sm: '2rem' }, 
            marginBottom: { xs: '1rem', md: '0' }, 
            marginRight: { md: '1rem' } }}
          >
          What our customers are saying
        </Typography>
        <Box 
          display="flex" 
          alignItems="center" 
          gap={1} sx={{ marginLeft: '1rem', justifyContent: { xs: 'center' } }}>
          <IconButton onClick={handlePrevious} className="testimonial-arrow">
            <ArrowBackIosIcon />
          </IconButton>
          <IconButton onClick={handleNext} className="testimonial-arrow">
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>
      <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ minHeight: '30rem' }}>
        {displayedTestimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={8} md={4} key={index}>
            <Box className="testimonial-card">
              <Box display="flex" alignItems="center" sx={{ marginBottom: '1rem' }}>
                <Box
                  className="testimonial-image"
                  sx={{
                    backgroundImage: `url(${testimonial.image})`,
                  }}
                />
                <Box sx={{ marginLeft: '1rem', textAlign: 'left' }}>
                  <Typography variant="h6" sx={{ fontWeight: '700' }}>
                    {testimonial.name}
                  </Typography>
                  <Box display="flex" alignItems="center" sx={{ marginBottom: '0.5rem' }}>
                    {[...Array(5)].map((_, starIndex) => (
                      starIndex < testimonial.rating ? (
                        <StarIcon key={starIndex} sx={{ color: '#F6613F' }} />
                      ) : (
                        <StarBorderIcon key={starIndex} sx={{ color: '#F6613F' }} />
                      )
                    ))}
                  </Box>
                  <Typography variant="body2" color="textSecondary">
                    {testimonial.date}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body1" sx={{ textAlign: 'left' }}>
                {testimonial.text}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" sx={{ marginTop: '2rem' }}>
        {[...Array(Math.ceil(testimonialsData.length / 3))].map((_, index) => (
          <Box
            key={index}
            className={`testimonial-circle ${currentIndex === index ? 'active' : ''}`}
            sx={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              border: '2px solid #F6613F',
              margin: '0 5px',
              cursor: 'pointer',
              backgroundColor: currentIndex === index ? '#F6613F' : 'transparent',
            }}
          />
        ))}
      </Box>
    </Container>
  );
};

export default Testimonials;
