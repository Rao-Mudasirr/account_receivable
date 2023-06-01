import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import './manager.css';
import { FormControlLabel } from '@mui/material';

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



export default function Account_Payable() {

  return (
    <FormGroup>
      <div>
        
            <div>
              <FormControlLabel
                control={<Android12Switch
                color='default' />}
              />
              <span>
                Accounts
              </span>
            </div>
         
      </div>

    </FormGroup>
  );
}