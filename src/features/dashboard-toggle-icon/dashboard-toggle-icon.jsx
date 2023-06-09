
import React from 'react'
import BarChartIcon from "../../assests/svg/dashboard/bar-chart-icon.svg";
import BarChartIconActive from "../../assests/svg/dashboard/bar-chart-active.svg";
import PieChartIcon from "../../assests/svg/dashboard/pie-chart-icon.svg";
import PieChartIconActive from "../../assests/svg/dashboard/pie-chart-active.svg";
import { Box } from '@mui/material';
const dashboardToggleIconData = [
  {
    id: '0',
    icon: BarChartIcon,
    activeIcon: BarChartIconActive,
  },
  {
    id: '1',
    icon: PieChartIcon,
    activeIcon: PieChartIconActive,
  }
]
export const DashboardToggleIcon = ({ chartSwitch, setSwitch }) => {
  return (
    <>
      <Box sx={{ml:{sm:'1.6rem',xs:'10px'}}} className="flex justify-between align-center">
        {
          dashboardToggleIconData.map(item => <div key={item.id} className='margin-right-0 cursor-pointer' onClick={() => setSwitch(item.id)} >
            <img src={item.id === chartSwitch ? item.activeIcon : item.icon} alt="money-trees" />
          </div>)}
      </Box>
    </>
  )
}
