import React from 'react'
import CustomTable from '../../../components/Table/CustomTable'
import { SUB_INVOICE_DATA, sub_columns } from './sbscription-table-data'
import './sub-invoice.scss';
import { Button } from '@mui/material';
import LinkNewCard from '../../Subscriptioninvoice/LinkNewCard/LinkNewCard';

export default function SubscriptionList() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        isPagination={false}
        showHeaderFilter={false}
      />
          <Button onClick={handleOpen}>Link New Card</Button>
          <span>
            <LinkNewCard 
              open = {open}
              handleClose={handleClose}
            />
          </span>
          
    </React.Fragment>
  )
}
