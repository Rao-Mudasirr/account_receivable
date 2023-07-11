import { Box, Button, Typography } from "@mui/material";
import React from "react";
import CustomInput from "../../../components/CustomInput";
import GlobalButton from "../../../components/global-button/global-button";
import { ReactComponent as Add } from "../../../assests/svg/add-icon.svg";
import { useNavigate } from "react-router-dom";
import "./CreateWorkflow.scss";

const CreateWorkflowComponent = () => {
  const condition1 = [
    {
      title: `Bill Amount`,
      value: `Bill Amount`,
    },
    {
      title: `Category`,
      value: `Category`,
    },
    {
      title: `Payment Method`,
      value: `Payment Method`,
    },
    {
      title: `Bank`,
      value: `Bank`,
    },
    {
      title: `Vendor`,
      value: `Vendor`,
    },
    {
      title: `Payment Type`,
      value: `Payment Type`,
    },
  ];
  const condition2 = [
    {
      title: `Is less than`,
      value: `Is less than`,
    },
    {
      title: `Is greater than`,
      value: `Is greater than`,
    },
    {
      title: `Equals`,
      value: `Equals`,
    },
    {
      title: `Not equals`,
      value: `Not equals`,
    },
  ];
  const condition3 = [
    {
      title: `Admin`,
      value: `Admin`,
    },
    {
      title: `Manager`,
      value: `Manager`,
    },
    {
      title: `Client`,
      value: `Client`,
    },
    {
      title: `Xyz`,
      value: `Xyz`,
    },
  ];
  const condition4 = [
    {
      title: `John Doe`,
      value: `John Doe`,
    },
    {
      title: `Jack Sparrow`,
      value: `Jack Sparrow`,
    },
    {
      title: `Will Turner`,
      value: `Will Turner`,
    },
    {
      title: `Elizabeth Swan`,
      value: `Elizabeth Swan`,
    },
  ];
  const navigate = useNavigate();
  return (
    <Box className="create-workflow-parent">
      <Box className="invoice-title">Create a New Workflow</Box>
      <Box className="add-workflow-box">
        <CustomInput label="Workflow Name" placeholder="Placeholder" />
        <CustomInput
          label=" Description"
          placeholder="Placeholder"
          parentClass={"inputClass"}
        />
      </Box>
      <Box className="condition-box">
        <Box className="first-section">
          <Typography variant="h5">If:</Typography>
          <Button>
            Add Condition{" "}
            <span>
              <Add />
            </span>
          </Button>
        </Box>{" "}
        <Box className="second-section">
          <CustomInput type="select" required={false} options={condition1} />
          <CustomInput type="select" required={false} options={condition2} />
          <CustomInput
            required={false}
            placeholder="Type here"
            parentClass={"inputClass"}
          />
        </Box>
      </Box>
      <Box className="condition-box">
        <Box className="first-section">
          <Typography variant="h5">Then:</Typography>
        </Box>{" "}
        <Box className="second-section">
          <CustomInput type="select" required={false} options={condition3} />
          <CustomInput type="select" required={false} options={condition4} />
        </Box>
      </Box>
      <Box className="workflow-button">
        <Box
          sx={{
            marginTop: "120px",
            justifyContent: "flex-end",
            display: "flex",
            flex: "1 1 auto",
            flexWrap: "wrap",
            rowGap: "10px",
          }}
        >
          <GlobalButton
            variant="accent"
            btnName="accent"
            btnText="Save"
            onClick={() => navigate("/workflows")}
            // className="button"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CreateWorkflowComponent;
