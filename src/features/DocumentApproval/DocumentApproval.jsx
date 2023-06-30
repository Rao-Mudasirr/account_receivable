import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import PendingScreen from "./PendingScreen";
import MakeItPaid from "./MakeItPaid";

const DocumentApproval = () => {
  const [value, setValue] = useState(1);
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={3}>
          {/* work here */}
          test
        </Grid>
        <Grid item xs={12} lg={9}>
          {value === 0 ? <PendingScreen /> : value === 1 ? <MakeItPaid /> : ""}
        </Grid>
      </Grid>
    </Box>
  );
};

export default DocumentApproval;
