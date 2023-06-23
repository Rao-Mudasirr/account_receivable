import React from "react";
import AddNote from "./add-note/AddNote";
import RecentEmailTable from "./recent-email-table/RecentEmailTable";
import "./invoice_no_detail.scss";
import { Button, Grid, Box, Typography } from "@mui/material";
import { useState } from "react";
import ViewInvoice from "../../../view-invoices/ViewInvoice";
import { useNavigate } from "react-router";

const InvoiceNoDetail = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const AllOverdue = () => {
    navigate("/overdue-invoices");
  };
  return (
    <>
    <Grid container spacing={2} alignItems="flex-end">
      <Grid item xl={9.9} lg={10}>
        <Typography sx={{fontWeight: 600, fontSize: "20px", lineHeight: "28px"}}>Invoice Details</Typography>
        <Typography sx={{fontWeight: 600, fontSize: "24px", lineHeight: "32px", mt: "50px"}}>Bratley Cooper</Typography>
        <Grid container sx={{ justifyContent: {xs: "center"} }} className="justify-space-between">
          <Grid xl={8.2} lg={6.8} md={5} xs={12} item className="flex justify-space-between">
            <Box>
              <div style={{display: "flex", marginTop: "40px"}}>
              <Typography sx={{fontWeight: 600, fontSize: "20px"}}>
                Invoice 1345
              </Typography>
              <span className="invoice-no_paid">Paid</span>
              </div>
              <Typography sx={{fontWeight: 400, fontSize: "16px",  color: "#6B6B80", }} className="margin-top-0-8">Issue Date</Typography>
              <Typography sx={{fontWeight: 400, fontSize: "16px", color: "#6B6B80", }} className="margin-top-0-8">Due Date</Typography>
              <Typography sx={{fontWeight: 600, fontSize: "18px",  color: "#6B6B80", }} className="margin-top-0-8">Total Amount</Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleOpen}
                sx={{
                  mt: "2.6rem",
                  color: "#40404D",
                  borderColor: "#40404D",
                  borderRadius: "8px",
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
              <Typography sx={{fontWeight: 400, fontSize: "16px", lineHeight: "24px", color: "#40404D",}} className="margin-top-0-8">19/07/2022</Typography>
              <Typography sx={{fontWeight: 400, fontSize: "16px", lineHeight: "24px", color: "#40404D",}} className="margin-top-0-8">19/07/2023</Typography>
              <Typography sx={{fontWeight: 400, fontSize: "16px", lineHeight: "24px", color: "#40404D",}} className="margin-top-0-8">£ 7100.00</Typography>
            </Box>
          </Grid>
          <Grid item sx={{ backgroundColor: "#F0F0F2", p: "24px", borderRadius: "8px" }}>
              <Typography sx={{fontWeight: 600, fontSize: "20px", lineHeight: "28px"}}>Overdue Invoices</Typography>
              <Box className="flex justify-space-between">
                <div>
                  <Typography sx={{fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "#6B6B80"}} className="margin-top-0-8">Invoice 1140</Typography>
                  <Typography sx={{fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "#6B6B80"}} className="margin-top-0-8">Invoice 1171</Typography>
                  <Typography sx={{fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "#6B6B80"}} className="margin-top-0-8">Invoice 1191</Typography>
                </div>
                <div>
                  <Typography sx={{fontWeight: 600, fontSize: "14px", lineHeight: "20px"}} className="margin-top-0-8">£ 2112.00</Typography>
                  <Typography sx={{fontWeight: 600, fontSize: "14px", lineHeight: "20px"}} className="margin-top-0-8">£ 1537.00</Typography>
                  <Typography sx={{fontWeight: 600, fontSize: "14px", lineHeight: "20px"}} className="margin-top-0-8">£ 704.00</Typography>
                </div>
              </Box>
              <div style={{ textAlign: "center" }}>
                <Button
                 className="margin-top-2"
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
                    borderRadius: "8px",
                    "&:hover": {
                      borderColor: "black",
                      color: "black",
                    },
                  }}
                >
                  View All Invoices
                </Button>
              </div>
          </Grid>
        </Grid>
        <RecentEmailTable />
      </Grid>
      <Grid item>
        <AddNote />
        </Grid>
      </Grid>
    </>
  );
};

export default InvoiceNoDetail;
