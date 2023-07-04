import { Grid, InputAdornment, TextField } from '@mui/material'
import React, { useState } from 'react'
import { CustomField } from './custom-field/custom-field'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { CustomDatePicker } from '../../components/custom-date-picker/custom-date-picker'

export const AddBillFeature = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    return (
        <>
            <Grid container justifyContent="space-between" spacing={3}>
                <Grid item xs={5}>
                    <CustomField label="Invoice Number" id="invoice-number">
                        <TextField
                            id="invoice-number"
                            className="font-family-Exo"
                            placeholder="Enter Invoice Number"
                        />
                    </CustomField>
                </Grid>
                <Grid item xs={6} >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <CustomField label="Issue Date" id="Issue-Date">
                                    <CustomDatePicker dateValue={startDate} placeholder="Date" setDateValue={setStartDate} />
                                </CustomField>
                            </Grid>
                            <Grid item xs={6}>
                                <CustomField label="Bill Due Date" id="Bill-Due-Date">
                                    <CustomDatePicker dateValue={endDate} placeholder="Date" setDateValue={setEndDate} />
                                </CustomField>
                            </Grid>
                        </Grid>
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={5}>
                    <CustomField label="Invoice Number" id="invoice-number">
                        <TextField
                            id="invoice-number"
                            className="font-family-Exo"
                            placeholder="Enter Invoice Number"
                            type='number'
                            InputProps={{
                                startAdornment:<InputAdornment className='flex justify-center align-center font-family-Exo border-radius-5' sx={{border:'2px solid #777',width:'24px',height:'24px',color:'#777',fontSize:'12px'}}>£</InputAdornment>
                            }}
                        />
                    </CustomField>
                </Grid>
            </Grid>
        </>
    )
}
