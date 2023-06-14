import React, { useState } from "react";
import CustomTable from "../../../components/Table/CustomTable";
import "./workflow_report.scss";
import { GlobalSearchBar } from "../../../components/global-search-filter/global-search-filter";
import filterIcon from "../../../assests/images/client/filter.png";
import exportIcon from "../../../assests/images/client/export.png";
import {Button, Grid, Box} from "@mui/material";
import ShowFilters from "./ShowFilters";
import Date_Range from "./Date_Range";
import { WORKFLOW_REPORT_COL, WORKFLOW_REPORT_DATA } from '../ReportsTable/Workflow_Report'

export default function WorkflowReport() {

const [isOpen, setIsOpen] = useState(false);
const [type, setType] = useState("");

const handleClick = () => {
setIsOpen(!isOpen);
};


  return (
    <React.Fragment>
      <div className="workflows-title">Workflows Report</div>

      {/* Search field */}
      <Grid container>
        <Grid xs={12} md={6} lg={6} xl={6} className="flex">
          <div
            style={{
              display: "flex",
              alignItems: "end",
              marginBottom: "8px"
            }}
          >
            <GlobalSearchBar />
          </div>
        </Grid>

        <Grid 
        xs={12} md={6} lg={6} xl={6} 
        sx={{ display: "flex"}}>
          <div style={{ display: "flex", marginLeft: "1.5rem"}}>
            <Date_Range/>
          </div>
            <div className="flex" style={{gap: "15px", width: "100%", alignItems: "center", justifyContent: "flex-end", marginTop: "1rem"}}>
          <Button
            variant="outlined"
            color="primary"
            sx={{
              color: "#40404D",
              borderColor: "#40404D",
              borderRadius:'8px',
              "&:hover": {
                borderColor: "black",
                color: "black",
              },
            }}
            endIcon={<img src={filterIcon} alt="More Filter" />}
            onClick={()=> {
              setType("More")
              handleClick()
            }}
          >
            More Filters
          </Button>

          <Button
            variant="contained"
            color="primary"
            sx={{
              background: "#2B2B33",
              borderRadius: '8px',
              "&:hover": {
                background: "#2B2B33",
              },
            }}
            endIcon={<img src={exportIcon} alt="Export Text" />}
            onClick={()=> {
                setType("Export")
                handleClick()
              }}
          >
            Export
          </Button>
          <ShowFilters 
            filter_type = {type}
            handleClick = {handleClick}
            isOpen = {isOpen}
             />
        </div>
        </Grid>
      </Grid>
      <br />
      {/* Table */}

      <CustomTable
        data={WORKFLOW_REPORT_DATA}
        columns={WORKFLOW_REPORT_COL}
        isSuccess={true}
        isPagination={true}
      />
    </React.Fragment>
  );
}
