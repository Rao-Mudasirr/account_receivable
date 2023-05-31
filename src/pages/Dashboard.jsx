import React from 'react'
import { TotalInvoices } from '../features/Total_Invoices/TotalInvoices'
import RecentNotify from '../features/RecentNotification/RecentNotify'

export default function Dashboard() {
  return (
    <div style={{marginTop: '60px'}}>
        <TotalInvoices/>
        <RecentNotify />
    </div>
  )
}
