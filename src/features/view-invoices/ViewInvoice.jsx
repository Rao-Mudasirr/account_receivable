import React from 'react'
import { useState } from "react";
// import reactLogo from "./logo192.png";
// import viteLogo from "/vite.svg";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Modal from "@mui/material/Modal";
import './ViewInvoice.scss';

function ViewInvoice() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <>
        <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="model"
      >
        <Box className="modal-body" style={{width:'60%', borderRadius: '8px', background: '#FFFFFF', boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.16)', margin: 'auto'}}>
          <CancelOutlinedIcon className="close-icon" onClick={handleClose} />
          <Box className="model-header">
            <Box className="left-section">
              <Typography variant={"h5"}>CARE Library</Typography>
              <Typography>suit 6 office i-k</Typography>
              <Typography>suit 6 office i-k</Typography>
              <Typography>suit 6 office i-k</Typography>
              <Typography>suit 6 office i-k</Typography>
              <Typography>suit 6 office i-k</Typography>
            </Box>
            <Box className="right-section">
              <img src='/logo192.png' alt="react logo" />
              <Button>Download</Button>
            </Box>
          </Box>
          <Typography variant="h4">INVOICE</Typography>
          <Box className="model-mid">
            <Box className="left-section">
              <Box className="box-to">
                <Typography variant="h6">INVOICE TO</Typography>
                <Typography>address</Typography>
                <Typography>Cambridge</Typography>
                <Typography>CB24 Z</Typography>
              </Box>
              <Box className="two-parent">
                <Box className="box-to">
                  <Typography variant="h6">Time Period</Typography>
                  <Typography>27-2-3203 to 27-2-3203 </Typography>
                </Box>
                <Box className="box-to">
                  <Typography variant="h6">MONTH WEEK</Typography>
                  <Typography> 2-3 Weeks </Typography>
                </Box>
              </Box>
            </Box>
            <Box className="right-section">
              <Box className="box-2">
                <Typography variant="h6">Invoice:</Typography>
                <Typography>Invoice</Typography>
              </Box>
              <Box className="box-2">
                <Typography variant="h6">Date:</Typography>
                <Typography>Invoice</Typography>
              </Box>
              <Box className="box-2">
                <Typography variant="h6">Terms:</Typography>
                <Typography>Invoice</Typography>
              </Box>
              <Box className="box-2">
                <Typography variant="h6">Due Date:</Typography>
                <Typography>Invoice</Typography>
              </Box>
            </Box>
          </Box>
          <Box className="model-table">
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Activity</TableCell>
                    <TableCell>description</TableCell>
                    <TableCell align="right">qty</TableCell>
                    <TableCell align="right">rate</TableCell>
                    <TableCell align="right">amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>HCA</TableCell>
                    <TableCell>HCA</TableCell>
                    <TableCell align="right">HCA</TableCell>
                    <TableCell align="right">HCA</TableCell>
                    <TableCell align="right">HCA</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>HCA</TableCell>
                    <TableCell>HCA</TableCell>
                    <TableCell align="right">HCA</TableCell>
                    <TableCell align="right">HCA</TableCell>
                    <TableCell align="right">HCA</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>HCA</TableCell>
                    <TableCell>HCA</TableCell>
                    <TableCell align="right">HCA</TableCell>
                    <TableCell align="right">HCA</TableCell>
                    <TableCell align="right">HCA</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>HCA</TableCell>
                    <TableCell>HCA</TableCell>
                    <TableCell align="right">HCA</TableCell>
                    <TableCell align="right">HCA</TableCell>
                    <TableCell align="right">HCA</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Box className="model-calculation">
            <Box className="box-3">
              <Typography variant="h4">CALCULATION</Typography>
              <Typography>$12312</Typography>
            </Box>
            <Box className="box-3">
              <Typography variant="h4">CALCULATION</Typography>
              <Box>
                <Typography>$12312</Typography>
                <Typography variant="h6">Paid</Typography>
              </Box>
            </Box>
          </Box>
          <Box className="model-payment-instruction">
            <Typography variant="h4">Payment Information</Typography>

            <Box className="box-4">
              <Typography variant="h4">Account Name</Typography>
              <Typography>$12312</Typography>
            </Box>
            <Box className="box-4">
              <Typography variant="h4">Account Number</Typography>
              <Box>
                <Typography>$12312</Typography>
              </Box>
            </Box>
            <Box className="box-4">
              <Typography variant="h4">Account Number</Typography>
              <Box>
                <Typography>$12312</Typography>
              </Box>
            </Box>
            <Box className="box-4">
              <Typography variant="h4">Account Number</Typography>
              <Box>
                <Typography>$12312</Typography>
              </Box>
            </Box>
            <Box className="box-4">
              <Typography variant="h4">Account Number</Typography>
              <Box>
                <Typography>$12312</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  )
}

export default ViewInvoice