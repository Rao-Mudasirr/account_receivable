import React, { useState } from "react";
import { Link } from "react-router-dom";
import TableAction from "../../../components/Table/TableAction";
import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { GlobalSearchBar } from "../../../components/global-search-filter/global-search-filter";
import exportIcon from "../../../assests/images/client/export.png";
import Tooltip from "@mui/material/Tooltip";
import "./ViewWorkflow.scss";
import WorkflowTable from "../table/workflowTable";
import CustomSwitch from "../../../components/CustomSwtich/CustomSwtich";
import { AppTooltip } from "../../../components/app-tooltip/app-tooltip";
import DeleteModel from "../../../components/modal/DeleteModel";
import { CustomModel } from "../../../components/custom-model/custom-model";
import AlertModel from "../../../components/modal/AlertModel";
import { ToastContainer, toast } from "react-toastify";
import { TabPanel } from "@mui/lab";
import { TabContext } from "@mui/lab";
import { Field } from "formik";
import CustomInput from "../../../components/CustomInput";

const ViewWorkflow = () => {
  const [openModel, setOpenModel] = useState(false);
  const [openDeleteModel, setOpenDeleteModel] = useState(false);
  const [openAlertModel, setOpenAlertModel] = useState(false);

  const handleCloseAlert = () => {
    setOpenAlertModel(!openAlertModel);
  };
  const handleCloseDelete = () => {
    setOpenDeleteModel(!openDeleteModel);
  };
  const handleCloseModel = () => {
    setOpenModel(!openModel);
  };
  const INVOICE_DATA_ViEW_ALL = [
    {
      id: 1,
      Id: "01",
      name: "Default Workflow",
      description: "Default Workflow",
      rules: 20,
      clients: 50,
      clientsLink: `/clients`,
      paidAmount: 71020.0,
      unPaid: 1020.0,
      status: true,
    },

    {
      id: 2,
      Id: "02",
      name: "Default Workflow",
      description: "Default Workflow",
      rules: 20,
      clients: 50,
      clientsLink: `/clients`,
      paidAmount: 71020.0,
      unPaid: 1020.0,
      status: false,
    },
    {
      id: 3,
      Id: "03",
      name: "Default Workflow",
      description: "Default Workflow",
      rules: 20,
      clients: 50,
      clientsLink: `/clients`,
      paidAmount: 71020.0,
      unPaid: 1020.0,
      status: false,
    },
    {
      id: 4,
      Id: "04",
      name: "Default Workflow",
      description: "Default Workflow",
      rules: 20,
      clients: 50,
      clientsLink: `/clients`,
      paidAmount: 71020.0,
      unPaid: 1020.0,
      status: false,
    },
    {
      id: 5,
      Id: "05",
      name: "Default Workflow",
      description: "Default Workflow",
      rules: 20,
      clients: 50,
      clientsLink: `/clients`,
      paidAmount: 71020.0,
      unPaid: 1020.0,
      status: false,
    },
  ];
  const columns_VIEW_ALL = [
    {
      accessorFn: (row) => row.Id,
      id: "Id",
      cell: (info) => (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Checkbox
            defaultChecked={info.row.index === 0 ? true : false}
            sx={{
              color: "black",
              "&.Mui-checked": {
                color: "black",
              },
            }}
          />
          <span> {info.getValue()}</span>
        </Box>
      ),

      header: () => <span>Sr.#</span>,
      // isSortable: true,
    },
    {
      accessorFn: (row, i) => <span>{row.name}</span>,
      id: "name",
      cell: (info) => info.getValue(),
      header: "Name",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.description,
      id: "description",
      cell: (info) => info.getValue(),
      header: "Description",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.rules,
      id: "rules",
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Rules",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.clients,
      id: "clients",
      cell: (info) => (
        <Link
          style={{ color: "#0084AD" }}
          to={`/workflows/clients/${info.row.id}`}
        >
          ({info.getValue()})
        </Link>
      ),
      header: "Clients",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.paidAmount,
      id: "paidAmount",
      cell: (info) => <span>£{info.getValue()}</span>,

      header: "Paid Amount",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.unPaid,
      id: "unPaid",
      cell: (info) => (
        <span>
          <div>£{info.getValue()}</div>
        </span>
      ),
      header: "Unpaid Amount",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.status,
      id: "status",
      cell: (info) => (
        <AppTooltip
          message={info.getValue() ? "Active" : "In-Active"}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div>
            {" "}
            <CustomSwitch
              onChange={(e) =>
                info.row.index === 0
                  ? toast.error("You cannot set Default Workflow as In-Active")
                  : handleCloseAlert(e)
              }
              checked={info.getValue()}
            />
          </div>
        </AppTooltip>
      ),
      header: "Status",
      // isSortable: true,
    },
    {
      id: "Actions",
      cell: (info) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction type="view" onClick={handleCloseModel} />
          <TableAction type="edit" onClick={handleCloseModel} />
          {info.row.index === 0 ? (
            <>
              <AppTooltip
                message={
                  info.row.index === 0
                    ? "You cannot delete Default workflow"
                    : ""
                }
              >
                <div>
                  <TableAction
                    type="delete"
                    disabled={info.row.index === 0 ? true : false}
                  />
                </div>
              </AppTooltip>
            </>
          ) : (
            <>
              <TableAction
                onClick={handleCloseDelete}
                type="delete"
                disabled={info.row.index === 0 ? true : false}
              />
            </>
          )}
        </Box>
      ),
      header: () => <span>Actions</span>,
      isSortable: false,
    },
  ];

  const Tabbing_data = [
    {
      label: "Invoice Creation Date",
      id: 1,
    },
    {
      label: "Before Due Date",
      id: 21,
    },
    {
      label: "On Due Date",
      id: 41,
    },
    {
      label: "After Due Date",
      id: 11,
    },
    {
      label: "On Payment Collection Date",
      id: 15,
    },
  ];
  const [value, setValue] = React.useState(1);
  const handleChange = (event, newValue) => {
    // console.log(newValue);
    setValue(newValue);
  };

  return (
    <>
      <Box>
        <Box className="invoice-title">Workflows</Box>

        <Grid container spacing={2} marginBottom={4}>
          <Grid
            item
            xs={12}
            md={12}
            lg={6}
            xl={6}
            sx={{
              display: "flex",
              alignSelf: "center",
              alignItems: "end",
              gap: "20px",
              flexWrap: "wrap",
              "@media (min-width:1280px)": {
                flexWrap: "no-rap",
              },
            }}
          >
            <Box
              sx={{
                "@media (max-width:600px)": {
                  width: "100%",
                },
              }}
            >
              <GlobalSearchBar />
            </Box>
            <Box
              sx={{
                "@media (max-width:600px)": {
                  width: "100%",
                },
              }}
            >
              <FormControl
                variant="standard"
                style={{ height: "48px" }}
                sx={{
                  width: "200px",
                  "@media (max-width:600px)": {
                    width: "100%",
                  },
                }}
              >
                <InputLabel id="demo-simple-select-filled-label">
                  Select
                </InputLabel>
                <Select
                  placeholder="Select"
                  labelId="demo-simple-select-filled-label"
                  // id="demo-simple-select-filled"
                  // value={value}
                  // onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={12}
            lg={6}
            xl={6}
            sx={{
              display: "flex",

              justifyContent: "end",
              alignItems: "end",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "end",
                alignItems: "end",
              }}
            >
              <Button
                variant="outlined"
                color="primary"
                sx={{
                  mr: 2,
                  color: "#40404D",
                  borderColor: "#40404D",
                  borderRadius: "8px",
                  "&:hover": {
                    borderColor: "black",
                    color: "black",
                  },
                }}
              >
                Set as Default
              </Button>

              <Button
                variant="contained"
                color="primary"
                sx={{
                  background: "#2B2B33",
                  borderRadius: "8px",
                  "&:hover": {
                    background: "#2B2B33",
                  },
                }}
                endIcon={<img src={exportIcon} alt="Export Text" />}
              >
                Add Workflow
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <WorkflowTable
        paginationClass={"workflow-pagination"}
        INVOICE_DATA={INVOICE_DATA_ViEW_ALL}
        columns={columns_VIEW_ALL}
      />
      <DeleteModel
        open={openDeleteModel}
        handleClose={handleCloseDelete}
        onDeleteClick={handleCloseDelete}
      />
      <AlertModel
        open={openAlertModel}
        handleClose={handleCloseAlert}
        onDeleteClick={handleCloseAlert}
      />

      {/* <Box className="workflow-model">
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
                (e) =>
                  e.id === value && (
                    <Box sx={{ p: 3 }}>
                      <CustomInput label={"Email"} />

                      <CustomInput label={"First Name"} type="select" />
                      <Grid item xs={6} className={`textfield_bold `}>
                        <label className="input_label">
                          <span
                            className="asterisk"
                            style={{ color: "red", marginTop: "-3px" }}
                          >
                            *
                          </span>
                          First Name
                        </label>
                        <Select
                          className="usersform_textfield"
                          name="firstName"
                          variant="standard"
                          placeholder="First Name"
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </Grid>
                    </Box>
                  )
              )}
            </Box>
          </Grid>
        </Grid>
      </Box> */}

      <ToastContainer />
    </>
  );
};

export default ViewWorkflow;
