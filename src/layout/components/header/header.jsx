import AppLogo from "../../../assests/svg/app-logo/app-logo.svg";
import Grid from '@mui/material/Grid';

import { MoreOptions } from './components/more-options/more-options';
import NotificationCard from './components/notification-card/notification-card';
import SearchCard from './components/search-card/search-card';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import "./header.scss";


export const Header = ({openMobHeader}) => {
  return (
    <>
      <Grid container justifyContent="space-between" className="header">
        <Grid item display="flex" justifyContent="center" alignItems="center">
          <img className="cursor-pointer" src={AppLogo} alt="Accountants Pact" />
          <MenuOpenIcon sx={{display:{sm:'none',xs:'flex'}}} onClick={()=>openMobHeader(true)} />
        </Grid>
        <Grid item display="flex" justifyContent="center" alignItems="center">
          <Grid container className="header-body" spacing={2}>
            <Grid item sx={{display:{md:'flex',xs:'none'}}} className="search-icon">
              <SearchCard />
            </Grid>
            <Grid item className="notification-icon">
              <NotificationCard />
            </Grid>
            <Grid item className="user-details">
              <MoreOptions />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
