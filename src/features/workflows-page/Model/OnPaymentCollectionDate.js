import { Box, Typography } from "@mui/material";
import React from "react";
import CustomInput from "../../../components/CustomInput";

const OnPaymentCollectionDate = () => {
  return (
    <Box>
      <Box className="tabbing-top">
        <Box className="tabbing-dropdowns">
          <CustomInput type="select" label="Time" />
        </Box>
      </Box>
      <Box className="tabbing-body">
        <Box className="tabbing-dropdowns">
          <CustomInput label="From" placeholder="Entered/Selected Value" />
          <CustomInput label="Subject" placeholder="Entered/Selected Value" />
        </Box>
        <Box className="tabbing-bottom">
          <Typography>Message</Typography>
          <Box className="tabbing-message-box">
            <Typography>Dear Client Name</Typography>

            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type
            </Typography>

            <Typography>Sincerely,</Typography>
            <Typography>Company Name</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OnPaymentCollectionDate;
