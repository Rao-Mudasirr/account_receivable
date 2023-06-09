import React from "react";
import { Link } from "react-router-dom";
import TableAction from "../../../components/Table/TableAction";
import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Switch,
} from "@mui/material";
import { GlobalSearchBar } from "../../../components/global-search-filter/global-search-filter";
import exportIcon from "../../../assests/images/client/export.png";

import "./ViewWorkflow.scss";
import WorkflowTable from "../table/workflowTable";
import CustomSwitch from "../../../components/CustomSwtich/CustomSwtich";

const ViewWorkflow = () => {
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
      status: true,
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
      status: true,
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
      status: true,
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
      status: true,
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
        <Link style={{ color: "#0084AD" }} to={`/workflows/clients/${info.row.id}`}>
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
      cell: (info) => <span>£{info.getValue()}</span>,
      header: "Unpaid Amount",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.status,
      id: "status",
      cell: (info) => (
        <span>
          <CustomSwitch />
        </span>
      ),
      header: "Status",
      // isSortable: true,
    },
    {
      id: "Actions",
      cell: (info) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction type="view" />
          <TableAction type="edit" />
          <TableAction
            type="delete"
            disabled={info.row.index === 0 ? true : false}
          />
        </Box>
      ),
      header: () => <span>Actions</span>,
      isSortable: false,
    },
  ];
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
    </>
  );
};

export default ViewWorkflow;
