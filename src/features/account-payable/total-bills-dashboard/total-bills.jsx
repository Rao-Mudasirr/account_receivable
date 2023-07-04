import React from "react";
import "./totalBills.scss";
import { Grid } from "@mui/material";

const bill_data = [
  {
    id: 1,
    title: "Total Bills",
    number: "1350",
    price: "£ 17500.00",
    color: 'var(--theme-primary-p-20-main, #2B2B33)',
  },
  {
    id: 2,
    title: "Paid Bills",
    number: "1100",
    price: "£ 123650.00",
    color: 'var(--indication-success, #48995D)',
  },
  {
    id: 3,
    title: "Scheduled Bills",
    number: "1100",
    price: "£ 12365.00",
    color: '#3F75FF',
  },
  {
    id: 4,
    title: "Rejected Bills",
    number: "1100",
    price: "£ 12365.00",
    color: 'var(--indication-error, #FF3F3F)',
  },
];

function TotalBills() {
  return (
    <Grid container>
      {
        bill_data?.map((item, i)=>(
          <Grid xl={3} sm={6} xs={12} key={i}>
            <div className="bill-card">
              <div
                className="bill-heading"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span className="bill-title">{item?.title}</span>
                <span className="bill-number">{item?.number}</span>
              </div>
              <div className="bill-foter">
                <span className="bill-price" style={{color: item?.color}}>{item?.price}</span>
              </div>
            </div>
          </Grid>
        ))
      }
    </Grid>
  );
}

export default TotalBills;
