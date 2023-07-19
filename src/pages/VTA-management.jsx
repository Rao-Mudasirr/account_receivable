import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import FilteredBy from '../components/filtered-by/FilteredBy'
import VatDueDate from '../components/filtered-by/VatDueDat'
import VatCredit from '../components/filtered-by/Vatcredit'
import VatCredit1 from '../components/filtered-by/VAtCredit1'
import VatAmountPercentage from '../components/filtered-by/VatAmntPercnt'

const VTAmanagement = () => {
    return (
        <Box px={5} py={3} >
            <Typography  fontFamily='Exo 2'fontSize={'20px'} fontStyle= 'normal' fontWeight={600}  colour='#2B2B33'line-height= '28px'>VAT Management</Typography>
            <Grid container xs={12} alignItems={'start'} justifyContent={'space-between'} mt={4} >
                <Grid item xs={5.5}>
                    <FilteredBy />
                    <Box className="head" my={10} >
                        
                        <Typography  fontFamily='Exo 2'fontSize={'20px'} fontStyle= 'normal' fontWeight={600}  colour='#2B2B33'line-height= '28px'>VAT Credit</Typography>
                        <Typography  marginTop={4} fontFamily='Exo 2' fontSize= '16px' fontStyle= 'normal' fontWeight= '400' colour='#2B2B33'line-height= '24px' >Due VAT Credit started from the payment on</Typography>
                    </Box>
                    <VatCredit1 />
                    <Grid mt={8}><VatAmountPercentage/></Grid>
                    

                </Grid>
                <Grid item xs={5.5} >
                    <Grid>

                    <VatDueDate />
                    </Grid>
                    
                    <Grid mt={28}>
                        
                    <VatCredit />
                    </Grid>

                </Grid>
            </Grid>


        </Box>
    )
}

export default VTAmanagement