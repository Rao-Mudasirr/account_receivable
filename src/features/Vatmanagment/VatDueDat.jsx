import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useTheme } from "@emotion/react";
import { Backdrop, Button, Grid, Typography, IconButton } from "@mui/material";
import TableAction from "../../TableAction";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
// import "./view-prompt.scss";
// import editIcon from "../../../../assests/images/workflow/Action Button Set.svg";
// import dot from "../../../../assests/images/workflow/Rectangle 6393.svg";
// import CustomInput from "../../../CustomInput";

export default const VatDueDate = () => {
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
    <Grid container direction={'column'} alignItems={'start'}
    sx={{ 
      p: { lg: 4, xs: 2 },
      mt: 1,
      mb: { md: 2, xs: 0 },
    
    }}
  >
    <Box
   
    pl={1.5}
    >
      <Typography variant="h5" 
      
      >VAT Due Date:</Typography>
    </Box>
    <Box
      sx={{
        display: "flex",
        flexDirection: { md: "row", xs: "column" },
        gap: 2,
        p:2,
      }}
    >
      <Box sx={{ display:{lg:"flex",xs:'none'}, alignItems:"center"}}>
        <img src={dot} alt="diagramicon" height={8} width={8} />
      </Box>
      <CustomInput
        placeholder="On day 18 of Month"
        type="select"
        required={false}
        options={condition1}
      />
      </Box>
      </Grid>

);

};