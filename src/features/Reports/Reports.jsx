import React from 'react'
import { ReportData } from '../../mock-data/ReportData'
import { Card, Grid } from '@mui/material'
import './report.scss';
import { Link, useNavigate } from 'react-router-dom';

function Reports() {
    
    const navigate = useNavigate();
    const GoToNext = (val) => {
        navigate(`/report-details/${val?.id}`, {state: {reportData: val}})
    }

  return (
    <>
        <div className='top-heading'>Reports</div>
        <Grid container>
            {
                ReportData?.map((val, i)=> (
                    <Grid className='report-styles' xs={12} md={6} lg={4} key={i}>
                        <div className='report-title'>{val?.title}</div>
                        {/* <Link to={'/report-details/'}> */}
                            <Card className='report-card' onClick={()=>GoToNext(val)}>
                                <img className='report-image' src={val?.image} alt="Report card image" />
                            </Card>
                        {/* </Link> */}
                    </Grid>
                ))
            }
        </Grid>

    </>
  )
}

export default Reports