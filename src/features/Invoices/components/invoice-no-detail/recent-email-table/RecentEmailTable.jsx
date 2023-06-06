import React, { useState } from 'react';
import { Card, Box, Button } from "@mui/material";
import CustomTable from "../../../../../components/Table/CustomTable";
import { useTableParams } from "../../../../../components/Table/useTableParams";
import TableAction from "../../../../../components/Table/TableAction";
import { INVOICE_DETAIL_DATA } from ".";
import { useClients } from "./use-resent-email";
import EmailIcon from '../../../../../assests/svg/email.png'
import DeleteModel from '../../../../../components/modal/DeleteModel';
import Compose_email from '../../Compose_email/Compose_email';

const RecentEmailTable = () => {
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
  const handleCustomModel = () => {
    setOpenModel(true);
  }

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();
  const columns = [
    {
      accessorFn: (row) => row.sr,
      id: "sr",
      cell: (info) => info.getValue(),
      header: () => <span>Sr.#</span>,
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.workflowName,
      id: "workflowName",
      cell: (info) => info.getValue(),
      header: "Workflow Name",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.initiatorRole,
      id: "initiatorRole",
      cell: (info) => info.getValue(),
      header: "Initiator Role",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.initiatorName,
      id: "initiatorName",
      cell: (info) => info.getValue(),
      header: "Initiator Name",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.sentDate,
      id: "sentDate",
      cell: (info) => info.getValue(),
      header: "Sent Date",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.sentTime,
      id: "sentTime",
      cell: (info) => info.getValue(),
      header: "Sent Time",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.emailType,
      id: "emailType",
      cell: (info) => info.getValue(),
      header: "Email Type",
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

      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end"
      }}>
        <h2>Recent Emails</h2>
        <Button
          variant="contained"
          color="primary"
          sx={{
            height: "40px",
            background: "#2B2B33",
            borderRadius: '8px',
            "&:hover": {
              background: "#2B2B33",
            },
          }}
          endIcon={<img src={EmailIcon} alt="Compose Email" onClicked={<Compose_email/>} />}
        >
          Compose 
        </Button>
      </div>
      <br />
      <CustomTable
        data={INVOICE_DETAIL_DATA}
        columns={columns}
        // showSerialNo
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
        isSuccess={true}
        isPagination={true}
      />
      {/* <DeleteModel
        open={open}
        handleClose={handleClose}
        onDeleteClick={handleClose}
      /> */}
      {/* <CustomModel open={openModel}
        setOpen={setOpenModel}
        styleModal={{ width: { xs: '90%', sm: '80%', md: '70%', xl: '60%' } }}>
          <ClientsModal/>
        
      </CustomModel> */}
    </>
  );
};

export default RecentEmailTable;