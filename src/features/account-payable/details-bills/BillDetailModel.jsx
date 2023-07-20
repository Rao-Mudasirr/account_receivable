import React from "react";
import { ReactComponent as Close } from "../../../assests/svg/model-close.svg";
import Image from "../../../assests/bills/file.png";

import { Box, Typography } from "@mui/material";
import { SimpleDialog } from "../../../components/modal/simple-dialog";
const BillDetailModel = ({ openModel, handleClose }) => {
  return (
    <SimpleDialog
      open={openModel}
      handleClose={handleClose}
      title="Bill Detail"
      titleClass="adduser_header primary-color font-weight-600 secondary-heading"
      paperSx={{ width: "900px"}}
    >
      <Box className="documentApprovalModel-model-body">
        <img src={Image} />
      </Box>
    </SimpleDialog>
  );
};

export default BillDetailModel;
