import React from "react";
import { ReactComponent as Close } from "../../../assests/svg/model-close.svg";
import Image from "../../../assests/bills/file.png";

import { Box, Typography } from "@mui/material";
const BillDetailModel = ({handleClose}) => {
    return (
        <Box className="flex justify-center">
        <Box className="bg-white-color">
          <Box>
            <Typography variant="h2" className="flex justify-center">Bill Details</Typography>
            <Close
              onClick={handleClose}
              style={{ cursor: "pointer", zIndex: 200}}
            />
          </Box>
          <Box className="documentApprovalModel-model-body">
            <img src={Image} />
          </Box>
        </Box>
      </Box>
    );
  }
  
export default BillDetailModel
