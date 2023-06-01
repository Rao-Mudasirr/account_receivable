import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import './manager.css';

const Data = [
  {
    id: "admin Right",
    heading: "Admin Right"
  }
]
const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  '& .MuiSwitch-track' : {
    borderRadius: 22 / 2,
    border: "1px solid black",
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'black' ? 'gray' : 'white',
    boxSizing: 'border-box',
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    backgroundColor: 'black',
    border: "3px solid dark",
    width: 16,
    height: 16,
    margin: 2,
  },
  '& .MuiSwitch-switchBase.Mui-checked': {
    backgroundColor: 'dark',
  },
}));



export default function Account_Receivable({ setCheckDisabled, checkDisabled,switchOption,setSwitchOption}) {

  return (
    <FormGroup>
      <div>
        {Data.map((item, index) => {
          return (
            <div key={index}>
              <FormControlLabel
                control={<Android12Switch
                color='default' />}
              />
              <span
                id={item.id}
                onClick={() => setSwitchOption(item.id)}
                className={`text ${switchOption === item.id ? 'active' : ''}`}
              >
                {item.heading}
              </span>
            </div>
          )
        })}
         
      </div>

    </FormGroup>
  );
}