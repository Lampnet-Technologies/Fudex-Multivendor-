import React from 'react';
import { Container, Typography, Grid, TextField, IconButton } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './Address.css';

function AddressScreen() {
  const isMobile = window.innerWidth <= 600;

  return (
    <Container maxWidth="xl" sx={{ textAlign: 'left' }}>
      {/* Top Section */}
      <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
        <ChevronRightIcon sx={{ transform: 'rotate(180deg)', fontSize: '2rem', cursor: 'pointer' }} />
        <Typography variant="h5" sx={{ marginLeft: '1rem' }}>Add Address</Typography>
      </div>

      {/* Divider */}
      <hr style={{ border: 'none', borderTop: '1px solid #ccc', width: '100%', margin: '2rem 0' }} />

     {/* Middle Section */}
     <Grid container spacing={1} alignItems="flex-start" justifyContent="flex-start">
        <Grid item xs={10} sm={8} md={6}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search for new address"
            InputProps={{
              startAdornment: <SearchIcon />,
            }}
          />
        </Grid>
      </Grid>

      {/* Divider */}
      <hr style={{ border: 'none', borderTop: '10px solid rgba(249, 250, 251, 1)', width: '100%', margin: '2rem 0' }} />
      <Typography variant='h6' sx={{ marginLeft: '1rem' }}>Nearby addresses</Typography>

      {/* Bottom Section */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {!isMobile && (
          <IconButton color="primary" aria-label="Use current location">
            <LocationOnIcon />
          </IconButton>
        )}
        <div style={{ display: 'flex', flexDirection:'column', alignItems: 'center' , marginTop:'20px' }}>
        <Typography variant="body1" fontWeight={100}>Use current location</Typography>
        <Typography variant="caption" fontWeight={100}>Enable location services</Typography>
        </div>
    </div>
        <div className='disp'>
        <Typography variant="caption" fontWeight={100} >We'll display neighboring restaurants and<br/> 
            stores where you may place delivery or pickup orders</Typography>
        </div>
    </Container>
  );
}

export default AddressScreen;
