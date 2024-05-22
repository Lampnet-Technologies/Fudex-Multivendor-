import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ChevronIcon from '../ChevronIcon';

const ChevronBox = ({ text, handleClick }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',  // Adjust gap as needed for spacing between icon and text
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
