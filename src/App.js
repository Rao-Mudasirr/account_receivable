import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
<<<<<<< HEAD
import './App.scss';
import UserManagements from './pages/user-managements';
import Layout from './layout/layout';
import Dashboard from './pages/Dashboard';
import InvoiceListing from './features/Invoices/components/InvoiceListing';
import Clientdetails from './pages/client-details';
import Overdue_Invoice from './pages/Overdue_Invoice';
import View_Invoice from "./pages/View_invoice_details";
=======
import "./App.scss";
import UserManagements from "./pages/user-managements";
import Layout from "./layout/layout";
import Dashboard from "./pages/Dashboard";
import InvoiceListing from "./features/Invoices/components/InvoiceListing";
import Clientdetails from "./pages/client-details";
import Overdue_Invoice from "./pages/Overdue_Invoice";
import { Notifications } from "./pages/notifications";
>>>>>>> 7d1b7e2ca7340f51b25ee38d0d536197e02cb116
import InvoiceNoDetail from "./features/Invoices/components/invoice-no-detail/InvoiceNoDetail";
import Manager from "./features/user-management/components/role_rights_manager/Manager";
import Workflow from "./pages/workflows";
import ClientWorkFlow from "./pages/client-workflows";
import MainReport from "./pages/MainReport";
import ReportInfo from "./pages/Report-Info";
import DashboaedSettings from "./pages/dashboard-settings";
import { ToastContainer } from "react-toastify";
import AddWorkflow from "./pages/add-workflows";
// import CustomAlert from "./components/Alert/CustomAlert";
import DSO_Month from "./features/Reports/DSO_Report/DSO_Month";
import Cashflow_Forcasting from "./pages/Cashflow_Forcasting";
<<<<<<< HEAD
import AgingBuckets from "./pages/Aging_Buckets";
import SignUpForm from './components/SignUp_form/SignUp_form'
import SignUpForm2 from './components/SignUp_form/SignUp_form2'
=======
import WorkflowsForms from "./pages/workflows-form";
>>>>>>> 7d1b7e2ca7340f51b25ee38d0d536197e02cb116

function App() {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Routes>
        <Route exact path={"/sign-up"} element={<SignUpForm />}/>
        <Route exact path={"/sign-up-2"} element={<SignUpForm2 />}/>
        <Route exact path={"/"} element={<Layout />}>
          <Route exact path={"/"} element={<Dashboard />} />
          <Route exact path={"/invoices"} element={<InvoiceListing />} />
          <Route exact path={"/notifications"} element={<Notifications />} />
          <Route
<<<<<<< HEAD
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
=======
            exact
            path={"/overdue-invoices"}
            element={<Overdue_Invoice />}
          />
          <Route
            exact
            path={"/user-management/role-right-manager"}
            element={<Manager />}
          />
          
          <Route exact path={"/workflows"} element={<Workflow />}>
            <Route
              exact
              path={"/workflows/clients/:id"}
              element={<ClientWorkFlow />}
            />
            <Route exact path={"/workflows/add"} element={<AddWorkflow />} />
            <Route
              exact
              path={"/workflows/form"}
              element={<WorkflowsForms />}
            />
          </Route>
>>>>>>> 7d1b7e2ca7340f51b25ee38d0d536197e02cb116

          <Route exact path={"/clients"} element={<Clientdetails />} />
          <Route exact path={"/reports"} element={<MainReport />} />
<<<<<<< HEAD
          <Route exact path={"/report-details/AgingBuckets"} element={<AgingBuckets />} />
          <Route exact path={"/report-details/:id"} element={<Report_Info />} />
          <Route exact path={"/report-details/cashflow-forcasting/:id"} element={<Cashflow_Forcasting />} />
          <Route exact path={"/report-details/month/:id"} element={<DSO_Month />} />
          <Route path="/not-found" element={<h1>Not Found</h1>} />
          <Route path="*" element={<Navigate to="/not-found" />} />
          <Route path="/invoice-no-detail" element={<InvoiceNoDetail />} />

=======
          <Route exact path={"/report-details/:id"} element={<ReportInfo />} />
          <Route
            exact
            path={"/report-details/cashflow-forcasting/:id"}
            element={<Cashflow_Forcasting />}
          />
          <Route
            exact
            path={"/report-details/month/:id"}
            element={<DSO_Month />}
          />
>>>>>>> 7d1b7e2ca7340f51b25ee38d0d536197e02cb116
          <Route exact path={"/settings"} element={<DashboaedSettings />} />
          <Route path="/not-found" element={<h1>Not Found</h1>} />
          <Route path="*" element={<Navigate to="/not-found" />} />
          <Route path="/invoice-no-detail" element={<InvoiceNoDetail />} />
        </Route>
      </Routes>
      <ToastContainer />
    </Suspense>
  );
}

export default App;
