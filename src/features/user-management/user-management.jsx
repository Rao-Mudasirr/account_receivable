import React from 'react'
import PropTypes from 'prop-types';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import { RolesRightsTable } from './components/roles-and-right/roles-and-right'
import { ClientsTable } from './components/clients/clients'
import { UsersTable } from './components/users/users'
import { UserAccessTable } from './components/user-access-control/user-access-control'
import Manager from './components/role_rights_manager/Manager';
import './user-management.scss'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const UserManagement = () => {
  const [value, setValue] = React.useState(0);
  const [managerData, setManagerData] = React.useState(true);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {
        managerData ? <div className="container">
          <p className='font-family-exo2 heading-20 font-weight-600'>User Management</p>
          <Box sx={{ width: '100%' }}>
            <Box sx={{
              borderColor: 'divider',
              marginTop: 5,
              fontWeight: 400
            }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab className={`${value === 0 && "manager-tab-active"} manager-tab`} label="Role & Rights" {...a11yProps(0)} sx={{  }} />
                <Tab className={`${value === 1 && "manager-tab-active"} manager-tab`} label="User Access Control" {...a11yProps(1)} />
                <Tab className={`${value === 2 && "manager-tab-active"} manager-tab`} label="Users" {...a11yProps(2)} />
                <Tab className={`${value === 3 && "manager-tab-active"} manager-tab`} label="Clients" {...a11yProps(3)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <RolesRightsTable />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <UserAccessTable />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <UsersTable />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <ClientsTable />
            </TabPanel>
          </Box>
        </div> :
          <Manager />
      }
    </>
  );
}

export default UserManagement