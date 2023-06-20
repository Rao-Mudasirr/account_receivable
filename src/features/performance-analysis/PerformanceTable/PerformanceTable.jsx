import React, { useState } from "react";
import CustomTable from "../../../components/Table/CustomTable";
import { GlobalSearchBar } from "../../../components/global-search-filter/global-search-filter";
import filterIcon from "../../../assests/images/client/filter.png";
import exportIcon from "../../../assests/images/client/export.png";
import { Button, Grid, Box } from "@mui/material";
import { CustomPopover } from "../../../components/custom-popover/custom-popover";
import { DashboardSelect } from "../../dashboard-select/dashboard-select";
import { toast } from "react-toastify";
import { ExportCardCheckbox } from "../../../components/export-card-checkbox/export-card-checkbox";


const PerformanceTable = ({ INVOICE_DATA, columns, paginationClass }) => {
  const [selectBranch, setSelectBranch] = useState("");
  const [selectClient, setSelectClient] = useState("");
  const [checkboxPdf, setCheckboxPdf] = useState(false);
  const [checkboxExcel, setCheckboxExcel] = useState(false);
  return (
    <>
      <div className="invoice-title">Workflows Comparison</div>

      {/* Search field */}
      <Grid container className="align-center cash-collection-report flex justify-space-between">
        <Grid >
          <GlobalSearchBar />
        </Grid>
        <Grid className="flex">
          <CustomPopover
            mainTitle="Filters"
            mainTitleClass="primary-color heading-20 font-weight-600 margin-bottom-1"
            popoverOpenerTitle="More Filters"
            popoverOpenerProps={{
              variant: "outlined",
              sx: {
                mr: 2,
                whiteSpace: "nowrap",
                color: "#40404D",
                border: "1.5px solid #40404D !important",
                height: "32px",
                borderRadius: "8px",
                "&:hover": {
                  border: "2px solid #40404D !important",
                },
              },
              endIcon: <img src={filterIcon} alt="More Filter" />,
              className:
                "buttons-filters font-family-Exo font-weight-400 tertiary-title",
            }}
          >
            {(popupState) => (
              <>
                <Grid container spacing={2}>
                  <Grid item sm={6} xs={12}>
                    <label className="secondary-color" for="branch">
                      Branch
                    </label>
                    <DashboardSelect
                      id="branch"
                      placeholder="Select"
                      fullWidth={true}
                      MenuSx={{
                        ".MuiMenuItem-root": {
                          color: "#6B6B80",
                          fontSize: "14px",
                          fontWeight: 400,
                        },
                        marginTop: "10px",
                        boxShadow: "0px 6px 6px 6px #DEDEDE40",
                        borderRadius: "8px",
                        ".MuiList-root": { p: "0" },
                        ".Mui-selected": { bgcolor: "#F0F0F2 !important" },
                        ".Mui-selected:hover": { bgcolor: "#F0F0F2" },
                      }}
                      selectSx={{
                        ".MuiOutlinedInput-notchedOutline": {
                          borderBottom: "1.6px solid #C4C4CC !important",
                        },
                        ".MuiSelect-select": {
                          p: "10.5px 14px",
                          fontWeight: "400",
                          color: "#40404D",
                          fontSize: "15px",
                        },
                        ".MuiSelect-icon": { top: "40%" },
                      }}
                      selectVal={selectBranch}
                      setSelectVal={setSelectBranch}
                      data={["Branch 1", "Branch 2", "Branch 3", "Branch 4"]}
                    />
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <label className="secondary-color" for="Client">
                      Client
                    </label>
                    <DashboardSelect
                      id="Client"
                      placeholder="Select"
                      fullWidth={true}
                      MenuSx={{
                        ".MuiMenuItem-root": {
                          color: "#6B6B80",
                          fontSize: "14px",
                          fontWeight: 400,
                        },
                        marginTop: "10px",
                        boxShadow: "0px 6px 6px 6px #DEDEDE40",
                        borderRadius: "8px",
                        ".MuiList-root": { p: "0" },
                        ".Mui-selected": { bgcolor: "#F0F0F2 !important" },
                        ".Mui-selected:hover": { bgcolor: "#F0F0F2" },
                      }}
                      selectSx={{
                        ".MuiOutlinedInput-notchedOutline": {
                          borderBottom: "1.6px solid #C4C4CC !important",
                        },
                        ".MuiSelect-select": {
                          p: "10.5px 14px",
                          fontWeight: "400",
                          color: "#40404D",
                          fontSize: "15px",
                        },
                        ".MuiSelect-icon": { top: "40%" },
                      }}
                      selectVal={selectClient}
                      setSelectVal={setSelectClient}
                      data={["Client 1", "Client 2", "Client 3", "Client 4"]}
                    />
                  </Grid>
                </Grid>
                <div className="filter-below-btn margin-top-2 flex justify-end">
                  <Button
                    className="btn1"
                    onClick={() => {
                      setSelectBranch("");
                      setSelectClient("");
                    }}
                  >
                    Clear
                  </Button>
                  &nbsp;
                  <Button
                    onClick={() => {
                      if (selectBranch || selectClient) {
                        setSelectBranch("");
                        setSelectClient("");
                        popupState.close();
                      } else {
                        toast.error("Please Select Any Type");
                      }
                    }}
                    className="btn2 primary-bg-color"
                  >
                    Apply
                  </Button>
                </div>
              </>
            )}
          </CustomPopover>
          <CustomPopover
            mainTitle="Export"
            mainTitleClass="primary-color heading-20 font-weight-600 margin-bottom-1"
            popoverOpenerTitle="Export"
            popoverOpenerProps={{
              variant: "contained",
              sx: {
                background: "#2B2B33",
                borderRadius: "8px",
                height: "32px",
                whiteSpace: "nowrap",
                "&:hover": {
                  background: "#2B2B33",
                  borderWidth: "2px",
                },
              },
              endIcon: <img src={exportIcon} alt="Export" />,
              className:
                "buttons-filters font-family-Exo font-weight-400 tertiary-title",
            }}
          >
            {(popupState) => (
              <>
                <p className="secondary-color margin-bottom-0">
                  Export this report as
                </p>
                <Grid container spacing={2}>
                  <Grid item sm={6} xs={12}>
                    <Box className="attachment-box">
                      <ExportCardCheckbox
                        checkboxState={checkboxPdf}
                        setCheckboxState={setCheckboxPdf}
                        title="PDF"
                      />
                    </Box>
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <Box className="attachment-box">
                      <ExportCardCheckbox
                        checkboxState={checkboxExcel}
                        setCheckboxState={setCheckboxExcel}
                        title="Excel"
                      />
                    </Box>
                  </Grid>
                </Grid>
                <div className="filter-below-btn margin-top-2 flex justify-end">
                  <Button
                    className="btn1"
                    onClick={() => {
                      setCheckboxPdf(false);
                      setCheckboxExcel(false);
                    }}
                  >
                    Clear
                  </Button>
                  &nbsp;
                  <Button
                    onClick={() => {
                      if (checkboxExcel || checkboxPdf) {
                        setCheckboxPdf(false);
                        setCheckboxExcel(false);
                        popupState.close();
                      } else {
                        toast.error("Please Select Export Type");
                      }
                    }}
                    className="btn2 primary-bg-color"
                  >
                    Apply
                  </Button>
                </div>
              </>
            )}
          </CustomPopover>
          </Grid>
      </Grid>
      <br />
      <CustomTable
        data={INVOICE_DATA}
        columns={columns}
        // showSerialNo
        // onPageChange={pageChangeHandler}
        // onSortByChange={sortChangeHandler}
        paginationClass={paginationClass}
        isSuccess={true}
        isPagination={true}
      />
    </>
  );
};

export default PerformanceTable;
