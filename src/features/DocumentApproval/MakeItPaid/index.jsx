import React, { useState } from "react";
import "./styles.scss";
import { Box, Button, Typography } from "@mui/material";
import { ReactComponent as Close } from "../../../assests/svg/model-close.svg";
import DocumentApprovalModel from "../DocumentApprovalModel/DocumentApprovalModel";
import Details from "../Details";
import Timelines from "../Timelines";

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
            <Timelines />
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
