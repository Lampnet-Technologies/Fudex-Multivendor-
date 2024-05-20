import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ChevronIcon from '../../../Components/ChevronIcon';
import ToggleSwitch from '../../../Components/Toggler/ToggleSwitch';

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
          <ChevronIcon size="2rem" />
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
      </Box>
    </Container>
  );
};

export default Settings;
