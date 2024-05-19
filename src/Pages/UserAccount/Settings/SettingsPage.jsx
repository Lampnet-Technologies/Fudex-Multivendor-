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
      <div className="settings-section" onClick={handleChevronClick}>
        <ChevronIcon size='2rem' />
        <Typography variant="h6" sx={{marginLeft: '100px'}}>Settings</Typography>
      </div>

      {/* accessibility profile */}
      <div className='toggle-container'>
        <Typography variant="h6" sx={{marginLeft: '2rem'}}>Choose the right accessibility profile for you</Typography>
          <div className='holder1'>
            <div className='toggler'>
              <ToggleSwitch />
            </div>
          <div className='toggle-text'>
              <Typography variant="h6" className="user-name">Seizure safe profile</Typography>
              <Typography variant="caption" className="user-email">Clear flashes & reduces color</Typography>
          </div>
        </div>
        <div className='holder2'>
            <div className='toggler'>
              <ToggleSwitch />
            </div>
          <div className='toggle-text'>
              <Typography variant="h6" className="user-name">Vision impaired profile</Typography>
              <Typography variant="caption" className="user-email">Enhances apps visuals</Typography>
          </div>
        </div>
        <div className='holder3'>
            <div className='toggler'>
              <ToggleSwitch />
            </div>
          <div className='toggle-text'>
              <Typography variant="h6" className="user-name">ADHD friendly profile</Typography>
              <Typography variant="caption" className="user-email">More focus & fewer distractions </Typography>
          </div>
        </div>
        <div className='holder4'>
            <div className='toggler'>
              <ToggleSwitch />
            </div>
          <div className='toggle-text'>
              <Typography variant="h6" className="user-name">Cognitive disability profile</Typography>
              <Typography variant="caption" className="user-email">Assists with reading & focusing</Typography>
          </div>
        </div>
        <div className='holder5'>
            <div className='toggler'>
              <ToggleSwitch />
            </div>
          <div className='toggle-text'>
              <Typography variant="h6" className="user-name">Blind users(Screen readers)</Typography>
              <Typography variant="caption" className="user-email">Optimize app for screen readers</Typography>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Settings