import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { billstableheading, billstabledata } from "./bills-management-data";
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from "@mui/material/Button";
import GlobalButton from "../../../../components/global-button/global-button";
import addcircleImg from '../../../../assests/images/settings/add-circle.png' 




export const BillsManagement = () => {
  return (
    <div>
    <div
      className="container-table"
      style={{
        margin: "5px",
        display: "flex",
        alignItems: "center",
        marginTop: "10px",
      }}
    >
      
      <div style={{ marginLeft: "auto" }} className="invoices-tabal-header">
      <GlobalButton
          btnName="accent"
          btnText="Add Bill"
          endIcon={
            <img src={addcircleImg} alt="Export Text" width={16} height={16} />
          }
          // onClick={() => {
          //   setType("Export");
          //   modalClickHandlar();
          // }}
          className="invoice-second-btn"
        />
      </div>
    </div>
    <TableContainer sx={{ mt: 2 }}>
      <Table sx={{ border: "0" }}>
        <TableHead>
          <TableRow>
            {billstableheading.map((header, index) => (
              <TableCell
                key={index}
                sx={{ background: "#F0F0F2", fontWeight: 600 }}
                className="secondary-color font-family-exo2 primary-title"
              >
               
                  {header}
              
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {billstabledata.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.srno}</TableCell>
              <TableCell
                sx={{
                  
                }}
                className="font-family-exo2 tertiary-color primary-title"
              >
                <span >{row.invoiceid}</span>{" "}
              </TableCell>
              
              <TableCell
                className="font-family-exo2 tertiary-color primary-title"
                sx={{ fontWeight: 400 }}
              >
                {row.name}
              </TableCell>
              <TableCell
                className="font-family-exo2 tertiary-color primary-title"
                sx={{ fontWeight: 400 }}
              >
                {row.dateissue}
              </TableCell>
              <TableCell
                className="font-family-exo2 tertiary-color primary-title"
                sx={{ fontWeight: 400 }}
              >
                {row.duedate}
              </TableCell>
              <TableCell>
                <span className={`status-cell  ${row.status.toLowerCase()}`}>
                  {row.status}
                </span>
              </TableCell>
              <TableCell
                className="font-family-exo2 tertiary-color primary-title"
                sx={{ fontWeight: 400 }}
              >
               <VisibilityIcon/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
  )
}
 