import { Box, Button, Card, FormControl, Grid, InputLabel, MenuItem, Popover } from '@mui/material'
import React, { useState } from 'react'
import { GlobalSearchBar } from '../../../components/global-search-filter/global-search-filter'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useLocation, useNavigate } from 'react-router-dom'
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import filterIcon from "../../../assests/images/client/filter.png";
import exportIcon from "../../../assests/images/client/export.png";
import ShowFilters from '../../OverdueInvoices/ShowFilters'
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { Select } from 'formik-material-ui'
import CustomTable from '../../../components/Table/CustomTable'
import PopupState, { bindPopover, bindTrigger } from 'material-ui-popup-state'

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
export const DSO_Data2 = [
    {
        id: 1,
        Id: "01",
        client_name: 'John Doe',
        total_invoices: 33,
        dso: 20,
        avg_delay: 2,
    },
    {
        id: 2,
        Id: "02",
        client_name: 'John Doe',
        total_invoices: 33,
        dso: 33,
        avg_delay: 3,
    },
    {
        id: 3,
        Id: "03",
        client_name: 'John Doe',
        total_invoices: 33,
        dso: 43,
        avg_delay: 4,
    },
];

export const CashCollectionReport = () => {

    const [isOpen, setIsOpen] = useState(false);
    const { state } = useLocation()
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

    const handleView = ({ row }) => {
        navigate(`/report-details/month/${row?.original?.id}`, { state: { data: row?.original } })
    }

    const DSO_Col = [
        {
            accessorFn: (row) => row.invoiceId,
            id: "invoiceId",
            cell: (info) => info.getValue(),
            header: () => <span>Invoice Id</span>,
            isSortable: true,
        },
        {
            accessorFn: (row) => row.client,
            id: "client",
            cell: (info) => (info.getValue()),
            header: "Client",
        },
        {
            accessorFn: (row) => row.amount,
            id: "amount",
            cell: (info) => info.getValue(),
            header: "Amount",
        },
        {
            accessorFn: (row) => row.issueDate,
            id: "issueDate",
            cell: (info) => info.getValue(),
            header: "Issue Date",
        },
        {
            accessorFn: (row) => row.dueDate,
            id: "dueDate",
            cell: (info) => info.getValue(),
            header: "Due Date",
        },
        {
            accessorFn: (row) => row.dueDate,
            id: "paidOn",
            cell: (info) => info.getValue(),
            header: () => <span>Paid On</span>,
        },
    ];
    return (
        <>
            <div className="invoice-title">Cash Collection Report</div>
            <Grid container className='align-center'>
                <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
                    <GlobalSearchBar />
                </Grid>

                <Grid xs={12} md={6} lg={6} xl={6}>
                    <div className='align-end' style={{ marginLeft: "auto", display: "flex" }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                sx={{
                                    paddingRight: "20px", '.MuiInputBase-input ': { p: '13px', fontFamily: `'Exo 2', "Roboto", "sans-serif"`, color: '#A6A6B3' },
                                }}
                                slots={{
                                    openPickerIcon: CalendarMonthRoundedIcon
                                }}

                                slotProps={{ textField: { placeholder: 'From' } }}
                                variant="standared"
                                value={startDate}
                                onChange={(date) => handleDateChange(date, "Start date")}
                            />
                            <DatePicker
                                sx={{
                                    paddingRight: "20px", '.MuiInputBase-input ': { p: '13px', fontFamily: `'Exo 2', "Roboto", "sans-serif"`, color: '#A6A6B3' },
                                }}
                                slotProps={{ textField: { placeholder: 'To' } }}
                                slots={{
                                    openPickerIcon: CalendarMonthRoundedIcon,
                                }}
                                value={endDate}
                                onChange={(date) => handleDateChange(date, "End Date")}
                            />
                        </LocalizationProvider>
                        <PopupState variant="popover" popupId="demo-popup-popover">
                            {(popupState) => (
                                <div>
                                    <Button variant="outlined" sx={{
                                        mr: 2,
                                        whiteSpace:'nowrap',
                                        color: "#40404D",
                                        border: "1.5px solid #40404D !important",
                                        height: '32px',
                                        borderRadius: "8px",
                                        "&:hover": {
                                            border: '2px solid #40404D !important'
                                        },
                                    }} endIcon={<img src={filterIcon} alt="More Filter" />} className='buttons-filters font-family-Exo font-weight-400 tertiary-title' {...bindTrigger(popupState)}>
                                        More Filter
                                    </Button>
                                    <Popover
                                        {...bindPopover(popupState)}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'center',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'center',
                                        }}
                                    >

                                    </Popover>
                                </div>
                            )}
                        </PopupState>
                        <Button
                            className='buttons-filters font-family-Exo font-weight-400 tertiary-title'
                            variant="contained"
                            color="primary"
                            sx={{
                                background: "#2B2B33",
                                borderRadius: '8px',
                                height: '32px',
                                "&:hover": {
                                    background: "#2B2B33",
                                    borderWidth: '2px'
                                },
                            }}
                            endIcon={<img src={exportIcon} alt="Export Text" />}
                            onClick={() => {
                                setType("Export")
                                handleClick2()
                            }}
                        >
                            Export Text
                        </Button>
                        <ShowFilters
                            filter_type={type}
                            handleClick={handleClick2}
                            isOpen={isOpen2}
                        />
                        {isOpen && (
                            <Card
                                style={{
                                    width: "592px",
                                    // height: '376px',
                                    position: "absolute",
                                    right: "50px",
                                    zIndex: 10,
                                    padding: "24px",
                                    marginTop: "7px",
                                    boxShadow: "0px 9px rgba(0, 0, 0, 0.2)",
                                    borderRadius: "8px",
                                }}
                            >
                                {/* <ul> */}
                                <div className="filter-heading">
                                    <div className="title-filter">Filters</div>
                                    <div className="icon-filter" onClick={handleClick}>
                                        <CancelOutlinedIcon />{" "}
                                    </div>
                                </div>
                                <br />
                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={1}>
                                        {input_filter?.map((val, index) => (
                                            <Grid
                                                style={{ marginBottom: "40px" }}
                                                spacing={2}
                                                key={index}
                                                item
                                                xs={12}
                                                md={6}
                                                lg={6}
                                            >
                                                <InputLabel
                                                    id="demo-simple-select-filled-label"
                                                    className="field-label"
                                                >
                                                    {val?.field}
                                                </InputLabel>
                                                <FormControl
                                                    variant="standard"
                                                    style={{ width: "260px", height: "48px" }}
                                                >
                                                    <InputLabel id="demo-simple-select-filled-label">
                                                        Select
                                                    </InputLabel>
                                                    <Select
                                                        placeholder="Select"
                                                        labelId="demo-simple-select-filled-label"
                                                    // id="demo-simple-select-filled"
                                                    // value={value}
                                                    // onChange={handleChange}
                                                    >
                                                        <MenuItem value="">
                                                            <em>None</em>
                                                        </MenuItem>
                                                        {val?.Items?.map((data, i) => (
                                                            <React.Fragment key={i}>
                                                                <MenuItem value={data?.item}>
                                                                    {data?.item}
                                                                </MenuItem>
                                                            </React.Fragment>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                                {/* </ul> */}
                                <div
                                    className="filter-below-btn"
                                    style={{ display: "flex", float: "right" }}
                                >
                                    <Button className="btn1" onClick={handleClick}>
                                        Clear
                                    </Button>
                                    &nbsp;
                                    <Button className="btn2">Apply</Button>
                                </div>
                            </Card>
                        )}
                    </div>
                </Grid>
            </Grid >
            <br />
            {/* Table */}

            <CustomTable
                data={DSO_Data2}
                columns={DSO_Col}
                // showSerialNo
                // onPageChange={pageChangeHandler}
                // onSortByChange={sortChangeHandler}
                isSuccess={true}
                isPagination={true}
            />
        </>
    )
}
