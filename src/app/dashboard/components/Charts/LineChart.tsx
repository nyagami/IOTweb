import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { SensorData } from "@/app/api/sensor/route";

interface ChartProps {
    sensorDatas: SensorData [],
}

export default function ApexLineChart({
    sensorDatas,
}: ChartProps
) {
    const chartSettings: ApexOptions = {
        colors: ["#c4c4c4", "#FF5668", "#4D53E0", "#ffca7a"],
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
            curve: ["straight", "straight", "smooth", "smooth"],
            width: [3, 3, 3, 3]
        },
        chart: {
            toolbar: {
                show: false
            }
        },
        xaxis: {
            categories: sensorDatas.map(sd => sd.time.split(' ')[1]),
            labels: {
                show: true,
                style: {
                    colors: "#6B859E",
                },
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: "#6B859E",
                },
            },
            // min: -10,
            // max: 100,
        },
        legend: {
            labels: {
                colors: "#6B859E"
            }
        }
    };
    const series = [
        {
            name: "Độ bụi",
            type: "line",
            data: sensorDatas.map(sd => sd.dust),
        },
        {
            name: "Nhiệt độ",
            type: "line",
            data: sensorDatas.map(sd => sd.temperature),
        },
        {
            name: "Độ ẩm",
            type: "line",
            data: sensorDatas.map(sd => sd.humidity),
        },
        {
            name: "Độ sáng",
            type: "line",
            data: sensorDatas.map(sd => sd.light),
        },
        
    ]
    return (
        <ReactApexChart
            options={chartSettings}
            series={series}
            type="line"
            height={500}
        />
    );
}