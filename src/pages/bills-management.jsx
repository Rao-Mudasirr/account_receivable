import React from 'react'
import { CustomTabs } from '../components/custom-tabs/custom-tabs'
import { BillManagement } from '../features/bill-management/bill-management'
<<<<<<< HEAD
import DocumentApproval from '../features/account-bills/components/document-approval/document-approval'
import { Bills_Data } from '../features/account-payable/bill-management/BillsData'
import BillManagementTable from '../features/account-payable/bill-management/BillManagementTable'
import { BillsManagementPayableTable } from '../features/account-bills/components/bills-management-payable-table/bills-management-payable-table'
=======
import { dashboardStyle } from './dashboard/dashboard-receivable'
>>>>>>> efb54535c82ae018ebd23dfe06df10f516ac8de9
const BillsManagementTabsData = [
  {
    id:0,
    name:'Bill Management', 
    component:<BillManagement/>
  },
  {
    id:1,
    name:'Documents Approval',
    component:<DocumentApproval/>
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
