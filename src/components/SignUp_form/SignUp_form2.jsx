import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';
import {
  Button, Checkbox,
  FormControlLabel, Grid,
  IconButton, InputAdornment,
  FormGroup,
} from '@mui/material';
import { withStyles } from '@material-ui/core';
import Box from '@mui/material/Box';
import ErrorIcon from '@mui/icons-material/Error';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './signUp.css'

const validationSchema = Yup.object().shape({
  number: Yup.string()
    .matches(/^\d+$/, 'Please enter digits only')
    .min(7, 'Please enter a valid registration number')
    .max(30, 'Maximum number limit exceeded')
    .required(<div style={{
        fontFamily: 'Exo 2',
        fontSize: '14px',
        marginTop: '8px',
        display: 'flex',
        alignItems: 'end',
        position: 'absolute',
        color: 'rgba(255, 85, 85, 1)'
      }}>
        <ErrorIcon fontSize="small" sx={{ mr: 0.5, mb: 0.4, transform: 'rotate(180deg)' }} />
        Please Enter Registration Number</div>),

  mobile: Yup.string()
    .matches(/^\d+$/, 'Please enter digits only')
    .min(7, 'Please enter a valid mobile number')
    .max(30, 'Maximum number limit exceeded')
    .required(<div style={{
        fontFamily: 'Exo 2',
        fontSize: '14px',
        marginTop: '8px',
        display: 'flex',
        alignItems: 'end',
        position: 'absolute',
        color: 'rgba(255, 85, 85, 1)'
      }}>
        <ErrorIcon fontSize="small" sx={{ mr: 0.5, mb: 0.4, transform: 'rotate(180deg)' }} />
        Please Enter your Phone Number</div>),
});

const MyForm = () => {
  const [showNumber, setShowNumber] = useState(false);

  const handleClickshowNumber = () => {
    setShowNumber((show) => !show);
  };

  const handleMouseDownNumber = (event) => {
    event.preventDefault();
  };

  const initialValues = {
    number: '',
    mobile: '',
  };

  const handleSubmit = (values) => {
    // Handle form submission here
    console.log(values);
  };


  const labelstyles = theme => ({
    root: {
      '& .MuiFormControlLabel-label': {
        fontSize: '14px',
        fontWeight:'400',
        fontFamily:'Exo 2',
        color:'#4C4C4C'
      },
    },
  });
  
  const LabelStyle = withStyles(labelstyles)(FormControlLabel);

const checkBoxStyles = theme => ({
    root: {
      '&$checked': {
        color: 'black',
      },
    },
    checked: {},
   })

const CustomCheckbox = withStyles(checkBoxStyles)(Checkbox);

  return (
    <div className="container">
      <Box
        sx={{
          width: 600,
          borderRadius: '16px',
          p: '25px',
          boxShadow: '0 0 0 0.3px',
        }}
      >
        <div className="heading">
          <span style={{ color: '#4C4C4C', marginRight: '10px' }}>Welcome to</span>
          Accountants Pact!
        </div>
        <div className="text-mute">Let’s Get Started</div>
        <div style={{ fontFamily: 'Exo 2', fontWeight: '400', color: '#7F7F7F', marginBottom: '10px' }}>
          Select Product
        </div>
        <div>
          <FormGroup aria-label="position" row sx={{ mb: '60px',gap:'33px' }}>
            <LabelStyle control={<CustomCheckbox  />} label="Account Payable" />
            <LabelStyle control={<CustomCheckbox />} label="Account Receivable" />
            <LabelStyle control={<CustomCheckbox />} label="Cash Flow" />
          </FormGroup>
        </div>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
          {({ errors, touched }) => (
            <Form>
              <Grid container spacing={7}>
                <Grid item xs={12}>
                  <div>
                    <div className="label">
                      <label htmlFor="number" style={{ color: touched.number && errors.number ? 'rgba(255, 85, 85, 1)' : '#4C4C4C' }}>
                        <span style={{ color: 'rgba(255, 85, 85, 1)', marginTop: '-5px' }}>*</span>
                        Create Password
                      </label>
                    </div>
                    <Grid item xs={12}>
                      <Field
                        component={TextField}
                        id="number"
                        variant="standard"
                        fullWidth
                        placeholder="Enter Registration Number"
                        type={showNumber ? 'text' : 'password'}
                        name="number"
                        InputProps={{
                          style: {
                            fontSize: '14px',
                            paddingLeft: '20px',
                          },
                          endAdornment: (
                            <InputAdornment>
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickshowNumber}
                                onMouseDown={handleMouseDownNumber}
                                edge="end"
                                sx={{ margin: 0.7, pb: 2 }}
                              >
                                {showNumber ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        sx = {{
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
                          }}
                      />
                    </Grid>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div>
                    <div className="label">
                      <label htmlFor="companyName">Company Name</label>
                    </div>
                    <Field
                      component={TextField}
                      id="companyName"
                      variant="filled"
                      size="small"
                      fullWidth
                      margin="none"
                      name="companyName"
                      InputProps={{
                        startAdornment: <InputAdornment sx={{p: '15px', mb:'15px'}}>-</InputAdornment>,
                        variant: 'standard',
                        disableUnderline: true,
                      }}
                    />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div>
                    <label
                      htmlFor="mobile"
                      style={{
                        color: touched.mobile && errors.mobile ? 'rgba(255, 85, 85, 1)' : '#4C4C4C',
                      }}
                    >
                      <span style={{ color: 'rgba(255, 85, 85, 1)', marginTop: '-5px' }}>*</span>
                      Phone Number
                    </label>
                    <Field
                      component={TextField}
                      id="mobile"
                      variant="standard"
                      fullWidth
                      placeholder="Enter Mobile Number"
                      type="text"
                      name="mobile"
                      InputProps={{
                        style: {
                          fontSize: '14px',
                          paddingLeft: '20px',
                        },
                      }}
                      sx = {{
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
                      }}
                    />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    type="submit"
                    sx={{
                      borderRadius: '8px',
                      mt: 1,
                      background: '#2B2B33',
                      color: 'white',
                      '&:hover': {
                        background: 'black',
                        color: 'white',
                        border: '1px solid black',
                      },
                    }}
                  >
                    Sign Up
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Box>
    </div>
  );
};

export default MyForm;
