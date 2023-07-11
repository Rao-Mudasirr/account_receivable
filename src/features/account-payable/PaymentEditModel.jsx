import { ReactComponent as Close } from "../../assests/svg/model-close.svg";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import CustomInput from "../../components/CustomInput";
import GlobalButton from "../../components/global-button/global-button";

const PaymentEditModel = ({ handleClose }) => {
  return (
    <Box className="padding-4">
        <Box className="flex justify-space-between">
          <Typography className="heading-20 font-weight-600 font-family-Exo">Edit Data</Typography>
          <Close
            onClick={handleClose}
            style={{ cursor: "pointer", zIndex: 200 }}
          />
        </Box>
        <Typography sx={{my: 4}} className="primary-title font-weight-400 font-family-Exo">You can only Edit the name of your bank</Typography>
        <Box className="documentApprovalModel-model-body">
          <CustomInput
          className="width-100"
          placeholder="Name"
          inputProps={{className: "font-family-Exo"}}
            required={false}
            label={"Name"}
          />
          <Box sx={{display: "flex", gap: "1rem", justifyContent: "flex-end", mt: "3rem"}}>
            <GlobalButton btnType btnText="Cancel" />
            <GlobalButton btnText="Save" btnName="accent" />
          </Box>
        </Box>
    </Box>
  );
};

export default PaymentEditModel;
