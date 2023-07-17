import { Grid } from "@mui/material";
import React, { useState } from "react";
import { dashboardStyle } from "./dashboard-receivable";
import { DashboardCard } from "../../components/dashboard-card/dashboard-card";
import { DashboardResponsiveDR } from "../../features/dashboard-responsive-DR/dashboard-responsive-DR";
import { DashboardToggleIcon } from "../../features/dashboard-toggle-icon/dashboard-toggle-icon";
import { AgingBucketBarChart } from "../../features/aging-bucket-bar-chart/aging-bucket-bar-chart";
import AccountReceivableDashboard from '../../features/cashflow/Dashboard/Cashflow-Module/account-receivable-dashboard';
import { PaymentForecastingChart } from "../../features/cashflow/Dashboard/PaymentForecastingChart/PaymentForecastingChart";
import CashflowCard from "../../components/cashflow-card/cashflow-card";
import { CashInflowOutflowStats } from "../../features/cash-inflow-outflow-stats/cash-inflow-outflow-stats";
export const DashboardCashflow = () => {
  const [agingBucketVal, setAgingBucketVal] = useState("0");
  return (
    <>
      <div style={dashboardStyle}>Dashboard</div>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <DashboardCard
            heading={"Account Receivable"}
          >
            <AccountReceivableDashboard 
              tooltipMessageDso="Days Sales Outstanding It measures the average number of days it takes a business to receive payments for goods and services purchased on credit."
              tooltipMessageApd="Average Payment Delay The time between receiving a payment for goods and services AND paying said payment."
            />
          </DashboardCard>
        </Grid>
        <Grid item md={6 }xs={12}>
          {/* <DashboardCard heading={"Account Payable"}></DashboardCard> */}
          <CashflowCard/>
        </Grid>
        <Grid item xs={12}>
          <DashboardCard
            heading={"Cash Inflow/Outflow Stats"}
            headingSibling={<DashboardResponsiveDR />}
          >
            <CashInflowOutflowStats />
          </DashboardCard>
        </Grid>
        <Grid item xs={12}>
          <DashboardCard
            heading="Cash Inflow"
            headingColor="#48995D"
            headingSibling={<DashboardResponsiveDR />}
          ></DashboardCard>
        </Grid>
        <Grid item xs={12}>
          <DashboardCard
            heading="Cash Outflow"
            headingColor="#FF3F3F"
            headingSibling={<DashboardResponsiveDR />}
          ></DashboardCard>
        </Grid>
        <Grid item xs={12}>
          <PaymentForecastingChart />
        </Grid>
        <Grid item xs={12}>
          <DashboardCard heading="Title"></DashboardCard>
        </Grid>
        <Grid item xs={6}>
          <DashboardCard heading="Invoice Analytics"></DashboardCard>
        </Grid>
        <Grid item xs={6}>
          <DashboardCard heading="Bills Analytics"></DashboardCard>
        </Grid>
        <Grid item xs={6}>
          <DashboardCard
            heading="Aging Bucket"
            headingSibling={
              <div className="flex margin-top-0">
                <DashboardResponsiveDR />
                <DashboardToggleIcon
                  chartSwitch={agingBucketVal}
                  setSwitch={setAgingBucketVal}
                />
              </div>
            }
          >
            <AgingBucketBarChart chartSwitch={agingBucketVal} />
          </DashboardCard>
        </Grid>
        <Grid item xs={6}>
          <DashboardCard
            heading="Aging Bucket"
            headingSibling={
              <div className="flex margin-top-0">
                <DashboardResponsiveDR />
                <DashboardToggleIcon
                  chartSwitch={agingBucketVal}
                  setSwitch={setAgingBucketVal}
                />
              </div>
            }
          >
            <AgingBucketBarChart chartSwitch={agingBucketVal} />
          </DashboardCard>
        </Grid>
        <Grid item xs={6}>
          <DashboardCard
            heading="Top 10 Receivables by Category"
            headingSibling={<DashboardResponsiveDR />}
          ></DashboardCard>
        </Grid>
        <Grid item xs={6}>
          <DashboardCard
            heading="Top 10 Payables by Category"
            headingSibling={<DashboardResponsiveDR />}
          ></DashboardCard>
        </Grid>
      </Grid>
    </>
  );
};
