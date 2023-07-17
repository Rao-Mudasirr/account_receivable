import { Grid } from '@mui/material'
import React from 'react'
import FilteredBy from '../components/filtered-by/FilteredBy'

const VTAmanagement = () => {
    return (
        <>
            <Grid container xs={12}>
                <Grid item xs={6}>
                    <label htmlFor="vat-management" className='font-weight-600 heading-20 font-family-Exo primary-color'>VAT Management</label>
                    <FilteredBy />
                </Grid>
                <Grid item xs={6}>

                </Grid>
            </Grid>
        </>
    )
}

export default VTAmanagement