import styled from "@emotion/styled";
import { Switch } from "@mui/material";
import React from "react";

const CustomSwitch = () => {
  const Android12Switch = styled(Switch)(() => ({
    padding: 8,
    "& .MuiSwitch-track": {
      borderRadius: 22 / 2,
      border: "1px solid black",
      opacity: 1,
      backgroundColor: "black" ? "white" : "gray",
      boxSizing: "border-box",
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "none",
      backgroundColor: "black",
      border: "3px solid dark",
      width: 16,
      height: 16,
      margin: 2,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      backgroundColor: "dark",
    },

    "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
      backgroundColor: "gray",
    },
  }));
  return (
    <div>
      <Android12Switch />
    </div>
  );
};

export default CustomSwitch;
