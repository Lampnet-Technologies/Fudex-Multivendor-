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
  const [recentLocations, setRecentLocations] = useState([]);

  const handleAddressChange = (event) => {
    const value = event.target.value;
    setAddress(value);
    setShowMap(value !== '');
  };

  const handleSaveAddress = () => {
    if (address.trim() !== '') {
      setRecentLocations([...recentLocations, address]);
      setAddress('');
      setShowMap(false);
    }
  };

  return (
    <Container maxWidth="xl" sx={{ textAlign: 'left', paddingBottom: '2rem' }}>
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
          {recentLocations.length === 0 && (
            <div className='disp'>
              <Typography variant="caption" fontWeight={100}>We'll display neighboring restaurants and<br />
                stores where you may place delivery or pickup orders</Typography>
            </div>
          )}
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
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1rem', alignItems: 'flex-start', margin: '1rem 0' }}>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
                <Button variant="contained" sx={{ backgroundColor: '#F6613F', width: '100%' }}>ASAP</Button>
                <Button variant="contained" sx={{ backgroundColor: '#fff', color: 'black', width: '100%' }}>Schedule</Button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
                <Button variant="contained" sx={{ backgroundColor: '#F6613F', width: '100%' }}>Delivery</Button>
                <Button variant="contained" sx={{ backgroundColor: '#fff', color: 'black', width: '100%' }}>Pick-up</Button>
              </div>
            </div>
            <hr style={{ border: 'none', borderTop: '1px solid #ccc', width: '100%', margin: '2rem 0' }} />
          </div>

          {/* Drop-off section */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '0.5rem', alignItems: 'flex-start', margin: '1rem 0', height: '100px' }}>
            <Typography variant='h6' sx={{ marginRight: '2rem' }}>Drop-off options</Typography>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem', alignItems: 'center', height: '100%' }}>
              <Button variant="contained" sx={{ backgroundColor: '#F6613F' }}>Hand it to me</Button>
              <Button variant="contained" sx={{ backgroundColor: '#fff', color: 'black' }}>Leave at the door</Button>
            </div>
          </div>

          {/* Divider */}
          <hr style={{ border: 'none', borderTop: '10px solid rgba(249, 250, 251, 1)', width: '100%', margin: '2rem 0' }} />

          {/* Checkbox Section */}
          <div style={{ display: 'flex', marginTop: '2rem', justifyContent: 'flex-start', alignItems: 'center', marginLeft: '-10px' }}>
            <Checkbox color="primary" />
            <Typography variant="body1">I'm sending a gift</Typography>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', marginLeft: '30px', marginTop: '-10px' }}>
            <Typography variant="caption" fontWeight={100}>Add a card and note at checkout </Typography>
          </div>
          <Button variant="contained" sx={{ backgroundColor: '#F6613F', width: '200px', marginTop: '30px' }} onClick={handleSaveAddress}>Save Address</Button>
        </div>
      )}

      {/* Recent Locations Section */}
      {recentLocations.length > 0 && (
        <>
          <hr style={{ border: 'none', borderTop: '1px solid #ccc', width: '100%', margin: '2rem 0' }} />
          <div style={{ marginTop: '2rem' }}>
            <Typography variant='h6' sx={{ marginLeft: '1rem' }}>Recent Locations</Typography>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
              {recentLocations.map((location, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginLeft: '1rem', backgroundColor: '#F3F4F6', height: '100px' }}>
                  <LocationOnIcon />
                  <div>
                    <Typography variant="body1">{location}</Typography>
                    <Typography variant="caption">Street Name</Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </Container>
  );
}

export default AddressScreen;
