import React, { useState } from "react";
import {  Typography } from "@mui/material";
import './filter.scss'
import { DashboardSelect } from "../../features/dashboard-select/dashboard-select";
 const VatDueDate = () => {
  const [selectBranch, setSelectBranch] = useState("");

  
 
return(


<>
     
     <Typography className='h5 ' >VAT Due Date</Typography>
 <DashboardSelect
              id="branch"
              placeholder="On day 18 of Month"
              fullWidth={true}
              MenuSx={{
                ".MuiMenuItem-root": {
                  color: "#6B6B80",
                  fontSize: "14px",
                  fontWeight: 400,
                },
                marginTop: "10px",
                boxShadow: "0px 6px 6px 6px #DEDEDE40",
                borderRadius: "8px",
                ".MuiList-root": { p: "0" },
                ".Mui-selected": { bgcolor: "#F0F0F2 !important" },
                ".Mui-selected:hover": { bgcolor: "#F0F0F2" },
              }}
              selectSx={{
                ".MuiOutlinedInput-notchedOutline": {
                  borderBottom: "1.6px solid #C4C4CC !important",
                },
                ".MuiSelect-select": {
                  p: "10.5px 14px",
                  fontWeight: "400",
                  color: "#40404D",
                  fontSize: "15px",
                },
                ".MuiSelect-select:hover": {
                  bgcolor: "#F0F0F2",
                },
                ".MuiSelect-icon": { top: "40%" },
                // maxWidth: "330px",
                // width: "100%"
              }}
              selectVal={selectBranch}
              setSelectVal={setSelectBranch}
              data={["On day 15 of Month","On day 16 of Month","On day 17 of Month","On day 18 of Month","On day 19 of Month"]}
            />
</>

);

};
export default VatDueDate;