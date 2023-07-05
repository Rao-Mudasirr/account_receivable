import { Grid } from '@mui/material';
import React from 'react'
import { AddBillModal } from '../add-bill-modal/add-bill-modal';
import BillManagementTable from '../account-payable/bill-management/BillManagementTable';
import { BillsManagementPayableTable } from '../account-bills/components/bills-management-payable-table/bills-management-payable-table';

export const BillManagement = () => {
    return (
        <>
            <Grid container>
                <Grid item className="flex justify-end margin-bottom-1" xs={11.75}>
                    <AddBillModal />
                </Grid>
                <Grid item xs={12}>
                    <BillManagementTable />
                </Grid>
<<<<<<< HEAD
               
=======
                <Grid item xs={12}>
                    Table 🐱‍🏍✔🐱⚔
                </Grid>
>>>>>>> efb54535c82ae018ebd23dfe06df10f516ac8de9
            </Grid>
        </>
    )
}
