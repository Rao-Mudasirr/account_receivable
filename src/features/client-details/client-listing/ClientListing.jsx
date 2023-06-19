import { Grid } from '@mui/material';
import React, { Fragment, useState } from 'react'
import { GlobalSearchBar } from '../../../components/global-search-filter/global-search-filter';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import GlobalButton from '../../../components/global-button/global-button';
import ShowFilters from '../../OverdueInvoices/ShowFilters';
import CustomTable from '../../../components/Table/CustomTable';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import filterIcon from "../../../assests/images/client/filter.png";
import exportIcon from "../../../assests/images/client/export.png";
import { list_col, list_data } from './ListClientData';

function Client_Listing() {
    const [isOpen, setIsOpen] = useState(false);
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
      <div className="invoice-title">
        Clients
      </div>

      {/* Search field */}
      <Grid container>
        <Grid xs={12} sm={12} md={12} lg={12} xl={4}>
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

        <Grid xs={12} sm={12} md={12} lg={12} xl={8}>
          <div style={{ marginLeft: "auto" }} className="invoices-tabal-header">
            <Grid container spacing={2} alignItems="center">
              <Grid
                // item
                xs={12}
                sm={12}
                md={12}
                lg={6}
                xl={9}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    sx={{
                      paddingRight: "20px",
                      ".MuiInputBase-input ": {
                        p: "13px",
                        fontFamily: `'Exo 2', "Roboto", "sans-serif"`,
                        color: "#A6A6B3",
                      },
                    }}
                    slots={{
                      openPickerIcon: CalendarMonthRoundedIcon,
                    }}
                    slotProps={{ textField: { placeholder: "From" } }}
                    variant="standared"
                    value={startDate}
                    onChange={(date) => handleDateChange(date, "Start date")}
                  />
                  &nbsp; &nbsp; &nbsp;
                  <DatePicker
                    sx={{
                      paddingRight: "20px",
                      ".MuiInputBase-input ": {
                        p: "13px",
                        fontFamily: `'Exo 2', "Roboto", "sans-serif"`,
                        color: "#A6A6B3",
                      },
                    }}
                    slots={{
                      openPickerIcon: CalendarMonthRoundedIcon,
                    }}
                    slotProps={{ textField: { placeholder: "To" } }}
                    value={endDate}
                    onChange={(date) => handleDateChange(date, "End Date")}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={6}
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
                      // width={16}
                      // height={16}
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
                      // width={16}
                      // height={16}
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
            //   input_filter={input_filter}
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
        data={list_data}
        columns={list_col}
        isSuccess={true}
        isPagination={true}
      />
    </Fragment>
  )
}

export default Client_Listing