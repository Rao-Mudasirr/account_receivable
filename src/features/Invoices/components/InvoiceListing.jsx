import React from "react";
import CustomTable from '../../../components/Table/CustomTable';
import { useTableParams } from "../../../components/Table/useTableParams";
// import TableAction from '../../../components/Table/TableAction';
// import DeleteModel from '../../../../components/modal/DeleteModel';
// import FormDialog from '../../../../components/modal/ModalPractice';
import './invoice_listing.scss';

const INVOICE_DATA = [
  {
    id: 1,
    Id: "01",
    invoiceNo: "2345",
    client: "Ali",
    invoice_status: 'Paid',
    issue_date: '19 Oct, 2023',
    due_date: '19 Oct, 2023',
    overdue_days: '12',
    total_amount: '$7200'
  },
  {
    id: 2,
    Id: "02",
    invoiceNo: "2345",
    client: "Ali",
    invoice_status: 'Due',
    issue_date: "19 Oct, 2023",
    due_date: "19 Oct, 2023",
    overdue_days: '12',
    total_amount: '$7200'
  },
  {
    id: 3,
    Id: "03",
    invoiceNo: "2345",
    client: "Ali",
    invoice_status: 'Overdue',
    issue_date: "19 Oct, 2023",
    due_date: "19 Oct, 2023",
    overdue_days: '12',
    total_amount: '$7200'
  },
  {
    id: 4,
    Id: "04",
    invoiceNo: "2345",
    client: "Ali",
    invoice_status: 'Paid',
    issue_date: "19 Oct, 2023",
    due_date: "19 Oct, 2023",
    overdue_days: '12',
    total_amount: '$7200'
  },
  {
    id: 5,
    Id: "05",
    invoiceNo: "2345",
    client: "Ali",
    invoice_status: 'Overdue',
    issue_date: "19 Oct, 2023",
    due_date: "19 Oct, 2023",
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
        cell: (info) => <span style={{color:'#0084AD', textDecoration:'underline'}}>{info.getValue()}</span>,
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
        cell: (info) => <span className={info.getValue() === 'Paid' ? 'Paid' : info.getValue() === 'Due' ? 'Due' : 'Overdue'}>{info.getValue()}</span>,
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
