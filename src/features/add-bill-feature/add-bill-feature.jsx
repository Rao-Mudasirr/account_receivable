import { Button, Grid, InputAdornment, TextField } from '@mui/material'
import React, { useState } from 'react'
import { CustomField } from './custom-field/custom-field'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { CustomDatePicker } from '../../components/custom-date-picker/custom-date-picker'
import { DashboardSelect } from '../dashboard-select/dashboard-select'

export const AddBillFeature = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [selectBranch, setSelectBranch] = useState("");
    return (
        <>
            <Grid container justifyContent="space-between" spacing={3}>
                <Grid item xs={5.5}>
                    <CustomField label="Invoice Number" id="invoice-number">
                        <TextField
                            id="invoice-number"
                            className="font-family-Exo"
                            placeholder="Enter Invoice Number"
                        />
                    </CustomField>
                </Grid>
                <Grid item xs={5.5} >
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
                <Grid item xs={5.5}>
                    <CustomField label="Amount" id="amount">
                        <TextField
                            id="amount"
                            className="font-family-Exo"
                            placeholder="Enter Amount"
                            type='number'
                            InputProps={{
                                startAdornment: <InputAdornment className='flex justify-center align-center font-family-Exo border-radius-5' sx={{ border: '2px solid #777', width: '24px', height: '24px', color: '#777', fontSize: '12px' }}>£</InputAdornment>
                            }}
                        />
                    </CustomField>
                </Grid>
                <Grid item xs={5.5}>
                    <CustomField label="Currency" id="currency">
                        <DashboardSelect id="currency" placeholder="Select Currency" fullWidth={true} MenuSx={{ ".MuiMenuItem-root": { color: '#6B6B80', fontSize: '14px', fontWeight: 400 }, marginTop: '10px', boxShadow: '0px 6px 6px 6px #DEDEDE40', borderRadius: '8px', ".MuiList-root": { p: '0', }, ".Mui-selected": { bgcolor: '#F0F0F2 !important' }, ".Mui-selected:hover": { bgcolor: '#F0F0F2' } }} selectSx={{ ".MuiOutlinedInput-notchedOutline": { borderBottom: '1.6px solid #C4C4CC !important' }, '.MuiSelect-select': { p: '10.5px 14px', fontWeight: '400', color: '#40404D', fontSize: '15px' }, '.MuiSelect-icon': { top: '40%' }, }} selectVal={selectBranch} setSelectVal={setSelectBranch} data={["Branch 1", "Branch 2", "Branch 3", "Branch 4"]} />
                    </CustomField>
                </Grid>
                <Grid item xs={5.5}>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <CustomField label="Choose a Vendor" id="vendor">
                                <DashboardSelect id="vendor" placeholder="Select Vendor" fullWidth={true} MenuSx={{ ".MuiMenuItem-root": { color: '#6B6B80', fontSize: '14px', fontWeight: 400 }, marginTop: '10px', boxShadow: '0px 6px 6px 6px #DEDEDE40', borderRadius: '8px', ".MuiList-root": { p: '0', }, ".Mui-selected": { bgcolor: '#F0F0F2 !important' }, ".Mui-selected:hover": { bgcolor: '#F0F0F2' } }} selectSx={{ ".MuiOutlinedInput-notchedOutline": { borderBottom: '1.6px solid #C4C4CC !important' }, '.MuiSelect-select': { p: '10.5px 14px', fontWeight: '400', color: '#40404D', fontSize: '15px' }, '.MuiSelect-icon': { top: '40%' }, }} selectVal={selectBranch} setSelectVal={setSelectBranch} data={["Branch 1", "Branch 2", "Branch 3", "Branch 4"]} />
                            </CustomField> 
                        </Grid>
                        <Grid item xs={4}>
                            <Button sx={{
                                variant: 'outlined', sx: {
                                    mr: 2, whiteSpace: 'nowrap', color: "#40404D", border: "1.5px solid #40404D !important", height: '32px', borderRadius: "8px",
                                    "&:hover": {
                                        border: '2px solid #40404D !important'
                                    },
                                }, className: 'buttons-filters font-family-Exo font-weight-400 tertiary-title'
                            }}>
                                Create New Vendor
                            </Button>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </>
    )
}
