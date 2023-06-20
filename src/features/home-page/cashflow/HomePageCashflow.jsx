import { Button, Grid, Typography } from '@material-ui/core'
import React from 'react'

const HomePageCashflow = () => {
  return (
    <>
    <Grid sx={{textAlign: "center"}}>
      <Grid item style={{height: "391px", backgroundColor: "#FBFAF8", textAlign: "center" }}>
        <Typography style={{fontWeight: 500, fontSize: "26px"}}>
          We offer
        </Typography>
        <Typography style={{marginTop: "30px"}}>
        Accounts Payable Software Automates All Aspects Of Payments, Reporting, And Approvals All Within One Online Platform
        </Typography>
        <Button style={{marginTop: "30px", backgroundColor: "white"}}>
          Sign in
        </Button>
      </Grid>
    </Grid>
    </>
  )
}

export default HomePageCashflow