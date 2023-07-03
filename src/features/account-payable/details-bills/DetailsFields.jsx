import React, { useState } from 'react'
import { Grid, Select, TextField } from '@mui/material'
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import './details.scss'


const DetailsFields = () => {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [error, setError] = useState(null);

    const handleDateChange = (date, label) => {
        if (label === "Start date") {
            setStartDate(date);
        } else if (label === "End Date") {
            setEndDate(date);
        }
    };


    const handleClearClick = () => {
        setStartDate(null);
        setEndDate(null);
        setError(null);
    };

    return (
        <>
            <Grid container xs={12} className='justify-space-between'>
                <Grid item xs={5}>
                    <label className='details_label'>Invoice Number</label>
                    <TextField
                        sx={styles.field__color}
                        className="fields"
                        fullWidth
                        id="standard-basic"
                        variant="standard"
                        inputProps={{
                            style: {
                                height: '40px',
                            },
                        }}
                    />
                </Grid>

                <Grid item xs={5}
                    sx={{ display: 'flex' }}
                >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <div className="details_dates">
                            <label className='details_label'>Issue Date</label>
                            <DatePicker
                                sx={{
                                    paddingRight: "20px",
                                    ".MuiInputBase-input ": {
                                        p: "13px",
                                        fontFamily: `'Exo 2', "Roboto", "sans-serif"`,
                                        color: startDate ? "#40404D" : "#A6A6B3",
                                    },
                                }}
                                slots={{
                                    openPickerIcon: CalendarMonthRoundedIcon,
                                }}
                                slotProps={{ textField: { placeholder: "From" } }}
                                variant="standared"
                                value={startDate}
                                onChange={(date) => setStartDate(date)}
                            />
                        </div>
                        <div className="details_dates">
                            <label className='details_label'>Bill Due Date</label>
                            <DatePicker
                                sx={{
                                    paddingRight: "20px",
                                    ".MuiInputBase-input ": {
                                        p: "13px",
                                        fontFamily: `'Exo 2', "Roboto", "sans-serif"`,
                                        color: "#A6A6B3",
                                    },
                                }}
                                slotProps={{ textField: { placeholder: "To" } }}
                                slots={{
                                    openPickerIcon: CalendarMonthRoundedIcon,
                                }}
                                value={endDate}
                                onChange={(date) => setEndDate(date)}
                            />
                        </div>
                    </LocalizationProvider>
                </Grid>
            </Grid>
            <Grid container xs={12} className='justify-space-between margin-top-2'>
                <Grid item xs={5}>
                    <label className='details_label'>Payment Source</label>
                    <Select
                        sx={styles.field__color}
                        className="fields custom-select"
                        fullWidth
                        id="standard-basic"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={5}>
                    <label className='details_label'>Payment Method</label>
                    <Select
                        sx={styles.field__color}
                        className="fields custom-select"
                        fullWidth
                        id="standard-basic"
                        variant="standard"
                    />
                </Grid>
            </Grid>
            <Grid container xs={12} className='justify-end margin-top-2'>
                <Grid item xs={5}>
                    <label className='details_label'>Payment Amount</label>
                    <TextField
                        type='number'
                        sx={styles.field__color}
                        className="fields"
                        fullWidth
                        id="standard-basic"
                        variant="standard"
                        inputProps={{
                            style: {
                                height: '40px',
                            },
                        }}
                    />
                </Grid>
            </Grid>
        </>
    )
}
export default DetailsFields

const styles = {
    field__color: () => ({
        '& label': {
            color: 'black',
        },
        '& label.Mui-focused': {
            color: 'black',
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: '#A6A6B3'
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'black'
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'black',
            },
            '&:hover fieldset': {
                borderColor: 'black',
                borderWidth: '0.15rem',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'black',
            },
        },
        '&:before': {
            borderColor: '#A6A6B3',
        },
        '&:after': {
            borderColor: 'gray',
        },
    })
}