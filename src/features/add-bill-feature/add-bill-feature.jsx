import { Grid } from '@mui/material'
import React from 'react'
import { CustomField } from './custom-field/custom-field'

export const AddBillFeature = () => {
    return (
        <>
            <Grid container>
                <Grid item xs={6}>
                    <CustomField />
                </Grid>
            </Grid>
        </>
    )
}
