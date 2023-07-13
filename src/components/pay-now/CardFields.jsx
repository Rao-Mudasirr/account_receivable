import React from 'react'
import { Box, Grid, Select } from '@mui/material'
import { MenuItem } from '@mui/material';
import { ReactComponent as Down } from "../../assests/svg/chev-bottom.svg";
import {TextField} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

const CardFields = () => {
    return (
        <>
            <Grid container className='margin-top-3'>
                <Grid container xs={6}>
                    <Grid item xs={12}>
                        <label htmlFor="Card-number" className='secondary-color font-family-Exo'>Card Number</label>
                        <Select
                            sx={{
                                height: '100%',
                                '&:before': {
                                    borderColor: '#C4C4CC',
                                },
                                '&:after': {
                                    borderColor: '#C4C4CC',
                                },
                                '& .MuiSelect-select': {
                                    padding: '10px',
                                    colorL: '#6B6B80'
                                }
                            }}
                            placeholder='Card Number Format'
                            fullWidth
                            variant="filled"
                            IconComponent={Down}
                        >
                            <MenuItem value='Card-1'>
                                Bank XYZ - Card : 1234 5432 1234 2345
                            </MenuItem>
                        </Select>
                    </Grid>
                    <Grid container xs={12} className='justify-space-between'>
                        <Grid xs={5} className='margin-top-3'>
                        <label htmlFor="Card-number" className='secondary-color font-family-Exo'>CVN Number</label>
                            <TextField
                                sx={styles.field__color}
                                className="fields"
                                fullWidth
                                id="standard-basic"
                                variant="filled"
                            />
                        </Grid>
                        <Grid xs={5} className='margin-top-3'>
                        <label htmlFor="Card-number" className='secondary-color font-family-Exo'>Expiry Date</label>
                        
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default CardFields

const styles = {
    field__color: () => ({
      '& label': {
        color: 'black',
      },
      '& label.Mui-focused': {
        color: 'black',
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
    })
  }