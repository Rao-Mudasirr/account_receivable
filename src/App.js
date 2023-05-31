import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense } from "react";
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
    <Suspense fallback={<h1>Loading</h1>}>
    <Routes>
          <Route exact path={"/"} element={<Layout />}>
          <Route
          exact
          path={"/"}
          element={
              <Dashboard />
          }
        />
      <Route
          exact
          path={"/invoices"}
          element={
              <InvoiceListing/>
          }
        />
      
      <Route
          exact
          path={"/user-management"}
          element={
              <UserManagements/>
          }
        />
            <Route path="/not-found" element={<h1>Not Found</h1>}/>
            <Route path="*" element={<Navigate to="/not-found"/>} />
          </Route>
    </Routes>
    </Suspense>
  );
}

export default App;
