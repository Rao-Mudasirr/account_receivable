import React from 'react'
import {  Box } from '@mui/material';
import { RolesRightsTable } from './components/roles-and-right/roles-and-right'
import { ClientsTable } from './components/clients/clients'
import { UsersTable } from './components/users/users'
import { UserAccessTable } from './components/user-access-control/user-access-control'
import Manager from './components/role_rights_manager/Manager';
import './user-management.scss'
import { CustomTabs } from '../../components/custom-tabs/custom-tabs';

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
  const [managerData, setManagerData] = React.useState(true);

  return (
    <>
      {
        managerData ? <div className="container">
          <p className='font-family-exo2 heading-20 font-weight-600'>User Management</p>
          <Box sx={{ width: '100%' }}>
            <Box sx={{
              marginTop: 5
            }}>
              <CustomTabs tabsData={tabsData} />
            </Box>
          </Box>
        </div> :
          <Manager />
      }
    </>
  );
}

export default UserManagement