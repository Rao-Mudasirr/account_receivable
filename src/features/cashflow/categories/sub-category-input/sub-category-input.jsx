import React from "react";
import { Box, TextField } from "@mui/material";
import GlobalButton from "../../../../components/global-button/global-button";

const SubCategoryInput = ({ onSaveSubCategory }) => {
  return (
    <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
      <TextField
        size="small"
        sx={{
          width: { xl: "154px", xs: "100%" },
          backgroundColor: "#F0F0F2",
          fontSize: "10px",
          lineHeight: "12px",
          borderBottom: "none",
          borderColor: "#F0F0F2",
        }}
        inputProps={{
          style: {
            height: "100%",
            padding: "4px 8px",
          },
        }}
      />
      <GlobalButton btnText="Save" btnName="accent" onClick={onSaveSubCategory} />
    </Box>
  );
};

export default SubCategoryInput;
