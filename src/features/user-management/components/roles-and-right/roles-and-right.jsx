import React from 'react';
import dayjs from 'dayjs';
import { Card, Box, Modal, Typography } from "@mui/material";
import CustomTable from "../../../../components/Table/CustomTable";
import TableHeader from "../../../../components/Table/TableHeader";
import { useTableParams } from "../../../../components/Table/useTableParams";
import TableAction from '../../../../components/Table/TableAction';
import DeleteModel from '../../../../components/modal/DeleteModel';
import FormDialog from '../../../../components/modal/ModalPractice';

import Manager from '../role_rights_manager/Manager'

import { ROLE_RIGHTS_DATA } from ".";
import { useRolesRights } from "./use-roles-andright";
import { BasicInformationForm } from '../basic-information';

import { Link } from "react-router-dom";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

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
    const [openFormModal, setOpenFormModal] = React.useState(false);
  const handleOpenFormModal = () => setOpenFormModal(true);
  const handleCloseFormModal = () => setOpenFormModal(false);
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
             <TableAction type="edit" onClicked={handleOpenFormModal} />
             <Link to="/user-management/role-right-manager"><TableAction type="setting" /></Link>
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
          onAdd={handleOpenFormModal}
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
        <Modal
        open={openFormModal}
        onClose={handleCloseFormModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <BasicInformationForm/>
          </Typography>
        </Box>
      </Modal>
    </>
    
  );
};
