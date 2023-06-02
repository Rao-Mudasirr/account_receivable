import { Box } from '@mui/material';
import Chart from 'react-apexcharts';
import React from 'react'

const options = {
    chart: {
        height: 350,
        type: 'bar',
        toolbar: {
            show: false,
        },
    },
    grid: {
        show: false,
    },
    plotOptions: {
        bar: {
            borderRadius: 6,
            borderRadiusApplication: 'end',
            columnWidth: '50%',
            barHeight: '50%',
            dataLabels: {
                position: 'top',
            }
        }
    },
    dataLabels: {
        enabled: true,
        offsetY: -20,
        style: {
            fontSize: '10px',
            colors: ["#6B6B80"],
            fontFamily: 'Exo 2'
        }
    },
    xaxis: {
        categories: ["Jan", "Feb", "Mar"],
        position: 'bottom',
        labels: {
            style: {
                fontSize: '10px',
                colors: ["#6B6B80"],
                fontFamily: 'Exo 2'
            },
            offsetY: -5,
        },
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
        tooltip: {
            enabled: false,
        }
    },
    yaxis: {
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false,
        },
        tooltip: {
            enabled: false,
        },
        max: (max) => {
            return max + (max / 2);
        },
        labels: {
            show: false,
        }
    },
    tooltip: {
        enabled: false,
    },
    colors: [
        function ({ value, seriesIndex, w }) {
            console.log(value,seriesIndex,w,w?.config?.series?.[0].data?.[2]);
            if (w?.config?.series?.[0].data?.[2] === value) {
                return '#FF9898'
            } else {
                return '#E5E5E5'
            }
        }
    ]
}

export const AgingBucketBarChart = () => {
    return (
        <>
            <div>
                <Box sx={{ mt: '-50px' }}>
                    <Chart
                        series={[25, 200, 100] ?? []}
                        height={436}
                        options={options ?? {}}
                        type="bar"
                    />
                </Box>
            </div>
        </>
    )
}
