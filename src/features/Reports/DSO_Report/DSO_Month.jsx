import React, { Fragment, useState } from 'react'
import CustomTable from "../../../components/Table/CustomTable";
import { useTableParams } from "../../../components/Table/useTableParams";
import { GlobalSearchBar } from "../../../components/global-search-filter/global-search-filter";
import filterIcon from "../../../assests/images/client/filter.png";
import exportIcon from "../../../assests/images/client/export.png";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useLocation } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DSO_Col, DSO_Data } from '../ReportsTable/DSO_Report';
import ShowFilters from '../../OverdueInvoices/ShowFilters';
import '../report.scss'
import GlobalButton from '../../../components/global-button/global-button';

function DSO_Month() {
    const [isOpen, setIsOpen] = useState(false);
    const {state} = useLocation()
    console.log("state: ",state);
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
      <div className="invoice-title">Days Sales Outstanding (Month Wise) Report</div>

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
                lg={10}
                xl={10}
                sx={{ display: "flex", justifyContent: 'flex-end'}}
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
                lg={2}
                xl={2}
                style={{ display: "flex", justifyContent: "flex-start"}}
              >
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
              // input_filter={input_filter}
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
        data={DSO_Data}
        columns={DSO_Col}
        // showSerialNo
        // onPageChange={pageChangeHandler}
        // onSortByChange={sortChangeHandler}
        isSuccess={true}
        isPagination={true}
      />
    </Fragment>
  )
}

export default DSO_Month