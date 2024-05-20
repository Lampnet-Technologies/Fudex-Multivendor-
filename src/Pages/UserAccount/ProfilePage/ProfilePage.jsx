import React from 'react';
import { Container, Typography, Box, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import ChevronIcon from '../../../Components/ChevronIcon';


const ProfilePage = () => {
  const userName = "Jane Doe";
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/profile-details');
  };
  const handleCloseClick = () => {
    navigate('/');
  };
  const handleHomeIconClick = () => {
    navigate('/address');
  };

  return (
    <Container maxWidth="xl" sx={{ textAlign: 'left', paddingBottom: '2rem' }}>

      {/* Top Section */}
      <Box sx={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end', width: '100%', maxWidth: '1000px' }}>
        <IconButton onClick={handleCloseClick}>
          <CloseIcon fontSize="large" />
        </IconButton>
      </Box>

      {/* Profile Photo Section */}
      <Box sx={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ position: 'relative', width: '150px', height: '150px', borderRadius: '50%', overflow: 'hidden', padding: '2px', boxSizing: 'border-box', boxShadow: '0px 5px 10px -5px rgba(0, 0, 0, 2)' }}>
          <Box sx={{ width: '100%', height: '100%', borderRadius: '50%', backgroundColor: 'lightcoral', position: 'absolute', top: 0, left: 0, zIndex: 1 }} />
          <img src="bitmap.jpg" alt="User Profile" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', position: 'relative', zIndex: 2 }} />
        </Box>
        <Typography variant="h5" sx={{ fontWeight: 'bold', marginTop: '1rem' }}>{userName}</Typography>
      </Box>

      {/* Preferences Section */}
      <Box sx={{ marginTop: '4rem' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', padding: '1rem', borderRadius: '8px', boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '400px' }} onClick={handleProfileClick}>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>Profile Details</Typography>
            <ChevronIcon direction="right" size="1rem" />
          </Box>
        </Box>

        <Typography variant="h6" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem', width: '100%', maxWidth: '1100px' }}>Saved Places</Typography>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', maxWidth: '400px', padding: '1rem', borderRadius: '8px', boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)' }}>
            <HomeIcon fontSize="large" sx={{ marginRight: '1rem' }} />
            <Box sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={handleHomeIconClick}>
              <Typography variant="body1">Home</Typography>
              <Typography variant="body2" sx={{ color: 'gray' }}>Add Home</Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', maxWidth: '400px', padding: '1rem', borderRadius: '8px', boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)' }}>
            <WorkIcon fontSize="large" sx={{ marginRight: '1rem' }} />
            <Box sx={{ flexGrow: 1, cursor: 'pointer' }}>
              <Typography variant="body1">Work</Typography>
              <Typography variant="body2" sx={{ color: 'gray' }}>Add Work</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ProfilePage;
