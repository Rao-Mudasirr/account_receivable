import React, { Fragment, useState } from 'react'
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
import { Link, useLocation } from "react-router-dom";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DSO_Col, DSO_Data } from '../ReportsTable/DSO_Report';
import ShowFilters from '../../OverdueInvoices/ShowFilters';
import '../report.scss'

function DSO_Month() {
    const [isOpen, setIsOpen] = useState(false);
    const {state} = useLocation()
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
      <div className="invoice-title">{state?.reportData?.title}</div>

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
            className='buttons-filters'
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
                handleClick2()
              }}
          >
            Export Text
          </Button>
          <ShowFilters
            filter_type = {type}
            handleClick = {handleClick2}
            isOpen = {isOpen2}
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