import React, { useState } from 'react';
import { Container, Typography, Grid, TextField, IconButton, Checkbox, Button } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Address.css';


// Define custom icon
const customIcon = new L.Icon({
    iconUrl: 'leaf-green.png', 
    iconSize: [38, 38], // Adjust the size as needed
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: 'leaf-shadow.png',  
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
  });

function AddressScreen() {
  const isMobile = window.innerWidth <= 600;
  const [address, setAddress] = useState('');
  const [showMap, setShowMap] = useState(false);

  const handleAddressChange = (event) => {
    const value = event.target.value;
    setAddress(value);
    setShowMap(value !== '');
  };

  const handleSaveAddress = () => {
    // Logic to save the address
  };

  return (
    <Container maxWidth="xl" sx={{ textAlign: 'left' }}>
      {/* Top Section */}
      <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
        <ChevronRightIcon sx={{ transform: 'rotate(180deg)', fontSize: '2rem', cursor: 'pointer' }} />
        <Typography variant="h5" sx={{ marginLeft: '1rem' }}>Add Address</Typography>
      </div>

      {/* Conditional rendering for the first hr line */}
      {!address && (
        <hr style={{ border: 'none', borderTop: '1px solid #ccc', width: '100%', margin: '2rem 0' }} />
      )}

      {/* Middle Section */}
      <Grid container spacing={1} alignItems="flex-start" justifyContent="flex-start" style={{ marginTop: '2rem' }}>
        <Grid item xs={10} sm={8} md={6}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search for new address"
            InputProps={{
              startAdornment: <SearchIcon />,
            }}
            onChange={handleAddressChange}
            value={address}
          />
        </Grid>
      </Grid>

      {/* Conditional Rendering based on address input */}
      {!showMap && (
        <>
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
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
              <Typography variant="body1" fontWeight={100}>Use current location</Typography>
              <Typography variant="caption" fontWeight={100}>Enable location services</Typography>
            </div>
          </div>
          <div className='disp'>
            <Typography variant="caption" fontWeight={100}>We'll display neighboring restaurants and<br />
              stores where you may place delivery or pickup orders</Typography>
          </div>
        </>
      )}

      {/* Map Section */}
      {showMap && (
        <div>
          {/* Placeholder for the map */}
          <div style={{ marginTop: '2rem' }}>
            <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "400px", width: "100%" }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[51.505, -0.09]} icon={customIcon}>
                <Popup>
                    <div style={{ textAlign: 'center' }}>
                    <Typography variant="body2">Custom Popup Content</Typography>
                    <Button variant="contained" color="primary" size="small">Click Me</Button>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>

          {/* Address Section */}
          <div style={{ marginTop: '2rem' }}>
            {/* Placeholder for the address */}
            <div>{address}</div>
            
            {/* Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '0.5rem', alignItems: 'flex-start', margin: '1rem 0' }}>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem', alignItems: 'center' }}>
                <Button variant="contained" sx={{ backgroundColor: '#F6613F' }}>ASAP</Button>
                <Button variant="contained" sx={{ backgroundColor: '#fff', color: 'black' }}>Schedule</Button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem', alignItems: 'center' }}>
                <Button variant="contained" sx={{ backgroundColor: '#F6613F' }}>Delivery</Button>
                <Button variant="contained" sx={{ backgroundColor: '#fff', color: 'black' }}>Pick-up</Button>
            </div>
            </div>

          </div>

          {/* Checkbox Section */}
          <div style={{ marginTop: '2rem' }}>
            <Checkbox color="primary" />
            <Typography variant="body1">Agree to terms and conditions</Typography>
            <Button variant="contained" sx={{backgroundColor: '#F6613F'}} onClick={handleSaveAddress}>Save Address</Button>
          </div>
        </div>
      )}
    </Container>
  );
}

export default AddressScreen;
