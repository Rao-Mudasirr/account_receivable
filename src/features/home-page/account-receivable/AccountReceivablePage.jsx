import React from 'react'
import AcountReceivableCards from './AcountReceivableCards'
import { Grid, Typography } from '@mui/material'
import './receivable.scss'
import { receivableData } from './data'
const AccountReceivablePage = () => {
    return (
        <>
            <div className="account__receivable">
                <Grid container sx={{ mt: '90px' }}>
                    <Grid fontSize={{md:80,xs:50}} p={{xl:10,  xs:5}} ml={{xl:15}} item xl={6} md={12} xs={12}>
                        <div className='account_receivable_heading'>
                            Online platform that helps you manage Accounting
                        </div>
                    </Grid>
                    <Grid  item xl={4} md={12} xs={12} p={{xs:1}} mt={{ xl:'140px'}} ml={{xl: '-100px'}}>
                        {receivableData?.map((ele) =>
                            <Grid key={ele?.id} container justifyContent={ele?.justifyContent}
                                m={{ xl: ele?.margin, md: 2, xs:1}} 
                                item  xs={12} 
                                className="receivable__right">
                                <div className="custom__icon">
                                    <div className="custom__style" style={{ backgroundColor: ele?.bgColor }}>
                                    </div>
                                </div>
                                <Grid item className="receivable__text" width={{ xl: ele?.width , md:400, xs: 250}} >
                                    {ele?.text}
                                </Grid>
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            </div>
            <AcountReceivableCards/>
        </>
    )
}

export default AccountReceivablePage