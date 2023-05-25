import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import './total_invoices.scss';
export const TotalInvoices = () => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 4,
    [`&.${linearProgressClasses.colorPrimary}`]: { backgroundColor: "#FF9898" },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 4,
      backgroundColor: "#70D69E",
    },
  }));
  return (
    <div className="card-invoices">
      <div className="card-invoices-top">
        <span className="left-text">Total Invoices</span>
        <span className="right-text">1350</span>
      </div>
      <div className="card-invoices-middle">
        <span>£ 17500.00</span>
      </div>
      <br/>
      <div className="progress-bar">
        <Box sx={{ flexGrow: 1 }}>
          <BorderLinearProgress variant="determinate" value={40} />
        </Box>
      </div>
    </div>
  );
};
