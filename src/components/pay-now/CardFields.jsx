import React, { useState } from 'react';
import { Box, Grid, Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import { ReactComponent as Down } from '../../assests/svg/chev-bottom.svg';
import { TextField } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Typography } from '@mui/material';
import dayjs from 'dayjs';


const PaynowCardData = [
  {
      id:'0',
      carduNmber:'1234 5231 6547 3214',
      cvnNumber: '4411',
      date:'18/23',
      password:'*********'
  },
  {
      id:'1',
      carduNmber:'1234 5231 6547 5555',
      cvnNumber: '3021',
      date:'19/23',
      password:'*********'
  },
]


const CardFields = () => {
  const [startDate, setStartDate] = useState();
  let formatDate = dayjs(startDate).format('MM/YY')



  return (
    <>
      <Grid container className="margin-top-3">
        <Grid container xs={7} className='justify-center'>
          <Grid item xs={10}>
            <label htmlFor="Card-number" className="secondary-color font-family-Exo">
              Card Number
            </label>
            <Select
              sx={{
                mt: '10px',
                '&:before': {
                  borderColor: '#C4C4CC',
                },
                '&:after': {
                  borderColor: '#C4C4CC',
                },
                '& .MuiSelect-select': {
                  padding: '10px',
                  color: '#6B6B80',
                },
              }}
              placeholder="Card Number Format"
              fullWidth
              variant="standard"
              IconComponent={Down}
            >
              <MenuItem value="Card-1">Bank XYZ - Card : 1234 5432 1234 2345</MenuItem>
            </Select>
          </Grid>
          <Grid container xs={10} className="justify-space-between">
            <Grid xs={5} sx={{ mt: 8 }}>
              <label htmlFor="Card-number" className="secondary-color font-family-Exo">
                CVN Number
              </label>
              <TextField
                sx={styles.field__color}
                className="fields"
                fullWidth
                id="standard-basic"
                variant="standard"
              />
            </Grid>
            <Grid xs={5} className="margin-top-3">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker', 'DatePicker']}>
                  <Box
                    sx={{
                      display: 'flex',
                      gap: '10px',
                      '@media (max-width: 600px)': {
                        width: 'auto',
                        flexDirection: 'column',
                      },
                    }}
                  >
                    <div style={{ flex: '1' }}>
                      <Typography className="font-family-exo2 secondary-color primary-title">
                        Expiry Date
                      </Typography>
                      <DatePicker value={startDate} onChange={(d) => { setStartDate(d) }} format="MM/YY" />
                    </div>
                  </Box>

                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid xs={12} sx={{ mt: 8 }}>
              <label htmlFor="Card-number" className="secondary-color font-family-Exo">
                Password
              </label>
              <TextField
                sx={styles.field__color}
                className="fields"
                fullWidth
                id="standard-basic"
                variant="standard"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5} className='flex justify-center align-center'>
          <Box sx={{
            width: '422px',
            height: '247px',
            borderRadius: '12px',
            border: '2px dashed #A6A6B3'
          }}>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default CardFields;

const styles = {
  field__color: () => ({
    marginTop: '20px',
    '& label': {
      color: 'black',
    },
    '& label.Mui-focused': {
      color: 'black',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'black',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#747070',
      },
      '&:hover fieldset': {
        borderColor: 'black',
        borderWidth: '0.15rem',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'black',
      },
    },
  }),
};
