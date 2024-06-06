import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const LandingPageHeader = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const handleLoginClick = () => {
    navigate("/login");
  }

  const handleAboutClick = () => {
    navigate("/about-us");
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleMealsClick = () => {
    navigate("/meals");
  };

  const handleFavoritesClick = () => {
    navigate("/favorites");
  };

  const handleSearchClick = () => {
    navigate("/search");
  };

  const handleNotificationsClick = () => {
    navigate("/notifications");
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        backgroundImage: {
          xs: `url('/images/mobile-background.jpg')`,
          sm: `url('/images/desktop-background.jpg')`
        },
        backgroundColor: 'black',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '1rem 0',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex', alignItems: 'center', color: 'white', flexGrow: 1 }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Logo
            </Typography>
            <Box
              sx={{
                display: { xs: 'none', sm: 'flex' },
                gap: 4,
                justifyContent: 'center',
                flexGrow: 1,
              }}
            >
              <Typography variant="body1" onClick={handleHomeClick} 
                sx={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}>
                Home
              </Typography>
              <Typography variant="body1" sx={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}>
                Services
              </Typography>
              <Typography variant="body1" onClick={handleMealsClick} 
                sx={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}>
                Meals
              </Typography>
              <Typography variant="body1" sx={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}>
                Orders
              </Typography>
              <Typography variant="body1" onClick={handleFavoritesClick}
                sx={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}>
                Favorites
              </Typography>
              <Typography variant="body1" onClick={handleAboutClick} 
                sx={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}>
                About Us
              </Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2, marginLeft: 'auto' }}>
              <IconButton color="inherit" onClick={handleSearchClick}>
                <SearchIcon />
              </IconButton>
              <IconButton color="inherit" onClick={handleNotificationsClick}>
                <NotificationsIcon />
              </IconButton>
              <IconButton color="inherit" 
                onClick={handleCartClick}
                >
              <ShoppingCartIcon />
              </IconButton>
              <Button color="inherit"
                onClick={handleLoginClick}
                >Login</Button>
              <Button
                variant="contained"
                onClick={handleSignUpClick}
                sx={{
                  borderRadius: '4rem',
                  backgroundColor: '#F6613F',
                  '&:hover': {
                    backgroundColor: '#D95436',
                  },
                }}
              >
                Signup
              </Button>
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: 'none' }, marginLeft: 'auto' }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { sm: 'none' } }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <List>
            <ListItem button onClick={handleHomeClick}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={handleMealsClick}>
              <ListItemText primary="Meals" />
            </ListItem>
            <ListItem button onClick={handleFavoritesClick}>
              <ListItemText primary="Favorites" />
            </ListItem>
            <ListItem button onClick={handleAboutClick}>
              <ListItemText primary="About Us" />
            </ListItem>
            <ListItem button onClick={handleSearchClick}>
              <ListItemText primary="Search" />
            </ListItem>
            <ListItem button onClick={handleNotificationsClick}>
              <ListItemText primary="Notifications" />
            </ListItem>
            <ListItem button onClick={handleCartClick}>
              <ListItemText primary="Cart" />
            </ListItem>
            <ListItem button>
              <Button color="inherit">Login</Button>
            </ListItem>
            <ListItem button onClick={handleSignUpClick}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#F6613F',
                  '&:hover': {
                    backgroundColor: '#D95436',
                  },
                }}
              >
                Signup
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default LandingPageHeader;
