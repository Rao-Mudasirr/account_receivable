import React from 'react'
import { UnifiedDSOAPD } from '../unified-dso-apd/unified-dso-apd';
import { Box, Grid } from '@mui/material';
import { AppTooltip } from '../../components/app-tooltip/app-tooltip';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function AccountReceivableDashboard({
    headingSize = '14px',
    headingWeight = "600",
    headingColor ="#40404D",
    tooltipMessageApd,
    tooltipMessageDso
}) {
  return (
    <Grid container>
        <Grid md={6} lg={6}>
            <Box>DSO <AppTooltip message={tooltipMessageDso}><InfoOutlinedIcon className='cursor-pointer'  sx={{fontSize: '15px !important',ml:'5px'}}/></AppTooltip></Box>
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
        
        <Grid md={6} lg={6}>
            <Box>APD <AppTooltip message={tooltipMessageApd}><InfoOutlinedIcon className='cursor-pointer'  sx={{fontSize: '15px !important',ml:'5px'}}/></AppTooltip></Box>
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

export default AccountReceivableDashboard;