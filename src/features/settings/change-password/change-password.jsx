import React, { useState } from "react";
import { Grid, Typography, IconButton, InputAdornment, TextField} from '@mui/material'
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import { useFormik } from "formik";
import * as yup from "yup";
import GlobalButton from "../../../components/global-button/global-button";
import { Error } from '@mui/icons-material';
import { Link } from "react-router-dom";

const validationSchema = yup.object({
   
    password: yup.string().required(<span style={{ color: "rgba(255, 85, 85, 1)" }}><Error style={{ marginRight: "7px", marginBottom: "-3px", fontSize: "medium", color: "rgba(255, 85, 85, 1)", transform: "rotate(180deg)" }} /> Please enter a correct password</span>)
    .min(6, <span style={{ color: "rgba(255, 85, 85, 1)" }}><Error style={{ marginRight: "7px", marginBottom: "-3px", fontSize: "medium", color: "rgba(255, 85, 85, 1)", transform: "rotate(180deg)" }} /> Password must be at least 6 characters</span>)
  });
  

const ChangePassword = () => {

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
    <Grid container spacing={2} >
        <Grid item xs={12} sx={{display:'flex',justifyContent:'space-between', mt:4,ml:3}} >
            <Typography sx={{fontWeight:600}} className="font-family-exo2">
                Change Password
            </Typography>
            <Link to="/">
            <Typography className="font-family-exo2" color="#6197E8">
                User Profile
            </Typography>
            </Link>
        </Grid>
        <form onSubmit={handleSubmit}>
        <Grid item xl={8} xs={8} sx={{p:5, height: "150px"}}>
                <label htmlFor="password" className="secondary-color primary-title font-family-exo2"  >
                 Current Password
                </label>
                <TextField
                  id="password"
                  name="password"
                  size="small"
                  type={showPassword ? "text" : "password"}
                  placeholder="*************"
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
                          {showPassword ? <RiEyeLine /> : <RiEyeOffLine style={{transform: "scaleX(-1)"}}/>}
                        </IconButton>
                      </InputAdornment>
                    ),
                    
                  }}
                />
                
              </Grid>
              </form>
              <Grid className="flex justify-end width-100">
              <GlobalButton btnText="Next" btnName="accent" onClick={handleSubmit} />
              </Grid>
    </Grid>
    </>
  )
}

export default ChangePassword
