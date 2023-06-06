import React, { useState } from 'react';
// import dayjs from 'dayjs';
import { Popper, Typography, Button, useMediaQuery } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const DateRangePicker = ({ isOpenDatePicker, onCloseDatePicker, onApplyDate,anchorEl  }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [error, setError] = useState(null);

  const handleDateChange = (date, label) => {
    if (label === 'Start date') {
        setStartDate(date);
      } else if (label === 'End Date') {
        setEndDate(date);
      }
  };

  const handleApplyClick = () => {
    if (startDate && endDate && startDate.isAfter(endDate)) {
        setError('Please select a valid date range.');
        return;
      }
  
      onApplyDate({ startDate, endDate });
      onCloseDatePicker();
  };

  const handleClearClick = () => {
    setStartDate(null);
    setEndDate(null);
    setError(null);
  };

  return (
    <Popper
    open={isOpenDatePicker}
    anchorEl={anchorEl}
    placement="bottom"
    modifiers={[
      {
        name: 'preventOverflow',
        options: {
          boundary: 'scrollParent',
        },
      },
    ]}
  >
      <div
        style={{
          height: '316px',
          width: '592px',
          borderRadius: '8px',
          background: '#FFFFFF',
          boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.16)',
          padding: '16px',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px',
          }}
        >
          <h3 style={{ color: '#000000', margin: 0 }}>Filters</h3>
          <CloseIcon
            onClick={onCloseDatePicker}
            style={{ cursor: 'pointer', color: '#000000' }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
  <Typography style={{ flex: '1',marginLeft:'2px'}}>From</Typography>
  <Typography style={{ flex: '1' }}>To</Typography>
</div>

        
       <div style={{marginTop:'20px'}}>
       <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker', 'DatePicker']}>
          
            <DatePicker
              label="Start date"
              variant='standared'
              value={startDate}
              onChange={(date) => handleDateChange(date, 'Start date')}
            />
            <DatePicker
              label="End Date"
              value={endDate}
              onChange={(date) => handleDateChange(date, 'End Date')}
            />
          </DemoContainer>
        </LocalizationProvider>
       </div>
         <Typography style={{ color: 'red', marginBottom: '8px' }}>{error}</Typography>
        <div
          style={{
            position: 'absolute',
            bottom: '16px',
            right: '16px',
          }}
        >
           
          <Button
            variant="outlined"
            color="primary"
            onClick={handleClearClick}
            sx={{
              color: '#000000',
              borderColor: '#000000',
              marginRight: '8px',
              '&:hover': {
                borderColor: '#000000',
                color: '#000000',
              },
            }}
          >
            Clear
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleApplyClick}
            disabled={!startDate || !endDate}
            sx={{
              color: '#FFFFFF',
              background: '#000000',
              '&:hover': {
                background: '#000000',
                color: '#FFFFFF',
              },
            }}
          >
            Apply
          </Button>
        </div>
      </div>
      </Popper>
  );
};

export default DateRangePicker;
