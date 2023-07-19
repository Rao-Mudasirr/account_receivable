import { Grid } from "@mui/material";
import { dashboardStyle } from "./dashboard-receivable";
import { DashboardCard } from "../../components/dashboard-card/dashboard-card";
import { DashboardResponsiveDR } from "../../features/dashboard-responsive-DR/dashboard-responsive-DR";
import { DashboardToggleIcon } from "../../features/dashboard-toggle-icon/dashboard-toggle-icon";
import { AgingBucketCharts } from "../../features/aging-bucket-charts/aging-bucket-charts";
import AccountReceivableDashboard from '../../features/cashflow/Dashboard/Cashflow-Module/account-receivable-dashboard';
import { PaymentForecastingChart } from "../../features/cashflow/Dashboard/PaymentForecastingChart/PaymentForecastingChart";
import { CashInflowOutflowStats } from "../../features/cash-inflow-outflow-stats/cash-inflow-outflow-stats";
import { CashInflowOutflowTable } from "../../features/cash-inflow-outflow-table/cash-inflow-outflow-table";
import { AccountsAnalyticsCharts } from "../../features/accounts-analytics-charts/accounts-analytics-charts";
export const DashboardCashflow = () => {
  return (
    <>
      <div style={dashboardStyle} className="tertiary-color font-weight-600">Dashboard</div>
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
        <Grid item xs={6}>
          <DashboardCard heading={"Account Payable"}></DashboardCard>
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
          >
            <CashInflowOutflowTable />
          </DashboardCard>
        </Grid>
        <Grid item xs={12}>
          <DashboardCard
            heading="Cash Outflow"
            headingColor="#FF3F3F"
            headingSibling={<DashboardResponsiveDR />}
          >
            <CashInflowOutflowTable />
          </DashboardCard>
        </Grid>
        <Grid item xs={12}>
          <PaymentForecastingChart />
        </Grid>
        <Grid item xs={12}>
          <DashboardCard heading="Title"></DashboardCard>
        </Grid>
        <Grid item xs={6}>
          <AccountsAnalyticsCharts title="Account Receivable Analytics" card1Heading="Invoice Analytics" />
        </Grid>
        <Grid item xs={6}>
          <AccountsAnalyticsCharts title="Account Payable Analytics" card1Heading="Bills Analytics" />
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
