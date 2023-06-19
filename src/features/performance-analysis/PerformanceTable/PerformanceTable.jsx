import React, {useState} from "react";
import CustomTable from "../../../components/Table/CustomTable";
import { GlobalSearchBar } from "../../../components/global-search-filter/global-search-filter";
import filterIcon from "../../../assests/images/client/filter.png";
import exportIcon from "../../../assests/images/client/export.png";
import Grid from "@mui/material/Grid";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ShowFilters from "../../OverdueInvoices/ShowFilters";
import GlobalButton from "../../../components/global-button/global-button";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";

const input_filter = [
  {
    field: "Branch",
    Items: [
      {
        id: "1",
        item: "Item 1",
      },
      {
        id: "2",
        item: "Item 2",
      },
      {
        id: "3",
        item: "Item 3",
      },
    ],
  },
  {
    field: "Client",
    Items: [
      {
        id: "1",
        item: "Item 1",
      },
      {
        id: "2",
        item: "Item 2",
      },
      {
        id: "3",
        item: "Item 3",
      },
    ],
  },
];

const PerformanceTable = ({ INVOICE_DATA, columns, paginationClass }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { state } = useLocation();
  const navigate = useNavigate();
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const [isOpen2, setIsOpen2] = useState(false);
  const [type, setType] = useState("");
  const handleClick2 = () => {
    setIsOpen2(!isOpen2);
  };
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [error, setError] = useState(null);

  const handleDateChange = (date, label) => {
    if (label === "Start date") {
      setStartDate(date);
    } else if (label === "End Date") {
      setEndDate(date);
    }
  };
  return (
    <>
      <div className="invoice-title">Workflows Comparison</div>

{/* Search field */}
<Grid container>
  <Grid xs={12} sm={12} md={12} lg={12} xl={4}>
    <div
      style={{
        margin: "5px",
        display: "flex",
        alignItems: "center",
        marginTop: "14px",
      }}
    >
      <GlobalSearchBar />
    </div>
  </Grid>

  <Grid xs={12} sm={12} md={12} lg={12} xl={8}>
    <div style={{ marginLeft: "auto" }} className="invoices-tabal-header">
      <Grid container spacing={2} sx={{display: "flex", justifyContent: "flex-end"}}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xl={3}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <GlobalButton
            btnName="outline"
            btnText="More Filters"
            endIcon={
              <img
                src={filterIcon}
                alt="More Filter"
              // width={16}
              // height={16}
              />
            }
            onClick={() => {
              setType("More");
              handleClick2();
            }}
          // className="invoice-filter-btn"
          />

          &nbsp;
          <GlobalButton
            btnName="accent"
            btnText="Export"
            endIcon={
              <img
                src={exportIcon}
                alt="Export Text"
              // width={16}
              // height={16}
              />
            }
            onClick={() => {
              setType("Export");
              handleClick2();
            }}
          // className="invoice-second-btn"
          />
        </Grid>
      </Grid>
    </div>
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
