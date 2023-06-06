import React, { useState } from 'react';
import { TotalInvoices } from '../features/Total_Invoices/TotalInvoices';
import RecentNotify from '../features/RecentNotification/RecentNotify';
import { Grid } from '@mui/material';
import { DashboardCard } from '../components/dashboard-card/dashboard-card';
import { UnifiedDSOAPD } from '../features/unified-dso-apd/unified-dso-apd';
import { TopClientsStackedBarChart } from '../features/top-clients-stacked-bar-chart/top-clients-stacked-bar-chart';
import { AgingBucketBarChart } from '../features/aging-bucket-bar-chart/aging-bucket-bar-chart';
import { PaymentShowcaseAreaChart } from '../features/payment-showcase-area-chart/payment-showcase-area-chart';
import { PaymentForecastingChartSwitch } from '../features/payment-forecasting-chart-switch/payment-forecasting-chart-switch';
import { DashboardChartSwitch } from '../features/dashboard-chart-switch/dashboard-chart-switch';
import { WorkflowSuccessSpeedometer } from '../features/workflow-success-speedometer/workflow-success-speedometer';
import { DashboardToggleIcon } from '../features/dashboard-toggle-icon/dashboard-toggle-icon';
import { DashboardDateRange } from '../features/dashboard-date-range/dashboard-date-range';

export default function Dashboard() {
  const [paymentForecastSwitch, setPaymentForecastSwitch] = useState("This Month");
  const [PCVal, setPCVal] = useState("2020");
  const [WFVal, setWFVal] = useState("UK Workflow");
  const [agingBucketVal, setAgingBucketVal] = useState("0");
  
  return (
    <React.Fragment>
      
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <DashboardCard heading={"Total Invoices"} headingSize={'18px'} headingWeight={400} paddingForMd='16px' paddingForSm={"10px"} headingSibling={<span className="right-text">1350</span>} >
                <TotalInvoices />
              </DashboardCard>
            </Grid>
            <Grid item xs={3}>
              <DashboardCard heading={"Overdue Invoices"} headingSize={'18px'} headingWeight={400} paddingForMd='16px' paddingForSm={"10px"} headingSibling={<span className="right-text">1350</span>} >
                <TotalInvoices title='Overdue_invoices' />
              </DashboardCard>
            </Grid>
            <Grid item xs={3}>
              <DashboardCard tooltipMessage="Days Sales Outstanding It measures the average number of days it takes a business to receive payments for goods and services purchased on credit." heading={"DSO"} headingSize={'18px'} headingColor='#6B6B80' headingWeight={400} paddingForMd='16px' paddingForSm={"10px"}  >
                <UnifiedDSOAPD days={135} isGood={false} percentile={65} series={[{
                  name: 'DSO',
                  data: [200, 400, 300,]
                }]} />
              </DashboardCard>
            </Grid>
            <Grid item xs={3}>
              <DashboardCard tooltipMessage="Average Payment Delay The time between receiving a payment for goods and services AND paying said payment." heading={"APD"} headingSize={'18px'} headingWeight={400} paddingForMd='16px' paddingForSm={"10px"} headingColor='#6B6B80' >
                <UnifiedDSOAPD days={100} isGood={true} percentile={100} series={[{
                  name: 'APD',
                  data: [25, 200, 100,]
                }]} />
              </DashboardCard>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xl={6.5} xs={12}>
          <DashboardCard heading="Top Clients" headingSibling={<DashboardDateRange />}>
            <TopClientsStackedBarChart />
          </DashboardCard>
        </Grid>
        <Grid item xl={5.5} xs={12}>
          <DashboardCard heading="Aging Bucket" headingSibling={<div className='flex'><DashboardDateRange/><DashboardToggleIcon chartSwitch={agingBucketVal} setSwitch={setAgingBucketVal} /></div>}>
            <AgingBucketBarChart chartSwitch={agingBucketVal} />
          </DashboardCard>
        </Grid>
        <Grid item xl={6.5} xs={12}>
          <DashboardCard heading="Payment Collection" headingSibling={<DashboardChartSwitch switchName="Year" data={['2020', '2030', '2040']} selectVal={PCVal} setSelectVal={setPCVal} />}>
            <PaymentShowcaseAreaChart categories={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"]} series={[{
              name: "Payment Collection",
              data: [31, 40, 28, 51, 42, 109, 100, 31, 40, 28, 51]
            }]} />
          </DashboardCard>
        </Grid>
        <Grid item xl={5.5} xs={12}>
          <DashboardCard heading="Payment Forecasting" headingSibling={<PaymentForecastingChartSwitch chartSwitch={paymentForecastSwitch} setSwitch={setPaymentForecastSwitch} />}>
            <PaymentShowcaseAreaChart categories={paymentForecastSwitch === "This Month" ? ["Week 1", "Week 2", "Week 3", "Week 4"] : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun",]} series={[{
              name: "Payment Forecasting",
              data: paymentForecastSwitch === "This Month" ? [31, 40, 28, 51] : [31, 40, 28, 51, 42, 109, 100,]
            }]} />
          </DashboardCard>
        </Grid>
        <Grid item xl={6} xs={12}>
          <DashboardCard heading="Recent Notifications" headingSibling={<span className="right-text" style={{color: '#6B9DE9'}}>View All</span>}>
            <RecentNotify />
          </DashboardCard>
        </Grid>
        <Grid item xl={6} xs={12}>
          <DashboardCard heading="Workflow Success Rate" headingSibling={<DashboardChartSwitch switchName="Workflow" data={['UK Workflow', 'New Workflow 1', 'New Workflow 2']} selectVal={WFVal} setSelectVal={setWFVal} />}>
            <WorkflowSuccessSpeedometer />
          </DashboardCard>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
