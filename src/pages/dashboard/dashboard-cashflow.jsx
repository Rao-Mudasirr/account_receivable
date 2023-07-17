import { Grid } from "@mui/material";
import React, { useState } from "react";
import { dashboardStyle } from "./dashboard-receivable";
import { DashboardCard } from "../../components/dashboard-card/dashboard-card";
import { DashboardResponsiveDR } from "../../features/dashboard-responsive-DR/dashboard-responsive-DR";
import { DashboardToggleIcon } from "../../features/dashboard-toggle-icon/dashboard-toggle-icon";
import { AgingBucketBarChart } from "../../features/aging-bucket-bar-chart/aging-bucket-bar-chart";
import { PaymentForecastingChart } from "../../features/cashflow/Dashboard/PaymentForecastingChart/PaymentForecastingChart";
export const DashboardCashflow = () => {
  const [agingBucketVal, setAgingBucketVal] = useState("0");
  return (
    <>
      <div style={dashboardStyle}>Dashboard</div>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <DashboardCard heading={"Account Receivable"}></DashboardCard>
        </Grid>
        <Grid item xs={6}>
          <DashboardCard heading={"Account Payable"}></DashboardCard>
        </Grid>
        <Grid item xs={12}>
          <DashboardCard
            heading={"Cash Inflow/Outflow Stats"}
            headingSibling={<DashboardResponsiveDR />}
          ></DashboardCard>
        </Grid>
        <Grid item xs={12}>
          <DashboardCard
            heading="Cash Inflow"
            headingSibling={<DashboardResponsiveDR />}
          ></DashboardCard>
        </Grid>
        <Grid item xs={12}>
          <DashboardCard
            heading="Cash Outflow"
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
