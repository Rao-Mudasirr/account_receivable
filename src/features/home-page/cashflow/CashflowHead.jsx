import React from "react";
import { Grid, Typography } from "@mui/material";
import "./cashflow.scss";
import { cashflowData } from "./data";
const CashflowHead = () => {
  return (
    <>
      <div className="home_cashflow">
        <Grid container sx={{ mt: "180px" }}>
          <Grid
            fontSize={{ md: 80, xs: 50 }}
            p={{ xl: 10, xs: 5 }}
            ml={{ xl: 15 }}
            item
            xl={6}
            md={12}
            xs={12}
          >
            <div className="cashflow_heading">
              Online platform that helps you manage Accounting
            </div>
          </Grid>
          <Grid
            item
            xl={4}
            md={12}
            xs={12}
            p={{ xs: 1 }}
            mt={{ xl: "120px" }}
            ml={{ xl: "-100px" }}
          >
            {cashflowData?.map((ele) => (
              <Grid
                key={ele?.id}
                container
                justifyContent={ele?.justifyContent}
                m={{ xl: ele?.margin, md: 2, xs: 1 }}
                item
                xs={12}
                className="cashflow__right"
              >
                <div className="cashflow-custom__icon">
                  <div
                    className="cashflow-custom__style"
                    style={{ backgroundColor: ele?.bgColor }}
                  ></div>
                </div>
                <Grid
                  item
                  className="cashflow__text"
                  width={{ xl: ele?.width, md: 400, xs: 250 }}
                >
                  {ele?.text}
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default CashflowHead;
