import { Grid, Typography } from '@mui/material'
import React from 'react'
import ContactDetails from '../contact-details/contact-details'

const PersonalDetails = () => {
  return (
    <Grid container>
        <Grid xs={12} sx={{p:2}}>
        <ContactDetails/>
        </Grid>

    </Grid>
  )
}

export default PersonalDetails
