import { Box, Container, Grid } from "@mui/material";
import React from "react";
import PendingScreen from "./PendingScreen";

const DocumentApproval = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={5}>
          {/* work here */}
        </Grid>
        <Grid item xs={12} lg={7}>
          <PendingScreen />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DocumentApproval;
