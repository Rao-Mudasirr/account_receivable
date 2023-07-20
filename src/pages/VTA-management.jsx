import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import FilteredBy from '../components/filtered-by/FilteredBy'
import VatDueDate from '../components/filtered-by/VatDueDat'
import VatCredit from '../components/filtered-by/Vatcredit'
import VatCredit1 from '../components/filtered-by/VAtCredit1'
import VatAmountPercentage from '../components/filtered-by/VatAmntPercnt'
import GlobalButton from '../components/global-button/global-button'
import { Navigate } from 'react-router-dom'
import './/../components/filtered-by//filter.scss'

const VTAmanagement = () => {
    const goBack = () => {
        window.history.back();
    };
    return (
        <Box px={5} py={3} mt={4} >
            <Typography  className="font-family-exo2" fontSize={'20px'} fontStyle= 'normal' fontWeight={600}  colour='#2B2B33'line-height= '28px'>VAT Management</Typography>
            <Grid container xs={12} alignItems={'start'} justifyContent={'space-between'} mt={1} >
                <Grid item xs={12} lg={5.3}>
                    <FilteredBy />
                    <Box className="head" my={8} >
                    <Typography className="font-family-exo2"
                                sx={{
                                            // fontFamily: 'Exo 2 !important',
                                            fontSize: '20px',
                                            fontStyle: 'normal',
                                            fontWeight: 600,
                                            color: '#2B2B33',
                                            lineHeight: '28px'
                                        }}
                                        >
                                        VAT Credit
                                        </Typography>
                        <Typography className='font-family-exo2'  marginTop={2} fontFamily='Exo 2' fontSize= '16px' fontStyle= 'normal' fontWeight= '400' colour='#2B2B33'line-height= '24px' >Due VAT Credit started from the payment on</Typography>
                    </Box>
                    <Grid mt={8}>   <VatCredit1 /></Grid>
                    <Grid mt={6}><VatAmountPercentage/></Grid>
                    

                </Grid>
                <Grid item xs={12} lg={5.5} mt={10}>
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
                                    transition: 'background 0.3s, transform 0.3s',
                                    border: "1px solid #2B2B33",
                                    '&:hover': {
                                        bgcolor: "#F7F7F7",
                                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.9)",
                                        transform: 'scale(1)', 
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
                                    transition: 'background 0.3s, transform 0.3s',
                                    '&:hover': {
                                        bgcolor: "#1A1A1D",
                                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.9)",
                                        transform: 'scale(1)', 
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