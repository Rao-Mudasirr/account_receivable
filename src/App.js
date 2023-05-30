import { Route, Routes } from 'react-router-dom';
import './App.scss';
import RecentNotify from './features/RecentNotification/RecentNotify';
import { TotalInvoices } from './features/Total_Invoices/TotalInvoices';
import Invoices from './pages/Invoices';
import UserManagements from './pages/user-managements';
import Layout from './layout/layout';
import Dashboard from './pages/Dashboard';
import InvoiceListing from './features/Invoices/components/InvoiceListing';

function App() {
  return (
    <Routes>
      <Route
          exact
          path={"/"}
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
      <Route
          exact
          path={"/invoices"}
          element={
            <Layout>
              <InvoiceListing/>
            </Layout>
          }
        />
      
      <Route
          exact
          path={"/user-management"}
          element={
            <Layout>
              <UserManagements/>
            </Layout>
          }
        />
    </Routes>
  );
}

export default App;
