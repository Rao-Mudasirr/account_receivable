import React from "react";
import CustomInput from "../../../../components/CustomInput";
import { Box, Button, Grid, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AddIcon from "../../../../assests/images/categories/add-circle.png";

import { ReactComponent as Add } from "../../../../assests/svg/add-circle-white.svg";
import { useNavigate } from "react-router-dom";

const AddCategories = () => {
  const [hovered, setHovered] = React.useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const condition1 = [
    {
      title: "Bill Amount",
      value: "Bill Amount",
    },
    {
      title: "Category",
      value: "Category",
    },
    {
      title: "Payment Method",
      value: "Payment Method",
    },
    {
      title: "Bank",
      value: "Bank",
    },
    {
      title: "Vendor",
      value: "Vendor",
    },
    {
      title: "Payment Type",
      value: "Payment Type",
    },
  ];

  return (
    <>
      <div className="parent-rules-category">
        <Box className="first-section">
          <CustomInput type="select" required={false} options={condition1} />

          <Box className="button-section">
            <Button onClick={() => navigate("/categories/view-category")}>
              View Categories
            </Button>
            <Button>
              Add New Categories
              <span>
                <Add />
              </span>
            </Button>
          </Box>
        </Box>
      </div>
      <Grid container>
        <Grid
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center", // Center vertically
            backgroundColor: "#F0F0F2",
            boxShadow: "0px 0px 9px rgba(0,0,0,0.1)",
            border: "1px solid rgba(107, 107, 128, 0.1)",
            borderRadius: "8px",
            p: 2.5,
          }}
        >
          <Box style={{ display: "flex", alignItems: "center", marginLeft: 2 }}>
            <Box
              sx={{
                mr: 4,
                cursor: "pointer",
                "& .MuiSvgIcon-root": {
                  fontSize: hovered ? "12px" : "16px",
                  transition: "font-size 0.3s",
                },
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <FiberManualRecordIcon />
            </Box>
            <Typography>Uncategorized</Typography>
          </Box>
          <Box
            sx={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button sx={{ background: "transparent" }}>
              Add Note
              <span style={{ marginLeft: "8px" }}>
                <img src={AddIcon} alt="Add Icon" width={16} />
              </span>
            </Button>
            <span> | </span>
            <Button>
              Add Sub Category
              <span style={{ marginLeft: "8px" }}>
                <img src={AddIcon} alt="Add Icon" width={16} />
              </span>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default AddCategories;
