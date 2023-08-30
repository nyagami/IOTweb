import React from "react";
import ApexCharts from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const series = [{
    name: 'Độ ẩm',
    type: 'area',
    data: [80, 90, 50, 46, 60, 85, 50, 45]
}];

const chartSettings: ApexOptions = {
    colors: ['#4D53E0', '#6B859E'],
    chart: {
        toolbar: {
            show: false,
        },
        height: 350,
        type: 'line',
        stacked: false,
    },
    stroke: {
        width: [0, 0],
        curve: 'smooth'
    },
    plotOptions: {
        bar: {
            columnWidth: '50%'
        }
    },
    fill: {
        type: "solid",
        opacity: [0.5],
    },
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    markers: {
        size: 0
    },
    xaxis: {
        type: 'category',
        labels: {
            style: {
                colors: "#6B859E",
            },
        },
    },
    yaxis: {
        labels: {
            style: {
                colors: ["#6B859E"],
            },
        },
    },
    dataLabels: {
        enabled: true,
    },
    tooltip: {
        shared: true,
        intersect: false,
        y: {
            formatter: function (y) {
                if (typeof y !== "undefined") {
                    return y.toFixed(0) + "%";
                }
                return y;

            }
        }
    }
};

export default function ApexColumnAreaChart() {
    return (
        <ApexCharts
            options={chartSettings}
            series={series}
            type="area"
            height={300}
        />
    );
}
