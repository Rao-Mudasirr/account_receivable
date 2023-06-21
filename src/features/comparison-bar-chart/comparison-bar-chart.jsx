import React from 'react'
import Chart from 'react-apexcharts';


export const ComparisonBarChart = ({yaxisHidden}) => {
    const optionsComparisonBarChart = {
        chart: {
            height: 350,
            type: 'bar',
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                borderRadius: 5,
                borderRadiusApplication: 'end',
                columnWidth: '50%',
            }
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            labels: {
                style: {
                    fontSize: '12px',
                    colors: ["#6B6B80"],
                    fontFamily: 'Exo 2'
                },
            },
            axisBorder: {
                color: '#6B6B80',
                height: 1,
            },
            axisTicks: {
                show: false
            },
            tooltip: {
                enabled: false,
            },
        },
        stroke: {
            colors: ["transparent"],
            width: 5
        },
        yaxis: {
            show: yaxisHidden,
            labels: {
                style: {
                    fontSize: '12px',
                    colors: ["#6B6B80"],
                    fontFamily: 'Exo 2',
                    fontWeight: 400,
                },
                formatter: (value) => { return `£${value}` },
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false,
            },
            tooltip: {
                enabled: false,
            }
        },
        colors: ["#70D69E", "#FF9898"],
        legend: {
            show: true,
            position: 'top',
            horizontalAlign: 'right',
            fontSize: '12px',
            colors: ["#000000"],
            fontFamily: 'Exo 2',
            fontWeight: 400,
        },
    }
    return (
        <>
            <Chart
                series={[
                    {
                        name: 'Paid Invoices',
                        data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 10, 100, 67]
                    },
                    {
                        name: 'OverDue Invoices',
                        data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 34, 76, 12]
                    }
                ] ?? []}
                height={350}
                options={optionsComparisonBarChart ?? {}}
                type="bar"
            />
        </>
    )
}
