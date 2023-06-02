import React from 'react'
import Chart from 'react-apexcharts';

const options = (categories)=> ({
    chart: {
        type: 'area',
        height: 350,
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
    },
    dataLabels: {
        enabled: false
    },
    fill: {
        opacity: 1,
    },
    stroke: {
        curve: 'smooth',
        width: 2,
        colors:["#7987FF"]
    },
    xaxis: {
        categories: categories,
        axisTicks: {
            show: false
        },
        labels: {
            style: {
                fontSize: '12px',
                colors: ["#6B6B80"],
                fontFamily: 'Exo 2',
                fontWeight: 700,
            },
        },
        tooltip: {
            enabled: false,
        },
        axisBorder: {
            color: '#6B6B80',
            height: 1,
        },
    },
    yaxis: {
        labels: {
            style: {
                fontSize: '12px',
                colors: ["#6B6B80"],
                fontFamily: 'Exo 2',
                fontWeight: 700,
            },
            formatter: (value) => { return `£${value}` },
        },
    },
    colors:["#7987FF"]
})


export const PaymentShowcaseAreaChart = ({series,categories}) => {
    return (
        <>
            <div>
                <Chart
                    series={series ?? []}
                    height={350}
                    options={options(categories) ?? {}}
                    type="area"
                />
            </div>
        </>
    )
}
