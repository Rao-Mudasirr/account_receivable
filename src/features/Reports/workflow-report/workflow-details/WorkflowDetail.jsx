import React, { useState } from "react";
import CustomTable from "../../../../components/Table/CustomTable";
import "../workflow_report.scss";
import { GlobalSearchBar } from "../../../../components/global-search-filter/global-search-filter";
import filterIcon from "../../../../assests/images/client/filter.png";
import exportIcon from "../../../../assests/images/client/export.png";
import {Button, Grid, Box} from "@mui/material";
import ShowFilters from "../ShowFilters";
import Date_Range from "../Date_Range";
import SrIcon from '../../../../assests/images/client/sricon.png'

const INVOICE_DATA = [
  {
    id: 1,
    client_Id: "01",
    client_name: "John Doe",
    no_invoices: "3",
    paid_invoices: "60%",
    invoices_paid_duedate: "60%",
  },
  {
    id: 2,
    client_Id: "02",
    client_name: "John Doe",
    no_invoices: "3",
    paid_invoices: "60%",
    invoices_paid_duedate: "60%",
  },
  {
    id: 3,
    client_Id: "03",
    client_name: "John Doe",
    no_invoices: "5",
    paid_invoices: "60%",
    invoices_paid_duedate: "60%",
  },
];

export default function WorkflowDetail() {

  const columns = [
    {
      accessorFn: (row) => row.client_Id,
      id: "client_Id",
      cell: (info) => info.getValue(),
      header: () => <span>Client Id <img src={SrIcon} alt="Workflow Id" /></span>
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.client_name,
      id: "client_name",
      cell: (info) => info.getValue(),
      header: "Client Name",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.no_invoices,
      id: "no_invoices",
      cell: (info) => info.getValue(),
      header: "No. of Invoices",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.paid_invoices,
      id: "paid_invoices",
      cell: (info) => info.getValue(),
      header: "% of Paid Invoices",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.invoices_paid_duedate,
      id: "invoices_paid_duedate",
      cell: (info) => info.getValue(),
      header: "% of Invoices Paid on Due Date",
      // isSortable: true,
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
