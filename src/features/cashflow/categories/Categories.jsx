import { Box } from "@mui/material";
import React from "react";
import { CustomTabs } from "../../../components/custom-tabs/custom-tabs";
import RulesCategory from "./RulesCategory/RulesCategory";

const Categories = () => {
  const BillsManagementTabsData = [
    {
      id: 0,
      name: "Cash Inflow",
      component: <RulesCategory />,
    },
    {
      id: 1,
      name: "Cash Outflow",
      component: "Cash Outflow",
    },
  ];
  // console.log(0.21 + 1.91 + 2.13 + 0.09 + 0.66 + 0.09 + 0.09 + 1.46 + 1.88);

  return (
    <Box>
      <Box
        style={{
          width: "102px",
          height: "28px",
          fontSize: "20px",
          display: "flex",
          alignItems: "center",
          marginBottom: "52px",
        }}
        className="tertiary-color font-weight-600"
      >
        Categories
      </Box>
      <Box>
        <CustomTabs tabsData={BillsManagementTabsData} />
      </Box>
    </Box>
  );
};

export default Categories;
