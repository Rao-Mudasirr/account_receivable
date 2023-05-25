import { useState } from "react";

export const useMUIModal = () => {
  
    const [openDialog, setOpenDialog] =useState<boolean>(false);
    const handleOpenMUIModal = () => setOpenDialog(true);
    const handleCloseMUIModal = () => setOpenDialog(false);

    return {
      openDialog, handleOpenMUIModal, handleCloseMUIModal,
    }
}