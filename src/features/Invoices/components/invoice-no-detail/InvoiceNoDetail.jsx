import React from 'react';
import AddNote from './add-note/AddNote';
import RecentEmailTable from './recent-email-table/RecentEmailTable';
import "./invoice_no_detail.scss";
import { Card, Button } from '@mui/material';
import { useState } from "react";
import ViewInvoice from '../../../view-invoices/ViewInvoice';
import { useNavigate } from 'react-router';

const InvoiceNoDetail = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate()
    const AllOverdue = () => {
        navigate('/overdue-invoices');
    }
    return (
        <div className='invoice-no_container'>
            <div>
                <h2>Invoice Details</h2>
                <h1>Bratley Cooper</h1>
                <div className='invoice-no_mid'>
                    <div className='invoice-no_details'>
                        <div>
                            <h3 style={{marginTop: "1.7rem"}}>Invoice 1345<span className='invoice-no_paid'>Paid</span></h3>
                            <p>Issue Date</p>
                            <p>Due Date</p>
                            <h4>Total Amount</h4>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <Button
                                variant="outlined"
                                color="primary"
                                onClick={handleOpen}
                                sx={{
                                    marginTop: "1.3rem",
                                    color: "#40404D",
                                    borderColor: "#40404D",
                                    borderRadius: '8px',
                                    "&:hover": {
                                        borderColor: "black",
                                        color: "black",
                                    },
                                }}
                            >
                                View Invoice
                            </Button>
                            <ViewInvoice
                                open={open}
                                handleClose={handleClose}
                                handleOpen={handleOpen}
                            />
                            <p>19/07/2022</p>
                            <p>19/07/2023</p>
                            <h4>£ 7100.00</h4>
                        </div>
                    </div>


                    <Card className='invoice-no_overdue' sx={{ backgroundColor: "#F0F0F2", boxShadow: "none" }}>
                        <div className='overdue_inner'>
                            <h2>Overdue Invoices</h2>
                            <div className='invoice-no_overdues'>
                                <div>
                                    <p>Invoice 1140</p>
                                    <p>Invoice 1171</p>
                                    <p>Invoice 1191</p>
                                </div>
                                <div>
                                    <p>£ 2112.00</p>
                                    <p>£ 1537.00</p>
                                    <p>£ 704.00</p>
                                </div>
                            </div>
                            <div style={{ textAlign: "center" }}>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    onClick={AllOverdue}
                                    fontFamily="Exo 2"
                                    sx={{
                                        backgroundColor: "#fff",
                                        color: "#40404D",
                                        borderColor: "#40404D",
                                        paddingX: "5rem",
                                        fontFamily: "Exo 2",
                                        mt: "1rem",
                                        borderRadius: '8px',
                                        "&:hover": {
                                            borderColor: "black",
                                            color: "black",
                                        },
                                    }}
                                >
                                    View All Invoices
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
                <RecentEmailTable />
            </div>
            <div style={{height: "95%"}}>
                <AddNote />
            </div>
        </div>
    );
};

export default InvoiceNoDetail;
