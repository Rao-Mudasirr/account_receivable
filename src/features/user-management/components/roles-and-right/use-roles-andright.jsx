import { useTheme } from "@mui/material";

import React, { useRef } from "react";

export const useRolesRights = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
//   const router = useRouter();
  const tableHeaderRef = useRef();
  return {
    open,
    setOpen,
    handleOpen,
    handleClose,
    theme,
    // router,
    tableHeaderRef,
  };
};
