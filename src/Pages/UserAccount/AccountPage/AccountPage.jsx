import React from 'react';
import { Container, Typography, Box, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ChevronIcon from '../../../Components/ChevronIcon';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HistoryIcon from '@mui/icons-material/History';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';

const AccountPage = () => {
  const userName = "Jane Doe";
  const userEmail = "janedoe007@gmail.com";
  const navigate = useNavigate();

  const handleChevronClick = () => {
    navigate('/');
  };

  const handleViewActivityClick = () => {
    navigate('/profile');
  };

  const handleSettingsClick = () => {
    navigate('/settings');
  };

  const handlePromotionsClick = () => {
    navigate('/promotions');
  };

  const handleWalletClick = () => {
    navigate('/other-payment-method');
  };

  return (
    <Container maxWidth="xl" sx={{ textAlign: 'left', paddingBottom: '2rem' }}>
      {/* Top Section */}
      <Box sx={{ marginTop: '2rem', display: 'flex', alignItems: 'center' }}>
        <IconButton onClick={handleChevronClick}>
          <ChevronIcon size='2rem' />
        </IconButton>
      </Box>

      {/* Photo Section */}
      <Box sx={{ marginTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', maxWidth: '850px', mx: 'auto' }}>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{userName}</Typography>
          <Typography variant="body1" sx={{ color: 'gray' }}>{userEmail}</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', marginTop: '0.5rem' }} onClick={handleViewActivityClick}>
            <Typography variant="body2" sx={{ color: 'black' }}>View Activity</Typography>
            <ChevronIcon direction="right" size="1rem" sx={{ marginLeft: '0.5rem' }} />
          </Box>
        </Box>
        <Box sx={{ position: 'relative', width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', padding: '2px', boxSizing: 'border-box', boxShadow: '0px 5px 10px -5px rgba(0, 0, 0, 2)' }}>
          <Box sx={{ width: '100%', height: '100%', borderRadius: '50%', backgroundColor: 'lightcoral', position: 'absolute', top: 0, left: 0, zIndex: 1 }} />
          <img src="bitmap.jpg" alt="User Profile" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', position: 'relative', zIndex: 2 }} />
        </Box>
      </Box>

      {/* Icon Categories Section */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '100%', maxWidth: '1000px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <FavoriteIcon sx={{ fontSize: '2.5rem', marginBottom: '0.5rem' }} />
            <Typography variant="caption">Favorites</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <HelpIcon sx={{ fontSize: '2.5rem', marginBottom: '0.5rem' }} />
            <Typography variant="caption">Help & Support</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} onClick={handleSettingsClick}>
            <SettingsIcon sx={{ fontSize: '2.5rem', marginBottom: '0.5rem' }} />
            <Typography variant="caption">Settings</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}  onClick={handleWalletClick}>
              <AccountBalanceWalletIcon sx={{ fontSize: '2.5rem', marginBottom: '0.5rem' }} />
              <Typography variant="caption">Wallet</Typography>
          </Box>
          </Box>
      </Box>

      {/* User Preferences Section */}
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '4rem' }}>
        {[{
          icon: <ShoppingCartIcon sx={{ fontSize: '2rem' }} />,
          text: 'Orders',
          onClick: null
        }, {
          icon: <HistoryIcon sx={{ fontSize: '2rem' }} />,
          text: 'Your Order history',
          onClick: null
        }, {
          icon: <EmojiEventsIcon sx={{ fontSize: '2rem' }} />,
          text: 'Restaurant Rewards',
          onClick: null
        }, {
          icon: <CardGiftcardIcon sx={{ fontSize: '2rem' }} />,
          text: 'Promotions',
          onClick: handlePromotionsClick
        }, {
          icon: <LanguageIcon sx={{ fontSize: '2rem' }} />,
          text: 'Language',
          onClick: null
        }, {
          icon: <NotificationsIcon sx={{ fontSize: '2rem' }} />,
          text: 'Notification',
          onClick: null
        }, {
          icon: <InfoIcon sx={{ fontSize: '2rem' }} />,
          text: 'About',
          onClick: null
        }, {
          icon: <LogoutIcon sx={{ fontSize: '2rem' }} />,
          text: 'Logout',
          onClick: null
        }].map((preference, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              maxWidth: '800px',
              marginTop: '1rem',
              alignItems: 'center',
              padding: '1rem',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
            onClick={preference.onClick}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {preference.icon}
              <Typography variant="caption">{preference.text}</Typography>
            </Box>
            <ChevronIcon direction="right" size="1rem" />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default AccountPage;
