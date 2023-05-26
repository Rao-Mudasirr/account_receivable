import { Outlet } from "react-router-dom";

// MUI
import CssBaseline from "@mui/material/CssBaseline";

// Components
// import Header from "../header/header";
// import Sidebar from "../sidebar/sidebar";
// import HeaderMobile from "../sidebar/sidebar-mobile/sidebar-mobile";


// SCSS
import "./layout.scss";
import { Grid } from "@mui/material";
// import { AlertBreadcrumbs } from "../../components/alert-breadcrumbs/alert-breadcrumbs";
import { AppBar, body, Drawer, DrawerHeader, mainContainer, mobScreen, xsNonesmFlex } from "./layout-mui-style";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
// Component start here
export default function Layout() {
  return (
    <div className="main-layout">
      <CssBaseline />
      <Grid
        sx={mainContainer}
      >
        {/* header and sidebar for sm to  x-large screens */}
        <Grid
        >
          <AppBar className="app-bar" >
            <Header  />
          </AppBar>

          {/* <Drawer sx={xsNonesmFlex}
            className="drawer" variant="permanent" open={openDrawer}>
            <Sidebar />
          </Drawer> */}

          {/* <HeaderMobile /> */}

        </Grid>

        {/* body of application */}
        <div className="main-layout-body">
          <div className="body-outlet">
            <Grid
              sx={body}
            >
              <DrawerHeader />
            </Grid>
            <div className="margin-outlet-x" >
              {/* <AlertBreadcrumbs /> */}
              <div >
              <Outlet />
              </div>
            </div>
          </div>
          <div className="body-footer">
            <Footer />
          </div>
        </div>
      </Grid>
    </div>
  );
}
