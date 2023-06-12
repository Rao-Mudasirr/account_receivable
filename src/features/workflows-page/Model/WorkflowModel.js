import {
  Box,
  Checkbox,
  Grid,
  Modal,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React from "react";
import CustomInput from "../../../components/CustomInput";
import "./WorkflowModel.scss";

function WorkflowModel({
  open,
  handleClose,
  Tabbing_data,
  value,
  handleChange,
}) {
  return (
    <div className="model-parent">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        className="model model-parent"
        aria-describedby="modal-modal-description"
      >
        <Box className="model-body">
          <Box className="workflow-model">
            <Box className="top-section">
              <Typography variant="h2">Workflow Details</Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid xs={12} lg={5} item>
                {" "}
                <Box className="top-section">
                  <Box className="attachment-box">
                    <p>Attachment</p>
                    <Box className="attachment-checkbox">
                      <Checkbox
                        defaultChecked={false}
                        sx={{
                          marginRight: "-12px",
                          padding: "0px",
                          color: "black",
                          "&.Mui-checked": {
                            color: "black",
                          },
                        }}
                      />
                      <Box className="span">Invoice File</Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="tabbing-section">
                  <Typography variant="h3">Rules List</Typography>
                  <Box className="tabbing">
                    <Tabs
                      centered
                      className="tabbing-list"
                      onChange={handleChange}
                      orientation="vertical"
                      value={value}
                    >
                      {Tabbing_data?.map((e) => (
                        <Tab
                          className={`tabbing-item ${
                            value === e?.id ? "active" : ""
                          }`}
                          label={e.label}
                          key={e.id}
                          value={e?.id}
                        />
                      ))}
                    </Tabs>
                  </Box>
                </Box>
              </Grid>
              <Grid xs={12} lg={7} item>
                <Box sx={{ marginTop: "24px" }}>
                  {Tabbing_data?.map(
                    (e) => e.id === value && <>{e?.Component}</>
                  )}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default WorkflowModel;
