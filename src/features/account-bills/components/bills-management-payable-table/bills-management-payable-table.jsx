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


export const BillsManagementPayableTable = () => {
  return (
    <div>
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
                sx={{ fontWeight: 400, }}
              >
               <VisibilityIcon sx={{cursor:'pointer'}}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
  )
}
 