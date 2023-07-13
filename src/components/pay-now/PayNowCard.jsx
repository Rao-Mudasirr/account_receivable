import React from 'react'
import { Select, Grid, Button } from '@mui/material'
import MenuItem from '@mui/material/MenuItem';
import { ReactComponent as Down } from "../../assests/svg/chev-bottom.svg";
import CardFields from './CardFields';


const PayNowCard = () => {
    return (
        <>
            <Grid container sx={{width: '1251px', p: 1 }}>
                <label htmlFor="Select" className='font-family-Exo secondary-color margin-top-2'>Select Card</label>
                <Grid container className='justify-space-between margin-top-1'>
                    <Grid item xs={12} lg={8}>
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
                            variant="standard"
                            IconComponent={Down}
                        >
                            <MenuItem value='Card-1'>
                                Bank XYZ - Card : 1234 5432 1234 2345
                            </MenuItem>
                            <MenuItem value='Card-2'>
                                Bank XYZ - Card : 1234 5432 1234 2345
                            </MenuItem>
                            <MenuItem value='Card-3'>
                                Bank XYZ - Card : 1234 5432 1234 2345
                            </MenuItem>
                        </Select>
                    </Grid>
                    <Grid item sx={12}>
                        <Button variant='outlined' sx={{
                            color: '#6B6B80',
                            borderColor: '#6B6B80',
                            px: '15',
                            py: '10',
                            border: '2px solid #6B6B80',
                            fontWeight: 400,
                            fontSize: '12px',
                            borderRadius: '8px',
                            textTransform: 'capitalize',
                            '&:hover': {
                                borderColor: 'black',
                                border: '2px solid black',
                                color: 'black'
                            },
                        }}
                        >
                            Link New Card
                        </Button>
                    </Grid>
                </Grid>
                <CardFields/>
            </Grid>
        </>
    )
}

export default PayNowCard