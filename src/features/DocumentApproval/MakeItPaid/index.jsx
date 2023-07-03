import React, { useEffect, useState } from "react";
import "./styles.scss";
import { Box, Button, Grid, InputAdornment, Typography } from "@mui/material";
import CustomInput from "../../../components/CustomInput";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Image from "../../../assests/bills/file.png";
import { ReactComponent as FullScreen } from "../../../assests/bills/maximize.svg";
import { ReactComponent as Pound } from "../../../assests/bills/pound-sign.svg";
import { ReactComponent as Close } from "../../../assests/svg/model-close.svg";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import DocumentApprovalModel from "../DocumentApprovalModel/DocumentApprovalModel";
const MakeItPaid = () => {
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
    {
      value: 1,
      title: "Timeline",
    },
    {
      value: 2,
      title: "Credit Note",
    },
  ];
  return (
    <Box className="parent-MakeitPaid-screen">
      <Box className="first-section">
        <Typography component="h4">East Repair Inc.</Typography>
        <Typography>£ 500.00</Typography>
      </Box>
      <Box className="second-section">
        <Button
          className="outline"
          onClick={() =>
            setOpenModel({ ...openModel, model: !openModel.model, type: 0 })
          }
        >
          Decline
        </Button>
        <Button className="fill">Mark As Paid</Button>
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
            <Details setOpenModel={setOpenModel} openModel={openModel} />
          ) : value === 1 ? (
            <Timeline />
          ) : value === 2 ? (
            <DragDropFile />
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

export default MakeItPaid;

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
const Timeline = () => {
  const array = Array.from({ length: 20 });
  return (
    <>
      <Box sx={{ marginTop: "20px" }}>
        {array.map((e, i) => (
          <Box className="timeline-first-section" key={i}>
            <Typography className="time-timeline">
              Mar 31, 2023 3:37 p.m.
            </Typography>
            <Typography className="time-description">
              Usman Saeed has modified the payment currency from DKK to GBP{" "}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};

// drag drop file component
const DragDropFile = () => {
  // drag state
  const [dragActive, setDragActive] = React.useState(false);
  const [file, setFile] = useState(null);
  // ref
  const inputRef = React.useRef(null);

  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      console.log("files", e.dataTransfer.files[0]);
      // handleFiles(e.dataTransfer.files);
      setFile(e.dataTransfer.files[0]);
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      console.log("files", e.target.files[0]);
      // handleFiles(e.target.files);
      setFile(e.target.files[0]);
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <Box className="uploader">
      <form
        id="form-file-upload"
        className={dragActive ? "drag-active" : ""}
        onDragEnter={handleDrag}
        onSubmit={(e) => e.preventDefault()}
      >
        {file ? (
          <>
            <label
              id="label-file-upload"
              htmlFor="input-file-upload"
              className={dragActive ? "drag-active" : ""}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <p style={{ margin: 0 }}>{file?.name}</p>
                <Close
                  style={{ cursor: "pointer" }}
                  onClick={() => setFile(null)}
                />
              </Box>
            </label>
          </>
        ) : (
          <>
            <input
              ref={inputRef}
              type="file"
              id="input-file-upload"
              multiple={true}
              onChange={handleChange}
            />
            <label
              id="label-file-upload"
              htmlFor="input-file-upload"
              className={dragActive ? "drag-active" : ""}
            >
              {" "}
              <Box>
                <p>Drag and drop here </p>
                <p className="or">or</p>
                <Button className="fill" onClick={onButtonClick}>
                  Browse Files
                </Button>
              </Box>
            </label>
          </>
        )}

        {dragActive && (
          <div
            id="drag-file-element"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          ></div>
        )}
      </form>
    </Box>
  );
};
