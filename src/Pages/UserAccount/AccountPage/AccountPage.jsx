import React from 'react';
import { Container, Typography } from '@mui/material';
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
import './AccountPage.css';


const AccountPage = () => {
  const userName = "Jane Doe";
  const userEmail = "janedoe007@gmail.com";
  const navigate = useNavigate();

  const handleViewActivityClick = () => {
    navigate('/profile');
  };

  return (
    <>
      <Container maxWidth="xl" className="container">

        {/* Top Section */}
        <div className="top-section">
          <ChevronIcon size='2rem'/>
        </div>

        {/* Photo Section */}
        <div className="photo-section">
          <div className="user-details">
            <Typography variant="h5" className="user-name">{userName}</Typography>
            <Typography variant="body1" className="user-email">{userEmail}</Typography>
            <div className="view-activity" onClick={handleViewActivityClick}>
              <Typography variant="body2" sx={{ color: 'black' }} >View Activity</Typography>
              <ChevronIcon direction="right" size="1rem" />
            </div>
          </div>
          <div className="profile-picture-container">
            <div className="profile-picture-frame" />
            <img
              src="bitmap.jpg"
              alt="User Profile"
              className="profile-picture"
            />
          </div>
        </div>

        {/*icon categories section*/}
        <div className='icon-categories-container'>
        <div className='icon-categories'>
        <div className="icon-category">
            <FavoriteIcon fontSize='2rem' className="icon" />
            <Typography variant="caption">Favorites</Typography>
          </div>
          <div className="icon-category">
            <HelpIcon fontSize='2rem' className="icon" />
            <Typography variant="caption">Help & Support</Typography>
          </div>
          <div className="icon-category">
            <SettingsIcon fontSize='2rem' className="icon" />
            <Typography variant="caption">Settings</Typography>
          </div>
          <div className="icon-category">
            <AccountBalanceWalletIcon fontSize='2rem' className="icon" />
            <Typography variant="caption">Wallet</Typography>
          </div>
        </div>
      </div>

        {/* user preferences section */}
        <div className='preferences-section-container'>
        <div className='preferences-category'>
          <div className="preference">
            <ShoppingCartIcon fontSize='2rem' className="icon" />
            <Typography variant="caption">Orders</Typography>
          </div>
          <div className="chev-icon">
            <ChevronIcon direction='right' className="icon" />
          </div>
        </div>
        <div className='preferences-category'>
          <div className="preference">
            <HistoryIcon fontSize='2rem' className="icon" />
            <Typography variant="caption" >Order history</Typography>
          </div>
            <ChevronIcon direction='right' className="icon" />
        </div>
        <div className='preferences-category'>
          <div className="preference">
            <EmojiEventsIcon fontSize='2rem' className="icon" />
            <Typography variant="caption" >Rewards</Typography>
          </div>
            <ChevronIcon direction='right' className="icon" />
        </div>
        <div className='preferences-category'>
          <div className="preference">
            <CardGiftcardIcon fontSize='2rem' className="icon" />
            <Typography variant="caption" >Promotions</Typography>
          </div>
            <ChevronIcon direction='right' className="icon" />
        </div>
        <div className='preferences-category'>
          <div className="preference">
            <LanguageIcon fontSize='2rem' className="icon" />
            <Typography variant="caption" >Language</Typography>
          </div>
            <ChevronIcon direction='right' className="icon" />
        </div>
        <div className='preferences-category'>
          <div className="preference">
            <NotificationsIcon fontSize='2rem' className="icon" />
            <Typography variant="caption" >Notification</Typography>
          </div>
            <ChevronIcon direction='right' className="icon" />
        </div>
        <div className='preferences-category'>
          <div className="preference2">
            <InfoIcon fontSize='2rem' className="icon" />
            <Typography variant="caption" >About</Typography>
          </div>
            <ChevronIcon direction='right' className="icon" />
        </div>
        <div className='preferences-category'>
          <div className="preference2">
            <LogoutIcon fontSize='2rem' className="icon" />
            <Typography variant="caption" >Logout</Typography>
          </div>
            <ChevronIcon direction='right' className="icon" />
        </div>
      </div>
      </Container>
    </>
  );
};

export default AccountPage;
