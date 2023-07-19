import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const ImportTransactions = () => {
  return (
    <>
      <Typography className="font-weight-600 heading-20 font-family-Exo">
        Import Transactions
      </Typography>
      <Grid className="height-100vh flex align-center justify-center">
      <Box sx={{maxWidth: "758px", width: "100%", height: "400px", borderRadius: "16px", border: "2px dashed #E5E5E5", textAlign: "center"}}>
        <Typography>Drag & Drop Here</Typography>
      </Box>
      </Grid>
    </>
  );
};

export default ImportTransactions;
