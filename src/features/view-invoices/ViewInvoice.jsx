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

const invoice_data = [
  {
    activity: 'HCA Weekday Night (Excelcare Homes)',
    description: 'HCA Weekday Night (Excelcare Homes)',
    qty: 88,
    rate: 15.00,
    amount: 1320.00,
  },
  {
    activity: 'HCA Weekday Night (Excelcare Homes)',
    description: 'HCA Weekday Night (Excelcare Homes)',
    qty: 88,
    rate: 15.00,
    amount: 1320.00,
  },
  {
    activity: 'HCA Weekday Night (Excelcare Homes)',
    description: 'HCA Weekday Night (Excelcare Homes)',
    qty: 88,
    rate: 15.00,
    amount: 1320.00,
  },
  {
    activity: 'HCA Weekday Night (Excelcare Homes)',
    description: 'HCA Weekday Night (Excelcare Homes)',
    qty: 88,
    rate: 15.00,
    amount: 1320.00,
  },
]

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
              <Typography variant={"h5"}>ORCALO HOLDINGS LTD</Typography>
              <Typography>Uxbridge</Typography>
              <Typography>UB11 1FW</Typography>
              <Typography>accounts@ceative.co.uk</Typography>
              <Typography>Company Registration No #12345</Typography>
            </Box>
            <Box className="right-section">
              <img style={{width: '100px', height: '100px'}} src='/logo192.png' alt="react logo" />
              <Button style={{width:'70%'}}>Download</Button>
            </Box>
          </Box>
          <Typography variant="h4">INVOICE</Typography>
          <Box className="model-mid">
            <Box className="left-section">
              <Box className="box-to">
                <Typography variant="h6">INVOICE TO</Typography>
                <Typography>FilzWilliam House, 89 Rooks St, Cottenham</Typography>
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
                  <Typography> Week - 39 </Typography>
                </Box>
              </Box>
            </Box>
            <Box className="right-section">
              <Box className="box-2">
                <Typography variant="h6">Invoice</Typography>
                <Typography>1140</Typography>
              </Box>
              <Box className="box-2">
                <Typography variant="h6">Date</Typography>
                <Typography>27/12/2023</Typography>
              </Box>
              <Box className="box-2">
                <Typography variant="h6">Terms</Typography>
                <Typography>Net 30</Typography>
              </Box>
              <Box className="box-2">
                <Typography variant="h6">Due Date</Typography>
                <Typography>27/12/2023</Typography>
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
                {
                  invoice_data?.map((value,index)=>(
                  <TableRow key={index}>
                    <TableCell>{value?.activity}</TableCell>
                    <TableCell>{value?.description}</TableCell>
                    <TableCell align="right">{value?.qty}</TableCell>
                    <TableCell align="right">{value?.rate}</TableCell>
                    <TableCell align="right">{value?.amount}</TableCell>
                  </TableRow>
                  ))
                }
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Box className="model-calculation">
            <Box className="box-3">
              <Typography variant="h5">PAYMENT</Typography>
              <Typography>2,112.00</Typography>
            </Box>
            <Box className="box-3">
              <Typography variant="h5">BALANCE DUE</Typography>
              <Box>
                <Typography>$12312</Typography>
                <Typography variant="h6">PAID</Typography>
              </Box>
            </Box>
          </Box>
          <Box className="model-payment-instruction">
            <Typography variant="h5" className='payment-info-title'>Payment Information</Typography>
              <br/>
            <Box className="box-4">
              <Typography variant="h4">Account Name: </Typography>
              <Typography>ORCALO HOLDING Ltd</Typography>
            </Box>
            <Box className="box-4">
              <Typography variant="h4">Account No: </Typography>
              <Box>
                <Typography>46205129</Typography>
              </Box>
            </Box>
            <Box className="box-4">
              <Typography variant="h4">Sort Code: </Typography>
              <Box>
                <Typography>23-14-70</Typography>
              </Box>
            </Box>
            <Box className="box-4">
              <Typography variant="h4">IBAN No: </Typography>
              <Box>
                <Typography>GB33 TRWI 2314 7046 2051 69</Typography>
              </Box>
            </Box>
            <Box className="box-4">
              <Typography variant="h4">Wises Bank Address: </Typography>
              <Box>
                <Typography>56 Shoreditch High Street, London E1 6JJ, United Kingdom</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  )
}

export default ViewInvoice