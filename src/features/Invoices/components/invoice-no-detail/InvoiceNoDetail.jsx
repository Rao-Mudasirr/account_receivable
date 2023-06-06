import React from 'react'
import AddNote from './add-note/AddNote';
import RecentEmailTable from './recent-email-table/RecentEmailTable';
import "./invoice_no_detail.css";
import { Card, Button } from '@mui/material';

const InvoiceNoDetail = () => {
    return (
        <div className='invoice-no_container'>
            <div>
                <h2>Invoice Details</h2>
                <h1>Bratley Cooper</h1>
                <div className='invoice-no_mid'>
                    <div className='invoice-no_details'>
                        <div>
                            <h3>Invoice 1345<span style={{ backgroundColor: "lightgreen",color: "#48995D", marginLeft: "10px", padding: "8px", borderRadius: "8px" }}>Paid</span></h3>
                            <p>Issue Date</p>
                            <p>Due Date</p>
                            <h4>Total Amount</h4>
                        </div>
                        <div style={{textAlign: "center"}}>
                            <Button
                                variant="outlined"
                                color="primary"
                                sx={{
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
                            <p>19/07/2022</p>
                            <p>19/07/2023</p>
                            <h4>£ 7100.00</h4>
                        </div>
                    </div>


                    <Card className='invoice-no_overdue' sx={{ backgroundColor: "#F0F0F2" }}>
                        <div className='overdue_inner'>
                            <h2>Overdue Invoices</h2>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
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
                            <div style={{textAlign: "center"}}>
                            <Button
                                variant="outlined"
                                color="primary"
                                sx={{
                                    backgroundColor: "#fff",
                                    color: "#40404D",
                                    borderColor: "#40404D",
                                    paddingX: "5rem",
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
            <div>
                <AddNote />
            </div>
        </div>
    )
}

export default InvoiceNoDetail