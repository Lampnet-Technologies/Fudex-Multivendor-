import React from 'react';
import { Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import ChevronIcon from '../../../Components/ChevronIcon';
import './ProfilePage.css';


const ProfilePage = () => {
  const userName = "Jane Doe";
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/profile-details');
  };
  const handleCloseClick = () => {
    navigate('/')
  }
  return (
    <Container maxWidth="xl" className="container">

      {/* Top Section */}
      <div className="top" onClick={handleCloseClick}>
          <CloseIcon fontSize='2rem' className="icon"/>
        </div>

        {/*profile picture section */}
        <div className="profile-photo-section">
          <div className="photo-container">
            <div className="profile-picture-frame" />
              <img
              src="bitmap.jpg"
              alt="User Profile"
              className="profile-picture"
            />
          </div>
          <Typography variant="h5" className="user-name">{userName}</Typography>
        </div>  
        <div className='preferences-section-container'>
        <div className='preferences-category'>
          <div className="profile-details" onClick={handleProfileClick}>
            <Typography variant="h6">Profile Details</Typography>
            <ChevronIcon direction='right' className="icon" />
          </div>
        </div>
      </div>
      </Container>
  );
};

export default ProfilePage;
