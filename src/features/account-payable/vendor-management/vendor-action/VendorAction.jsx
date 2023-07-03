import React, { useState } from 'react';
import { Avatar, Grid, Typography, Box, Paper, Tabs, Tab, Divider } from "@mui/material";
import VendorDetails from './vendor-details/VendorDetails';
import VendorDocuments from './vendor-documents/VendorDocuments';
import { Vendors_Data } from '../VendorsData'

const TabData = [
  { label: "Details", content: <VendorDetails /> },
  { label: "Documents", content: <VendorDocuments /> },
];

const VendorAction = () => {

  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // Check if activeTab is within the valid range
  if (activeTab < 0 || activeTab >= TabData.length) {
    return <div>Error: Invalid activeTab value</div>;
  }

  return (
    <Grid container spacing={2} className='margin-auto-x'>
      <Grid container className='margin-top-2 justify-space-between align-center' xl={10} lg={10} md={10} xs={12}>

        <Grid itam>
          <Typography className='font-weight-600 heading-20 font-family-exo2'>AA Traders</Typography>
        </Grid>
        <Grid item className='flex margin-top-1' sx={{ gap: "3rem" }}>
          <Box>
            <Typography className='font-weight-400 secondary-title font-family-exo2 secondary-color'>Next Payment</Typography>
            <Typography className='font-weight-600 sub-heading margin-bottom-1 font-family-exo2 end-text tertiary-color'>10 Feb</Typography>
          </Box>
          <Box>
            <Typography className='font-weight-400 secondary-title font-family-exo2 secondary-color'>Total Documents</Typography>
            <Typography className='font-weight-600 sub-heading margin-bottom-1 font-family-exo2 end-text tertiary-color'>4</Typography>
          </Box>
          <Box>
            <Typography className='font-weight-400 secondary-title font-family-exo2 secondary-color'>Amount Owed</Typography>
            <Typography className='font-weight-600 sub-heading margin-bottom-1 font-family-exo2 end-text tertiary-color'>£ 500.00</Typography>
          </Box>
        </Grid>

      </Grid>

      <Grid xl={10} lg={10} md={10} xs={12}>
        <div style={{ padding: '5px', marginTop: '10px' }}>
          <div style={{ overflow: "hidden" }}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              sx={{
                "& .MuiTabs-indicator": {
                  backgroundColor: "#40404D",
                  textTransform: 'capitalize',
                },

              }}
              className="font-family-exo2"
            >
              {TabData.map((tab, index) => (
                <Tab
                  key={index}
                  label={tab.label}
                  sx={{
                    "&.Mui-selected": {
                      color: "#40404D",
                      fontSize: '16px',
                      fontWeight: '400',
                      textTransform: 'capitalize',
                    },
                  }}
                  className="font-family-exo2"
                />
              ))}
            </Tabs>
            <Divider sx={{ backgroundColor: "#000000" }} />
          </div>
        </div>
        <div style={{ padding: '5px', marginTop: '5px' }}>{TabData[activeTab].content}</div>
      </Grid>
      <Grid xs={2}></Grid>
    </Grid>
  );
};

export default VendorAction;
