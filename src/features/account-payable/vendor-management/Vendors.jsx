import React, { Fragment, useState } from "react";
import CustomTable from "../../../components/Table/CustomTable";
import { Vendors_Data } from "./VendorsData";
import TableAction from "../../../components/Table/TableAction";
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import { Button, Grid, Box } from "@mui/material";
// import GlobalSearchBar from '../../../components/global-search-filter/global-search-filter'

export default function Vendors() {

    const navigate = useNavigate();
    const handleView = ({ row }) => {
        navigate(`/bill-management${row?.original?.id}`, {
            state: { data: row?.original },
        });
    };

    const handleAddVendor = ()=> {
        navigate('/add-vendor')
    }

    const Vendors_Col = [
        {
            accessorFn: (row) => row.name,
            id: "name",
            cell: (info) => info.getValue(),
            header: "Name",
            // isSortable: true,
        },
        {
            accessorFn: (row) => row.next_due,
            id: "next_due",
            cell: (info) => info.getValue(),
            header: "Next Due",
            // isSortable: true,
        },
        {
            accessorFn: (row) => row.pending_amount,
            id: "pending_amount",
            cell: (info) => info.getValue(),
            header: "Pending Amount",
            // isSortable: true,
        },
        {
            accessorFn: (row) => row.paid_amount,
            id: "paid_amount",
            cell: (info) => info.getValue(),
            header: "Paid Amount",
            // isSortable: true,
        },
        {
            accessorFn: (row) => row.payment_method,
            id: "payment_method",
            cell: (info) => info.getValue(),
            header: "Payment Method",
            // isSortable: true,
        },
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
        <React.Fragment>
            <div style={{padding:'2rem'}}>
            <Grid container className="justify-end">
                {/* <GlobalSearchBar/> */}
                <Button 
                onClick={handleAddVendor}
                sx={{
                    background: '#2B2B33',
                    fontSize: '14px',
                    fontWeight: 400,
                    fontFamily: `'Exo 2', "Roboto" "sans-serif"`,
                    borderRadius: '8px',
                    mr:'20px',
                    gap:'10px',
                    px: "16px",
                    py: "10px",
                    color: "#fff",
                    textTransform: 'capitalize',
                    '&:hover': {
                        background: '#2B2B33',
                    }
                }}
                endIcon={<AddIcon fontSize="medium" sx={{color:'white'}}/>}
                >
                        Add Vendor
                </Button>
            </Grid>
            <br />
            {/* Table */}

            <CustomTable
                data={Vendors_Data}
                columns={Vendors_Col}
                isSuccess={true}
                isPagination={false}
            />
            </div>
        </React.Fragment>
    );
}
