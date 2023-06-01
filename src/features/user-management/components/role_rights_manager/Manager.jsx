import React, { useEffect, useState } from 'react';
import AccountReceivable from './Account_Receivable';
import AccountPayable from './Account_Payable';
import Cashflow from './Cashflow';
import AdminRights from './Admin_Rights';
import Dashboard from './Dashboard';
import Invoices from './Invoices';
import Clients from './Clients';
import { formControlData } from './data'
import './manager.css';


const Manager = () => {
  const [active, setActive] = useState('');
  const [switchOption, setSwitchOption] = useState('dashboard');
  const [switchEnabled, setSwitchEnabled] = useState(false);

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
        return <Cashflow />
      case '4':
        return (
          <AdminRights
          formControlData={formControlData}
          setSwitchOption={setSwitchOption}
          switchOption={switchOption}
          />
      );
      default:
        return null;
    }
  };

  const renderSwitchComponents = (active) => {
  switch (active) {
    case 'dashboard':
      return (
        <Dashboard
          checkboxData={formControlData.find((data) =>
            data.id === 'dashboard'
          ).switchOptions}
          switchEnabled={switchEnabled}
        />
      );
    case 'invoices':
      return (
        <Invoices
          checkboxData={formControlData.find((data) =>
            data.id === 'invoices'
          ).switchOptions}
          switchEnabled={switchEnabled}
        />
      );
    case 'clients':
      return (
        <Clients
          checkboxData={formControlData.find((data) =>
            data.id === 'clients'
          ).switchOptions}
          switchEnabled={switchEnabled}
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
          <div className="left_details">{renderDataComponent()}
            <div className="line2"></div>
          </div>
          <div className="right_side">
            {renderSwitchComponents(switchOption)}
          </div>


        </div>
      </div>
    </div>
  );
};




export default Manager;