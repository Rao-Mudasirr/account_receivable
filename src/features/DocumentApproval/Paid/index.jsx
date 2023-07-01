import React, { useState } from "react";
import "./styles.scss";
import { Box, Button, Grid, InputAdornment, Typography } from "@mui/material";
import CustomInput from "../../../components/CustomInput";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Image from "../../../assests/bills/file.png";
import { ReactComponent as FullScreen } from "../../../assests/bills/maximize.svg";
import { ReactComponent as Pound } from "../../../assests/bills/pound-sign.svg";

import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import DocumentApprovalModel from "../DocumentApprovalModel/DocumentApprovalModel";
const Paid = () => {
  const [value, setValue] = useState(0);
  const [openModel, setOpenModel] = useState({
    model: false,
    type: 0,
  });

  const tabbingList = [
    {
      value: 0,
      title: "Details",
    },
  ];
  return (
    <Box className="parent-paid-screen">
      <Box className="first-section">
        <Typography component="h4">East Repair Inc.</Typography>
        <Typography>£ 500.00</Typography>
      </Box>
      <Box className="second-section">
        {/* <Button
          className="outline"
          onClick={() =>
            setOpenModel({ ...openModel, model: !openModel.model, type: 0 })
          }
        >
          Decline
        </Button> */}
        <Button className="fill">Close</Button>
      </Box>
      <Box className="third-section">
        <Box className="tabbing-list">
          {tabbingList?.map((e, i) => (
            <Typography
              key={i}
              onClick={() => setValue(e?.value)}
              className={`tabbing-item ${value === e?.value ? "active" : ""}`}
            >
              {e?.title}
            </Typography>
          ))}
        </Box>
        <Box className="tabbing-children">
          {value === 0 ? (
            <Details openModel={openModel} setOpenModel={setOpenModel} />
          ) : (
            ""
          )}
        </Box>
      </Box>
      {openModel && (
        <DocumentApprovalModel
          open={openModel?.model}
          type={openModel?.type}
          handleClose={() =>
            setOpenModel({ ...openModel, model: !openModel.model, type: 0 })
          }
        />
      )}
    </Box>
  );
};

export default Paid;

const Details = ({ setOpenModel, openModel }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  return (
    <>
      <Box className="children-first-section">
        <Box className="image-box">
          <img src={Image} alt="file" />
        </Box>

        <FullScreen
          className="maximize-btn"
          onClick={() =>
            setOpenModel({ ...openModel, model: !openModel.model, type: 1 })
          }
        />
      </Box>
      <Box className="children-second-section">
        <Grid container spacing={5} rowSpacing={5}>
          <Grid item xs={12} md={6} lg={6}>
            <CustomInput
              inputClass={"inputClass"}
              label={"Invoice Number"}
              required={false}
              labelClass={"labelClass"}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <p className="label">Issue Date</p>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={{
                  ".MuiInputBase-input ": {
                    p: "13px",
                    fontFamily: `'Exo 2', "Roboto", "sans-serif"`,
                    color: startDate ? "#40404D" : "#A6A6B3",
                  },
                }}
                slots={{
                  openPickerIcon: CalendarMonthRoundedIcon,
                }}
                slotProps={{ textField: { placeholder: "From" } }}
                variant="standared"
                value={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <p className="label">Bill Due Date</p>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={{
                  ".MuiInputBase-input ": {
                    p: "13px",
                    fontFamily: `'Exo 2', "Roboto", "sans-serif"`,
                    color: startDate ? "#40404D" : "#A6A6B3",
                  },
                }}
                slots={{
                  openPickerIcon: CalendarMonthRoundedIcon,
                }}
                slotProps={{ textField: { placeholder: "From" } }}
                variant="standared"
                value={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <CustomInput
              inputClass={"inputClass"}
              label={"Payment Source"}
              required={false}
              labelClass={"labelClass"}
              type="select"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <CustomInput
              inputClass={"inputClass"}
              label={"Payment Method"}
              required={false}
              labelClass={"labelClass"}
              type="select"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6}></Grid>
          <Grid item xs={12} md={6} lg={6}>
            <CustomInput
              label={"Payment Amount"}
              required={false}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Pound />
                  </InputAdornment>
                ),
              }}
              inputClass={"inputClass inputClass2"}
              labelClass={"labelClass"}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
