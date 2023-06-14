import {
  Box,
  MenuItem,
  Select,
  TextField,
  TextareaAutosize,
} from "@mui/material";
// import { TextField } from "formik-material-ui";

import React, { useEffect } from "react";
import "./styles.scss";

const CustomInput = ({
  label,
  required = true,
  type = "Text",
  options = [],
  inputClass,
  labelClass,
  ...props
}) => {
  useEffect(() => {}, [options?.length]);
  return (
    <Box className={"custom-input-1"}>
      <label
        style={{ paddingLeft: required ? "0" : "7px" }}
        className={`input_label input_label2  ${labelClass ? labelClass : ""}`}
      >
        {required && (
          <span
            className="asterisk"
            style={{ color: "red", marginTop: "-3px" }}
          >
            *
          </span>
        )}

        {label}
      </label>
      {type.toLowerCase() === "text" ? (
        <>
          <TextField
            // id="standard-basic"
            className={`usersform_textfield ${inputClass ? inputClass : ""}`}
            // label="Standard"
            placeholder="Standard"
            {...props}
          />
        </>
      ) : type.toLowerCase() === "select" ? (
        <>
          {" "}
          <Select
            className={`usersform_textfield ${inputClass ? inputClass : ""}`}
            defaultValue={options[0]?.title || "Select"}
            variant="standard"
            {...props}
          >
            {options?.length === 0 ? (
              <MenuItem value="s">create a array and add them</MenuItem>
            ) : (
              options?.map((e, i) => (
                <MenuItem key={`${e?.value}${e?.id}`} value={e.value}>
                  {e?.title}
                </MenuItem>
              ))
            )}
          </Select>
        </>
      ) : (
        <>
          <TextareaAutosize
            // id="standard-basic"
            className={`usersform_textfield textArea-common ${
              inputClass ? inputClass : ""
            }`}
            // label="Standard"
            placeholder="Standard"
            {...props}
          />
        </>
      )}
    </Box>
  );
};

export default CustomInput;
