import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import GlobalButton from "../../../components/global-button/global-button";
import { cardData } from "./cardsData";
import "./receivable.scss";

const AcountReceivableCards = () => {
  return (
    <Grid
      className="ar_cards_container"
      container
      direction={"column"}
      justifyContent={"center"}
      fontFamily={"Inter"}
    >
      <Grid
        item
        xs={12}
        display={"flex"}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        bgcolor={"#FBFAF8"}
        py={"50px"}
      >
        <Typography
          sx={{ fontWeight: 500, fontSize: "26px", color: "#37352F" }}
        >
          We offer
        </Typography>
        <Typography
          className=" margin-auto-x center-text"
          sx={{ marginTop: "30px", maxWidth: "550px", color: "#666665" }}
        >
          Accounts Payable Software Automates All Aspects Of Payments,
          Reporting, And Approvals All Within One Online Platform
        </Typography>
        <Link to="/signin">
          <GlobalButton sx={{ mt: "30px" }} btnText="Sign in" />
        </Link>
      </Grid>

      <Grid
        className="flex flex-column justify-center align-center center-text"
        sx={{ marginTop: "5rem" }}
      >
        <Typography
          sx={{ fontWeight: 700, fontSize: "36px", color: "#37352F" }}
        >
          Automation for finance teams
        </Typography>
        <Typography
          className="margin-top-1"
          sx={{
            fontWeight: 300,
            fontSize: "20px",
            lineHeight: "32px",
            maxWidth: "1146px",
            color: "#666665",
            mb: "2rem",
            font: "Inter",
          }}
        >
          Account Receivable software automates all aspects of billing,
          collections, payments, reporting and forecasting all within one online
          platform.
        </Typography>

        {cardData.map((item, index) => {
          return (
            <Grid item xs={12}>
              <Box
                key={item.id}
                className="align-center"
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  mt: "5rem",
                  bgcolor: item.bgColor,
                  maxWidth: "1280px",
                  borderRadius: "16px",
                  transform: item.scaleX,
                  gap: "10rem",
                  py: "85px",
                  px: "130px"
                }}
              >
                <Grid item sx={{ height: "400px",}}>
                  <img
                    className="ar"
                    src={item.image}
                    alt="cashflow_1"
                    style={{
                      borderRadius: "50%",
                      transform: item.scaleX,
                    }}
                  />
                </Grid>
                <Grid
                  sx={{
                    textAlign: "start",
                    transform: item.scaleX,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: "32px",
                      color: "#37352F",
                    }}
                  >
                    {item.label}
                  </Typography>
                  <div
                    style={{
                      height: "1.64px",
                      maxWidth: "434px",
                      backgroundColor: "#E5E5E5",
                      marginTop: "30px",
                      marginBottom: "30px",
                    }}
                  ></div>
                  <Typography
                    className="margin-top-1"
                    sx={{
                      fontWeight: 300,
                      fontSize: "20px",
                      color: "#666665",
                      lineHeight: "32px",
                    }}
                  >
                    {item.description}
                    <ul>
                      {item.ul && item.ul.map((item1) => <li>{item1}</li>)}
                    </ul>
                  </Typography>
                </Grid>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default AcountReceivableCards;
