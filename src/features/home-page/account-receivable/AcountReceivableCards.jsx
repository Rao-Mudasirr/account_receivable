import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import GlobalButton from "../../../components/global-button/global-button";
import { cardData } from "./cardsData";

const AcountReceivableCards = () => {
  return (
    <Grid className="width-100 flex flex-column center-text justify-center">
      <Grid
        item
        className="flex align-center flex-column justify-center center-text"
        style={{ height: "391px", backgroundColor: "#FBFAF8" }}
      >
        <Typography style={{ fontWeight: 500, fontSize: "26px", color: "#37352F" }}>
          We offer
        </Typography>
        <Typography className=" margin-auto-x" style={{ marginTop: "30px", maxWidth: "550px", color: "#666665" }}>
          Accounts Payable Software Automates All Aspects Of Payments,
          Reporting, And Approvals All Within One Online Platform
        </Typography>
        <Link to="/signin">
        <GlobalButton sx={{ mt: "30px" }} btnText="Sign in" />
        </Link>
      </Grid>

      <Grid
        className="flex flex-column justify-center align-center center-text"
        style={{ marginTop: "5rem" }}
      >
        <Typography style={{ fontWeight: 700, fontSize: "36px", color: "#37352F" }}>
          Automation for finance teams
        </Typography>
        <Typography
          className="margin-top-1"
          style={{ fontWeight: 300, fontSize: "20px", maxWidth: "1100px", color: "#666665" }}
        >
          Account Receivable software automates all aspects of billing,
          collections, payments, reporting and forecasting all within one online
          platform.
        </Typography>

        {cardData.map((item, index) => {
         return (
         <Grid>
         <Box
            key={item.id}
            className="align-center"
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              mt: "5rem",
              bgcolor: item.bgColor,
              height: "560px",
              maxWidth: "1280px",
              width: "100%",
              borderRadius: "16px",
              transform: item.scaleX
            }}
          >
            <Grid>
              <img
                src={item.image}
                alt="cashflow_1"
                style={{
                  borderRadius: "50%",
                  transform: item.scaleX,
                  marginBottom: '29%',
                }}
              />
            </Grid>
            <Grid style={{ textAlign: "start", transform: item.scaleX, paddingLeft: item.padding }}>
              <Typography style={{ fontWeight: 700, fontSize: "32px", color: "#37352F" }}>
                {item.label}
              </Typography>
              <div
                style={{
                  height: "1.64px",
                  maxWidth: "434px",
                  backgroundColor: "#E5E5E5",
                  marginTop: "30px",
                  marginBottom: "30px"
                }}
              ></div>
              <Typography
                className="margin-top-1"
                style={{ fontWeight: 300, fontSize: "20px", color: "#666665", lineHeight: "32px" }}
              >
                {item.description}
                <ul>
                  {item.ul && item.ul.map(item1 => <li>{item1}</li>)}
                </ul>
              </Typography>
            </Grid>
          </Box>
          </Grid>
         )
        })}
      </Grid>
    </Grid>
  );
};

export default AcountReceivableCards;
