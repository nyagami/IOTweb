import React from "react";
import ApexCharts from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const series = [
    {
        name: "Độ sáng",
        data: [60, 90, 10, 50, 70, 50, 20],
    },
];

const chartSettings: ApexOptions = {
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: "smooth",
        width: 2,
    },
    xaxis: {
        type: "category",
        categories: [
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            "Sun",
        ],
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
    tooltip: {
        x: {
            show: false,
        },
    },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 1,
            stops: [100, 50]
        }
    },
    colors: ["#41D5E2"],
    chart: {
        toolbar: {
            show: false,
        },
    },
    legend: {
        show: true,
        horizontalAlign: "center",
        labels: {
            colors: "#6B859E",
        }
    },
};

export default function ApexLineChart() {
    return (
        <ApexCharts
            options={chartSettings}
            series={series}
            type="area"
            height={300}
        />
    );
}