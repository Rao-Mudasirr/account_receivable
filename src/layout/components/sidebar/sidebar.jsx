import { NavLink } from "react-router-dom";

// Sidebar Data
import { sidebarData } from "./sidebar-data"

// Components
import SidebarMenu from "./sidebar-menu/sidebar-menu";

// Images
import PortalChangeBtn1 from '../../../assests/svg/sidebar/portal-change-btn-1.svg'
// SCSS
import "./sidebar.scss";


// Custom Hook
import { useSidebar } from "./use-sidebar";
import { Box, Grid } from "@mui/material";
import { useState } from "react";
import { AnimatedBtn } from "./animated-btn/animated-btn";

// Component
const Sidebar = () => {

  const { openDrawer } = useSidebar();
  const [open, setOpen] = useState(false)
  return (
    <Grid container height="100%" position="relative" sx={{ mt: {sm: '70px'}, overflowX: 'hidden', flexWrap: 'nowrap' }} className="sidebar">
      <Grid height="100%" width="100%" sx={{ background: '#2B2B33', }}>
        <Box sx={{ position: 'relative' }}>
          <Box position={"absolute"} zIndex={'1'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="264" height="253" viewBox="0 0 264 253" fill="none">
              <circle cx="132" cy="81" r="172" fill="#40404D" />
            </svg>
          </Box>
          <Box sx={{ width: '83%' }}>
            <Box className="portal-name white-color font-family-Exo center-text" sx={{ zIndex: '2', pt: '27px', position: 'relative', ml: '30px' }}>Company Name</Box>
            <Box sx={{ height: '100%', display: 'flex', alignItems: 'cenetr', flexDirection: 'column', mt: '200px' }}>
              {
                ['Account Payable', 'Account Receivable', 'Cashflow'].map(item => <Box className={` white-color font-family-Exo center-text ${item === "Cashflow" ? "active-portal-btn black-color font-weight-600" : 'font-weight-400'}`} sx={{ p: '12px', mx: '20px', position: 'relative', zIndex: '3' }}>{item}</Box>)
              }
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid height="99%" width="100%" sx={{ top: '5px', left: open ? '264px' : '10px', transition: 'all .3s linear', zIndex: '3' }} position={"absolute"}>
        {/* Sidebar logo */}
        <div className="sidebar-container">
          <div className="sidebar-logo " >
            <Box
              src={PortalChangeBtn1}
              onClick={() => setOpen(!open)}
              alt="smd-logo"
              style={{ position: "fixed", left: '40px' }}
              className={`cursor-pointer ${!openDrawer} && "logo-img-icon"`}
            >
              <AnimatedBtn openInnerSidbar={open} setOpenInnerSidbar={setOpen} />
            </Box>
            <div className="portal-name font-family-Exo">Accounts Receivable</div>
          </div>

          <div
            className={`sidebar-scrollbar ${openDrawer ? "side-nav-closed-height" : "sideNav"
              }`}
          >
            {sidebarData.map((item) => {
              return (
                <SidebarMenu
                  item={item}
                  key={item.id}
                />
              );
            })}
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Sidebar;
