import React from 'react';
import SignInForm from './SignInForm';
import './signin.css'
import { Box, Card } from '@mui/material';

const Signin = () => {
  return (
    <div className='signin-main_container'>
      <Box className='signin_container'>
      <h2 style={{color:"#666666"}}>Sign In to <span style={{color:"black"}}>Accountants Pack!</span></h2>
      <p>Welcome Back</p>
      <SignInForm />
      </Box>
    </div>
  );
};

export default Signin;
