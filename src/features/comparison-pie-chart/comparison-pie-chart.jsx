import React from 'react'
import Chart from 'react-apexcharts';
const optionsComparisonPieChart =(showIn,data)=> ({
    chart: {
        type: 'donut',
        id:''
    },
    plotOptions: {
        pie: {
            donut: {
                size: '50%',
                labels: {
                    show: true,
                    value: {
                        fontSize: '13.5px',
                        color: "#40404D",
                        fontFamily: 'Exo 2',
                        fontWeight: 600,
                        offsetY: -8,
                        formatter: function (val) {
                            return "£ " + val
                        }
                    },
                    total: {
                        showAlways: false,
                        show: true,
                        label: '',
                        fontSize: '13.5px',
                        color: "#6B6B80",
                        fontFamily: 'Exo 2',
                        fontWeight: 700,
                        formatter: function (w) {
                            let result = w.globals.seriesTotals.reduce((a, b) => a + b, 0)
                            return "£ " + (Math.round(result * 100) / 100).toLocaleString();
                        }
                    }
                }
            }
        }
    },
    labels: ["Paid Invoices", "OverDue Invoices"],
    legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'right',
        fontSize: '12px',
        colors: ["#000000"],
        fontFamily: 'Exo 2',
        fontWeight: 400,
    },
    dataLabels: {
        enabled: true,
        formatter: function (val, { seriesIndex}) {
            return  showIn === "Amount" ?  "£" + data[seriesIndex] : val.toFixed(0) + "%";
        },
        style: {
            fontSize: '12px',
            fontFamily: 'Exo 2',
            fontWeight: '400',
        },
    },
    // responsive: [{
    //     breakpoint: 480,
    //     options: {
    //         chart: {
    //             width: 200
    //         },
    //         legend: {
    //             position: 'bottom'
    //         }
    //     }
    // }],
    colors: ["#70D69E", "#FF9898"]
})
export const ComparisonPieChart = ({showIn, data}) => {
    console.log(showIn);
    return (
        <>
            <Chart
                series={data ?? []}
                height={350}
                options={optionsComparisonPieChart(showIn,data) ?? {}}
                type="donut"
            />
        </>
    )
}