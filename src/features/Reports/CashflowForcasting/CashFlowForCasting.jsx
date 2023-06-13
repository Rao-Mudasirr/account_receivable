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
import { Link, useLocation, useNavigate } from "react-router-dom";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { CASHFLOW_Col, CashFlow_Data } from '../ReportsTable/Cashflow_Data';
import ShowFilters from '../../OverdueInvoices/ShowFilters';
import '../report.scss'
import TableAction from '../../../components/Table/TableAction';

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
    const {state} = useLocation()
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
                                <MenuItem value={data?.item}>
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
        data={CashFlow_Data}
        columns={CASHFLOW_Col}
        // showSerialNo
        // onPageChange={pageChangeHandler}
        // onSortByChange={sortChangeHandler}
        isSuccess={true}
        isPagination={true}
      />
    </Fragment>
  )
}

export default CashFlowForCasting