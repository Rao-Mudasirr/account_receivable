import React, { useState } from "react";
import CustomTable from "../../../components/Table/CustomTable";
import "./workflow_report.scss";
import { GlobalSearchBar } from "../../../components/global-search-filter/global-search-filter";
import filterIcon from "../../../assests/images/client/filter.png";
import exportIcon from "../../../assests/images/client/export.png";
import {Button, Grid, Box} from "@mui/material";
import ShowFilters from "./ShowFilters";
import Date_Range from "./Date_Range";
import TableAction from "../../../components/Table/TableAction";
import { Link } from "react-router-dom";
import SrIcon from '../../../assests/images/client/sricon.png'

const INVOICE_DATA = [
  {
    id: 1,
    workflow_Id: "01",
    workflow_name: "Test",
    created_by: "Alice",
    no_assigned_clients: "2",
    overdue_days: "12",
  },
  {
    id: 2,
    workflow_Id: "02",
    workflow_name: "Test",
    created_by: "Alice",
    no_assigned_clients: "33",
    overdue_days: "12",
  },
  {
    id: 3,
    workflow_Id: "03",
    workflow_name: "Test",
    created_by: "Alice",
    no_assigned_clients: "33",
    overdue_days: "12",
  },
];

export default function InvoiceListing() {

  const columns = [
    {
      accessorFn: (row) => row.workflow_Id,
      id: "workflow_Id",
      cell: (info) => info.getValue(),
      header: () => <span>Workflow Id <img src={SrIcon} alt="Workflow Id" /></span>
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.workflow_name,
      id: "workflow_name",
      cell: (info) => info.getValue(),
      header: "Workflow Name",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.created_by,
      id: "created_by",
      cell: (info) => info.getValue(),
      header: "Created By",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.no_assigned_clients,
      id: "no_assigned_clients",
      cell: (info) => info.getValue(),
      header: "No of Assigned Clients",
      // isSortable: true,
    },
    {
      id: "Actions",
      cell: (info) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
         <Link to="/signin"> <TableAction type="view" /> </Link>
        </Box>
      ),
      header: () => <span>Actions</span>,
      // isSortable: false,
    },
  ];

const [isOpen, setIsOpen] = useState(false);
const [type, setType] = useState("");

const handleClick = () => {
setIsOpen(!isOpen);
};


  return (
    <React.Fragment>
      <div className="workflows-title">Workflows Report</div>

      {/* Search field */}
      <Grid container>
        <Grid xs={12} md={6} lg={6} xl={6} className="flex">
          <div
            style={{
              display: "flex",
              alignItems: "end",
              marginBottom: "8px"
            }}
          >
            <GlobalSearchBar />
          </div>
        </Grid>

        <Grid 
        xs={12} md={6} lg={6} xl={6} 
        sx={{ display: "flex"}}>
          <div style={{ display: "flex", marginLeft: "1.5rem"}}>
            <Date_Range/>
          </div>
            <div className="flex" style={{gap: "15px", width: "100%", alignItems: "center", justifyContent: "flex-end", marginTop: "1rem"}}>
          <Button
            variant="outlined"
            color="primary"
            sx={{
              color: "#40404D",
              borderColor: "#40404D",
              borderRadius:'8px',
              "&:hover": {
                borderColor: "black",
                color: "black",
              },
            }}
            endIcon={<img src={filterIcon} alt="More Filter" />}
            onClick={()=> {
              setType("More")
              handleClick()
            }}
          >
            More Filters
          </Button>

          <Button
            variant="contained"
            color="primary"
            sx={{
              background: "#2B2B33",
              borderRadius: '8px',
              "&:hover": {
                background: "#2B2B33",
              },
            }}
            endIcon={<img src={exportIcon} alt="Export Text" />}
            onClick={()=> {
                setType("Export")
                handleClick()
              }}
          >
            Export
          </Button>
          <ShowFilters 
            filter_type = {type}
            handleClick = {handleClick}
            isOpen = {isOpen}
             />
        </div>
        </Grid>
      </Grid>
      <br />
      {/* Table */}

      <CustomTable
        data={INVOICE_DATA}
        columns={columns}
        isSuccess={true}
        isPagination={true}
      />
    </React.Fragment>
  );
}
