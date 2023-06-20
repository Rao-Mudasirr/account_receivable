import { Grid, Typography } from '@mui/material'
import React, { useState } from 'react';
import {  MenuItem, FormControl, InputLabel, Select } from '@mui/material';



const BanksIntegration = () => {
    const [selectedGender, setSelectedGender] = useState('');

    const handleGenderChange = (event) => {
      setSelectedGender(event.target.value);
    };
  
    // const renderComponent = () => {
    //   switch (selectedGender) {
    //     case 'HSBCHoldings':
    //       return <HSBCHoldings/>;
    //     case 'LloydsBanking':
    //       return <LloydsBanking />;
    //     case 'RoyalBank':
    //       return <RoyalBank />;
    //       case 'Barclays':
    //       return <Barclays />;
    //     case 'StandardChartered':
    //       return <StandardChartered />;
    //     default:
    //       return null;
    //   }
    // };
  return (
    <Grid container spacing={2}>
    <Grid xl={12}  xs={12} sx={{ p: 5 }}>

        <Typography className='primary-color font-family-exo2 sub-heading ' sx={{fontWeight:600}}>
        Banks and Integrations
        </Typography>
        <Typography className=" tertiary-color primary-title  font-family-exo2 " sx={{fontWeight:400,mt:2}}>
        Connections
        </Typography>
    </Grid>
    <Grid item xl={4} xs={12} sx={{p:10}}>
    <label htmlFor="Bank"  className="secondary-color primary-title font-family-exo2" sx={{fontWeight:400,}} >
      Bank
      </label>
      <FormControl fullWidth size="small">
        <Select
          labelId="gender-label"
          id="gender"
          value={selectedGender}
          onChange={handleGenderChange}
        >
          <MenuItem value="HSBCHoldings">HSBC Holdings</MenuItem>
          <MenuItem value="LloydsBanking">Lloyds Banking Group</MenuItem>
          <MenuItem value="RoyalBank">Royal Bank of Scotland Group</MenuItem>
          <MenuItem value="Barclays">Barclays</MenuItem>
          <MenuItem value="StandardChartered">Standard Chartered</MenuItem>
        </Select>
      </FormControl>

      {/* {renderComponent()} */}
    </Grid>
  </Grid>
  )
}

export default BanksIntegration
