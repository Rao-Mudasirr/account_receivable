import { Box, Button, Container } from "@mui/material";
import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { NavLink } from "react-router-dom";

const MobileHeader = ({ path }) => {
  const [active, setActive] = useState(false);
  return (
    <>
      <Box
        class={`burger ${active ? "active" : ""}`}
        onClick={() => setActive(!active)}
      >
        <Box class="strip burger-strip-2">
          <Box></Box>
          <Box></Box>
          <Box></Box>
        </Box>
      </Box>
      <Box
        className="mobile-menu-list"
        style={{
          top: active ? "100px" : "-600px",
          opacity: active ? "1" : "0",
        }}
      >
        <ul className="navbar-list">
          {path?.map((e) => (
            <>
              <NavLink to={e?.route}>{e?.name}</NavLink>
            </>
          ))}
        </ul>
        <Box
          className="navbar-btn-parent"
          sx={{ marginTop: "20px", textAlign: "center" }}
        >
          <Button endIcon={<ArrowForwardIosIcon fontSize="12" />}>
            Sign In
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default MobileHeader;
