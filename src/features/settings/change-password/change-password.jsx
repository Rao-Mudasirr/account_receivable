import React, { useState } from "react";
import { Grid, Typography,styled, TextField} from '@mui/material'
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
   
    email: yup.string().required("Email is required"),
  
  });
  
  const Asterisk = styled("span")({
    color: "red",
  });
  

const ChangePassword = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [emptyFields, setEmptyFields] = useState([]);

    const formik = useFormik({
        initialValues: {
          email: "",
        },
        validationSchema,
        onSubmit: (values) => {
         
          const emptyFields = [];
          if (!values.email) emptyFields.push("email");
        
    
          setEmptyFields(emptyFields);
    
        //   if (emptyFields.length === 0) {
        //     // No empty fields, perform update
        //     toast.success("Profile updated successfully!");
        //     setEditMode(false);
        //   }
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
    <>
    <Grid container spacing={2}>
        <Grid item xs={12} sx={{display:'flex',justifyContent:'space-between', mt:10,ml:5}} >
            <Typography>
                Update Password
            </Typography>
            <Typography>
                User Profile
            </Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
        <Grid item xl={12} xs={12} sx={{p:5}}>
                <label htmlFor="email"  className="secondary-color primary-title font-family-exo2" sx={{fontWeight:400}} >
                  <Asterisk>*</Asterisk> Email
                </label>
                <TextField
                  id="email"
                  name="email"
                  size="small"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={handleBlur}
                  autoComplete={false}
                  // disabled={!editMode}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  fullWidth
                  
                  sx={{
                   
                      ".MuiTextField-root": {
                       height:'12px',
                       border:'1px solid black'
                      },

                    

                  }}
                />
              </Grid>
              </form>
    </Grid>
    </>
  )
}

export default ChangePassword
