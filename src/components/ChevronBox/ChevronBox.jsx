import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ChevronIcon from '../ChevronIcon';

const ChevronBox = ({ text, handleClick }) => {
  return (
    <Box
      sx={{
        marginTop: '4rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '6rem',  // Increased gap for more space between icon and text
        cursor: 'pointer',
        width: '100%',
        maxWidth: '1050px'
      }}
      onClick={handleClick}
    > 
      <IconButton>
      <ChevronIcon size="2rem" />
      </IconButton>
      <Typography variant="h6">{text}</Typography>
    </Box>
  );
};

export default ChevronBox;
