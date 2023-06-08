import React, { useState } from 'react';
import { Card, Box, TextField, MenuItem } from "@mui/material";
import CustomTable from "../../../../components/Table/CustomTable";
import TableHeader from "../../../../components/Table/TableHeader";
import { useTableParams } from "../../../../components/Table/useTableParams";
import TableAction from "../../../../components/Table/TableAction";

import { CLIENT_MANAGEMENT_DATA } from ".";
import { useClients } from "./use-clients";
import DeleteModel from "../../../../components/modal/DeleteModel";
import { GlobalSearchBar } from '../../../../components/global-search-filter/global-search-filter';
import FormDialog from '../../../../components/modal/ModalPractice';
import { CustomModel } from '../../../../components/custom-model/custom-model';
import { ClientsModal } from './client-modal/client-modal';

export const ClientsTable = () => {
  const {
    open,
    setOpen,
    handleOpen,
    handleClose,
    userData,
    tableData,
    openForm,
    setOpenForm,
    handleFormDialog,
    handleCloseForm,
    theme,
    // router,
    tableHeaderRef,
  } = useClients();

  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = tableData.filter((data) =>
    Object.values(data).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

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
  const isFocused = false;
  return (
    <>
      <Card sx={{ p: 1 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <GlobalSearchBar
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <TextField defaultValue='Role' sx={{
            width: 333, mb: 2, borderRadius : 5,
            '& .MuiInputBase-root': {
              color: isFocused ? 'black' : 'inherit',
              '&::before': {
                borderBottomColor: isFocused ? 'black' : '#C4C4CC',
              },
              '&::after': {
                borderBottomColor: isFocused ? 'black' : '#C4C4CC',
              },
              '&:hover::before': {
                borderBottomColor: isFocused ? 'black' : '#C4C4CC',
              },
            },
          }}
            select
            variant = {isFocused ? 'filled' : 'standard'}
          >
            <MenuItem value='Assigned'>
              Assigned
            </MenuItem>
            <MenuItem value='Unassigned'>
              Unassigned
            </MenuItem>
          </TextField>
        </div>
        <CustomTable
          data={userData}
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
