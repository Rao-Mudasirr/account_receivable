import React, { useState } from "react";
import CustomTable from "../../../components/Table/CustomTable";
import { useTableParams } from "../../../components/Table/useTableParams";
// import TableAction from '../../../components/Table/TableAction';
// import DeleteModel from '../../../../components/modal/DeleteModel';
// import FormDialog from '../../../../components/modal/ModalPractice';
import "./invoice_listing.scss";
import { GlobalSearchBar } from "../../../components/global-search-filter/global-search-filter";
import filterIcon from "../../../assests/images/client/filter.png";
import exportIcon from "../../../assests/images/client/export.png";
import Button from "@mui/material/Button";
import { Card } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { Link } from "react-router-dom";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const INVOICE_DATA = [
  {
    id: 1,
    Id: "01",
    invoiceNo: "2345",
    client: "Ali",
    invoice_status: "Paid",
    issue_date: "19 Oct, 2023",
    due_date: "19 Oct, 2023",
    overdue_days: "12",
    total_amount: "$7200",
  },
  {
    id: 2,
    Id: "02",
    invoiceNo: "2345",
    client: "Ali",
    invoice_status: "Due",
    issue_date: "19 Oct, 2023",
    due_date: "19 Oct, 2023",
    overdue_days: "12",
    total_amount: "$7200",
  },
  {
    id: 3,
    Id: "03",
    invoiceNo: "2345",
    client: "Ali",
    invoice_status: "Overdue",
    issue_date: "19 Oct, 2023",
    due_date: "19 Oct, 2023",
    overdue_days: "12",
    total_amount: "$7200",
  },
  {
    id: 4,
    Id: "04",
    invoiceNo: "2345",
    client: "Ali",
    invoice_status: "Paid",
    issue_date: "19 Oct, 2023",
    due_date: "19 Oct, 2023",
    overdue_days: "12",
    total_amount: "$7200",
  },
  {
    id: 5,
    Id: "05",
    invoiceNo: "2345",
    client: "Ali",
    invoice_status: "Overdue",
    issue_date: "19 Oct, 2023",
    due_date: "19 Oct, 2023",
    overdue_days: "12",
    total_amount: "$7200",
  },
];

const input_filter = [
  {
    field: "Branch",
    Items: [
      {
        id: "1",
        item: "Item 1",
      },
      {
        id: "2",
        item: "Item 2",
      },
      {
        id: "3",
        item: "Item 3",
      },
    ],
  },
  {
    field: "Client",
    Items: [
      {
        id: "1",
        item: "Item 1",
      },
      {
        id: "2",
        item: "Item 2",
      },
      {
        id: "3",
        item: "Item 3",
      },
    ],
  },
  {
    field: "Status",
    Items: [
      {
        id: "1",
        item: "Paid",
      },
      {
        id: "2",
        item: "Due",
      },
      {
        id: "3",
        item: "Overdue",
      },
    ],
  },
  {
    field: "Aging Bucket",
    Items: [
      {
        id: "1",
        item: "Amount overdue < 30d",
      },
      {
        id: "2",
        item: "Amount overdue 30 - 60d",
      },
      {
        id: "3",
        item: "Amount overdue 60 - 90d",
      },
      {
        id: "4",
        item: "Amount overdue > 90d",
      },
    ],
  },
];
export default function InvoiceListing() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const columns = [
    {
      accessorFn: (row) => row.Id,
      id: "Id",
      cell: (info) => info.getValue(),
      header: () => <span>Sr.#</span>,
      // isSortable: true,
    },
    {
      accessorFn: (row) => <Link to="/invoice-no-detail">{row.invoiceNo}</Link>,
      id: "invoiceNo",
      cell: (info) => (
        <span style={{ color: "#0084AD", textDecoration: "underline" }}>
          {info.getValue()}
        </span>
      ),
      header: "Invoice No.",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.client,
      id: "client",
      cell: (info) => info.getValue(),
      header: "Client",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.invoice_status,
      id: "invoice_status",
      cell: (info) => (
        <span
          className={
            info.getValue() === "Paid"
              ? "Paid"
              : info.getValue() === "Due"
              ? "Due"
              : "Overdue"
          }
        >
          {info.getValue()}
        </span>
      ),
      header: "Invoice Status",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.issue_date,
      id: "issue_date",
      cell: (info) => info.getValue(),
      header: "Issue Date",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.due_date,
      id: "due_date",
      cell: (info) => info.getValue(),
      header: "Due Date",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.overdue_days,
      id: "overdue_days",
      cell: (info) => info.getValue(),
      header: "Overdue Days",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.total_amount,
      id: "total_amount",
      cell: (info) => info.getValue(),
      header: "Total Amount",
      // isSortable: true,
    },
    // {
    //   id: "Actions",
    //   cell: (info) => (
    //     <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
    //       {/* <TableAction type="delete" onClicked={handleOpen} />
    //        <TableAction type="edit" onClicked={handleFormDialog} />
    //       <TableAction type="setting" onClicked={handleFormDialog} /> */}
    //     </Box>
    //   ),
    //   header: () => <span>Actions</span>,
    //   isSortable: false,
    // },
  ];

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [error, setError] = useState(null);

  const handleDateChange = (date, label) => {
    if (label === "Start date") {
      setStartDate(date);
    } else if (label === "End Date") {
      setEndDate(date);
    }
  };

  // const handleApplyClick = () => {
  //   if (startDate && endDate && startDate.isAfter(endDate)) {
  //     setError("Please select a valid date range.");
  //     return;
  //   }

  //   onApplyDate({ startDate, endDate });
  //   onCloseDatePicker();
  // };

  const handleClearClick = () => {
    setStartDate(null);
    setEndDate(null);
    setError(null);
  };

  return (
    <React.Fragment>
      <div className="invoice-title">Invoices</div>

      {/* Search field */}
      <Grid container>
        <Grid xs={12} md={6} lg={6} xl={6}>
          <div
            style={{
              margin: "5px",
              display: "flex",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <GlobalSearchBar />
          </div>
        </Grid>

        <Grid xs={12} md={6} lg={6} xl={6}>
          <div style={{ marginLeft: "auto", display: "flex" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              {/* <DemoContainer components={["DatePicker", "DatePicker"]}> */}
              <DatePicker
                sx={{
                  paddingRight: "20px",
                }}
                label="From"
                variant="standared"
                value={startDate}
                onChange={(date) => handleDateChange(date, "Start date")}
              />
              <DatePicker
                sx={{
                  paddingRight: "20px",
                }}
                label="To"
                value={endDate}
                onChange={(date) => handleDateChange(date, "End Date")}
              />
              {/* </DemoContainer> */}
            </LocalizationProvider>
            <Button
              onClick={handleClick}
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
              endIcon={<img src={filterIcon} alt="More Filter" />}
            >
              More Filter
            </Button>
            {isOpen && (
              <Card
                style={{
                  width: "592px",
                  // height: '376px',
                  position: "absolute",
                  right: "50px",
                  zIndex: 10,
                  padding: "24px",
                  marginTop: "7px",
                  boxShadow: "0px 9px rgba(0, 0, 0, 0.2);",
                  borderRadius: "8px",
                }}
              >
                {/* <ul> */}
                <div className="filter-heading">
                  <div className="title-filter">Filters</div>
                  <div className="icon-filter" onClick={handleClick}>
                    <CancelOutlinedIcon />{" "}
                  </div>
                </div>
                <br />
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={1}>
                    {input_filter?.map((val, index) => (
                      <Grid
                        style={{ marginBottom: "40px" }}
                        spacing={2}
                        key={index}
                        item
                        xs={12}
                        md={6}
                        lg={6}
                      >
                        <InputLabel
                          id="demo-simple-select-filled-label"
                          className="field-label"
                        >
                          {val?.field}
                        </InputLabel>
                        <FormControl
                          variant="standard"
                          style={{ width: "260px", height: "48px" }}
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
                            {val?.Items?.map((data, i) => (
                              <React.Fragment key={i}>
                                <MenuItem
                                  value={data?.item}
                                  style={{
                                    color:
                                      data?.item === "Paid"
                                        ? "#48995D"
                                        : data?.item === "Due"
                                        ? "#FFBF00"
                                        : data?.item === "Overdue"
                                        ? "#FF3F3F"
                                        : "#6B6B80",
                                  }}
                                >
                                  {data?.item}
                                </MenuItem>
                              </React.Fragment>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
                {/* </ul> */}
                <div
                  className="filter-below-btn"
                  style={{ display: "flex", float: "right" }}
                >
                  <Button className="btn1" onClick={handleClick}>
                    Clear
                  </Button>
                  &nbsp;
                  <Button className="btn2">Apply</Button>
                </div>
              </Card>
            )}
          </div>
        </Grid>
      </Grid>
      <br />
      {/* Table */}

      <CustomTable
        data={INVOICE_DATA}
        columns={columns}
        // showSerialNo
        // onPageChange={pageChangeHandler}
        // onSortByChange={sortChangeHandler}
        isSuccess={true}
        isPagination={true}
      />
    </React.Fragment>
  );
}
