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
import businessIcon from "../../../assests/images/settings/business-icon.png";
import editIcon from "../../../assests/images/settings/editIcon.png";
import { useFormik } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import GlobalButton from "../../../components/global-button/global-button";

const validationSchema = yup.object({
  businessName: yup.string().required("Business Name is required"),
  businessDescription: yup.string().required("Last Name is required"),
  age: yup.string().required("Age is required"),
  businessEmail: yup.string().required("Email is required"),
  // phone: yup.string().required("Phone Nuumber is required"),
  // BusinessWebsite: yup.string().required('Postal Code is required'),
  // address: yup.string().required('Address is required'),
});

const Asterisk = styled("span")({
  color: "red",
});

const CompanyManagement= () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [emptyFields, setEmptyFields] = useState([]);

 
  const [isFilled, setIsFilled] = useState(false);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setIsFilled(!!inputValue); // Set isFilled to true if there is any input value
  };

  const formik = useFormik({
    initialValues: {
      businessName: "Nick",
      businessDescription: "John",
      businessEmail: "",
      phone: "",
      currency: "",
      country: "",
      BusinessWebsite: "",
      address: "",
    
    },
    validationSchema,
    onSubmit: (values) => {
      values.dateofbirth = selectedDate
        ? selectedDate.toISOString().slice(0, 10)
        : null; // Update with selected date only
      console.log("Formik valuesdd:", values);
      // resetForm();

      // Check for empty fields
      const emptyFields = [];
      if (!values.businessName) emptyFields.push("businessName");
      if (!values.businessDescription) emptyFields.push("businessDescription");
      if (!values.businessEmail) emptyFields.push("businessEmail");
      // if (!values.phone) emptyFields.push("phone");

      setEmptyFields(emptyFields);

      if (emptyFields.length === 0) {
        // No empty fields, perform update
        toast.success("Profile updated successfully!");
        setEditMode(false);
      }
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
      <Grid xs={2} sx={{p:5}} >
        <Avatar
          src={businessIcon}
          alt="profile-img"
          sx={{ width: "80px", height: "80px" }}
        />
      </Grid>
      <Grid xs={10} sx={{ mt:8, display:'flex',justifyContent:'space-between'}} >
          <Typography
            variant="body1"
            className="font-family-exo2 primary-color sub-heading"
          >
            Nick John
          </Typography>
          <Box >
          {editMode ? (
            <>
              <Box
                className="filter-below-btn"
                sx={{
                  display: "flex",
                  float: "right",
                  "@media (max-width: 600px)": {
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    float: "none",
                  },
                }}
              >
                <Button
                  className="btn1 font-family-exo2"
                  onClick={handleCancelClick}
                  sx={{
                    marginRight: "8px",
                    "@media (max-width: 600px)": {
                      width: "100%",
                    },
                    "&:hover": {
                      borderColor: "#000000",
                      color: "#000000",
                    },
                  }}
                >
                  Cancel
                </Button>
                &nbsp;
                <Button
                  className="btn2"
                  type="submit"
                  onClick={handleSubmit} // Added onClick event handler for form submission
                  sx={{
                    color: "#FFFFFF",
                    background: "#000000",
                    "&:hover": {
                      background: "#000000",
                      color: "#FFFFFF",
                    },
                  }}
                >
                  Update
                </Button>
              </Box>
              {emptyFields.length > 0 && (
                <Typography variant="body2" color="error">
                  Please fill in all required fields.
                </Typography>
              )}
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

      </Grid>
      <Grid item xs={8} >
        <form onSubmit={handleSubmit}>
          <Grid xs={12} sx={{ p: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6" className="tertiary-color sub-heading font-family-exo2">Company Profile</Typography>
              </Grid>
              <Grid item xs={6}>
                <label htmlFor="businessName" className="slate-dark-color primary-title font-family-exo2">
                  <Asterisk>*</Asterisk> Business Name
                </label>
                <TextField
                  id="businessName"
                  name="businessName"
                  size="small"
                  value={formik.values.businessName}
                  onChange={formik.handleChange}
                  onBlur={handleBlur}
                  disabled={!editMode}
                  error={
                    formik.touched.businessName && Boolean(formik.errors.businessName)
                  }
                  helperText={
                    formik.touched.businessName && formik.errors.businessName
                  }
                  fullWidth
                  sx={{ height: "48px" }}
                />
              </Grid>
              <Grid item xs={12}>
                <label htmlFor="businessDescription" className="slate-dark-color primary-title font-family-exo2">
                  <Asterisk>*</Asterisk> Business Description
                </label>
                <TextField
                  id="businessDescription"
                  name="businessDescription"
                  size="small"
                  value={formik.values.businessDescription}
                  onChange={formik.handleChange}
                  onBlur={handleBlur}
                  disabled={!editMode}
                  error={
                    formik.touched.businessDescription && Boolean(formik.errors.businessDescription)
                  }
                  helperText={formik.touched.businessDescription && formik.errors.businessDescription}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <label htmlFor="businessEmail" className="slate-dark-color primary-title font-family-exo2">
                  <Asterisk>*</Asterisk>Business Email
                </label>
                <TextField
                  id="businessEmail"
                  name="businessEmail"
                  size="small"
                  value={formik.values.businessEmail}
                  onChange={formik.handleChange}
                  onBlur={handleBlur}
                  autoComplete={false}
                  // disabled={!editMode}
                  error={formik.touched.businessEmail && Boolean(formik.errors.businessEmail)}
                  helperText={formik.touched.businessEmail && formik.errors.businessEmail}
                  fullWidth
                  
                  sx={{
                   
                      ".MuiTextField-root": {
                       height:'12px',
                       border:'1px solid black'
                      },

                    

                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <label htmlFor="phone" className="slate-dark-color primary-title font-family-exo2">Business Contact Number</label>
                <TextField
                  id="phone"
                  name="phone"
                  size="small"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={handleBlur}
                 
                  fullWidth
                  sx={{

                  }}
                
                />
              </Grid>
              <Grid sx={{ mt: 2 }}> </Grid>
              <Grid item xs={6}>
                <label htmlFor="BusinessWebsite" className="slate-dark-color primary-title font-family-exo2">Business Website</label>
                <TextField
                  id="BusinessWebsite"
                  name="BusinessWebsite"
                  size="small"
                  value={formik.values.BusinessWebsite}
                  onChange={formik.handleChange}
                  onBlur={handleBlur}
                  fullWidth
                
                />
              </Grid>
         

              <Grid item xs={6}>
                <label htmlFor="country" className="slate-dark-color primary-title font-family-exo2">Country</label>
                <TextField
                  id="country"
                  name="country"
                  size="small"
                  select
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  onBlur={handleBlur}
                  // disabled={!editMode}
                  error={
                    formik.touched.country &&
                    Boolean(formik.errors.country)
                  }
                  helperText={
                    formik.touched.country && formik.errors.country
                  }
                  fullWidth
                >
                  <MenuItem value="option1">Uk</MenuItem>
                  <MenuItem value="option2">Sweden</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <label htmlFor="currency" className="slate-dark-color primary-title font-family-exo2">Currency</label>
                <TextField
                  id="currency"
                  name="currency"
                  size="small"
                  select
                  value={formik.values.currency}
                  onChange={formik.handleChange}
                  onBlur={handleBlur}
                  // disabled={!editMode}
                  error={formik.touched.currency && Boolean(formik.errors.currency)}
                  helperText={formik.touched.currency && formik.errors.currency}
                  fullWidth
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                </TextField>
              </Grid>
            </Grid>
          </Grid>

          <Grid xs={12} sx={{ p: 2 }}>
            <Grid container spacing={2}>
             
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Grid xs={4}></Grid>
      <ToastContainer />
    </Grid>
  );
}

export default CompanyManagement;
