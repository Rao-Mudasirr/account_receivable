import React from 'react'
import { DashboardCard } from '../dashboard-card/dashboard-card'
import { Box, Grid, Typography } from '@mui/material'
import { AppTooltip } from '../app-tooltip/app-tooltip'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { UnifiedDSOAPD } from '../../features/unified-dso-apd/unified-dso-apd';

const CashflowCard = ({
    heading,
    children,
    headingSibling,
    paddingForMd = '20px 24px',
    paddingForSm = '20px 20px',
    headingSize = '14px',
    headingWeight = "600",
    headingColor ="#40404D",
    tooltipMessage,
  }) => {
    return (
  
<Grid container  sx={{
        backgroundColor: '#fff',
        boxShadow:
          '0px 0px 9px rgba(0,0,0,0.1)',
        border: '1px solid rgba(107, 107, 128, 0.1)',
        borderRadius: '8px',
        p: { md: paddingForMd, sm: paddingForSm, xs: '10px' },
        width: '100%',
      }}>
      <Grid xs={12}>
        <Typography className='tertiary-color sub-heading font-family-Exo' sx={{fontWeight:400,mb:1}}>
        Account Payable
        </Typography>
      </Grid>
        <Grid xs={12} xl={6} >
          
            <Box sx={{}} className="secondary-color">  <span style={{fontWeight:400}} className='sub-heading font-family-Exo'>DSO</span> <AppTooltip message={"Days Sales Outstanding It measures the average number of days it takes a business to receive payments for goods and services purchased on credit."}><InfoOutlinedIcon className='cursor-pointer'  sx={{fontSize: '15px !important',ml:'5px'}}/></AppTooltip></Box>
            <UnifiedDSOAPD
                days={135}
                isGood={false}
                percentile={65}
                series={[
                    {
                      name: "DSO",
                      data: [200, 400, 300],
                    },
                ]}
            />
        </Grid>
        
        <Grid xs={12} xl={6} sx={{mt:{xl:0,xs:2}}}>
        <Box sx={{}} className="secondary-color">  <span style={{fontWeight:400}} className='sub-heading font-family-Exo'>APD</span> <AppTooltip message={'Average Payment Delay The time between receiving a payment for goods and services AND paying said payment.'}><InfoOutlinedIcon className='cursor-pointer'  sx={{fontSize: '15px !important',ml:'5px'}}/></AppTooltip></Box>
            <UnifiedDSOAPD
                days={135}
                isGood={false}
                percentile={65}
                series={[
                    {
                      name: "DSO",
                      data: [200, 400, 300],
                    },
                ]}
            />
        </Grid>
       
    </Grid>
   
  )
}

export default CashflowCard
