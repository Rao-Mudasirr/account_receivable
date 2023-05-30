import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CustomTable from '../../../components/Table/CustomTable';
import { useTableParams } from "../../../components/Table/useTableParams";
// import TableAction from '../../../components/Table/TableAction';
// import DeleteModel from '../../../../components/modal/DeleteModel';
// import FormDialog from '../../../../components/modal/ModalPractice';

const INVOICE_DATA = [
  {
    id: 1,
    Id: "01",
    invoiceNo: "2345",
    client: "Ali",
    invoice_status: 'Paid',
    issue_date: 30 / 4 / 2011,
    due_date: 30 / 4 / 2011,
    overdue_days: '12',
    total_amount: '$7200'
  },
  {
    id: 2,
    Id: "02",
    invoiceNo: "2345",
    client: "Ali",
    invoice_status: 'Paid',
    issue_date: 30 / 4 / 2011,
    due_date: 30 / 4 / 2011,
    overdue_days: '12',
    total_amount: '$7200'
  },
  {
    id: 3,
    Id: "03",
    invoiceNo: "2345",
    client: "Ali",
    invoice_status: 'Paid',
    issue_date: 30 / 4 / 2011,
    due_date: 30 / 4 / 2011,
    overdue_days: '12',
    total_amount: '$7200'
  },
  {
    id: 4,
    Id: "04",
    invoiceNo: "2345",
    client: "Ali",
    invoice_status: 'Paid',
    issue_date: 30 / 4 / 2011,
    due_date: 30 / 4 / 2011,
    overdue_days: '12',
    total_amount: '$7200'
  },
  {
    id: 5,
    Id: "05",
    invoiceNo: "2345",
    client: "Ali",
    invoice_status: 'Paid',
    issue_date: 30 / 4 / 2011,
    due_date: 30 / 4 / 2011,
    overdue_days: '12',
    total_amount: '$7200'
  },
];

export default function InvoiceListing() {
  //  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
  //   useTableParams();
 const columns = [
      {
        accessorFn: (row) => row.Id,
        id: "Id",
        cell: (info) => info.getValue(),
        header: () => <span>Sr.#</span>,
        // isSortable: true,
      },
      {
        accessorFn: (row) => row.invoiceNo,
        id: "invoiceNo",
        cell: (info) => info.getValue(),
        header: "Invoice No.",
        // isSortable: true,
      },
      {
        accessorFn: (row) => row.client,
        id: "client",
        cell: (info) => info.getValue(),
        header: "Client",
        // isSortable: true,
      },
      {
        accessorFn: (row) => row.invoice_status,
        id: "invoice_status",
        cell: (info) => info.getValue(),
        header: "Invoice Status",
        // isSortable: true,
      },
      {
        accessorFn: (row) => row.issue_date,
        id: "issue_date",
        cell: (info) => info.getValue(),
        header: "Issue Date",
        // isSortable: true,
      },
      {
        accessorFn: (row) => row.due_date,
        id: "due_date",
        cell: (info) => info.getValue(),
        header: "Due Date",
        // isSortable: true,
      },
      {
        accessorFn: (row) => row.overdue_days,
        id: "overdue_days",
        cell: (info) => info.getValue(),
        header: "Overdue Days",
        // isSortable: true,
      },
      {
        accessorFn: (row) => row.total_amount,
        id: "total_amount",
        cell: (info) => info.getValue(),
        header: "Total Amount",
        // isSortable: true,
      },
      // {
      //   id: "Actions",
      //   cell: (info) => (
      //     <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
      //       {/* <TableAction type="delete" onClicked={handleOpen} />
      //        <TableAction type="edit" onClicked={handleFormDialog} />
      //       <TableAction type="setting" onClicked={handleFormDialog} /> */}
      //     </Box>
      //   ),
      //   header: () => <span>Actions</span>,
      //   isSortable: false,
      // },
    ];
  return (
    <React.Fragment>
     
            <div className="invoice-title">Invoices</div>
        
        {/* Search field */}

          {/* Table */}

          <CustomTable
            data={INVOICE_DATA}
            columns={columns}
            // showSerialNo
            // onPageChange={pageChangeHandler}
            // onSortByChange={sortChangeHandler}
            isSuccess={true}
            isPagination={true}
          />
    </React.Fragment>
  );
}
