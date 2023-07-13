import { ReactComponent as Close } from "../../../assests/svg/model-close.svg";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Logo from "../../../assests/svg/paymentsource-image.png";

import CustomInput from "../../../components/CustomInput";
import { GlobalSearchBar } from "../../../components/global-search-filter/global-search-filter";

const Step3 = ({ handleClose, stepIncrease, stepDecrease }) => {
  return (
    <Box className="model-body">
      <Box className="documentApprovalModel-model">
        <Box className="top-section">
          <Box className="section3">
            <Box className="card">
              <Box className="left-side">
                <Box className="image-box">
                  <img src={Logo} />
                </Box>
                <Box className="detail-box">
                  <Typography variant="h4">Nord Bank Checking</Typography>
                  <Typography variant="h5">Ends with .00000</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Close
            onClick={handleClose}
            style={{ cursor: "pointer", zIndex: 200 }}
          />
        </Box>
        <Box className="documentApprovalModel-model-body">
          <Box className="description">
            By providing your Credentials to Payable, you’re enabling Payable to
            retrieve your financial data.{" "}
          </Box>
          <Box sx={{ marginBottom: "20px" }}>
            <CustomInput
              className="width-100"
              placeholder="placeholder"
              inputProps={{
                className: "font-family-Exo padding-left-2 ",
              }}
              required={false}
              label={"User Id"}
            />
          </Box>
          <Box sx={{ marginBottom: "20px" }}>
            <CustomInput
              className="width-100"
              placeholder="placeholder"
              inputProps={{
                className: "font-family-Exo padding-left-2 ",
              }}
              required={false}
              label={"Password"}
            />
          </Box>
          <Box className="documentApprovalModel-button-box">
            <Button onClick={stepDecrease} className="outline">
              Back
            </Button>
            <Button onClick={stepIncrease} className="fill">
              Next
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Step3;
