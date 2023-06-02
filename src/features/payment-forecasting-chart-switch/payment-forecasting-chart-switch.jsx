import React from 'react'

export const PaymentForecastingChartSwitch = ({chartSwitch,setSwitch}) => {
    return (
        <>
            <div className="flex">
                {
                    ['This Month', 'This Week'].map(item => <div key={item} onClick={()=>setSwitch(item)} className={`tertiary-title margin-right-0 cursor-pointer ${item === chartSwitch ? 'tertiary-color font-weight-700' :'secondary-color font-weight-400'}`}>
                            {item}
                    </div>)}
            </div>
        </>
    )
}
