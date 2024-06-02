import React from 'react';
import { Box } from '@mui/material';

const ImageSection = ({ imageUrl, height = '600px' }) => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: height, 
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    ></Box>
  );
};

export default ImageSection;
