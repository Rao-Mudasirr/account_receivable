import React, { useEffect, useState } from 'react';
import AccountReceivable from './Account_Receivable';
import AccountPayable from './Account_Payable';
import Cashflow from './Cashflow';
import AdminRights from './Admin_Rights';
import Dashboard from './Accounts_receivable_data/Dashboard';
import Invoices from './Accounts_receivable_data/Invoices';
import Clients from './Accounts_receivable_data/Clients';
import PerformanceAnalysis from './Accounts_receivable_data/Performance_analysis';
import Workflows from './Accounts_receivable_data/Workflows';
import Notifications from './Accounts_receivable_data/Notifications';
import Reports from './Accounts_receivable_data/Reports';
import { formControlData } from './Accounts_receivable_data/data';
import UserManagement_data from './Admin_Rights_data/UserManagement_data'
import { FormControlData2 } from './Admin_Rights_data/Admin_data'
import Settings_data from './Admin_Rights_data/Settings'
import './manager.scss';


const Manager = () => {
  const [active, setActive] = useState('');
  const [switchOption, setSwitchOption] = useState('');
  const [switchEnabled, setSwitchEnabled] = useState(false);
  const [switchOn, setSwitchOn] = useState(false)
  const handleSwitchOn = ()=> setSwitchOn(false)
  const handleSwitchOff = ()=> setSwitchOn(true)

  const handleSwitchChange = () => {
    setSwitchEnabled(!switchEnabled);
  };

  useEffect(() => {
    setActive('1');
  }, []);

  const handleLiClick = (id) => {
    setActive(id);
  };

  const renderDataComponent = () => {
    switch (active) {
      case '1':
        return <AccountPayable />;
      case '2':
        return (
          <AccountReceivable
            formControlData={formControlData}
            setSwitchOption={setSwitchOption}
            switchOption={switchOption}
          />
        );
      case '3':
        return <Cashflow />;
      case '4':
        return (
          <AdminRights
            FormControlData2={FormControlData2}
            setSwitchOption={setSwitchOption}
            switchOption={switchOption}
          />
        );
      default:
        return null;
    }
  };

  const renderSwitchComponents = (switchOption) => {
    switch (switchOption) {
      case 'dashboard':
        return (
          <Dashboard
            checkboxData={formControlData.find((data) =>
              data.id === 'dashboard').switchOptions}
              handleSwitchChange={handleSwitchChange}
          />
        );
      case 'invoices':
        return (
          <Invoices
            checkboxData={formControlData.find((data) =>
              data.id === 'invoices').switchOptions}
          />
        );
      case 'clients':
        return (
          <Clients
            checkboxData={formControlData.find((data) =>
              data.id === 'clients').switchOptions}
          />
        );
      case 'performance_analysis':
        return (
          <PerformanceAnalysis
            checkboxData={formControlData.find((data) =>
              data.id === 'performance_analysis'
            ).switchOptions}
          />
        );
      case 'workflows':
        return (
          <Workflows
            checkboxData={formControlData.find((data) =>
              data.id === 'workflows').switchOptions}
          />
        );
      case 'notification':
        return (
          <Notifications
            checkboxData={formControlData.find((data) =>
              data.id === 'notification').switchOptions}
          />
        );
      case 'reports':
        return (
          <Reports
            checkboxData={formControlData.find((data) =>
              data.id === 'reports').switchOptions}
          />
        );
      default:
        return null;
    }
  };
  
  const renderSwitchComponents2 = (active) => {
    switch (active) {
      case 'userManagement':
        return (
          <UserManagement_data
            checkboxData2={
              FormControlData2.find((data) =>
                data.id === 'userManagement').switchOptions
            }
          />
        );
      case 'settings':
        return (
          <Settings_data
            checkboxData2={FormControlData2.find((data) =>
              data.id === 'settings').switchOptions}
          />
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="container">
      <p>Manager</p>
      <div className="line" />
      <div className="manager_container">
        <div className="left">
          <div className="left_name">
            <ul>
              <li
                id="1"
                onClick={() => handleLiClick('1')}
                className={active === '1' ? 'active' : ''}
              >
                Accounts Payable
              </li>
              <li
                id="2"
                onClick={() => handleLiClick('2')}
                className={active === '2' ? 'active' : ''}
              >
                Accounts Receivable
              </li>
              <li
                id="3"
                onClick={() => handleLiClick('3')}
                className={active === '3' ? 'active' : ''}
              >
                Cashflow
              </li>
              <li
                id="4"
                onClick={() => handleLiClick('4')}
                className={active === '4' ? 'active' : ''}
              >
                Admin Rights
              </li>
            </ul>
          </div>
          <div className="line2"></div>
        </div>
        <div className="right">
          <div className="left_details">
            {renderDataComponent()}
            <div className="line2"></div>
          </div>
          <div className="right_side">
            {active === '2' ? (
              renderSwitchComponents(switchOption)
            ) : active === '4' ? (
              renderSwitchComponents2(switchOption)
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manager;
