import { Button, Grid } from '@mui/material';
import React from 'react'
import { AddBillModal } from '../add-bill-modal/add-bill-modal';

export const BillManagement = () => {
    return (
        <>
            <Grid container>
                <Grid item className="flex justify-end" xs={12}>
                    <AddBillModal/>
                </Grid>
            </Grid>
        </>
    )
}
