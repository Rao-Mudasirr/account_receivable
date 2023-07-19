import React, { useState } from "react";
import { InputAdornment, TextField, Typography } from "@mui/material";
import {ReactComponent as PercentAge} from '../../assests/svg/percent-age.svg'
import './filter.scss'



 const VatAmountPercentage = () => {

    const [formData, setFormData] = useState({
        Perc: "",
      });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
return(


<>

     <Typography className='h5 ' >Amount (percentage)</Typography>
    
            <TextField
            
              sx={Styles.field_color}
              name="Perc"
              variant="standard"
              placeholder="10"
              type="number"
              value={formData.VAT}
              onChange={handleChange}
              inputProps={{
                className: "font-family-Exo",
                

              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <PercentAge/>
                  </InputAdornment>
                ),
              }}
            />

</>



);

};
export default VatAmountPercentage;
const Styles = {
    field_color: (theme) => ({
       
        "&.MuiFormControl-root-MuiTextField-root .MuiInputBase-input  ":{
            paddingLeft: "20px !important",
            paddingBottom: "13px !important",
        },
      "& .MuiInput-underline:after": {
        borderBottomColor: "#2B2B33",
      },
      "& .Mui-error:after": {
        borderBottomColor: "#d32f2f",
      },
      "& .Mui-error:before": {
        borderBottomColor: "#d32f2f !important",
      },
      "& .MuiInputBase-input": {
        paddingLeft: "15px",
        pb: "10px",
      },
      "& .MuiInputBase-root:hover": {
        backgroundColor: "#F0F0F2",
      },
      "& .MuiSelect-select:hover": {
        backgroundColor: "#F0F0F2",
      },
      "& :before": {
        borderBottom: "1.6px solid #C4C4CC !important",
      },
      "&:after": {
        borderColor: "#2B2B33",
      },
       mt: 2,
       width:"555px",
   
            paddingBottom: "30px !important",
      
   
    }),
  };