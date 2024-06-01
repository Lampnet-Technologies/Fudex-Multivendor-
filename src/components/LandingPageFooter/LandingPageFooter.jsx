import React from 'react';
import { Box, Container, Grid, Typography, IconButton, List, ListItem, ListItemText } from '@mui/material';
import { Facebook, Instagram, Google } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#180501',
        borderRadius: '100px 100px 0 0',
        padding: '3rem 0',
        color: 'white',
        marginTop: '2rem',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ padding: '1rem' }}>
              <Typography variant="h5" sx={{ marginBottom: '1rem', fontWeight: 'bold' }}>
                Fudex
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
                Discover the best meals from various cuisines and enjoy a delightful dining experience.
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '-0.5rem', gap: '1rem' }}>
                <IconButton color='inherit'>
                  <Google />
                </IconButton>
                <IconButton color='inherit'>
                  <Facebook />
                </IconButton>
                <IconButton color='inherit'>
                  <Instagram />
                </IconButton>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Box sx={{ padding: '1rem' }}>
              <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }}>
                About
              </Typography>
              <List disablePadding sx={{ marginTop: '-1rem' }}>
                <ListItem disableGutters>
                  <ListItemText primary="Our Story" />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText primary="Team" />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText primary="Careers" />
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Box sx={{ padding: '1rem' }}>
              <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }}>
                Services
              </Typography>
              <List disablePadding sx={{ marginTop: '-1rem' }}>
                <ListItem disableGutters>
                  <ListItemText primary="Catering" />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText primary="Delivery" />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText primary="Dine-in" />
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Box sx={{ padding: '1rem' }}>
              <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }}>
                Help
              </Typography>
              <List disablePadding sx={{ marginTop: '-1rem' }}>
                <ListItem disableGutters>
                  <ListItemText primary="Support" />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText primary="FAQs" />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText primary="Contact Us" />
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Box sx={{ padding: '1rem' }}>
              <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }}>
                Policies
              </Typography>
              <List disablePadding sx={{ marginTop: '-1rem' }}>
                <ListItem disableGutters>
                  <ListItemText primary="Privacy Policy" />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText primary="Terms of Service" />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText primary="Refund Policy" />
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <hr style={{ border: 'none', borderTop: '1px solid #ccc', width: '100%', margin: '1rem 0' }} />
    </Box>
  );
};

export default Footer;
