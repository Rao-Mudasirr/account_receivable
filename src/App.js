import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import './App.scss';
import UserManagements from './pages/user-managements';
import Layout from './layout/layout';
import Dashboard from './pages/Dashboard';
import InvoiceListing from './features/Invoices/components/InvoiceListing';
import Clientdetails from './pages/client-details';
import Overdue_Invoice from './pages/Overdue_Invoice';
import View_Invoice from "./pages/View_invoice_details";
import InvoiceNoDetail from "./features/Invoices/components/invoice-no-detail/InvoiceNoDetail";
import Manager from "./features/user-management/components/role_rights_manager/Manager";
import SignUpForm from './components/SignUp_form/SignUp_form'
import SignUpForm2 from './components/SignUp_form/SignUp_form2'

function App() {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Routes>
        <Route exact path={"/"} element={<SignUpForm />}>
        {/* <Route exact path={"/"} element={<Layout />}> */}
          <Route exact path={"/"} element={<Dashboard />} />
          <Route exact path={"/invoices"} element={<InvoiceListing />} />
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
          path={"/overdue-invoices"}
          element={
              <Overdue_Invoice/>
          }
        />
      <Route
          exact
          path={"/user-management/role-right-manager"}
          element={
              <Manager/>
          }
        />
      <Route
          exact
          path={"/performance-analysis"}
          element={
              <View_Invoice />
          }
        />
      
      <Route
          exact
          path={"/user-management"}
          element={
              <UserManagements/>
          }
        />
        <Route
          exact
          path={"/clients"}
          element={
              <Clientdetails/>
          }
        />
            <Route path="/not-found" element={<h1>Not Found</h1>}/>
            <Route path="*" element={<Navigate to="/not-found"/>} />
            <Route path="/invoice-no-detail" element={<InvoiceNoDetail/>} />
          </Route>
    </Routes>
    </Suspense>
  );
}

export default App;
