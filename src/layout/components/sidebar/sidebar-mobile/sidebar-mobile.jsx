// MUI
import Drawer from "@mui/material/Drawer";

// Components
import Sidebar from "../sidebar";

// SCSS
import "./sidebar-mobile.scss";

// MUI
import { Grid, SwipeableDrawer } from "@mui/material";


// MUI Styles
import { mobSidebarDrawer } from "./sidebar-mobile-mui-style";

// Component Function Starts Here
const HeaderMobile = ({mobDrawer,setMobDrawer}) => {
  return (
    <>
      <SwipeableDrawer
        anchor={"left"}
        open={mobDrawer}
        onClose={() => setMobDrawer(!mobDrawer)}
        sx={mobSidebarDrawer}
        onOpen={() => setMobDrawer(!mobDrawer)}
        disableSwipeToOpen={false}
      >
        <Grid height="100%" className='sidebar-mob-scroll'>
          <Sidebar />
        </Grid>
      </SwipeableDrawer>
    </>
  );
};

export default HeaderMobile;
