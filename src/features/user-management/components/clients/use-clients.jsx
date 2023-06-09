import { useTheme } from "@mui/material";

import React, { useRef, useState } from "react";
import { CLIENT_MANAGEMENT_DATA } from ".";


export const useClients = () => {
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = useState(true)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [userData, setUseruserData] = useState(CLIENT_MANAGEMENT_DATA)
  const theme = useTheme();
  const [openForm, setOpenForm] = React.useState(false);

  const handleFormDialog = () => {
    setOpenForm(true);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
  };

  const tableData = CLIENT_MANAGEMENT_DATA(status);

  const updateStatus = (e, _id) => {
    const val = e.target.value;
    setUseruserData(userData.map(item => {
      const status = item.status;
      if (item.id === _id) {
        return {...item, status: val === "Active" ? "Inactive" : "Active" };
      } else {
        return item;
      }
    }))



  }

  //   const router = useRouter();
  const tableHeaderRef = useRef();
  return {
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
    userData,
    tableHeaderRef,
    tableData, setStatus, status,
    updateStatus,
  };
};
