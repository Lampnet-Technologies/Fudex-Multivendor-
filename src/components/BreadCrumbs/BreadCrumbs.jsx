import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const Breadcrumbs = () => {
  const location = useLocation();
  const paths = [
    { path: '/', label: 'Home' },
    { path: '/meals', label: 'Meals' },
    { path: '/cart', label: 'Cart' },
    { path: '/order-summary', label: 'Order Summary' },
    { path: '/payment', label: 'Payment Information' }
  ];

  const getBreadcrumbColor = (path) => {
    return location.pathname === path ? 'black' : 'orange';
  };

  return (
    <Box sx={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
      {paths.map(({ path, label }, index) => (
        <React.Fragment key={path}>
          <Link to={path} style={{ textDecoration: 'none', color: getBreadcrumbColor(path) }}>
            <Typography variant="body1">{label}</Typography>
          </Link>
          {index < paths.length - 1 && (
            <Typography variant="body1" color="textSecondary">
              &gt;
            </Typography>
          )}
        </React.Fragment>
      ))}
    </Box>
  );
};

export default Breadcrumbs;
