import React, { Fragment, useState } from "react";
import CustomTable from "../../../components/Table/CustomTable";
import { useTableParams } from "../../../components/Table/useTableParams";
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
import { Link, useLocation, useNavigate } from "react-router-dom";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { CASHFLOW_Col, CashFlow_Data } from "../ReportsTable/Cashflow_Data";
import ShowFilters from "../../OverdueInvoices/ShowFilters";
import "../report.scss";
import TableAction from "../../../components/Table/TableAction";
import GlobalButton from "../../../components/global-button/global-button";

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
];

function CashFlowForCasting() {
  const [isOpen, setIsOpen] = useState(false);
  const { state } = useLocation();
  const navigate = useNavigate();
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const [isOpen2, setIsOpen2] = useState(false);
  const [type, setType] = useState("");
  const handleClick2 = () => {
    setIsOpen2(!isOpen2);
  };
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

  return (
    <Fragment>
      <div className="invoice-title">Cashflow Forecasting Report</div>

      {/* Search field */}
      <Grid container>
        <Grid xs={12} sm={12} md={6} lg={4} xl={4}>
          <div
            style={{
              margin: "5px",
              display: "flex",
              alignItems: "center",
              marginTop: "14px",
            }}
          >
            <GlobalSearchBar />
          </div>
        </Grid>

        <Grid xs={12} md={6} lg={8} xl={8}>
          <div style={{ marginLeft: "auto" }} className="invoices-tabal-header">
            <Grid container spacing={2} alignItems="center">
              <Grid
                // item
                xs={12}
                md={6}
                lg={9}
                xl={9}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="From"
                    variant="standared"
                    value={startDate}
                    onChange={(date) => handleDateChange(date, "Start date")}
                  />
                  &nbsp; &nbsp; &nbsp;
                  <DatePicker
                    label="To"
                    value={endDate}
                    onChange={(date) => handleDateChange(date, "End Date")}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                lg={3}
                xl={3}
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <GlobalButton
                  btnName="outline"
                  btnText="More Filters"
                  endIcon={
                    <img
                      src={filterIcon}
                      alt="More Filter"
                      width={16}
                      height={16}
                    />
                  }
                  onClick={() => {
                    setType("More");
                    handleClick2();
                  }}
                  // className="invoice-filter-btn"
                />
                
                &nbsp;
                <GlobalButton
                  btnName="accent"
                  btnText="Export Text"
                  endIcon={
                    <img
                      src={exportIcon}
                      alt="Export Text"
                      width={16}
                      height={16}
                    />
                  }
                  onClick={() => {
                    setType("Export");
                    handleClick2();
                  }}
                  // className="invoice-second-btn"
                />
              </Grid>
            </Grid>

            <ShowFilters
              page={"Reports"}
              input_filter={input_filter}
              filter_type={type}
              handleClick={handleClick2}
              isOpen={isOpen2}
            />
          </div>
        </Grid>
      </Grid>
      <br />
      {/* Table */}

      <CustomTable
        data={CashFlow_Data}
        columns={CASHFLOW_Col}
        // showSerialNo
        // onPageChange={pageChangeHandler}
        // onSortByChange={sortChangeHandler}
        isSuccess={true}
        isPagination={true}
      />
    </Fragment>
  );
}

export default CashFlowForCasting;
