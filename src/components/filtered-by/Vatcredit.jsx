import React from "react";
import Box from "@mui/material/Box";
import CustomInput from "../CustomInput";
import { Autocomplete, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import './filter.scss'
import { QuestionMark } from "@mui/icons-material";
 const VatCredit = () => {
    const condition1 = [
      {
        title: `Jaunary`,
        value: `Jaunary`,
      },
      {
        title: `April`,
        value: `Ariil`,
      },
      {
        title: `July`,
        value: `July`,
      },
      {
        title: `October`,
        value: `October`,
      },
     
    ];
return(


<>
     
     <Typography className='h5 ' >Month</Typography>
            <Autocomplete
            sx={{mt:1}}
            id="disable-close-on-select"
            options={condition1}
            getOptionLabel={ (option) => option.title}
            fullWidth
            disableCloseOnSelect
            renderInput={(params) => (
              <TextField {...params} placeholder= "On day 18 of Month" variant="filled" 
              // id="disabled-basic"
              InputProps={{
              endAdornment: (
                  <InputAdornment position="end">
                    <QuestionMark />
                  </InputAdornment>
                ),
              }}
               />
              )}
              />      

</>



);

};
export default VatCredit;