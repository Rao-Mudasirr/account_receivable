import React, { useState } from "react";
import { Grid, Typography, IconButton, InputAdornment, TextField} from '@mui/material'
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
   
    password: yup.string().required("password is required"),
  
  });
  

const ChangePassword = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [emptyFields, setEmptyFields] = useState([]);

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const formik = useFormik({
        initialValues: {
          password: "",
        },
        validationSchema,
        onSubmit: (values) => {
         
          const emptyFields = [];
          if (!values.password) emptyFields.push("password");
        
    
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
        <Grid item xs={12} sx={{display:'flex',justifyContent:'space-between', mt:4,ml:3}} >
            <Typography>
                Change Password
            </Typography>
            <Typography>
                User Profile
            </Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
        <Grid item xl={12} xs={12} sx={{p:5}}>
                <label htmlFor="password"  className="secondary-color primary-title font-family-exo2" sx={{fontWeight:600}} >
                 Current Password
                </label>
                <TextField
                  id="password"
                  name="password"
                  size="small"
                  type={showPassword ? "text" : "password"}
                  placeholder="********************"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={handleBlur}
                  autoComplete={false}
                  // disabled={!editMode}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                  
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <RiEyeLine /> : <RiEyeOffLine style="transform: scaleX(-1);"/>}
                        </IconButton>
                      </InputAdornment>
                    ),
                    
                  }}
                  
                  
                />
              </Grid>
              </form>
    </Grid>
    </>
  )
}

export default ChangePassword
