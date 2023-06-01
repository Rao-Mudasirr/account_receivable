
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

export const sidebarData = [
  {
    id: "1",
    title: "Dashboard",
    path: '/',
    allowedRoles: [],
    icon: <img src={DashboardIcon} alt="home" />,
    hoverdIcon: <img src={DashboardActiveIcon} alt="account-settings" />,
  },
  // {
  //   id: "2",
  //   title: "Menu",
  //   path: MENUPATH,
  //   allowedRoles:[],
  //   icon: <img src={MenuIcon} alt="menu" />,
  //   iconClosed: <AddIcon />,
  //   iconOpened: <RemoveIcon />,

  //   subNav: [
  //     {
  //       id: "1",
  //       title: "Menu Preview",
  //       allowedRoles:[],
  //       path: MENUPATH + SLASHPATH + MENUPREVIEWPATH,
  //     },
  //     {
  //       id: "2",
  //       title: "Create Menu",
  //       allowedRoles:[],
  //       path: MENUPATH + SLASHPATH + CREATEMENUPATH,
  //     },
  //   ],
  // },
  {
    id: "133.6",
    title: "Invoices",
    path: '/invoices',
    allowedRoles: [],
    icon: <img src={InvoicesIcon} alt="home" />,
    hoverdIcon: <img src={InvoicesActiveIcon} alt="account-settings" />,
  },
  {
    id: "3",
    title: "Clients",
    path: '/clients',
    allowedRoles: [],
    icon: <img src={ClientsIcon} alt="my-listing" />,
    hoverdIcon: <img src={ClientsActiveIcon} alt="account-settings" />,
  },
  {
    id: "1.1",
    title: "Performance Analysis",
    path: '/performance-analysis',
    allowedRoles: [],
    icon: <img src={PerformanceAnalysisIcon} alt="home" />,
    hoverdIcon: <img src={PerformanceAnalysisActiveIcon} alt="account-settings" />,
  },
  {
    id: "1.2",
    title: "Workflows",
    path: '/workflows',
    allowedRoles: [],
    icon: <img src={WorkflowsIcon} alt="home" />,
    hoverdIcon: <img src={WorkflowsActiveIcon} alt="account-settings" />,
  },
  {
    id: "4",
    title: "Notifications",
    path: '/notifications',
    allowedRoles: [],
    icon: <img src={NotificationsIcon} alt="my-booking" />,
    hoverdIcon: <img src={NotificationsActiveIcon} alt="account-settings" />,
  },
  {
    id: "6",
    title: "Reports",
    path: '/reports',
    allowedRoles: [],
    icon: <img src={ReportsIcon} alt="logistics" />,
    hoverdIcon: <img src={ReportsActiveIcon} alt="account-settings" />,
  },
  // {
  //   id: "7",
  //   title: "Reviews & Feedbacks",
  //   path: REVIEWSANDFEEDBACKPATH,
  //   allowedRoles:[, ],
  //   icon: <img src={ReviewsIcon} alt="reviews" />,
  //   iconClosed: <AddIcon />,
  //   iconOpened: <RemoveIcon />,
  //   subNav: [
  //     {
  //       id: "1",
  //       title: "Overall rating",
  //       allowedRoles:[, ],
  //       path: REVIEWSANDFEEDBACKPATH + SLASHPATH + OVERALLRATINGSPATH,
  //     },
  //     {
  //       id: "2",
  //       title: "Rate guest",
  //       allowedRoles:[],
  //       path: REVIEWSANDFEEDBACKPATH + SLASHPATH + RATINGRECORDSPATH,
  //     },

  //     {
  //       id: "3",
  //       title: "Rate host",
  //       allowedRoles:[],
  //       path: '',
  //     },
  //   ],
  // },
  {
    id: "10",
    title: "User Management",
    path: '/user-management',
    allowedRoles: [],
    icon: <img src={UserManagementIcon} alt="recipe-management" />,
    hoverdIcon: <img src={UserManagementActiveIcon} alt="account-settings" />,
  },
  // {
  //   id: "2.5",
  //   title: "Audit assignment",
  //   path: AUDITASSIGNMENTPATH,
  //   allowedRoles:[],
  //   icon: <img src={MenuIcon} alt="menu" />,
  //   iconClosed: <AddIcon />,
  //   iconOpened: <RemoveIcon />,

  //   subNav: [
  //     {
  //       id: "1",
  //       title: "Initial Visit",
  //       allowedRoles:[],
  //       path: '',
  //     },
  //     {
  //       id: "2",
  //       title: "Announced visit",
  //       allowedRoles:[],
  //       path: '',
  //     },
  //     {
  //       id: "3",
  //       title: "Unannounced visit",
  //       allowedRoles:[],
  //       path: '',
  //     },
  //   ],
  // },
  {
    id: "14",
    title: "Settings",
    path: '/settings',
    allowedRoles: [],
    icon: <img src={SettingsIcon} alt="account-settings" />,
    hoverdIcon: <img src={SettingsActiveIcon} alt="account-settings" />,
  },
];

