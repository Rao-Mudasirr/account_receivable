import * as React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import "./global-search-filter.scss"
import { BorderBottom } from '@mui/icons-material';

export const GlobalSearchBar = ({ value, onChange }) => {
  const [isFocused, setIsFocused] = React.useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <TextField
      id="standard-search"
      type="search"
      variant="standard"
      placeholder="Search"
      value={value}
      onChange={onChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      sx={{
        width: 333,
        '& .MuiInputBase-root': {
          color: isFocused ? 'black' : 'inherit',
          '&::before': {
            borderBottomColor: isFocused ? 'black' : '#C4C4CC',
          },
          '&::after': {
            borderBottomColor: isFocused ? 'black' : '#C4C4CC',
          },
          '&:hover::before': {
            borderBottomColor: isFocused ? 'black' : '#C4C4CC',
          },
        },
        '@media (max-width: 600px)': {
          width: '100%', 
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ width: 20, height: 20, color: '#777777'}} />
          </InputAdornment>
        ),
        classes: {
          clearIndicator: 'custom-clear-icon', // Add a custom class name for the clear icon
        },
      }}
    />
  );
};
