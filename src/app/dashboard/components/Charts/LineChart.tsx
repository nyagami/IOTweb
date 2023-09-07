import React from "react";
import ApexCharts from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const series = [
    {
        name: 'Nhiệt độ',
        type: 'line',
        data: [23, 42, 35, 27, 39, 22, 17, 31, 26]
    },
    {
        name: 'Độ ẩm',
        type: 'line',
        data: [80, 90, 50, 46, 60, 85, 50, 45, 89]
    },
    {
        name: "Độ sáng",
        type: "line",
        data: [60, 90, 10, 50, 70, 50, 20, 31, 22],
    },
];

const chartSettings: ApexOptions = {
    colors: ["#FF5668", "#4D53E0", "#ffca7a"],
    dataLabels: {
        enabled: true,
        enabledOnSeries: [0, 1, 2],
        style: {
          fontSize: '10px',
          fontWeight: 500,
        },
        background: {
          borderWidth: 0,
        },
      },
    stroke: {
        curve: ["straight", "smooth", "smooth"],
        width: [3, 3, 3]
    },
    chart: {
        toolbar: {
            show: false
        }
    },
    yaxis: {
        labels: {
            style: {
                colors: ["#6B859E"],
            },
        },
    },
    xaxis: {
        labels: {
            show: false
        }
    },
    legend: {
        labels: {
            colors: "#6B859E"
        }
    }
};

export default function ApexLineChart() {
    return (
        <ApexCharts
            options={chartSettings}
            series={series}
            type="line"
            height={400}
        />
    );
}