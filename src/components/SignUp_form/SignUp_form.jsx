import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Select } from '@mui/material';
import { TextField } from 'formik-material-ui'
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import ErrorIcon from '@mui/icons-material/Error';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import './signUp.scss'

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'All',
];


const validationSchema = Yup.object().shape({
  fullName: Yup.string().required(<span style={{
    fontFamily: 'Exo 2',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'end',
    position: 'absolute',
    color: 'rgba(255, 85, 85, 1)'
  }}>
    <ErrorIcon fontSize="small" sx={{ mr: 0.5, mb: 0.4, transform: 'rotate(180deg)' }} />
    Please Enter Full Name (First and Last Name)</span>),
  email: Yup.string()
    .email('Invalid email address')
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
      Please Enter a Valid email Address</div>),
  password: Yup.string()
    .min(6, "")
    .required(" "),
  checkbox: Yup.array()
    .min(1, 'Please choose at least one option')
    .required(<div
      style={{
        fontFamily: 'Exo 2',
        fontSize: '14px',
        marginTop: '8px',
        display: 'flex',
        alignItems: 'end',
        position: 'absolute',
        color: 'rgba(255, 85, 85, 1)'
      }}
    >
      <ErrorIcon fontSize="small" sx={{ mr: 0.5, transform: 'rotate(180deg)' }} />
      Please Select an Option
    </div>),
})


export default function BoxSx(props) {
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
            <Form>
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
                              {showPassword ? <VisibilityOff /> : <Visibility />}
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
                        sx={styles.field__color}
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
                            paddingLeft: '20px'
                          },
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
                          <MenuItem onClick={() => {
                            name === "All" ? values.checkbox.includes(name)
                              ? setFieldValue('checkbox', []) : setFieldValue('checkbox', names)
                              : values.checkbox.includes(name) ? setFieldValue('checkbox',
                                values.checkbox.filter(item => item !== name)) :
                                setFieldValue('checkbox', [...values.checkbox, name]);
                            console.log(values.checkbox);
                          }} key={name} value={name}>
                            <Checkbox
                              checked={values.checkbox.includes(name)}
                            />
                            <ListItemText primary={name} />
                          </MenuItem>
                        ))}
                      </Field>
                    </Box>
                  </Form>

                </Grid>
                <Grid item xs={12} sx={{ mt: '40px' }}>
                  <Link to="/sign-up-2">
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
                  </Link>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Box>
    </div>
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