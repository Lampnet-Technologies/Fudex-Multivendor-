import React from 'react';
import { Container, Typography, Box, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ChevronIcon from '../../../Components/ChevronIcon';
import ToggleSwitch from '../../../Components/Toggler/ToggleSwitch';
import LightModeIcon from '@mui/icons-material/LightMode';
import ContrastIcon from '@mui/icons-material/Contrast';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import OpacityIcon from '@mui/icons-material/Opacity';


const profiles = [
  { name: 'Seizure safe profile', description: 'Clear flashes & reduces color' },
  { name: 'Vision impaired profile', description: 'Enhances app visuals' },
  { name: 'ADHD friendly profile', description: 'More focus & fewer distractions' },
  { name: 'Cognitive disability profile', description: 'Assists with reading & focusing' },
  { name: 'Blind users(Screen readers)', description: 'Optimize app for screen readers' },
];

const Settings = () => {
  const navigate = useNavigate();

  const handleChevronClick = () => {
    navigate('/');
  };

  return (
    <Container maxWidth="xl" sx={{ padding: '2rem', display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ maxWidth: '800px', width: '100%' }}>

        {/* Top Section */}
        <Box
          display="flex"
          alignItems="center"
          sx={{ cursor: 'pointer', marginBottom: '2rem' }}
          onClick={handleChevronClick}
        >
          <IconButton>
          <ChevronIcon size="2rem" />
          </IconButton>
          <Typography variant="h6" sx={{ marginLeft: '1rem' }}>Settings</Typography>
        </Box>

        {/* Accessibility Profiles */}
        <Box>
          <Typography variant="h6" sx={{ marginBottom: '1rem' }}>
            Choose the right accessibility profile for you
          </Typography>
          {profiles.map((profile, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '1rem 0',
                
              }}
            >
              <ToggleSwitch />
              <Box sx={{ marginLeft: '1rem' }}>
                <Typography variant="h6">{profile.name}</Typography>
                <Typography variant="caption">{profile.description}</Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <hr style={{ border: 'none', borderTop: '1px solid #ccc', width: '100%' }} />

        {/* New Section */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap:'20px', justifyContent: 'space-between', marginTop: '2rem' }}>
          <Typography variant="h6" >Color adjustments</Typography>
          
          {/* First Row */}
          <Box sx={{ display: 'flex', gap: '50px', justifyContent: 'space-between' }}>
            <div style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4px', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
              <NightlightRoundIcon />
                <Typography variant="caption">Dark Contrast</Typography>  
            </div>
            <div style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4px', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
              <LightModeIcon />
                <Typography variant="caption">Light Contrast</Typography>  
            </div>
            <div style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4px', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
              <ContrastIcon />
                <Typography variant="caption">High Contrast</Typography>    
            </div>
          </Box>

          {/* Second Row */}
          <Box sx={{ display: 'flex', gap: '25px', justifyContent: 'space-between' }}>
            <div style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4px', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
              <OpacityIcon />
                <Typography variant="caption">Low Saturation</Typography>  
            </div>
            <div style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4px', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
              <OpacityIcon />
                <Typography variant="caption">High Saturation</Typography>
            </div>
            <div style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4px', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
              <InvertColorsIcon />
                <Typography variant="caption">Monochrome</Typography>
            </div>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Settings;