"use client";
import { useTheme } from "../hooks/useTheme";
import { useCallback, useEffect, useState, useRef } from "react";
import { io } from 'socket.io-client'
import ApexLineChart from "./components/Charts/LineChart";

import { Divider } from "@nextui-org/react";
import { NumberCard } from "./components/Cards";
import LightItem from "./components/Lights";
import { LightSkeletion } from "./components/Lights/LightSkeleton";
import { SensorData } from "../api/sensor/route";
import { parseUTC } from "../utils/parseUTCTime";
import { ColorHue, ColorSaturation, getGradientColor } from "../utils/gradientColor";

interface SensorSaturation {
    temperature: ColorSaturation,
    humidity: ColorSaturation,
    light: ColorSaturation,
}

const Dashboard = () => {
    const [sensorData, setSensorData] = useState<SensorData>({temperature: 0, humidity: 0, light: 0, time: ""});
    const [sensorSaturation, setSensorStaturation] = useState<SensorSaturation>({
        temperature: ColorSaturation.WEAK,
        humidity: ColorSaturation.WEAK,
        light: ColorSaturation.WEAK,
    });
    const [sensorDatas, setSensorDatas] = useState<SensorData[]>([]);
    const [deviceLoading, setDeviceLoading] = useState(true);
    const [ledStatus, setLedStatus] = useState(false);
    const [fanStatus, setFanstatus] = useState(false);

    const updateSensorSaturation = useCallback((data: SensorData) => {
        const getSaturation = (amount: number): ColorSaturation => {
            if(amount < 10) return ColorSaturation.WEAK;
            if(amount < 35) return ColorSaturation.MEDIUM;
            return ColorSaturation.STRONG;
        }
        setSensorStaturation({
            temperature: getSaturation(data.temperature),
            humidity: getSaturation(data.humidity),
            light: getSaturation(data.light)
        })
    }, []);
    const getData = useCallback(async () => {
        const res = await fetch('/api/sensor?num=10');
        const data = (await res.json())?.map((sd: SensorData) => {
            return {
                ...sd,
                time: parseUTC(sd.time)
            }
        });
        return data as SensorData[];
    }, []);
    useEffect(() => {
        getData().then(data => {
            data = data.reverse();
            setSensorData(data[data.length - 1]);
            updateSensorSaturation(data[data.length - 1]);
            setSensorDatas(data);
        });
        fetch("/api/action", {
            method: "POST"
        });
    }, []);

    useEffect(() => {
        const socket = io();
        socket.on("sensor", (data: SensorData) => {
            data.time = parseUTC(data.time);
            setSensorData(data);
            updateSensorSaturation(data);
            let datas = sensorDatas.slice(-9).concat([data]);
            setSensorDatas(datas);
        })

        socket.on("device_status", (data) => {
            switch (data.type) {
                case "led":
                    setLedStatus(data.status);
                    break;
                case "fan":
                    setFanstatus(data.status);
                    break;
                case "devices":
                    setLedStatus(data.led);
                    setFanstatus(data.fan);
                    setDeviceLoading(false);
                    break;
                default:
                    console.log("unknow package");
                    return;
            }
        });
        return () => {
            socket.disconnect();
        }
    }, [sensorDatas])

    const theme = useTheme();
    return (
        <div style={{
            backgroundColor: theme.background
        }}>
            <div
                className="block w-full md:flex justify-evenly py-10"
                style={{
                    padding: 'auto'
                }}
            >
                <NumberCard
                    title="Nhiệt độ"
                    num={sensorData.temperature}
                    icon="thermostat"
                    unit="°C"
                    gradientColor={getGradientColor(ColorHue.RED, sensorSaturation.temperature)}
                />
                <NumberCard
                    title="Độ ẩm"
                    num={sensorData.humidity}
                    icon="water_drop"
                    unit="%"
                    gradientColor={getGradientColor(ColorHue.BLUE, sensorSaturation.humidity)}
                />
                <NumberCard
                    title="Độ sáng"
                    num={sensorData.light}
                    icon="wb_sunny"
                    unit="%"
                    gradientColor={getGradientColor(ColorHue.YELLOW, sensorSaturation.light)}
                />
            </div>
            <div className="md:flex md:flex-row-reverse md:justify-end md:pl-4">

                <div className="flex justify-center md:w-2/6 md:block">
                    {
                        deviceLoading ?
                        (
                            <div>
                                <LightSkeletion/>
                                <LightSkeletion/>
                            </div>
                        )
                        : (
                            <div>
                                <div>
                                    <LightItem
                                        theme={theme}
                                        icon="lightbulb"
                                        active={ledStatus}
                                        type="led"
                                    />
                                </div>
                                <div>
                                    <LightItem
                                        theme={theme}
                                        icon="wind_power"
                                        active={fanStatus}
                                        type="fan"
                                    />
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="w-full md:w-4/6">
                    <Divider />
                    <div>
                        <ApexLineChart
                            sensorDatas={sensorDatas}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;