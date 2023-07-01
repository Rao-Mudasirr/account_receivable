import React from 'react';
import { Grid } from '@mui/material';
import  DetailsFields from './DetailsFields';
import './details.scss'

const DetailsPage = () => {
  return (
    <Grid container xs={8} padding={2}>
      <Grid item>
        <label className='details_label'>Preview</label>
      </Grid>
      <Grid
        item xs={12}
        sx={{
          width: '760px',
          height: '180px',
          mt:'10px',
          mb: '3rem',
          boxShadow: 'inset 0px 0px 15px rgba(0, 0, 0, 0.2)',
          display:'block'
        }}
      ></Grid>
      <DetailsFields/>
    </Grid>
  );
};

export default DetailsPage;
