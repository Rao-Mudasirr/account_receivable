import React from "react";
import Box from "@mui/material/Box";
import CustomInput from "../CustomInput";
import { Autocomplete, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import './filter.scss'
import { QuestionMark } from "@mui/icons-material";
 const VatDueDate = () => {
    const condition1 = [
      {
        title: `On day 15 of Month`,
        value: `On day 15 of Month`,
      },
      {
        title: `On day 16 of Month`,
        value: `On day 16 of Month`,
      },
      {
        title: `On day 17 of Month`,
        value: `On day 17 of Month`,
      },
      {
        title: `On day 18 of Month`,
        value: `On day 18 of Month`,
      },
      {
        title: `On day 19 of Month`,
        value: `On day 19 of Month`,
      },
      {
        title: `Payment Type`,
        value: `Payment Type`,
      },
    ];
return(


<>
     
     <Typography className='h5 ' >VAT Due Date</Typography>
            <Autocomplete
            sx={{mt:1}}
            id="disable-close-on-select"
            options={condition1}
            getOptionLabel={ (option) => option.title}
            fullWidth
            disableCloseOnSelect
            renderInput={(params) => (
              <TextField {...params} placeholder= "On day 18 of Month" variant="filled" InputProps={{
          
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
export default VatDueDate;