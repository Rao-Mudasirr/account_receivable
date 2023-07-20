import React, { useState } from "react";
import { SimpleDialog } from "../../../components/modal/simple-dialog";
import { Box, Grid } from "@mui/material";
import GlobalButton from "../../../components/global-button/global-button";
import CustomInput from "../../../components/CustomInput";

const KeyPerformanceIndicatorModal = ({ openAdd = false, handleClosePerformanceModal }) => {
  const [note, setNote] = useState("");

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const condition1 = [
    {
      title: "Based on formula",
      value: "Based on formula",
    },
    {
      title: "Category 2",
      value: "Category 12",
    },
    {
      title: "Category 3",
      value: "Category 3",
    },
  ];

  return (
    <SimpleDialog
      paperSx={{ maxWidth: "980px", width: "100%" }}
      open={openAdd}
      handleClose={handleClosePerformanceModal}
      title="New Custom Indicator for the company"
      titleClass="edituser_header primary-color font-weight-600 heading-20"
    >
      <Box sx={{mt:2}}>
        <Grid container>
          <Grid item xs={12} lg={12}>
            <CustomInput
              // inputClass={"inputClass"}
              label={"Name of the Indicator"}
              required={false}
              // labelClass={"labelClass"}
              placeholder="Name of the Indicator"
            />
          </Grid>
          <Grid sx={{ mt: 2 }}>
            <CustomInput type="select" label={"values"} required={false} options={condition1} />
          </Grid>
        </Grid>

        <Box>
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
              justifyContent: "flex-end",
              mt: 2,
            }}
          >
            {/* <GlobalButton  
            className="invoice-second-btn"
            btnText=" Cancel"
            onClick={handleClosePerformanceModal} />

          <GlobalButton 
          variant="accent"
          btnName="accent"
         
           btnText="Confirm"
          onClick={handleClosePerformanceModal} /> */}
          </Box>
        </Box>
      </Box>
    </SimpleDialog>
  );
};

export default KeyPerformanceIndicatorModal;
