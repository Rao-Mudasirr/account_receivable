import React from 'react'
import AcountReceivableCards from './AcountReceivableCards'
import { Grid } from '@mui/material'
import './receivable.scss'
import { receivableData } from './data'
const AccountReceivablePage = () => {
    return (
        <>
            <div className="account__receivable">
                <Grid container item spacing={1}
                    sx={{
                        mt: '90px',
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '1rem'
                    }}>
                    <Grid fontSize={{ md: 55, xs: 40 }}
                        item xl={3.6}
                        md={4.8}
                        xs={6}
                    >
                        <div className='account_receivable_heading'>
                            Online platform that helps you manage Accounting
                        </div>
                    </Grid>
                    <Grid item
                        xl={4}
                        md={6}
                        xs={10}
                    >
                        {receivableData?.map((ele) =>
                            <Grid key={ele?.id} container justifyContent={ele?.justifyContent}
                                margin={{
                                    xl: ele?.margin,
                                    md: ele?.margin
                                }}
                                item xs={12}
                                className="receivable__right">
                                <div className="custom__icon">
                                    <div className="custom__style"
                                        style={{ backgroundColor: ele?.bgColor }}>
                                    </div>
                                </div>
                                <Grid item className="receivable__text"
                                    width={{ xl: ele?.width, md: ele?.width, xs: 230 }} >
                                    {ele?.text}
                                </Grid>
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            </div>
            <AcountReceivableCards />
        </>
    )
}

export default AccountReceivablePage