import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const ChevronIcon = ({ direction = 'left', size = '2.5rem', onClick }) => {
  const rotation = {
    right: '0deg',
    left: '180deg',
    up: '90deg',
    down: '-90deg'
  }[direction];

  return (
    <ChevronRightIcon
      sx={{ transform: `rotate(${rotation})`,padding: '20px', fontSize: size, cursor: 'pointer', marginTop: '20px' }}
      onClick={onClick}
    />
  );
};

export default ChevronIcon;