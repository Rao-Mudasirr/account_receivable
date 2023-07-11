import React, {useState} from "react";
import { Box, Button, Typography } from "@mui/material";
import "./styles.scss";
import { ReactComponent as Add } from "../../../assests/svg/add-circle-white.svg";
import Logo from "../../../assests/svg/paymentsource-image.png";
import CustomInput from "../../../components/CustomInput";
import DeletePrompt from "../../../components/Table/prompt/DeletePrompt";
import TableAction from "../../../components/Table/TableAction";
import SetDefaultBtn from "../../../components/set-default-btn/SetDefaultBtn";
import PaymentEditModel from './PaymentEditModel'

const PaymentSourceComponent = () => {

  const [editModel, setEditModel] = useState(false);
  const handleOpenEdit = () => {
    setEditModel(true)
  }

  const handleCloseEdit = () => {
    setEditModel(false)
  }

  return (
    <Box className="parent-paymentSource">
      <Box className="heading">Payment Sources</Box>
      <Box className="heading-Section">Bank Accounts</Box>
      <Box className="section2">
        <CustomInput type="select" placeholder="Bank" required={false} />
        <Button>
          Add Payment Source
          <span>
            <Add />
          </span>
        </Button>
      </Box>
      <Box className="section3">
        {Array.from({ length: 8 }).map((_, i) => (
          <Box className="card">
            <Box className="left-side">
              <Box className="image-box">
                <img src={Logo} />
              </Box>
              <Box className="detail-box">
                <Typography variant="h4">Nord Bank Checking</Typography>
                <Typography variant="h5">Ends with .00000</Typography>
              </Box>
              <Box className="status-box">Active</Box>
            </Box>
            <Box className="right-side">
              <SetDefaultBtn />
              <DeletePrompt onDeleteClick={() => {}} />
              <TableAction type="edit" onClick={handleOpenEdit} />
            </Box>
          </Box>
        ))}
      </Box>
          <PaymentEditModel
          handleOpenEdit={handleOpenEdit}
          openEdit={editModel}
          handleCloseEdit={handleCloseEdit}
          />
    </Box>
  );
};

export default PaymentSourceComponent;
