import React, { useState } from 'react';
import { Avatar, Grid, Typography, Box, IconButton,Tabs,Tab,Divider  } from "@mui/material";
import clientImage from "../../assests/images/client/client-img.png"
import "./client-details.scss"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const TabData = [
  { label: 'Invoices', content: 'Content for Invoices' },
  { label: 'Workflow Details', content: 'Content for Workflow Details' },
  
];

const ClientDetails = () => {
  const [openInvoices, setOpenInvoices] = useState(true);
  const [clientDetails, setClientDetails] = useState(true);

  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const openInvoicesClickHandler = () => {
    setOpenInvoices(!openInvoices);
  }

  const clientDetailsClickHandler = () => {
    setClientDetails(!clientDetails);
  }

  return (
    <Grid container spacing={3} sx={{ p: 2 }}>
      <Grid item xs={12} md={10}>
        <Typography variant="h6" sx={{ fontSize: "20px", mt: 5, mb: 5 }}>
          Client Details
        </Typography>
        <div className="" style={{ display: "flex", 
         justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Avatar
              alt="Remy Sharp"
              src={clientImage}
              sx={{ width: "80px", height: "80px" }}
            />
            <div style={{ padding: "8px", marginTop: "5px" }}>
              <Typography variant="h6" sx={{ fontSize: "20px" }}>
                Jacob Bills
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "14px" }}>
                xyz@gmail.com
              </Typography>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton onClick={clientDetailsClickHandler} className={clientDetails ? 'opendata' : ''}>
              <ArrowDropDownIcon />
            </IconButton>
          </div>
        </div>

        {clientDetails && (
          <div>
            <div
              style={{
                marginTop: "25px",
                display: "flex",
                justifyContent: "space-between",
                alignContent: "center",
              }}
            >
              <div className="" style={{ display: "flex", gap: "10px" }}>
                <Typography variant="h6" sx={{ fontSize: "14px" }}>
                  Designation
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "14px" }}>
                  C.T.O
                </Typography>
              </div>
              <div className="" style={{ display: "flex", gap: "10px" }}>
                <Typography variant="h6" sx={{ fontSize: "14px" }}>
                  Phone
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "14px" }}>
                  +44 667788
                </Typography>
              </div>
              <div className="" style={{ display: "flex", gap: "10px" }}>
                <Typography variant="h6" sx={{ fontSize: "14px" }}>
                  Postal code
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "14px" }}>
                  +44 667788
                </Typography>
              </div>
            </div>
            <div style={{ marginTop: "25px" }}>
             

        <div className="" style={{ display: "flex", gap: "50px" }}>
          <Typography variant="h6" sx={{ fontSize: "14px" }}>
            Address
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "14px" }}>
            96 Richmond Road London EC35 7CX
          </Typography>
        </div>
      </div></div>)} 
    </Grid>
    <Grid item xs={12} md={2} sx={{mt:18}}>
    
      <div style={{  }} className='invoices'>
        <div
          className=""
          style={{ display: "flex",justifyContent:'space-between'  }}
        >
          <Typography variant="h6" sx={{ fontSize: "14px" }}>
            Outstanding Amount
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "14px" }} className='yellow-color'> 
            £10245
          </Typography>
        </div>
        <div
          className=""
          style={{
            display: "flex",
            justifyContent:'space-between',
          
          }}
        >
          <Typography variant="h6" sx={{ fontSize: "14px" }} >
            Overdue Amount
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "14px" ,}} className='error-color'>
            £1245
          </Typography>
        </div>
      </div>
      <Grid>
      <Grid sx={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
        <IconButton
          onClick={openInvoicesClickHandler}
          className={openInvoices ? 'open' : ''}
        >
          <ArrowDropDownIcon />
        </IconButton>
      </Grid>

      {/* invoice section */}
      {openInvoices && (
        <Box 
       >
          <div
            className="invoice-title"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="h6" sx={{ fontSize: '14px' }}>
              Due Invoices
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '14px', ml: -2 }} className="yellow-color">
              120
            </Typography>
          </div>
          <div
            className="invoice-title"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="h6" sx={{ fontSize: '14px' }}>
              Overdue Invoices
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '14px' }} className="error-color">
              60
            </Typography>
          </div>
          <div
            className="invoice-title"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="h6" sx={{ fontSize: '14px' }}>
              Paid Invoices
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '14px' }} className="invoice-title">
              60
            </Typography>
          </div>
        </Box>
      )}
    </Grid>
    </Grid>
    <Grid sx={{p:5}}>
    <div>
      <Tabs value={activeTab} onChange={handleTabChange}>
        {TabData.map((tab, index) => (
          <Tab key={index} label={tab.label} />
        ))}
      </Tabs>
      <Divider sx={{ backgroundColor: '#000000', height: 1,width:'100%'}} />
      <Typography variant="body1" sx={{ mt: 2 }}>
        {TabData[activeTab].content}
      </Typography>
    </div>
    </Grid>
  </Grid>
  )
}

export default ClientDetails
