import './App.scss';
import RecentNotify from './components/RecentNotification/RecentNotify';
import { TotalInvoices } from './components/Total_Invoices/TotalInvoices';
import Invoices from './pages/Invoices';
import UserManagements from './pages/user-managements';

function App() {
  return (
    <div className="App">
      <h1 className='primary-color'>Accounts Recievable</h1>
      {/* <TotalInvoices />
      <br/>
      <RecentNotify />
      <br/>
      <UserManagements/> */}
      <Invoices />
    </div>
  );
}

export default App;
