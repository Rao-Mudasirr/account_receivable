import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CustomTable from '../../../components/Table/CustomTable';
import { useTableParams } from "../../../components/Table/useTableParams";
// import TableAction from '../../../components/Table/TableAction';
// import DeleteModel from '../../../../components/modal/DeleteModel';
// import FormDialog from '../../../../components/modal/ModalPractice';

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
        accessorFn: (row) => row.roleName,
        id: "invoiceNo",
        cell: (info) => info.getValue(),
        header: "Invoice No.",
        // isSortable: true,
      },
      {
        accessorFn: (row) => row.description,
        id: "client",
        cell: (info) => info.getValue(),
        header: "Client",
        // isSortable: true,
      },
      {
        accessorFn: (row) => row.description,
        id: "invoice_status",
        cell: (info) => info.getValue(),
        header: "Invoice Status",
        // isSortable: true,
      },
      {
        accessorFn: (row) => row.description,
        id: "issue_date",
        cell: (info) => info.getValue(),
        header: "Issue Date",
        // isSortable: true,
      },
      {
        accessorFn: (row) => row.description,
        id: "due_date",
        cell: (info) => info.getValue(),
        header: "Due Date",
        // isSortable: true,
      },
      {
        accessorFn: (row) => row.description,
        id: "overdue_days",
        cell: (info) => info.getValue(),
        header: "Overdue Days",
        // isSortable: true,
      },
      {
        accessorFn: (row) => row.description,
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
      <Box style={{margin: '20px'}}>
        {/* Title */}
        <Grid container>
          <br />
          <Grid item xs={12} sm={12} md={12}>
            <div className="invoice-title">Invoices</div>
          </Grid>
        </Grid>
        {/* Search field */}
          {/* <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <span>
              Search field
            </span>
            <span>
              <span>From</span>
              <span>To</span>
              <span>
                <button>More Filters</button>
              </span>
            </span>
          </div> */}

          {/* Table */}

          <CustomTable
            // data={ROLE_RIGHTS_DATA}
            columns={columns}
            // showSerialNo
            // onPageChange={pageChangeHandler}
            // onSortByChange={sortChangeHandler}
            isSuccess={true}
            isPagination={true}
          />

      </Box>
    </React.Fragment>
  );
}
