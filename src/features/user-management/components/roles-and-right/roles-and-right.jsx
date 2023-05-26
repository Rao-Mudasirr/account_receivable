import React from 'react';
import dayjs from 'dayjs';
import { Card, Box } from "@mui/material";
import CustomTable from "../../../../components/Table/CustomTable";
import TableHeader from "../../../../components/Table/TableHeader";
import { useTableParams } from "../../../../components/Table/useTableParams";
import TableAction from '../../../../components/Table/TableAction';
import DeleteModel from '../../../../components/modal/DeleteModel';
import FormDialog from '../../../../components/modal/ModalPractice';

import { ROLE_RIGHTS_DATA } from ".";
import { useRolesRights } from "./use-roles-andright";

export const RolesRightsTable = () => {
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
  } = useRolesRights();

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
        accessorFn: (row) => row.roleName,
        id: "roleName",
        cell: (info) => info.getValue(),
        header: "Role Name",
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
        accessorFn: (row) => row.description,
        id: "description",
        cell: (info) => info.getValue(),
        header: "Description",
        // isSortable: true,
      },
      {
        id: "Actions",
        cell: (info) => (
          <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
            <TableAction type="delete" onClicked={handleOpen} />
             <TableAction type="edit" onClicked={handleFormDialog} />
            <TableAction type="setting" onClicked={handleFormDialog} />
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
          data={ROLE_RIGHTS_DATA}
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
