import {
  Box,
  FormControl,
  MenuItem,
  MenuList,
  Select,
  TextField,
} from "@mui/material";
// import { TextField } from "formik-material-ui";
import React from "react";
import "./styles.scss";

const CustomInput = ({
  label,
  type = "Text",
  options = [],
  inputClass,
  labelClass,
  ...props
}) => {
  return (
    <Box className={"custom-input-1"}>
      <label
        className={`input_label input_label2  ${labelClass ? labelClass : ""}`}
      >
        <span className="asterisk" style={{ color: "red", marginTop: "-3px" }}>
          *
        </span>
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
      ) : (
        <>
          {" "}
          <Select
            className={`usersform_textfield ${inputClass ? inputClass : ""}`}
            variant="standard"
            {...props}
          >
            {options?.length === 0 ? (
              <MenuItem value="s">create a array and add them</MenuItem>
            ) : (
              options?.map((e, i) => (
                <MenuItem key={e?.value} value={e.value}>
                  {e?.title}
                </MenuItem>
              ))
            )}
          </Select>
        </>
      )}
    </Box>
  );
};

export default CustomInput;
