/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from "react";

// SCSS
import "./sidebar-menu.scss";

// Custom Hook
import { useSidebarMenu } from "./use-sidebar-menu";

// MUI Styles
import { DropdownLink, NavLinkMenu, SidebarLabel } from "./sidebar-menu-mui-style";
import { useMatch, useResolvedPath } from "react-router-dom";

// Component Function Starts Here
const SidebarMenu = ({ item }) => {
  const { openDrawer, subNav, sidebarLinkHandler, dropdownLinkHandler } = useSidebarMenu({ item })
  let resolved = useResolvedPath(item.path);
  let match = useMatch({ path: resolved.pathname, end: true });
  console.log(match);
  return (
    <>
      {
        <>
          <div className="sidebar-menu-top">
            <div>
              <NavLinkMenu
                className={`sidebar-menu font-family-Exo ${!openDrawer ? "sidebar-menu-open" : "centerItems"
                  }`}
                to={item.path}
                onClick={sidebarLinkHandler}
                key={item.path}
              >
                <div
                  className={`sidebar-menu-items ${!openDrawer
                    ? "sidebar-menu-items-open"
                    : "sidebar-menu-items-closed"
                    }`}
                >
                  <div className="icon">{match ? item.hoverdIcon : item.icon}</div>
                  <SidebarLabel className="primary-title font-weight-500">
                    {!openDrawer && item.title}
                  </SidebarLabel>
                </div>
                {!openDrawer && (
                  <div className="icon-hover">
                    {item.subNav && subNav
                      ? item.iconOpened
                      : item.subNav
                        ? item.iconClosed
                        : null}
                  </div>
                )}
              </NavLinkMenu>
              <div className="sidebar-menu-dropdwon-parent">
                {subNav && !openDrawer &&
                  item.subNav?.map((item) => {
                    return (
                      <div key={item.id}>
                        <DropdownLink
                          onClick={dropdownLinkHandler}
                          className="sidebar-menu-drop"
                          to={item.path}
                          key={item.id}
                        >
                          <div className="secondary-title font-weight-400">{item.title}</div>
                        </DropdownLink>
                      </div>
                    );
                  })}
              </div>
            </div>

          </div>
        </>
      }
    </>
  );
};

export default SidebarMenu;
