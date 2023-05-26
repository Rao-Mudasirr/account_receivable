import React, { useState } from 'react';
import { Card, Box } from "@mui/material";
import CustomTable from "../../../../components/Table/CustomTable";
import TableHeader from "../../../../components/Table/TableHeader";
import { useTableParams } from "../../../../components/Table/useTableParams";
import TableAction from "../../../../components/Table/TableAction";

import { CLIENT_MANAGEMENT_DATA } from ".";
import { useClients } from "./use-clients";
import DeleteModel from "../../../../components/modal/DeleteModel";
import FormDialog from '../../../../components/modal/ModalPractice';
import { CustomModel } from '../../../../components/custom-model/custom-model';
import { ClientsModal } from './client-modal/client-modal';

export const ClientsTable = () => {
  const {
    open,
    setOpen,
    handleOpen,
    handleClose,
    openForm,
    setOpenForm,
    handleFormDialog,
    handleCloseForm,
    theme,
    // router,
    tableHeaderRef,
  } = useClients();
  const [openModel, setOpenModel] = useState(false);
  const handleCustomModel = ()=>{
    setOpenModel(true);
  }

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();
  const columns = [
    {
      accessorFn: (row) => row.Id,
      id: "Id",
      cell: (info) => info.getValue(),
      header: () => <span>Id</span>,
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.clientName,
      id: "clientName",
      cell: (info) => info.getValue(),
      header: "Client Name",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.totalInvoices,
      id: "totalInvoices",
      cell: (info) => info.getValue(),
      header: "Total Invoices",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.paidInvoices,
      id: "paidInvoices",
      cell: (info) => info.getValue(),
      header: "Paid Invoices",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.unpaidInvoices,
      id: "unpaidInvoices",
      cell: (info) => info.getValue(),
      header: "Unpaid Invoices",
      // isSortable: true,
    },
    {
      id: "Actions",
      cell: (info) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction type="view" onClicked={handleCustomModel} />
        </Box>
      ),
      header: () => <span>Actions</span>,
      // isSortable: false,
    },
  ];
  return (
    <>
      <Card sx={{ p: 1 }}>
        <TableHeader
          ref={tableHeaderRef}
          // showSelectFilters
          // disabled={isLoading}
          title="Health & Safety"
          searchKey="search"
          showAddBtn
          onAdd={handleOpen}
          onChanged={headerChangeHandler}
        // selectFilters={SELECT_FILTERS}
        />
        <CustomTable
          data={CLIENT_MANAGEMENT_DATA}
          columns={columns}
          // showSerialNo
          onPageChange={pageChangeHandler}
          onSortByChange={sortChangeHandler}
          isSuccess={true}
          isPagination={true}
        />
      </Card>
      <DeleteModel
        open={open}
        handleClose={handleClose}
        onDeleteClick={handleClose}
      />
      {/* <CustomModel open={openModel}
        setOpen={setOpenModel}
        styleModal={{ width: { xs: '90%', sm: '80%', md: '70%', xl: '60%' } }}>
          <ClientsModal/>
        
      </CustomModel> */}
    </>
  );
};
