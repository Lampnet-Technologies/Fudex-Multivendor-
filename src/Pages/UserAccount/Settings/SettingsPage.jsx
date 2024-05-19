import React from 'react'
import { Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ChevronIcon from '../../../Components/ChevronIcon';
import ToggleSwitch from '../../../Components/Toggler/ToggleSwitch';
import './SettingsPage.css'


const Settings = () => {
  const navigate = useNavigate();
  
  const handleChevronClick = () => {
    navigate('/');
  };
  return (
    <Container maxWidth="xl" className="container">

    {/* Top Section */}
      <div className="profile-details-section" onClick={handleChevronClick}>
        <ChevronIcon size='2rem' />
        <Typography variant="h6" className='pd'>Settings</Typography>
      </div>
      <div className='toggle-container'>
        <ToggleSwitch />
        <ToggleSwitch />
      </div>
  </Container>
  )
}

export default Settings