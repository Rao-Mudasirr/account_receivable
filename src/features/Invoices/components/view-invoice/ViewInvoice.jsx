import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import CloseBtn from "../../../../assests/svg/close-circle.png";
import ViewInvoiceData from "./ViewInvoiceData.json";

export default function FormDialog(props) {
  const { openForm, handleCloseForm } = props;
  //   const [open, setOpen] = React.useState(false);

  //   const handleClickOpen = () => {
  //     setOpenForm(true);
  //   };

  //   const handleClose = () => {
  //     setOpen(false);
  //   };

  return (
    <div>
      <Dialog open={openForm} onClose={handleCloseForm}>
        <div className="viewinvoice_container">
          <Button onClick={handleCloseForm}>
            <img src={CloseBtn} alt="" />
          </Button>
          {ViewInvoiceData.map(({ id, companyAddress }, index) => {
            return (
              <div className="viewinvoice_header" key={id}>
                <h1>{companyAddress}</h1>
              </div>
            );
          })}
        </div>
      </Dialog>
    </div>
  );
}
