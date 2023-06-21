import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import GlobalButton from "../../../components/global-button/global-button";

const HomePageCashflow = () => {
  return (
    <>
      <Grid sx={{ textAlign: "center" }}>
        <Grid
          item
          className="flex align-center flex-column justify-center center-text"
          style={{ height: "391px", backgroundColor: "#FBFAF8" }}
        >
          <Typography style={{ fontWeight: 500, fontSize: "26px" }}>
            We offer
          </Typography>
          <Typography style={{ marginTop: "30px" }}>
            Accounts Payable Software Automates All Aspects Of Payments,
            Reporting, And Approvals All Within One Online Platform
          </Typography>
          <GlobalButton sx={{ mt: "30px" }} btnText="Sign in" />
        </Grid>

        <Grid style={{width: "500px"}}>
          <div className='flex flex-column flex-center justify-center align-center center-text margin-top-3'>
          <Typography style={{ fontWeight: 700, fontSize: "36px" }}>
            Automation for finance teams
          </Typography>
          <Typography style={{ fontWeight: 300, fontSize: "20px" }}>
          Account Receivable software automates all aspects of billing, collections, payments, reporting and forecasting all within one online platform.
          </Typography>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePageCashflow;
