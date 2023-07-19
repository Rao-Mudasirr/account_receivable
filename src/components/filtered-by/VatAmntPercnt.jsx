import React from "react";
import Box from "@mui/material/Box";
import CustomInput from "../CustomInput";
import { Autocomplete, Grid, InputAdornment, TextField, Typography } from "@mui/material";

import './filter.scss'
import { CustomField } from "../../features/add-bill-feature/custom-field/custom-field";
import { QuestionMark } from "@mui/icons-material";

 const VatAmountPercentage = () => {
    const flatProps = {
        options: ['15'],
      };
return(


<>

     <Typography className='h5 ' >Amount (percentage)</Typography>
     <Autocomplete
            sx={{mt:1}}
            {...flatProps}
            id="readOnly"
            readOnly
            defaultValue={flatProps.options[0]}
            renderInput={(params) => (
              <TextField {...params} placeholder="15" variant="filled" InputProps={{

              endAdornment: (
                  <InputAdornment position="end">
                    <QuestionMark />
                  </InputAdornment>
                ),
              }}/>
            )}
          />   
          

</>



);

};
export default VatAmountPercentage;