import { Box } from "@mui/material";
import React from "react";
import CustomInput from "../../../components/CustomInput";

const AddWorkflowComponent = () => {
  return (
    <Box>
      <Box className="invoice-title">Add Workflow</Box>
      <Box className="add-workflow-box">
        <CustomInput
          label="Workflow Name"
          placeholder="Placeholder"
          sx={{
            marginBottom: "52px",
            maxWidth: "100%",
            width: "50% !important",
            "@media (max-width:992px)": {
              width: "100% !important",
            },
          }}
        />
        <CustomInput
          label="Workflow Description"
          type="textarea"
          maxRows={4}
          minRows={4}
          placeholder="Placeholder"
        />
      </Box>
      <Box className="workflow-button"></Box>
    </Box>
  );
};

export default AddWorkflowComponent;
