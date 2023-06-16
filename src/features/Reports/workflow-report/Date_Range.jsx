import React, { useState } from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Typography } from '@mui/material';

function Date_Range() {

    const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [error, setError] = useState(null);

  const handleDateChange = (date, label) => {
    if (label === "Start date") {
      setStartDate(date);
    } else if (label === "End Date") {
      setEndDate(date);
    }
  };

  const handleClearClick = () => {
    setStartDate(null);
    setEndDate(null);
    setError(null);
  };

  return (
    <div>
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker", "DatePicker"]}>
              <DatePicker
                label="From"
                value={startDate}
                onChange={(date) => handleDateChange(date, "Start date")}
              />
              <DatePicker
                label="To"
                value={endDate}
                onChange={(date) => handleDateChange(date, "End Date")}
              />
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <Typography style={{ color: "red", marginBottom: "8px" }}>
          {error}
        </Typography>
    </div>
  )
}

export default Date_Range