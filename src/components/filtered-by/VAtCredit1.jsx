import React from "react";
import Box from "@mui/material/Box";
import CustomInput from "../CustomInput";
import { Autocomplete, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import './filter.scss'
import { QuestionMark } from "@mui/icons-material";
 const VatCredit1 = () => {
  const condition1 = [
    {
      title: `2023`,
      value: `2023`,
    },
    {
      title: `2022`,
      value: `2022`,
    },
    {
      title: `2021`,
      value: `2021`,
    },
    {
      title: `2020`,
      value: `2020`,
    },
   
  ];
return(


<>
   
   <Typography className='h5 ' >Year</Typography>
          <Autocomplete
          sx={{mt:1}}
          id="disable-close-on-select"
          options={condition1}
          getOptionLabel={ (option) => option.title}
          fullWidth
          disableCloseOnSelect
          renderInput={(params) => (
            <TextField {...params} placeholder= "2023" variant="filled" InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                  <QuestionMark />
                </InputAdornment>
              ),
            }} />
            )}
            />      

</>



);

};
export default VatCredit1;