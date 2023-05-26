import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';


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



export default function Account_Payable() {

  return (
    <FormGroup>
    <FormControlLabel
    control={<Android12Switch color='default'/>}
    label="Dashboard"
  />
  <FormControlLabel
    control={<Android12Switch color='default'/>}
    label="Invoices"
  />
    </FormGroup>
  );
}