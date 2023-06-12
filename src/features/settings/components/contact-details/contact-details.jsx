import React from 'react';
import { Grid, Typography, TextField, Button, styled } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
});

const Asterisk = styled('span')({
  color: 'red',
});

const ContactDetails = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  const handleBlur = (event) => {
    formik.handleBlur(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    formik.handleSubmit(event);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">Contact Details</Typography>
        </Grid>
        <Grid item xs={6}>
          <label htmlFor="firstName">
            <Asterisk>*</Asterisk> First Name
          </label>
          <TextField
            id="firstName"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={handleBlur}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <label htmlFor="lastName">
            <Asterisk>*</Asterisk> Last Name
          </label>
          <TextField
            id="lastName"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={handleBlur}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactDetails;
