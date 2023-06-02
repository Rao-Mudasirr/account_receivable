import React from 'react'
import { DashboardSelect } from '../dashboard-select/dashboard-select'

export const DashboardChartSwitch = ({switchName,data,selectVal,setSelectVal}) => {
    return (
        <>
            <div className='flex align-center'>
                <div className='secondary-title secondary-color font-weight-700'>
                    {switchName}:
                </div>
                <div>
                    <DashboardSelect data={data} selectVal={selectVal} setSelectVal={setSelectVal} />
                </div>
            </div>
        </>
    )
}
