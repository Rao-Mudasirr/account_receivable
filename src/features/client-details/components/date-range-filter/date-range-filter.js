import React, { useState } from 'react';
import { TextField, Modal, Button, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const DateRangeFilter = ({ open, onClose }) => {
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


  const handleClearClick = () => {
    setStartDate('');
    setEndDate('');
  };


  const modalStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Change the background color here
    padding: '16px',
  };

  const contentStyle = {
    backgroundColor: '#FFFFFF', // Change the background color here
    borderRadius: '8px',
    boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.16)',
    width: '400px',
    padding: '16px',
    position: 'relative',
  };

  const headingStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  };

  const closeButtonStyle = {
    cursor: 'pointer',
    color: '#000000',
  };

  const filterContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '16px',
  };

  const clearButtonStyle = {
    color: '#000000',
    borderColor: '#000000',
    marginRight: '8px',
    '&:hover': {
      borderColor: '#000000',
      color: '#000000',
    },
  };

  const applyButtonStyle = {
    color: '#FFFFFF',
    background: '#000000',
    '&:hover': {
      background: '#000000',
      color: '#FFFFFF',
    },
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="date-range-filter-modal"
      style={modalStyle}
      BackdropProps={{
        style: {
          backgroundColor: 'transparent',
        },
      }}
    >
      <div style={contentStyle}>
        <div style={headingStyle}>
          <Typography variant="h6" component="div">
            Filter
          </Typography>
          <CloseIcon onClick={onClose} style={closeButtonStyle} />
        </div>
        <div style={filterContainerStyle}>
          <div style={{ display: 'flex', gap: '16px' }}>
            <TextField
              variant="standard"
              type="date"
              value={startDate}
              onChange={handleStartDateChange}
            />
            <TextField
              variant="standard"
              type="date"
              value={endDate}
              onChange={handleEndDateChange}
            />
          </div>
          <div style={buttonContainerStyle}>
            <Button
             variant="outlined"
             color="primary"
             onClick={handleClearClick}
             sx={clearButtonStyle}
            //  startIcon={<ClearIcon />}
            >
              Clear
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleFilterClick}
              disabled={!startDate || !endDate}
              sx={applyButtonStyle}
            >
              Apply
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DateRangeFilter;
