import React, { useState } from "react";
import { Grid, Typography,styled, TextField,InputAdornment } from '@mui/material'
import { useFormik } from "formik";
import * as yup from "yup";
import ProfileManagement from "../profile-management/profile-management";
import GlobalButton from "../../../components/global-button/global-button";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
const validationSchema = yup.object({
   
  password: yup.string().required("Password is required"),
  email: yup.string().required("Email is required"),
  
  });
  
  const Asterisk = styled("span")({
    color: "red",
  });
  

const ChangeEmail = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [emptyFields, setEmptyFields] = useState([]);
    const [emailTemplate,setEmailTemplate]=useState(false);

    const[ProfileManage,setProfileMange]=useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const[ConfirmPassword,setConfirmPassword]=useState(true);
    const [showEmail,setShowEmail]=useState(false);


    const handleClickUserProfile=()=>{
      setProfileMange(true);
    }

    const handleUpdateEmail = () => {
      // Display timer for 10 seconds
      setEmailTemplate(false);
      setTimeout(() => {
        setEmailTemplate(true);
      }, 10000);
    };

    const formik = useFormik({
        initialValues: {
          password:"",
          email: "",
        },
        validationSchema,
        onSubmit: (values) => {
         
          const emptyFields = [];
          if (!values.password) emptyFields.push("password");
          // if (!values.email) emptyFields.push("email");
        
    
          setEmptyFields(emptyFields);
    
        //   if (emptyFields.length === 0) {
        //     // No empty fields, perform update
        //     toast.success("Profile updated successfully!");
        //    setShowEmail(true)
        //   }
        },
      });
      const handleBlur = (event) => {
        formik.handleBlur(event);
      };
    
      const handleSubmit = async () => {
        // Check if the text field is filled
        if (formik.values.password.trim() !== '') {
          await formik.handleSubmit();
          setConfirmPassword(false);
        } else {
          // Handle case when the text field is not filled
          formik.setFieldError('password', 'Password is required');
        }
      };
      
      
      
     
  return (
    <>
    {ProfileManage ? <ProfileManagement/>:(<Grid container spacing={2}>
        <Grid item xs={12} sx={{display:'flex',justifyContent:'space-between', mt:10,ml:5}} >
            <Typography>
                Update Email
            </Typography>
            <Typography sx={{cursor:'pointer',color:'#166088'}} className="primary-title font-family-exo2" onClick={handleClickUserProfile}>
                User Profile
            </Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
       {ConfirmPassword && <Grid item xl={12} xs={12} sx={{ p: 5 }}>
      <label
        htmlFor="password"
        className="secondary-color primary-title font-family-exo2"
        sx={{ fontWeight: 400 }}
      >
        Current Password
      </label>
      <TextField
  id="password"
  name="password"
  size="small"
  value={formik.values.password}
  onChange={formik.handleChange}
  onBlur={handleBlur}
  autoComplete={false}
  error={formik.touched.password && Boolean(formik.errors.password)}
  helperText={formik.touched.password && formik.errors.password}
  fullWidth
  // type={showPassword ? 'text' : 'password'}
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        {showPassword ? (
          <VisibilityIcon
            onClick={() => setShowPassword(false)}
            sx={{ cursor: 'pointer' }}
          />
        ) : (
          <VisibilityOffIcon
            onClick={() => setShowPassword(true)}
            sx={{ cursor: 'pointer' }}
          />
        )}
      </InputAdornment>
    ),
  }}
  sx={{
    '.MuiTextField-root': {
      height: '12px',
      border: '1px solid black',
    },
  }}
/>

    </Grid>} 

       {!ConfirmPassword && <Grid item xl={12} xs={12} sx={{ p: 5 }}>
      <label
        htmlFor="email"
        className="secondary-color primary-title font-family-exo2"
        sx={{ fontWeight: 400 }}
      >
        New Email
      </label>
      <TextField
        id="email"
        name="email"
        size="small"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={handleBlur}
        autoComplete={false}
        // error={formik.touched.email && Boolean(formik.errors.email)}
        // helperText={formik.touched.email && formik.errors.email}
        fullWidth
        // type={showPassword ? 'text' : 'password'} v  
        sx={{
          '.MuiTextField-root': {
            height: '12px',
            border: '1px solid black',
          },
        }}
      />
    </Grid>} 
        </form>
       
       
        <Grid xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      {ConfirmPassword ? (
        <GlobalButton
          variant="accent"
          btnName="accent"
          btnText="Next"
          sx={{ width: '91px', height: '48px' }}
          onClick={() => handleSubmit()}
        />
      ) : (
        <GlobalButton
          variant="accent"
          btnName="accent"
          btnText="Update"
          sx={{ width: '91px', height: '48px' }}
          // onClick={handleUpdateEmail}
        />
      )}
    </Grid>
             
             
    </Grid>)}
    
    </>
  )
}

export default ChangeEmail
