import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import FilteredBy from '../components/filtered-by/FilteredBy'
import VatDueDate from '../components/filtered-by/VatDueDat'
import VatCredit from '../components/filtered-by/Vatcredit'
import VatCredit1 from '../components/filtered-by/VAtCredit1'
import VatAmountPercentage from '../components/filtered-by/VatAmntPercnt'
import GlobalButton from '../components/global-button/global-button'
import { Navigate } from 'react-router-dom'

const VTAmanagement = () => {
    const goBack = () => {
        window.history.back();
    };
    return (
        <Box px={5} py={3} mt={4} >
            <Typography  fontFamily='Exo 2'fontSize={'20px'} fontStyle= 'normal' fontWeight={600}  colour='#2B2B33'line-height= '28px'>VAT Management</Typography>
            <Grid container xs={12} alignItems={'start'} justifyContent={'space-between'} mt={8} >
                <Grid item xs={12} lg={5.5}>
                    <FilteredBy />
                    <Box className="head" my={8} >
                        
                        <Typography  fontFamily='Exo 2'fontSize={'20px'} fontStyle= 'normal' fontWeight={600}  colour='#2B2B33'line-height= '28px'>VAT Credit</Typography>
                        <Typography  marginTop={2} fontFamily='Exo 2' fontSize= '16px' fontStyle= 'normal' fontWeight= '400' colour='#2B2B33'line-height= '24px' >Due VAT Credit started from the payment on</Typography>
                    </Box>
                    <Grid mt={8}>   <VatCredit1 /></Grid>
                    <Grid mt={6}><VatAmountPercentage/></Grid>
                    

                </Grid>
                <Grid item xs={12} lg={5.5}>
                    <Grid>

                    <VatDueDate />
                    </Grid>
                    
                    <Grid mt={23.75}>
                        
                    <VatCredit />
                    <Grid   sx={{
                                        marginTop: "200px",
                                        justifyContent: "flex-end",
                                        display: "flex",
                                        flex: "1 1 auto",
                                        flexWrap: "wrap",
                                        rowGap: "10px",
                                    }}> 
                        
                        <Button variant="outlined" onClick={goBack} sx={{
                                    background: '#FFFFFF',
                                    fontSize: '14px',
                                    fontWeight: 400,
                                    borderRadius: '8px',
                                    marginLeft:'20px',
                                    gap: '15px',
                                    width:"77px",
                                    height:"40px",
                                    color: "#40404D",
                                    textTransform: 'capitalize',
                                    '&:hover': {
                                        background: '#FFFFFF',
                                    }
                                }}>
                                    Cancel
                         </Button>

                         <Button type="submit" sx={{
                                    background: '#2B2B33',
                                    fontSize: '14px',
                                    fontWeight: 400,
                                    borderRadius: '8px',
                                    marginLeft:'20px',
                                    gap: '15px',
                                    width:"77px",
                                    height:"40px",
                                    color: "#fff",
                                    textTransform: 'capitalize',
                                    '&:hover': {
                                        background: '#2B2B33',
                                    }
                                }}
                                    
                                >
                                    save
                                </Button>
                        
                        </Grid>
                   
                    </Grid>
                    

                </Grid>
            </Grid>


        </Box>
    )
}

export default VTAmanagement