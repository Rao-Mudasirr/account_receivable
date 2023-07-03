
import DashboardIcon from "../../../assests/svg/sidebar/dashboard-icon.svg";
import InvoicesIcon from "../../../assests/svg/sidebar/invoice-Icon.svg";
import ClientsIcon from "../../../assests/svg/sidebar/clients-icon.svg";
import PerformanceAnalysisIcon from "../../../assests/svg/sidebar/performance-icon.svg";
import WorkflowsIcon from "../../../assests/svg/sidebar/workflow-icon.svg";
import NotificationsIcon from "../../../assests/svg/sidebar/notification-icon.svg";
import ReportsIcon from "../../../assests/svg/sidebar/reports-icon.svg";
import UserManagementIcon from "../../../assests/svg/sidebar/user-management-icon.svg";
import SettingsIcon from "../../../assests/svg/sidebar/setting-icon.svg";

import DashboardActiveIcon from "../../../assests/svg/sidebar/dashboard-active-icon.svg";
import InvoicesActiveIcon from "../../../assests/svg/sidebar/invoice-active-Icon.svg";
import ClientsActiveIcon from "../../../assests/svg/sidebar/clients-active-icon.svg";
import PerformanceAnalysisActiveIcon from "../../../assests/svg/sidebar/performance-active-icon.svg";
import WorkflowsActiveIcon from "../../../assests/svg/sidebar/workflow-active-icon.svg";
import NotificationsActiveIcon from "../../../assests/svg/sidebar/notification-active-icon.svg";
import ReportsActiveIcon from "../../../assests/svg/sidebar/reports-active-icon.svg";
import UserManagementActiveIcon from "../../../assests/svg/sidebar/user-management-active-icon.svg";
import SettingsActiveIcon from "../../../assests/svg/sidebar/setting-active-icon.svg";
import { AP, AR, CASHFLOW } from "../../../constants/portal-type-constants";
import { TOACTIVITYLOG, TOBILLS, TOCLIENTS, TODASHBOARD, TOINVOICES, TONOTIFICATIONS, TOPAYMENTSOURCES, TOPERFORMANCEANALYSIS, TOREPORTS, TOSETTINGS, TOUSERMANAGEMENT, TOVENDORMANAEMENT, TOWORKFLOWS } from "../../../constants/routes-constant";

export const SIDEBARDATA = [
  {
    id: "1",
    title: "Dashboard",
    path: TODASHBOARD,
    allowedPortal: [AP,AR,CASHFLOW],
    icon: <img src={DashboardIcon} alt="home" />,
    hoverdIcon: <img src={DashboardActiveIcon} alt="account-settings" />,
  },
  // {
  //   id: "2",
  //   title: "Menu",
  //   path: MENUPATH,
  //   allowedPortal:[],
  //   icon: <img src={MenuIcon} alt="menu" />,
  //   iconClosed: <AddIcon />,
  //   iconOpened: <RemoveIcon />,

  //   subNav: [
  //     {
  //       id: "1",
  //       title: "Menu Preview",
  //       allowedPortal:[],
  //       path: MENUPATH + SLASHPATH + MENUPREVIEWPATH,
  //     },
  //     {
  //       id: "2",
  //       title: "Create Menu",
  //       allowedPortal:[],
  //       path: MENUPATH + SLASHPATH + CREATEMENUPATH,
  //     },
  //   ],
  // },
  {
    id: "133.6",
    title: "Invoices",
    path: TOINVOICES,
    allowedPortal: [AR],
    icon: <img src={InvoicesIcon} alt="home" />,
    hoverdIcon: <img src={InvoicesActiveIcon} alt="account-settings" />,
  },
  {
    id: "15",
    title: "Bills",
    path: TOBILLS,
    allowedPortal: [AP],
    icon: <img src={InvoicesIcon} alt="Bills" />,
    hoverdIcon: <img src={InvoicesActiveIcon} alt="account-settings" />,
  },
  {
    id: "16",
    title: "Payment Sources",
    path: TOPAYMENTSOURCES,
    allowedPortal: [AP],
    icon: <img src={InvoicesIcon} alt="Payment Sources" />,
    hoverdIcon: <img src={InvoicesActiveIcon} alt="account-settings" />,
  },
  {
    id: "17",
    title: "Vendor Management",
    path: TOVENDORMANAEMENT,
    allowedPortal: [AP],
    icon: <img src={InvoicesIcon} alt="Vendor Management" />,
    hoverdIcon: <img src={InvoicesActiveIcon} alt="account-settings" />,
  },
  {
    id: "3",
    title: "Clients",
    path: TOCLIENTS,
    allowedPortal: [AR],
    icon: <img src={ClientsIcon} alt="listing" />,
    hoverdIcon: <img src={ClientsActiveIcon} alt="account-settings" />,
  },
  {
    id: "1.1",
    title: "Performance Analysis",
    path: TOPERFORMANCEANALYSIS,
    allowedPortal: [AR],
    icon: <img src={PerformanceAnalysisIcon} alt="home" />,
    hoverdIcon: <img src={PerformanceAnalysisActiveIcon} alt="account-settings" />,
  },
  {
    id: "1.2",
    title: "Workflows",
    path: TOWORKFLOWS,
    allowedPortal: [AP,AR],
    icon: <img src={WorkflowsIcon} alt="home" />,
    hoverdIcon: <img src={WorkflowsActiveIcon} alt="account-settings" />,
  },
  {
    id: "4",
    title: "Notifications",
    path: TONOTIFICATIONS,
    allowedPortal: [AR],
    icon: <img src={NotificationsIcon} alt="my-Notifications" />,
    hoverdIcon: <img src={NotificationsActiveIcon} alt="account-settings" />,
  },
  {
    id: "18",
    title: "Activity Log",
    path: TOACTIVITYLOG,
    allowedPortal: [AP],
    icon: <img src={InvoicesIcon} alt="Activity Log" />,
    hoverdIcon: <img src={InvoicesActiveIcon} alt="account-settings" />,
  },
  {
    id: "6",
    title: "Reports",
    path: TOREPORTS,
    allowedPortal: [AP,AR],
    icon: <img src={ReportsIcon} alt="Reports" />,
    hoverdIcon: <img src={ReportsActiveIcon} alt="account-settings" />,
  },
  {
    id: "10",
    title: "User Management",
    path: TOUSERMANAGEMENT,
    allowedPortal: [AR],
    icon: <img src={UserManagementIcon} alt="recipe-management" />,
    hoverdIcon: <img src={UserManagementActiveIcon} alt="account-settings" />,
  },
  {
    id: "14",
    title: "Settings",
    path: TOSETTINGS,
    allowedPortal: [AR],
    icon: <img src={SettingsIcon} alt="account-settings" />,
    hoverdIcon: <img src={SettingsActiveIcon} alt="account-settings" />,
  },
];

