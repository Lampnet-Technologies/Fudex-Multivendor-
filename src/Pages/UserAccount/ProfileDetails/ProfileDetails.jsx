import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ChevronIcon from '../../../Components/ChevronIcon';
import EditIcon from '@mui/icons-material/Edit';
import './ProfileDetails.css';

const ProfileDetails = () => {
  const navigate = useNavigate();
  
  const handleChevronClick = () => {
    navigate('/profile');
  };

  const handleSubmit = (event) => {
    event.preventDefault();    
  };


  return (
    <Container maxWidth="xl" className="container">

      {/* Top Section */}
      <div className="profile-details-section" onClick={handleChevronClick}>
        <ChevronIcon size='2rem' />
        <Typography variant="h6" className='pd'>Profile Details</Typography>
      </div>

      {/* Profile Picture Section */}
      <div className="profile-photo-section">
        <div className="photo-container-raise">
          <div className="profile-picture-frame" />
          <img src="bitmap.jpg" alt="User Profile" className="profile-picture" />
          <div className="overlay">
            <EditIcon className="edit-icon" />
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="parent-container">
        <form className="profile-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <TextField id="name" variant="outlined" fullWidth className="custom-textfield" />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <TextField id="email" variant="outlined" fullWidth className="custom-textfield" />
          </div>
          <div className="form-field">
            <label htmlFor="phone">Phone Number</label>
            <TextField id="phone" variant="outlined" fullWidth required className="custom-textfield" />
          </div>
          <Button variant="contained"
            sx={{ backgroundColor: '#F6613F', '&:hover': { backgroundColor: '#D95436' } }}
            className="save-button">
            Save
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default ProfileDetails;
