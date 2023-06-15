import { Box, Button, Card, FormControl, Grid, InputLabel, MenuItem, } from '@mui/material'
import React, { useState } from 'react'
import { GlobalSearchBar } from '../../../components/global-search-filter/global-search-filter'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useNavigate } from 'react-router-dom'
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import filterIcon from "../../../assests/images/client/filter.png";
import exportIcon from "../../../assests/images/client/export.png";
import ShowFilters from '../../OverdueInvoices/ShowFilters'
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { Select } from 'formik-material-ui'
import CustomTable from '../../../components/Table/CustomTable'
import { DashboardSelect } from '../../dashboard-select/dashboard-select'
import { CustomPopover } from '../../../components/custom-popover/custom-popover'

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
export const CashCollectionReportData = [
    {
        id: 1,
        invoiceId: "01",
        client: 'Jacob',
        amount: "£1234",
        issueDate: "19 Oct, 1999",
        dueDate: "19 Oct, 1999",
        paidOn: "19 Oct, 1999",
    },
    {
        id: 21,
        invoiceId: "02",
        client: 'Jacob',
        amount: "£1234",
        issueDate: "19 Oct, 1999",
        dueDate: "19 Oct, 1999",
        paidOn: "19 Oct, 1999",
    },
    {
        id: 3,
        invoiceId: "03",
        client: 'Jacob',
        amount: "£1234",
        issueDate: "19 Oct, 1999",
        dueDate: "19 Oct, 1999",
        paidOn: "19 Oct, 1999",
    },
];

export const CashCollectionReport = () => {
    const [selectBranch, setSelectBranch] = useState("");
    const [selectClient, setSelectClient] = useState("");
    const [isOpen, setIsOpen] = useState(false);
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

    const CashCollectionReportCol = [
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
            accessorFn: (row) => row.paidOn,
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
                        <CustomPopover mainTitle="Filters" mainTitleClass="primary-color heading-20 font-weight-600 margin-bottom-1" popoverOpenerTitle="More Filters" popoverOpenerProps={{
                            variant: 'outlined', sx: {
                                mr: 2, whiteSpace: 'nowrap', color: "#40404D", border: "1.5px solid #40404D !important", height: '32px', borderRadius: "8px",
                                "&:hover": {
                                    border: '2px solid #40404D !important'
                                },
                            }, endIcon: <img src={filterIcon} alt="More Filter" />, className: 'buttons-filters font-family-Exo font-weight-400 tertiary-title'
                        }}>
                            {(popupState) => (
                                <>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <label className='secondary-color' for="branch">Branch</label>
                                            <DashboardSelect id="branch" placeholder="Select" fullWidth={true} MenuSx={{ ".MuiMenuItem-root": { color: '#6B6B80', fontSize: '14px', fontWeight: 400 }, marginTop: '10px', boxShadow: '0px 6px 6px 6px #DEDEDE40', borderRadius: '8px', ".MuiList-root": { p: '0', }, ".Mui-selected": { bgcolor: '#F0F0F2 !important' }, ".Mui-selected:hover": { bgcolor: '#F0F0F2' } }} selectSx={{ ".MuiOutlinedInput-notchedOutline": { borderBottom: '1.6px solid #C4C4CC !important' }, '.MuiSelect-select': { p: '10.5px 14px', fontWeight: '400', color: '#40404D', fontSize: '15px' }, '.MuiSelect-icon': { top: '40%' }, }} selectVal={selectBranch} setSelectVal={setSelectBranch} data={["Branch 1", "Branch 2", "Branch 3", "Branch 4"]} />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <label className='secondary-color' for="Client">Client</label>
                                            <DashboardSelect id="Client" placeholder="Select" fullWidth={true} MenuSx={{ ".MuiMenuItem-root": { color: '#6B6B80', fontSize: '14px', fontWeight: 400 }, marginTop: '10px', boxShadow: '0px 6px 6px 6px #DEDEDE40', borderRadius: '8px', ".MuiList-root": { p: '0', }, ".Mui-selected": { bgcolor: '#F0F0F2 !important' }, ".Mui-selected:hover": { bgcolor: '#F0F0F2' } }} selectSx={{ ".MuiOutlinedInput-notchedOutline": { borderBottom: '1.6px solid #C4C4CC !important' }, '.MuiSelect-select': { p: '10.5px 14px', fontWeight: '400', color: '#40404D', fontSize: '15px' }, '.MuiSelect-icon': { top: '40%' }, }} selectVal={selectClient} setSelectVal={setSelectClient} data={["Client 1", "Client 2", "Client 3", "Client 4"]} />
                                        </Grid>
                                    </Grid>
                                    <div className="filter-below-btn margin-top-2 flex justify-end" >
                                        <Button className="btn1" onClick={() => { setSelectBranch(""); setSelectClient("") }}>
                                            Clear
                                        </Button>
                                        &nbsp;
                                        <Button onClick={popupState.close} className="btn2 primary-bg-color">Apply</Button>
                                    </div>
                                </>
                            )}
                        </CustomPopover>
                        <CustomPopover mainTitle="Export" mainTitleClass="primary-color heading-20 font-weight-600 margin-bottom-1" popoverOpenerTitle="Export Text" popoverOpenerProps={{
                            variant: 'contained', sx: {
                                background: "#2B2B33", borderRadius: '8px', height: '32px', whiteSpace: 'nowrap',
                                "&:hover": {
                                    background: "#2B2B33",
                                    borderWidth: '2px'
                                },
                            }, endIcon: <img src={exportIcon} alt="Export Text" />, className: 'buttons-filters font-family-Exo font-weight-400 tertiary-title'
                        }}>
                            {(popupState) => (
                                <>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <label className='secondary-color' for="branch">Branch</label>
                                            <DashboardSelect id="branch" placeholder="Select" fullWidth={true} MenuSx={{ ".MuiMenuItem-root": { color: '#6B6B80', fontSize: '14px', fontWeight: 400 }, marginTop: '10px', boxShadow: '0px 6px 6px 6px #DEDEDE40', borderRadius: '8px', ".MuiList-root": { p: '0', }, ".Mui-selected": { bgcolor: '#F0F0F2 !important' }, ".Mui-selected:hover": { bgcolor: '#F0F0F2' } }} selectSx={{ ".MuiOutlinedInput-notchedOutline": { borderBottom: '1.6px solid #C4C4CC !important' }, '.MuiSelect-select': { p: '10.5px 14px', fontWeight: '400', color: '#40404D', fontSize: '15px' }, '.MuiSelect-icon': { top: '40%' }, }} selectVal={selectBranch} setSelectVal={setSelectBranch} data={["Branch 1", "Branch 2", "Branch 3", "Branch 4"]} />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <label className='secondary-color' for="Client">Client</label>
                                            <DashboardSelect id="Client" placeholder="Select" fullWidth={true} MenuSx={{ ".MuiMenuItem-root": { color: '#6B6B80', fontSize: '14px', fontWeight: 400 }, marginTop: '10px', boxShadow: '0px 6px 6px 6px #DEDEDE40', borderRadius: '8px', ".MuiList-root": { p: '0', }, ".Mui-selected": { bgcolor: '#F0F0F2 !important' }, ".Mui-selected:hover": { bgcolor: '#F0F0F2' } }} selectSx={{ ".MuiOutlinedInput-notchedOutline": { borderBottom: '1.6px solid #C4C4CC !important' }, '.MuiSelect-select': { p: '10.5px 14px', fontWeight: '400', color: '#40404D', fontSize: '15px' }, '.MuiSelect-icon': { top: '40%' }, }} selectVal={selectClient} setSelectVal={setSelectClient} data={["Client 1", "Client 2", "Client 3", "Client 4"]} />
                                        </Grid>
                                    </Grid>
                                    <div className="filter-below-btn margin-top-2 flex justify-end" >
                                        <Button className="btn1" onClick={() => { setSelectBranch(""); setSelectClient("") }}>
                                            Clear
                                        </Button>
                                        &nbsp;
                                        <Button onClick={popupState.close} className="btn2 primary-bg-color">Apply</Button>
                                    </div>
                                </>
                            )}
                        </CustomPopover>
                    </div>
                </Grid>
            </Grid >
            <br />
            {/* Table */}

            <CustomTable
                data={CashCollectionReportData}
                columns={CashCollectionReportCol}
                // onPageChange={pageChangeHandler}
                onSortByChange={() => { }}
                isSuccess={true}
                isPagination={true}
            />
        </>
    )
}
