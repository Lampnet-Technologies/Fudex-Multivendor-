import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const ChevronIcon = ({ direction = 'left', size = '2rem', onClick }) => {
  const rotation = {
    right: '0deg',
    left: '180deg',
    up: '90deg',
    down: '-90deg'
  }[direction];

  return (
    <ChevronRightIcon
      sx={{ transform: `rotate(${rotation})`, fontSize: size, cursor: 'pointer', marginTop: '2px' }}
      onClick={onClick}
    />
  );
};

export default ChevronIcon;
