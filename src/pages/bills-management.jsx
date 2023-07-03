import React from 'react'
import { dashboardStyle } from './Dashboard'
import { CustomTabs } from '../components/custom-tabs/custom-tabs'
import { BillManagement } from '../features/bill-management/bill-management'
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
