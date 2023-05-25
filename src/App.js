import './App.scss';
import RecentNotify from './components/RecentNotification/RecentNotify';
import { TotalInvoices } from './components/Total_Invoices/TotalInvoices';

function App() {
  return (
    <div className="App">
      <h1 className='primary-color'>Accounts Recievable</h1>
      <TotalInvoices />
      <br/>
      <RecentNotify />
    </div>
  );
}

export default App;
