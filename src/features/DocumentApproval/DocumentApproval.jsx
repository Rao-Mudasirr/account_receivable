import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import PendingScreen from "./PendingScreen";
import MakeItPaid from "./MakeItPaid";
import Paid from "./Paid";
import Rejected from "./Rejected";

const DocumentApproval = () => {
  const [value, setValue] = useState(1);
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={3}></Grid>
        <Grid item xs={12} lg={9}>
          {value === 0 ? (
            <PendingScreen />
          ) : value === 1 ? (
            <MakeItPaid />
          ) : value === 2 ? (
            <Paid />
          ) : value === 3 ? (
            <Rejected />
          ) : (
            ""
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default DocumentApproval;
