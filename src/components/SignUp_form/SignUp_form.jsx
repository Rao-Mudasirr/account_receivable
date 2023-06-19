import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Select } from '@mui/material';
import { TextField } from 'formik-material-ui'
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import ErrorIcon from '@mui/icons-material/Error';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { Link, useNavigate } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import './signUp.scss'

const names = [
  'Account Payable (I want to pay vendors)',
  'Account Receivable (I want to send bills)',
  'Cash Flow (I want to manage cash)',
  'All',
];


const validationSchema = Yup.object().shape({
  fullName: Yup.string().required(<div style={{
    fontFamily: 'Exo 2',
    fontSize: '12px',
    display: 'flex',
    alignItems: 'end',
    position: 'absolute',
    color: 'rgba(255, 85, 85, 1)'
  }}>
    <ErrorIcon fontSize="small" sx={{ mr: 0.5, mb: 0.3, transform: 'rotate(180deg)' }} />
    Please Enter Full Name(First and Last Name)</div>),
  email: Yup.string()
    .email((<div style={{
      fontFamily: 'Exo 2',
      fontSize: '12px',
      display: 'flex',
      alignItems: 'end',
      position: 'absolute',
      color: 'rgba(255, 85, 85, 1)'
    }}>
      <ErrorIcon fontSize="small" sx={{ mr: 0.5, mb: 0.3, transform: 'rotate(180deg)' }} />
      Please Enter a Valid email Address</div>))
    .required(<div style={{
      fontFamily: 'Exo 2',
      fontSize: '12px',
      display: 'flex',
      alignItems: 'end',
      position: 'absolute',
      color: 'rgba(255, 85, 85, 1)'
    }}>
      <ErrorIcon fontSize="small" sx={{ mr: 0.5, mb: 0.3, transform: 'rotate(180deg)' }} />
      Please Enter a Valid email Address</div>),
  password: Yup.string().min(6, true).required(true),
  checkbox: Yup.array().min(2, 'Please choose at least one option').required('Please select an option'),
})

const labelstyles = theme => ({
  root: {
    '& .MuiFormControlLabel-label': {
      fontSize: '14px',
      fontWeight: '400',
      fontFamily: 'Exo 2',
      color: '#4C4C4C'
    },
  },
});

const MenuItemStyle = withStyles(labelstyles)(MenuItem);

const checkBoxStyles = theme => ({
  root: {
    '&$checked': {
      color: 'black',
    },
  },
  checked: {},
})

const CustomCheckbox = withStyles(checkBoxStyles)(Checkbox);


export default function MySignUpForm(props) {
  const navigate = useNavigate()
  const initialValues = {
    fullName: '',
    email: '',
    password: '',
    checkbox: [""],
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (values) => {
    // Handle form submission here
    console.log(values);
    navigate("/sign-up-2")
  };

  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    if (value.includes('All')) {
      setPersonName(names.filter((name) => name !== 'All'));
    } else {
      setPersonName(value);
    }
  };


  let isAllSelected = personName.length === names.length - 1;

  return (
    <div className="height-100vh flex align-center justify-center">
      <Box
        sx={{
          width: 600,
          borderRadius: '16px',
          p: '25px',
          border: '1px solid rgba(204, 204, 204, 0.5)',
          filter: 'dropShadow(0px 0px 4px rgba(204, 204, 204, 0.1))',
          borderRadius: '16px'
        }}
      >
        <div className="heading">
          <span style={{ color: '#4C4C4C', marginRight: '10px' }}>Welcome to</span>
          Accountants Pact!
        </div>
        <div className="text-mute">
          Let's Get Started
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ values, errors, touched, setFieldValue }) => (

            < Form >
              <Grid container spacing={7}>
                <Grid item xs={12} sx={{ height: '75px' }} >
                  <div className="fields">
                    <div className="label">
                      <label htmlFor="fullName"
                        style={{ color: touched.fullName && errors.fullName ? "rgba(255, 85, 85, 1)" : "#4C4C4C" }}>
                        <span
                          style={{ color: 'rgba(255, 85, 85, 1)', marginTop: '-5px' }}>*</span>
                        Full Name</label>
                    </div>
                    <Field
                      sx={styles.field__color}
                      component={TextField}
                      id="fullName"
                      variant="standard"
                      fullWidth
                      type="text"
                      placeholder="Enter Full Name"
                      name="fullName"
                      position='absolute'
                      InputProps={{
                        style: {
                          fontSize: '14px',
                          paddingLeft: '20px'
                        }
                      }}
                    />
                  </div>
                </Grid>

                <Grid item xs={12} sx={{ height: '75px', mt: '2rem' }}>
                  <div>
                    <div className="label">
                      <label htmlFor="email"
                        style={{ color: touched.email && errors.email ? "rgba(255, 85, 85, 1)" : "#4C4C4C" }}>
                        <span
                          style={{ color: "rgba(255, 85, 85, 1)", marginTop: '-5px' }}>*</span>
                        Business Email</label>
                    </div>
                    <Field
                      sx={styles.field__color}
                      component={TextField}
                      id="email"
                      variant="standard"
                      fullWidth
                      placeholder="Enter Email"
                      type="email"
                      name="email"
                      InputProps={{
                        style: {
                          fontSize: '14px',
                          paddingLeft: '20px'
                        }
                      }}
                    />
                  </div>
                </Grid>

                <Grid item xs={12} sx={{ height: '75px', mt: '2rem' }}>
                  <div>
                    <div className="label">
                      <label htmlFor="password"
                        style={{ color: touched.password && errors.password ? "rgba(255, 85, 85, 1)" : "#4C4C4C" }}
                      >
                        <span
                          style={{ color: "rgba(255, 85, 85, 1)", marginTop: '-5px' }}>*</span>
                        Create Password</label>

                    </div>
                    <Field
                      sx={styles.field__color}
                      component={TextField}
                      id="password"
                      variant="standard"
                      fullWidth
                      placeholder="Enter Password"
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      InputProps={{
                        style: {
                          fontSize: '14px',
                          paddingLeft: '20px'
                        },
                        endAdornment: (
                          <InputAdornment>
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                              sx={{ margin: 0.7, pb: 2 }}
                            >
                              {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <span className="password__text">The password must be at least 6 characters</span>
                  </div>
                </Grid>


                <Grid item xs={12} sx={{ height: '75px', mt: '2rem' }}>
                  <Form>
                    <Box>
                      <div className="label">
                        <label htmlFor="checkbox" style={{ color: touched.checkbox && errors.checkbox ? 'rgba(255, 85, 85, 1)' : '#4C4C4C' }}>
                          <span style={{ color: 'rgba(255, 85, 85, 1)', marginTop: '-5px' }}>*</span>
                          Why are you signing up for Accountant Pact?
                        </label>
                      </div>
                      <Field 
                        component={Select}
                        fullWidth
                        placeholderText="Select"
                        variant="standard"
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        name="checkbox"
                        InputProps={{
                          style: {
                            fontSize: '14px',
                            paddingLeft: '20px',
                            ...styles.field__color()
                          },
                        }}
                        SelectDisplayProps={{
                          style: styles.field__color() 
                        }}
                        value={values.checkbox}
                        renderValue={(selected) => {
                          if (selected.includes('All')) {
                            return 'All';
                          }
                          return selected.join(', ');
                        }}
                      >
                        {names.map((name) => (
                          <MenuItemStyle onClick={() => {
                            name === "All" ? values.checkbox.includes(name)
                              ? setFieldValue('checkbox', []) : setFieldValue('checkbox', names)
                              : values.checkbox.includes(name) ? setFieldValue('checkbox',
                                values.checkbox.filter(item => item !== name)) :
                                setFieldValue('checkbox', [...values.checkbox, name]);
                            console.log(values.checkbox);
                          }} key={name} value={name}>
                            <CustomCheckbox
                              checked={values.checkbox.includes(name)}
                            />
                            <ListItemText primary={name} />
                          </MenuItemStyle>
                        ))}
                      </Field>
                    </Box>
                  </Form>
                  {touched.checkbox && errors.checkbox && (
                    <div
                      style={{
                        color: touched.checkbox && errors.checkbox ? 'rgba(255, 85, 85, 1)' : 'black',
                        fontFamily: 'Exo 2',
                        fontSize: '12px',
                        fontWeight:'600',
                        display: 'flex',
                        alignItems: 'end',
                        position: 'absolute',
                        color: 'rgba(255, 85, 85, 1)',
                      }}
                    >
                      <ErrorIcon fontSize="small" sx={{ mr: 0.5, mt:'2px', transform: 'rotate(180deg)',  }} />
                     <span style={{marginBottom:'3px'}}> Please Select an Option</span>
                    </div>
                  )}
                </Grid>
                <Grid item xs={12} sx={{ mt: '40px' }}>
                  {/* <Link to="/sign-up-2"> */}
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
                    Continue
                  </Button>
                  {/* </Link> */}
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Box>
    </div >
  );
}



//style

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