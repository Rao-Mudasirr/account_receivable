/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from "react";

// SCSS
import "./sidebar-menu.scss";

// Custom Hook
import { useSidebarMenu } from "./use-sidebar-menu";

// MUI Styles
import { NavLinkMenu, SidebarLabel } from "./sidebar-menu-mui-style";
import { useMatch, useResolvedPath } from "react-router-dom";

// Component Function Starts Here
const SidebarMenu = ({ item }) => {
  const { sidebarLinkHandler } = useSidebarMenu({ item })
  const resolved = useResolvedPath(item.path);
  const match = useMatch({ path: resolved.pathname, end: true });

  console.log(match);
  return (
    <>
      {
        <>
          <div className="sidebar-menu-top">
            <div>
              <NavLinkMenu
                className={`sidebar-menu font-family-Exo sidebar-menu-open`}
                to={item.path}
                onClick={sidebarLinkHandler}
                key={item.path}
              >
                <div
                  className={`sidebar-menu-items sidebar-menu-items-open`}
                >
                  <div className="icon">{match ? item.hoverdIcon : item.icon}</div>
                  <SidebarLabel className="primary-title font-weight-500">
                    {item.title}
                  </SidebarLabel>
                </div>
              </NavLinkMenu>
            </div>
          </div>
        </>
      }
    </>
  );
};

export default SidebarMenu;
