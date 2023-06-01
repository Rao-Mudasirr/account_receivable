import React, { useState } from 'react';
import {  TextField } from '@mui/material';


const DateRangeFilter = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleFilterClick = () => {
    // Handle filter logic here
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
    // Perform filtering based on the selected date range
  };

  return (
    <div>
      <TextField
     
        type="date"
        value={startDate}
        onChange={handleStartDateChange}
       
      />
      <TextField
     
        type="date"
        value={endDate}
        onChange={handleEndDateChange}
       
      />
      <button onClick={handleFilterClick}>Filter</button>
    </div>
  );
};

export default DateRangeFilter;
