import React, { useState } from "react";
import { Box, Button, Grid, InputAdornment, Typography } from "@mui/material";
import CustomInput from "../../../components/CustomInput";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Image from "../../../assests/bills/file.png";
import { ReactComponent as FullScreen } from "../../../assests/bills/maximize.svg";
import { ReactComponent as Pound } from "../../../assests/bills/pound-sign.svg";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import './details.scss'
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import AddIcon from '@mui/icons-material/Add';

const DetailsPage = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <Grid container className="height-100vh align-center justify-center reuse-details-page">
      <Box sx={{
        width: '936px',
        borderRadius: '8px',
        p: 2.3,
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 5px 15px;',
      }}>
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: '600',
            display: 'flex',
            fontFamily: 'Exo 2',
            justifyContent: 'space-between',
          }}
          gutterBottom
        >
          Bill Details
          <CancelOutlinedIcon />
        </Typography>
        <div className="flex justify-space-between margin-top-2">
          <label className="sub-heading font-weight-400 font-family-exo2 secondary-color">East Repair Inc.</label>
          <label className="sub-heading font-weight-400 font-family-exo2 secondary-color">£ 500.00</label>
        </div>
        <div className="margin-top-2">
          <label className="sub-heading font-weight-600 font-family-exo2 tertiary-color">Preview</label>
        </div>
        <Box className="first-section">
          <Box className="image-box">
            <img src={Image} alt="file" />
          </Box>
        </Box>
        <Box className="second-section">
          <Grid container spacing={5} rowSpacing={5}>
            <Grid item xs={12} md={6} lg={4}>
              <CustomInput
                inputClass={"inputClass"}
                label={"Invoice Number"}
                required={false}
                labelClass={"labelClass"}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <p className="label">Issue Date</p>
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                style={{ maxWidth: "100%", width: "100%" }}
              >
                <DatePicker
                  sx={{
                    width: "100%",
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
            <Grid item xs={12} md={6} lg={4}>
              <p className="label">Bill Due Date</p>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  sx={{
                    width: "100%",
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
                  value={endDate}
                  onChange={(date) => setEndDate(date)}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <CustomInput
                inputClass={"inputClass"}
                label={"Payment Source"}
                required={false}
                labelClass={"labelClass"}
                type="select"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <CustomInput
                inputClass={"inputClass"}
                label={"Payment Method"}
                required={false}
                labelClass={"labelClass"}
                type="select"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
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
        <div className="flex justify-end">
          <Button className="margin-top-3"
            sx={{
              color: 'black',
              borderColor: '#40404D',
              width: '150px',
              padding: '8px',
              height: '32px',
              border: '1.5px solid #40404D',
              fontWeight: 400,
              fontSize: '0.75rem',
              borderRadius: '8px',
              textTransform: 'capitalize',
              '&:hover': {
                borderColor: 'black',
                color: 'black',
              },
            }}
          >
            Add Credit Note
            <AddIcon fontSize="small" sx={{ ml: "10px" }} />
          </Button>
        </div>
        <div className="flex justify-end margin-top-2">
          <Button
            variant="contained"
            className='font-family-Exo text-transform border-radius-8'
            color="primary"
            sx={{
              background: "#2B2B33",
              p: '12px 25px',
              "&:hover": {
                background: "#2B2B33",
              },
            }}
          >
            Save
          </Button>
        </div>
      </Box>
    </Grid>
  );
};
export default DetailsPage