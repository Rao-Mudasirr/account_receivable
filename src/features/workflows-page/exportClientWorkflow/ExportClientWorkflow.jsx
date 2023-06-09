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
} from "@mui/material";
import { GlobalSearchBar } from "../../../components/global-search-filter/global-search-filter";
import exportIcon from "../../../assests/images/client/export.png";

import "./ExportClientWorkflow.scss";
import WorkflowTable from "../table/workflowTable";
import CustomSwitch from "../../../components/CustomSwtich/CustomSwtich";
import CardFilter from "../../client-details/components/card-filter/card-filter";

const ExportClientWorkflow = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  // Modal Function
  const modalClickHandlar = () => {
    setIsOpen(!isOpen);
  };
  const INVOICE_DATA_ViEW_ALL = [
    {
      id: 1,
      Id: "01",
      name: "Clark Joe",
      totalInvoice: 300,
      paidInvoice: 44,
      paidAmount: 1245,
      unpaidInvoice: 33,
      dueAmount: 33,
      totalAmount: 10245,
    },
    {
      id: 2,
      Id: "02",
      name: "Clark Joe",
      totalInvoice: 300,
      paidInvoice: 44,
      paidAmount: 1245,
      unpaidInvoice: 33,
      dueAmount: 33,
      totalAmount: 10245,
    },
    {
      id: 3,
      Id: "03",
      name: "Clark Joe",
      totalInvoice: 300,
      paidInvoice: 44,
      paidAmount: 1245,
      unpaidInvoice: 33,
      dueAmount: 33,
      totalAmount: 10245,
    },
    {
      id: 4,
      Id: "04",
      name: "Clark Joe",
      totalInvoice: 300,
      paidInvoice: 44,
      paidAmount: 1245,
      unpaidInvoice: 33,
      dueAmount: 33,
      totalAmount: 10245,
    },
    {
      id: 5,
      Id: "05",
      name: "Clark Joe",
      totalInvoice: 300,
      paidInvoice: 44,
      paidAmount: 1245,
      unpaidInvoice: 33,
      dueAmount: 33,
      totalAmount: 10245,
    },
  ];
  const columns_VIEW_ALL = [
    {
      accessorFn: (row) => row.Id,
      id: "ID",
      cell: (info) => <span> {info.getValue()}</span>,

      header: () => <span>ID</span>,
      // isSortable: true,
    },
    {
      accessorFn: (row, i) => <span>{row.name}</span>,
      id: "name",
      cell: (info) => info.getValue(),
      header: "Client Name",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.totalInvoice,
      id: "Total Invoices",
      cell: (info) => info.getValue(),
      header: "Total Invoices",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.paidInvoice,
      id: "Paid Invoice",
      cell: (info) => <span>£{info.getValue()}</span>,
      header: "Paid Invoices",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.paidAmount,
      id: "Paid Amount",
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Paid Amount",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.unpaidInvoice,
      id: "Unpaid Invoices",
      cell: (info) => info.getValue(),
      header: "Unpaid Invoices",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.dueAmount,
      id: "Due Amount",
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Due Amount",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.totalAmount,
      id: "Total Amount",
      cell: (info) => <span>£{info.getValue()}</span>,
      header: "Total Amount",
      // isSortable: true,
    },
  ];
  return (
    <>
      <Box>
        <Box className="invoice-title">Clients</Box>

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
                onClick={modalClickHandlar}
              >
                Export
              </Button>
              <CardFilter
                filter_type="Export"
                handleClick={modalClickHandlar}
                isOpen={isOpen}
              />
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

export default ExportClientWorkflow;
