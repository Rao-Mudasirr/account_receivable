import { Grid } from '@mui/material'
import React from 'react'
import { NotificationsPageHeader } from '../features/notifications-page-header/notifications-page-header'

export const Notifications = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <NotificationsPageHeader />
        </Grid>
      </Grid>
    </>
  )
}
