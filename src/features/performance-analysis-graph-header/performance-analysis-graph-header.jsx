import React, { useState } from 'react'
import BarChartIcon from "../../assests/svg/dashboard/bar-chart-icon.svg";
import BarChartIconActive from "../../assests/svg/dashboard/bar-chart-active.svg";
import { Box, Collapse, Grid } from '@mui/material';
import { DashboardDateRange } from '../dashboard-date-range/dashboard-date-range';
import { DashboardChartSwitch } from '../dashboard-chart-switch/dashboard-chart-switch';
import { PaymentForecastingChartSwitch } from '../payment-forecasting-chart-switch/payment-forecasting-chart-switch';
import { ComparisonBarChart } from '../comparison-bar-chart/comparison-bar-chart';
export const PerformanceAnalysisGraphHeader = () => {
    const [graphDivOpen, setGraphDivOpen] = useState(false);
    const [showInSelect, setShowInSelect] = useState("Percentage");
    const [workflow1Select, setWorkflow1Select] = useState("UK Workflow");
    const [workflow2Select, setWorkflow2Select] = useState("New workflow");
    const [chartSwitch, setchartSwitch] = useState("Bar Graph");
    return (
        <>
            <div className='flex justify-end margin-top-1 margin-bottom-1' >
                <img onClick={() => setGraphDivOpen(!graphDivOpen)} className=' cursor-pointer' src={graphDivOpen ? BarChartIconActive : BarChartIcon} alt="money-trees" />
            </div>
            <Collapse className='margin-bottom-2' in={graphDivOpen} timeout="auto" unmountOnExit>
                <Grid container className='align-center'>
                    <Grid item className='font-weight-600 primary-color secondary-title' xs={2}>
                        Graph Comparison
                    </Grid>
                    <Grid item xs={10}>
                        <Grid container className='flex align-center justify-between'>
                            <Grid item xs={4} className='flex justify-end'>
                                <DashboardDateRange />
                            </Grid>
                            <Grid item xs={4} className='flex justify-end'>
                                <DashboardChartSwitch MenuSx={{ ".MuiMenuItem-root": { color: '#6B6B80', fontSize: '14px', fontWeight: 400 }, marginTop: '10px', boxShadow: '0px 6px 6px 6px #DEDEDE40', borderRadius: '8px', ".MuiList-root": { p: '0', }, ".Mui-selected": { bgcolor: '#F0F0F2 !important' }, ".Mui-selected:hover": { bgcolor: '#F0F0F2' } }} switchName="Show in" selectVal={showInSelect} setSelectVal={setShowInSelect} data={["Percentage", "Amount"]} />
                            </Grid>
                            <Grid item xs={4} className='flex justify-end'>
                                <PaymentForecastingChartSwitch chartSwitch={chartSwitch} setSwitch={setchartSwitch} data={["Bar Graph", "Pie Graph"]} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container className='flex align-center justify-between margin-top-1'>
                    <Grid item xs={6} className='position-relative'>
                        <Box sx={{ top: '20px',zIndex:2 }} className="position-absolute">
                            <DashboardChartSwitch MenuSx={{ ".MuiMenuItem-root": { color: '#6B6B80', fontSize: '14px', fontWeight: 400 }, marginTop: '10px', boxShadow: '0px 6px 6px 6px #DEDEDE40', borderRadius: '8px', ".MuiList-root": { p: '0', }, ".Mui-selected": { bgcolor: '#F0F0F2 !important' }, ".Mui-selected:hover": { bgcolor: '#F0F0F2' } }} switchName="Workflow" selectVal={workflow1Select} setSelectVal={setWorkflow1Select} data={["UK Workflow", "New workflow"]} />
                        </Box>
                        <div className='margin-top-1'>
                            <ComparisonBarChart yaxisHidden={true} />
                        </div>
                    </Grid>
                    <Grid item xs={6} className='position-relative'>
                        <Box sx={{ top: '20px',zIndex:2 }} className="position-absolute">
                            <DashboardChartSwitch MenuSx={{ ".MuiMenuItem-root": { color: '#6B6B80', fontSize: '14px', fontWeight: 400 }, marginTop: '10px', boxShadow: '0px 6px 6px 6px #DEDEDE40', borderRadius: '8px', ".MuiList-root": { p: '0', }, ".Mui-selected": { bgcolor: '#F0F0F2 !important' }, ".Mui-selected:hover": { bgcolor: '#F0F0F2' } }} switchName="Workflow" selectVal={workflow2Select} setSelectVal={setWorkflow2Select} data={["UK Workflow", "New workflow"]} />
                        </Box>
                        <div className='margin-top-1'>
                            <ComparisonBarChart yaxisHidden={false} />
                        </div>
                    </Grid>
                </Grid>
            </Collapse>
        </>
    )
}
