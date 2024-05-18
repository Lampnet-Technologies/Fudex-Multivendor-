import React from 'react';
import { Container, Typography } from '@mui/material';
import ChevronIcon from '../../Components/ChevronIcon';
import './AccountPage.css';

const AccountPage = () => {
  const userName = "Jane Doe";
  const userEmail = "janedoe007@gmail.com";

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
            <div className="view-activity">
              <Typography variant="body2" sx={{ color: 'black' }}>View Activity</Typography>
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
      </Container>
    </>
  );
};

export default AccountPage;
