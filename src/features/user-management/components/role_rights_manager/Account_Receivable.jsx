import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import './manager.css';

const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    border: "3px solid rgba(255,255,255,.35)",
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    backgroundColor: 'dark',
    border: "3px solid dark",
    width: 16,
    height: 16,
    margin: 2,
  },
  '& .MuiSwitch-switchBase.Mui-checked': {
    backgroundColor: 'dark',
  },
}));



export default function Account_Receivable({ setCheckDisabled, checkDisabled,switchOption,setSwitchOption,formControlData }) {

  return (
    <FormGroup>
      <div>
        {formControlData.map((item, index) => {
          return (
            <div key={index}>
              <FormControlLabel
                control={<Android12Switch value={checkDisabled} 
                onChange={() => setCheckDisabled(!checkDisabled)} 
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