import React from 'react'
import { TotalInvoices } from '../features/Total_Invoices/TotalInvoices'
import RecentNotify from '../features/RecentNotification/RecentNotify'
import { Grid } from '@mui/material'
import { DashboardCard } from '../components/dashboard-card/dashboard-card'
import { UnifiedDSOAPD } from '../features/unified-dso-apd/unified-dso-apd'

export default function Dashboard() {
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
                <TotalInvoices title = 'Overdue_invoices' />
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
        <Grid item xl={8} xs={12}>
          <DashboardCard heading="Apis">
          </DashboardCard>
        </Grid>
        <Grid item xl={4} xs={12}>
          <DashboardCard heading="Total Users">
          </DashboardCard>
        </Grid>
        <Grid item xl={8} xs={12}>
          <DashboardCard heading="Verification Status">
          </DashboardCard>
        </Grid>
        <Grid item xl={4} xs={12}>
          <DashboardCard heading="Recent Notifications">
            <RecentNotify />
          </DashboardCard>
        </Grid>
        <Grid item xs={12}>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
