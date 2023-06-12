import React, { useState } from "react";
import {
  Avatar,
  Button,
  Grid,
  Typography,
  Box,
  styled,
  TextField,
  MenuItem,
} from "@mui/material";
import profile from "../../../assests/images/settings/profile-img.png";
import GlobalButton from "../../../components/global-button/global-button";
import editIcon from "../../../assests/images/settings/editIcon.png";
import { useFormik } from "formik";
import * as yup from "yup";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const validationSchema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  age: yup.string().required("Age is required"),
  email: yup.string().required("email is required"),
  phone: yup.string().required("Phone Nuumber is required"),
  postalCode: yup.string().required('Postal Code is required'),
  address: yup.string().required('Address is required'),
});

const Asterisk = styled("span")({
  color: "red",
});

const ProfileManagement = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "Nick",
      lastName: "John",
      dateofbirth: null,
      age: "20",
      gender: "",
      citizenship: "",
      email: "",
      phone: "",
      postalCode: '',
      address: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      values.dateofbirth = selectedDate
        ? selectedDate.toISOString().slice(0, 10)
        : null; // Update with selected date only
      console.log("Formik valuesdd:", values);
      resetForm();
    },
  });
  const handleEditClick = () => {
    setEditMode(true);
  };
  const handleCancelClick = () => {
    formik.resetForm();
    setEditMode(false);
  };
  const handleBlur = (event) => {
    formik.handleBlur(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    formik.handleSubmit(event);
  };

  return (
    <Grid container spacing={2}>
      <Grid xs={2} sx={{ p: 5 }}>
        <Avatar
          src={profile}
          alt="profile-img"
          sx={{ width: "160px", height: "160px" }}
        />
      </Grid>

      <Grid xs={10} sx={{ mt: 10 }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        {editMode ? (
            <>
               <Box
                className="filter-below-btn"
                sx={{ display: "flex", float: "right",
                 '@media (max-width: 600px)': {
                  flexDirection:'column',
                  alignItems:'center',
                  justifyContent:'center',
                  float:'none',
                },}}
              >
                <Button className="btn1 font-family-exo2 " onClick={handleCancelClick}
                sx={{
                    

                    marginRight: '8px',
                    '@media (max-width: 600px)': {
                     width:'100%',
                     
                    },
                    '&:hover': {
                      borderColor: '#000000',
                      color: '#000000',
                    }
                  }}
                  
                    >
                 Cancel
                </Button>
                &nbsp;
                <Button className="btn2"  type="submit"  
                 sx={{
                   color: '#FFFFFF',
                   background: '#000000',
                   '&:hover': {
                     background: '#000000',
                     color: '#FFFFFF',
                   },
                 }}
                 >Update</Button>
              </Box>

            
            </>
          ) : (
            <GlobalButton
            variant="accent"
            btnName="accent"
            btnText="Edit Profile"
            onClick={handleEditClick}
            endIcon={
              <img src={editIcon} alt="Export Text" width={16} height={16} />
            }
          />
          )}
          
        </Box>

        <Box sx={{ ml: 5 }}>
          <Typography
            variant="body1"
            className="font-family-exo2 primary-color sub-heading"
          >
            Nick John
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            justifyContent: "flex-end",
          }}
        >
          <Typography
            variant="body1"
            className="font-family-exo2 primary-title"
            sx={{ color: "#166088" }}
          >
            Change Email
          </Typography>
          <Typography
            variant="body1"
            className="font-family-exo2 primary-title"
            sx={{ color: "#166088" }}
          >
            Change Password
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={8}>
        <form onSubmit={handleSubmit}>
          <Grid xs={12} sx={{ p: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6">Personal Details</Typography>
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
                  disabled={!editMode}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                  fullWidth
                  sx={{ height: "48px" }}
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
                  disabled={!editMode}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <label htmlFor="dateofbirth">Date of Birth</label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker
                      value={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      disabled={!editMode}
                      sx={{ width: "440px" }}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>
              <Grid item xs={6} sx={{ mt: 1 }}>
                <label htmlFor="age">
                  {/* <Asterisk>*</Asterisk> */}
                  Age
                </label>
                <TextField
                  id="age"
                  name="age"
                  value={formik.values.age}
                  onChange={formik.handleChange}
                  onBlur={handleBlur}
                  disabled={!editMode}
                  error={formik.touched.age && Boolean(formik.errors.age)}
                  helperText={formik.touched.age && formik.errors.age}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <label htmlFor="gender">Gender</label>
                <TextField
                  id="gender"
                  name="gender"
                  select
                  value={formik.values.gender}
                  onChange={formik.handleChange}
                  onBlur={handleBlur}
                  // disabled={!editMode}
                  error={formik.touched.gender && Boolean(formik.errors.gender)}
                  helperText={formik.touched.gender && formik.errors.gender}
                  fullWidth
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={6}>
                <label htmlFor="citizenship">Citizenship</label>
                <TextField
                  id="citizenship"
                  name="citizenship"
                  select
                  value={formik.values.citizenship}
                  onChange={formik.handleChange}
                  onBlur={handleBlur}
                  // disabled={!editMode}
                  error={
                    formik.touched.citizenship &&
                    Boolean(formik.errors.citizenship)
                  }
                  helperText={
                    formik.touched.citizenship && formik.errors.citizenship
                  }
                  fullWidth
                >
                  <MenuItem value="option1">Option 1</MenuItem>
                  <MenuItem value="option2">Option 2</MenuItem>
                </TextField>
              </Grid>
            </Grid>
          </Grid>

          <Grid xs={12} sx={{ p: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6">Contact Details</Typography>
              </Grid>
              <Grid item xs={6}>
                <label htmlFor="email">
                  <Asterisk>*</Asterisk> Email
                </label>
                <TextField
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  
                  // disabled={!editMode}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <label htmlFor="phone">
                  <Asterisk>*</Asterisk> Phone Number
                </label>
                <TextField
                  id="phone"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={handleBlur}
                  // disabled={!editMode}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                  fullWidth
                />
              </Grid>
              <Grid sx={{mt:2}}> </Grid>
              <Grid item xs={6}>
              <label htmlFor="postalCode">Postal Code</label>
              <TextField
                id="postalCode"
                name="postalCode"
                value={formik.values.postalCode}
                onChange={formik.handleChange}
                onBlur={handleBlur}
                error={formik.touched.postalCode && Boolean(formik.errors.postalCode)}
                helperText={formik.touched.postalCode && formik.errors.postalCode}
                fullWidth
                // disabled={!editMode}
              />
            </Grid>
            <Grid item xs={6}>
              <label htmlFor="address">Address</label>
              <TextField
                id="address"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={handleBlur}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
                fullWidth
                // disabled={!editMode}
              />
            </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>

      <Grid xs={4}></Grid>
    </Grid>
  );
};

export default ProfileManagement;
