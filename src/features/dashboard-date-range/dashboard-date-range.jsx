import React, { useState } from 'react'
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import dayjs from 'dayjs';
export const DashboardDateRange = () => {
    const [value, setValue] = useState(dayjs('2022-04-17'));
    return (
        <>
            <div style={{marginTop:'1px'}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer sx={{ p: 0,flexDirection:'row !important' }} components={['DatePicker', 'DatePicker']}>
                        <div className="secondary-title secondary-color">
                            From:
                        </div>
                        <DatePicker
                            variant='standared'
                            value={value}
                            sx={{
                                minWidth: '112px !important', '.MuiOutlinedInput-notchedOutline': { display: 'none' }, '.MuiButtonBase-root': { p: 0 },
                                '.MuiInputBase-input ': { p: '0px', fontFamily: `'Exo 2', "Roboto", "sans-serif"`, fontSize: '14px', fontWeight: 600, color: '#40404D', width: '82px' },
                                'svg': { color: '#40404D', width: '22px', height: '22px' },
                                '.MuiInputBase-root': { p: 0 }
                            }}
                            onChange={(date) => { }}
                            slots={{
                                openPickerIcon: CalendarMonthRoundedIcon
                            }}
                        />
                        <div className="secondary-title secondary-color margin-left-0">
                            To:
                        </div>
                        <DatePicker
                            value={value}
                            sx={{
                                minWidth: '112px !important', '.MuiOutlinedInput-notchedOutline': { display: 'none' }, '.MuiButtonBase-root': { p: 0 },
                                '.MuiInputBase-input ': { p: '0px', fontFamily: `'Exo 2', "Roboto", "sans-serif"`, fontSize: '14px', fontWeight: 600, color: '#40404D', width: '82px' },
                                'svg': { color: '#40404D', width: '22px', height: '22px' },
                                '.MuiInputBase-root': { p: 0 }
                            }}
                            onChange={(date) => { }}
                            slots={{
                                openPickerIcon: CalendarMonthRoundedIcon
                            }}
                        />
                    </DemoContainer>
                </LocalizationProvider>
            </div>
        </>
    )
}
