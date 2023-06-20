import { Box, Button, Container } from "@mui/material";
import React from "react";
import Logo from "../assests/home-page/home/logo-home.svg";
import "./HomeLayout.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { NavLink } from "react-router-dom";
const HeaderLayout = () => {
  const path = [
    {
      route: "/home",
      name: "Home",
      isSubMenu: false,
      list: null,
    },
    {
      route: "/",
      name: "Account Payable",
      isSubMenu: false,
      list: null,
    },
    {
      route: "/",
      name: "Account Receivable",
      isSubMenu: false,
      list: null,
    },
    {
      route: "/",
      name: "Cashflow",
      isSubMenu: false,
      list: null,
    },
    {
      route: "/",
      name: "Resources",
      isSubMenu: true,
      list: [],
    },
  ];
  return (
    <Box component={"nav"} className="navbar-parent">
      <Container>
        <Box className="navbar-box">
          <Box className="image-box">
            <img src={Logo} alt="logo" loading="lazy" />
          </Box>
          <Box className="navbar-list-parent">
            <ul className="navbar-list">
              {path?.map((e) => (
                <>
                  <NavLink to={e?.route}>{e?.name}</NavLink>
                </>
              ))}
            </ul>
          </Box>
          <Box className="navbar-btn-parent">
            <Button endIcon={<ArrowForwardIosIcon fontSize="12" />}>
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeaderLayout;
