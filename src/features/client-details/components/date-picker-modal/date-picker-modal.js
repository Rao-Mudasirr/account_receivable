import React, { useState } from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Typography} from '@mui/material';
  import "./date-picker-modal.scss"


const DatePickerModal=( )=> {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  

  const handleDateChange = (date, label) => {
    if (label === 'Start date') {
      setStartDate(date);
    } else if (label === 'End Date') {
      setEndDate(date);
    }
  };

  return (
    <div>
       <div style={{ marginTop: '20px' }}>
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DemoContainer components={['DatePicker', 'DatePicker']}>
      <div style={{ display: 'flex',gap:'10px' }}>
        <div style={{ flex: '1' }}>
          <Typography>From</Typography>
          <DatePicker
            label="Start date"
            variant="standared"
            value={startDate}
            onChange={(date) => handleDateChange(date, 'Start date')}
            sx={{mt:2}}
            
          />
        </div>
        <div style={{ flex: '1' }}>
          <Typography>To</Typography>
          <DatePicker
            label="End Date"
            value={endDate}
            onChange={(date) => handleDateChange(date, 'End Date')}
            sx={{mt:2}}
          />
        </div>
      </div>
    </DemoContainer>
  </LocalizationProvider>
</div>

    </div>
  )
}

export default DatePickerModal