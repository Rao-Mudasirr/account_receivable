import React from 'react';
import dayjs from 'dayjs';
import { Card, Box } from "@mui/material";
import CustomTable from "../../../../components/Table/CustomTable";
import TableHeader from "../../../../components/Table/TableHeader";
import { useTableParams } from "../../../../components/Table/useTableParams";
import TableAction from '../../../../components/Table/TableAction';
import DeleteModel from '../../../../components/modal/DeleteModel';
import FormDialog from '../../../../components/modal/ModalPractice';

import { USER_ACCESS_DATA } from ".";
import { useUserAccess } from "./use-user-access-control";
import { Status } from '../../../../components/status/status';

export const UserAccessTable = () => {
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
  } = useUserAccess();

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
      accessorFn: (row) => row.userName,
      id: "userName",
      cell: (info) => info.getValue(),
      header: "User Name",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.role,
      id: "role",
      cell: (info) => info.getValue(),
      header: "Role",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.createdOn,
      id: "createdOn",
      cell: (info) => dayjs(info.getValue()).format("DD MMM, YYYY"),
      header: "Created On",
      // isSortable: true,
    },
        {
      accessorFn: (row) =>
          row.status ? (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Status
                title={row.status}
                color={
                  row.status === 'Active'
                    ? '#065F46'
                    : row.status === 'Inactive'
                    ? '#FF624E'
                    : '-'
                }
                bgColor={
                  row.status === 'Active'
                    ? 'rgba(209, 250, 229, 1)'
                    : row.status === 'Inactive'
                    ? 'rgba(255, 98, 78, 0.12)'
                    : '-'
                }
              />
            </Box>
          ) : (
            '-'
          ),
      id: "status",
      cell: (info) => info.getValue(),
      header: "Status",
      // isSortable: true,
    },
    {
      id: "Actions",
      cell: (info) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction type="delete" onClicked={handleOpen} />
          <TableAction type="edit" onClicked={handleFormDialog} />
        </Box>
      ),
      header: () => <span>Actions</span>,
      isSortable: false,
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
          onAdd={handleFormDialog}
          onChanged={headerChangeHandler}
        // selectFilters={SELECT_FILTERS}
        />
        <CustomTable
          data={USER_ACCESS_DATA}
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
      <FormDialog openForm={openForm}
        setOpenForm={setOpenForm}
        handleFormDialog={handleFormDialog}
        handleCloseForm={handleCloseForm} />
    </>
  );
};