import React, { Fragment, useState } from "react";
import CustomTable from "../../../components/Table/CustomTable";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Bills_Data } from "./BillsData";
import TableAction from "../../../components/Table/TableAction";
import { useNavigate } from "react-router-dom";
import GlobalButton from "../../../components/global-button/global-button";
import AddIcon from '@mui/icons-material/Add';
import { Button } from "@mui/material";
import './billmanagement.scss'

export default function BillManagement() {

    const navigate = useNavigate();
    const handleView = ({ row }) => {
        navigate(`/bill-management${row?.original?.id}`, {
            state: { data: row?.original },
        });
    };

    const Bills_Col = [
        {
            accessorFn: (row) => row.Id,
            id: "Id",
            cell: (info) => info.getValue(),
            header: () => <span>Doc Id</span>,
            // isSortable: true,
        },
        {
            accessorFn: (row) => row.bill_received_via,
            id: "bill_received_via",
            cell: (info) => info.getValue(),
            header: "Bill Received Via",
            // isSortable: true,
        },
        {
            accessorFn: (row) => row.vendor,
            id: "vendor",
            cell: (info) => info.getValue(),
            header: "Vendor",
            // isSortable: true,
        },
        {
            accessorFn: (row) => row.created_by,
            id: "created_by",
            cell: (info) => info.getValue(),
            header: "Created By",
            // isSortable: true,
        },
        {
            accessorFn: (row) => row.created_on,
            id: "created_on",
            cell: (info) => info.getValue(),
            header: "Created On",
            // isSortable: true,
        },
        {
            accessorFn: (row) => row.bill_status,
            id: "Status",
            cell: (info) => (
              <span
                className={
                  info.getValue() === "Pending"
                    ? "Pending"
                    : info.getValue() === "Approved"
                    ? "Approved"
                    : info.getValue() === "Rejected"
                    ? "Rejected"
                    : "Partial"
                }
              >
                {info.getValue()}
              </span>
        )},
        {
            id: "Actions",
            cell: (info) => (
                <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
                    <TableAction type="view" onClick={() => handleView(info)} />
                </Box>
            ),
            header: () => <span>Actions</span>,
            isSortable: false,
        },
    ];



    return (
        <Fragment>
            <div style={{padding:'2rem'}}>
            <Grid container className="justify-end">
                <Button sx={{
                    background: '#2B2B33',
                    fontSize: '0.75rem',
                    borderRadius: '8px',
                    mr:'20px',
                    gap:'10px',
                    px: "18px",
                    py: "10px",
                    textTransform: 'capitalize',
                    '&:hover': {
                        background: '#2B2B33',
                    }
                }}
                ><span style={{
                    fontFamily: 'Exo 2',
                    fontSize: '14px',
                    fontWeight: '400',
                    color: '#ffff',
                }}>
                        Add Bill</span>
                    <AddIcon fontSize="medium" sx={{color:'white'}}/>
                </Button>
            </Grid>
            <br />
            {/* Table */}

            <CustomTable
                data={Bills_Data}
                columns={Bills_Col}
                // showSerialNo
                // onPageChange={pageChangeHandler}
                // onSortByChange={sortChangeHandler}
                isSuccess={true}
                isPagination={false}
            />
            </div>
        </Fragment>
    );
}
