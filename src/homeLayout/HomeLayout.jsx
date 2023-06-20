import React from "react";

import "./HomeLayout.scss";

import { Outlet } from "react-router-dom";
import HeaderLayout from "./HeaderHome";
import FooterHome from "./FooterHome";
import FormFooter from "./FormFooter";

const HomeLayout = () => {
  return (
    <>
      <HeaderLayout />
      <Outlet />
      <FormFooter />
      <FooterHome />
    </>
  );
};

export default HomeLayout;
