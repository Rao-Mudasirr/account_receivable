import React from 'react'
import { CustomTabs } from '../components/custom-tabs/custom-tabs'
import { BillManagement } from '../features/bill-management/bill-management'
import { dashboardStyle } from './dashboard/dashboard-receivable'
const BillsManagementTabsData = [
  {
    id:0,
    name:'Bill Management',
    component:<BillManagement/>
  },
  {
    id:1,
    name:'Documents Approval',
    component:'Documents Approval'
  },
]
export const BillsManagement = () => {
  return (
    <>
        <div style={dashboardStyle}>Bills</div>
        <CustomTabs tabsData={BillsManagementTabsData}/>
    </>
  )
}
