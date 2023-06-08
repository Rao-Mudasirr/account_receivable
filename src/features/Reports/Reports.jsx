import React from 'react'
import { ReportData } from '../../mock-data/ReportData'
import { Grid } from '@mui/material'


function Reports() {

  return (
    <>
        <div className='top-heading'>Reports</div>
            <br/>
            <br/>
        <Grid container>
            {
                ReportData?.map((val, i)=> (
                    <Grid xs={12} md={6} lg={4} key={i}>
                        <div>{val?.title}</div>
                        <div>{val?.image}</div>
                    </Grid>
                ))
            }
        </Grid>

    </>
  )
}

export default Reports