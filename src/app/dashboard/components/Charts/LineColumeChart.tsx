import React from "react";
import ApexCharts from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const series = [{
  name: 'Nhiệt độ trung bình',
  type: 'column',
  data: [40, 50, 38, 31, 27, 43, 20, 35, 22]
}, {
  name: 'Nhiệt độ cao nhất',
  type: 'line',
  data: [23, 42, 35, 27, 39, 22, 17, 31, 26]
}];

const chartSettings: ApexOptions = {
  colors: ["#F7F8FB", "#FF5668"],
  chart: {
    height: 350,
    type: 'line',
    toolbar: {
      show: false,
    },
  },
  stroke: {
    curve: "straight",
    width: [0, 1]
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: [1],
    style: {
      fontSize: '10px',
      fontWeight: 500,
    },
    background: {
      borderWidth: 0,
    },
  },
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  xaxis: {
    type: 'category',
    labels: {
      style: {
        colors: "#6B859E",
      },
    },
  },
  fill: {
    type: "solid",
    opacity: 1,
  }
};

export default function ApexLineColumnChart() {
  return (
    <ApexCharts
      options={chartSettings}
      series={series}
      type="area"
      height={300}
    />
  )
};
