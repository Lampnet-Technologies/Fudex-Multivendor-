import React from 'react';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const ContactUsSection = () => {
  return (
    <Box sx={{ padding: '2rem 0' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>
        Contact Us!
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <form>
            <TextField
              fullWidth
              label="First Name"
              variant="outlined"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Last Name"
              variant="outlined"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Email Address"
              type="email"
              variant="outlined"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Subject"
              variant="outlined"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              margin="normal"
              multiline
              rows={4}
              required
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#F6613F',
                '&:hover': {
                  backgroundColor: '#D95436',
                },
                marginTop: '1rem',
                width: '100%',
              }}
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} sm={6} >
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'right', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', marginLeft: '7rem' }}>
            <EmailIcon sx={{ marginRight: '0.5rem' }} />
            <Typography variant="body1">contact@fudexmarketplace.com</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            <PhoneIcon sx={{ marginRight: '0.5rem' }} />
            <Typography variant="body1">+1 234 567 8901</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            <PhoneIcon sx={{ marginRight: '0.5rem' }} />
            <Typography variant="body1">+1 987 654 3210</Typography>
          </Box>
        </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUsSection;