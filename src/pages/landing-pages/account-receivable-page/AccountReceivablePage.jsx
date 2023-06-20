import React from 'react'
import { Grid, Typography } from '@mui/material'
import './receivable.css'
import { receivableData } from './data'
const AccountReceivablePage = () => {
    return (
        <>
            <div className="account__receivable">
                <Grid container sx={{ mt: '190px' }}>
                    <Grid fontSize={{md:72,xs:50}} p={{xl:10, xs:5}} item xl={6} md={5} xs={12}>
                        <div className='account_receivable_heading'>
                            Online platform that helps you manage Accounting
                        </div>
                    </Grid>
                    <Grid  item xl={3.7} md={6} xs={12} sx={{ mt: '75px' }}>
                        {receivableData?.map((ele) =>
                            <Grid key={ele?.id} container justifyContent={ele?.justifyContent}
                                m={{ xl: ele?.margin,}}
                                item  xs={12} 
                                className="receivable__right">
                                <div className="custom__icon">
                                    <div className="custom__style" style={{ backgroundColor: ele?.bgColor }}>
                                    </div>
                                </div>
                                <div className="receivable__text" style={{ width: ele?.width }}>
                                    {ele?.text}
                                </div>
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default AccountReceivablePage