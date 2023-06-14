import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import "./App.scss";
import UserManagements from "./pages/user-managements";
import Layout from "./layout/layout";
import Dashboard from "./pages/Dashboard";
import InvoiceListing from "./features/Invoices/components/InvoiceListing";
import Clientdetails from "./pages/client-details";
import Overdue_Invoice from "./pages/Overdue_Invoice";
import { Notifications } from "./pages/notifications";
import InvoiceNoDetail from "./features/Invoices/components/invoice-no-detail/InvoiceNoDetail";
import Manager from "./features/user-management/components/role_rights_manager/Manager";
import Signin from './components/signin/Signin'
import MainReport from "./pages/MainReport";
import Report_Info from "./pages/Report_Info";
import DashboaedSettings from "./pages/dashboard-settings";
import WorkflowReport from './features/Reports/workflow-report/WorkflowReport'
import WorkflowDetail from "./features/Reports/workflow-report/workflow-details/WorkflowDetail";
import Workflow from "./pages/workflows";
import ClientWorkFlow from "./pages/client-workflows";
import { ToastContainer } from "react-toastify";
import DSO_Month from "./features/Reports/DSO_Report/DSO_Month";
import Cashflow_Forcasting from "./pages/Cashflow_Forcasting";

function App() {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Routes>
      <Route path="/signin" element={<Signin/>} />
        <Route exact path={"/"} element={<Layout />}>
          <Route exact path={"/"} element={<Dashboard />} />
          <Route exact path={"/invoices"} element={<InvoiceListing />} />
          <Route exact path={"/notifications"} element={<Notifications />} />
          <Route
            exact
            path={"/overdue-invoices"}
            element={<Overdue_Invoice />}
          />
         <Route
          exact
          path={"/settings"}
          element={
             <DashboaedSettings/>
          }
        />
            <Route path="/not-found" element={<h1>Not Found</h1>}/>
            <Route path="*" element={<Navigate to="/not-found"/>} />
            <Route path="/invoice-no-detail" element={<InvoiceNoDetail/>} />
            <Route path="/workflows-report" element={<WorkflowReport/>} />
            <Route path="/workflows-report/workflow-detail" element={<WorkflowDetail/>} />
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
          </Route>

          <Route
            exact
            path={"/user-management"}
            element={<UserManagements />}
          />
          <Route exact path={"/clients"} element={<Clientdetails />} />
          <Route exact path={"/reports"} element={<MainReport />} />
          <Route exact path={"/report-details/:id"} element={<Report_Info />} />
          <Route exact path={"/report-details/cashflow-forcasting/:id"} element={<Cashflow_Forcasting />} />
          <Route exact path={"/report-details/month/:id"} element={<DSO_Month />} />
          <Route path="/not-found" element={<h1>Not Found</h1>} />
          <Route path="*" element={<Navigate to="/not-found" />} />
          <Route path="/invoice-no-detail" element={<InvoiceNoDetail />} />

          <Route exact path={"/settings"} element={<DashboaedSettings />} />
          <Route path="/not-found" element={<h1>Not Found</h1>} />
          <Route path="*" element={<Navigate to="/not-found" />} />
          <Route path="/invoice-no-detail" element={<InvoiceNoDetail />} />

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
