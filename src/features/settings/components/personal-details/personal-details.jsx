import { Grid, Typography } from '@mui/material'
import React from 'react'

const PersonalDetails = () => {
  return (
    <Grid container>
        <Grid xs={12} sx={{p:2}}>

<Typography variant='h6' className=' font-family-exo2 sub-heading tertiary-color '>
Personal Details
</Typography>
        </Grid>

    </Grid>
  )
}

export default PersonalDetails
