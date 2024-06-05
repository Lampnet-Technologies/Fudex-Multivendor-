import React from 'react';
import { Box, Typography } from '@mui/material';


const ImageSection = ({ imageUrl, height = '600px', text }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100vw',
        height: height, 
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(50%)', // Dull the brightness
          zIndex: 1,
        }}
      ></Box>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          textAlign: 'center',
          zIndex: 2,
        }}
      >
        {text && (
          <Typography variant="h3" 
            sx={{
              fontSize: {
                xs: '1.5rem',
                sm: '3rem'
              }, 
              fontWeight: 'bold' }}>
            {text}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ImageSection;
