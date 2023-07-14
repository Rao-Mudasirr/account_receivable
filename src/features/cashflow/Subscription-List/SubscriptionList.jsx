import React from 'react'
import CustomTable from '../../../components/Table/CustomTable'
import { SUB_INVOICE_DATA, sub_columns } from './sbscription-table-data'
import './sub-invoice.scss';

export default function SubscriptionList() {
  return (
    <React.Fragment>
      <div className="subscription-title">Subscription Invoices</div>
      <br/>
      <br/>
      {/* Table */}
      <CustomTable
        data={SUB_INVOICE_DATA}
        columns={sub_columns}
        isSuccess={true}
        isPagination={true}
      />
    </React.Fragment>
  )
}
