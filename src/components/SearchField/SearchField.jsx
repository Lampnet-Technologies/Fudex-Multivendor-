import React from 'react';
import { Grid, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchField = ({ handleAddressChange, address }) => {
  return (
    <Grid container spacing={1} alignItems="flex-start" justifyContent="flex-start" sx={{ marginTop: '2rem' }}>
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
  );
};

export default SearchField;
