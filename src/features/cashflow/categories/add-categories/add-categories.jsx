import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomInput from "../../../../components/CustomInput";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AddIcon from "../../../../assests/images/categories/add-circle.png";
import dellIcon from "../../../../assests/images/categories/dell-butn.png";
import { ReactComponent as Add } from "../../../../assests/svg/add-circle-white.svg";
import DeleteModel from "../../../../components/modal/DeleteModel";
import AddModal from "../add-modal/add-modal";
import GlobalButton from "../../../../components/global-button/global-button";
import SubCategoryInput from "../sub-category-input/sub-category-input";

const AddCategories = () => {
  const navigate = useNavigate();
  const [gridHovered, setGridHovered] = useState(false);
  const [contentHovered, setContentHovered] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [showSubCategoryInputBox, setShowSubCategoryInputBox] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Function to open the modal
  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
  };

  // Function to close the modal
  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleGridMouseEnter = () => {
    setGridHovered(true);
  };

  const handleGridMouseLeave = () => {
    setGridHovered(false);
  };

  const handleContentMouseEnter = () => {
    setContentHovered(true);
  };

  const handleContentMouseLeave = () => {
    setContentHovered(false);
  };

  const handleShowSubCategoryInputBox = () => {
    setShowSubCategoryInputBox(true);
  };

  const handleSaveSubCategory = () => {
    // Implement your logic to save the sub-category here
    setShowSubCategoryInputBox(false);
  };

  const condition1 = [
    {
      title: "Category 1",
      value: "Category 1",
    },
    {
      title: "Category 2",
      value: "Category 12",
    },
    {
      title: "Category 3",
      value: "Category 3",
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
              <span onClick={handleShowSubCategoryInputBox}>
                <Add />
              </span>
            </Button>
          </Box>
        </Box>
      </div>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: gridHovered ? "#F0F0F2" : "#FFFFFF",
          boxShadow: "0px 0px 9px rgba(0,0,0,0.1)",
          border: "1px solid rgba(107, 107, 128, 0.1)",
          borderRadius: "8px",
          p: 2.5,
          position: "relative",
        }}
        onMouseEnter={handleGridMouseEnter}
        onMouseLeave={handleGridMouseLeave}
      >
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: 2,
            position: "relative",
          }}
        >
          <Box
            sx={{
              mr: 4,
              cursor: "pointer",
              "& .MuiSvgIcon-root": {
                fontSize: contentHovered ? "12px" : "16px",
                transition: "font-size 0.3s",
              },
            }}
            onMouseEnter={handleContentMouseEnter}
            onMouseLeave={handleContentMouseLeave}
          >
            <FiberManualRecordIcon
              sx={{
                fontSize: contentHovered ? "12px" : "16px",
                transition: "font-size 0.3s",
              }}
            />
          </Box>
          <Typography sx={{ fontSize: "16px" }}>Uncategorized</Typography>
        </Box>
        {gridHovered && (
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              sx={{
                background: "transparent",
                color: "black",
                "&:hover": { background: "transparent" },
              }}
            >
              Add Note
              <span
                style={{
                  marginLeft: "8px",
                  marginTop: "10px",
                  cursor: "pointer",
                }}
                onClick={handleOpenAddModal}
              >
                {" "}
                <img src={AddIcon} alt="Add Icon" width={16} />
              </span>
            </Button>
            <span> | </span>
            <Button
              sx={{
                background: "transparent",
                color: "black",
                "&:hover": { background: "transparent" },
              }}
            >
              Add Sub Category
              <span style={{ marginLeft: "8px", marginTop: "10px" }}>
                {" "}
                <img src={AddIcon} alt="Add Icon" width={16} />
              </span>
            </Button>
            <Box sx={{ mt: 1, cursor: "pointer" }} onClick={handleOpen}>
              <span>
                {" "}
                <img src={dellIcon} alt="" />
              </span>
            </Box>
          </Box>
        )}
      </Box>

      {showSubCategoryInputBox && (
        <SubCategoryInput onSaveSubCategory={handleSaveSubCategory} />
      )}

      <Box>
        <AddModal
          openAdd={isAddModalOpen}
          handleCloseAddModal={handleCloseAddModal}
        />
      </Box>

      <DeleteModel
        open={open}
        handleClose={handleClose}
        onDeleteClick={handleClose}
      />
    </>
  );
};

export default AddCategories;
