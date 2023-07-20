import React, { useState } from "react";
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
import Fainancing from "../components/financing/financing";
import CategoryModal from "../category-modal/category-modal";
import Sales from "../components/sales/sales";
import DailyExpense from "../components/daily-expense/daily-expense";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCategories = () => {
  const [showSubCategoryInputBox, setShowSubCategoryInputBox] = useState(false);


 
  const handleSaveSubCategory = () => {
    setShowSubCategoryInputBox(false);
    
  };
  const handleShowSubCategoryInputBox = () => {
    setShowSubCategoryInputBox(!showSubCategoryInputBox);
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
            <Button>View Categories</Button>
            <Button onClick={handleShowSubCategoryInputBox}>
        Add New Categories
        <span>
          <Add />
        </span>
      </Button>
          </Box>
        </Box>
      </div>
      
      <CategoryModal
      
        categoryText="Uncategorized"
        categoryIcon="FiberManualRecordIcon"
      />

      <Fainancing />
<Sales/>
<DailyExpense/>
      {showSubCategoryInputBox && (
        
        <SubCategoryInput onSaveSubCategory={handleSaveSubCategory} toastMessage="A new Category added successfully" />
      )}
    </>
  );
};

export default AddCategories;
