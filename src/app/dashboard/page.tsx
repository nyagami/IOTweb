"use client";
import { useTheme } from "../hooks/useTheme";
import { useCallback, useEffect, useState, useRef } from "react";
import { io } from 'socket.io-client'
import ApexLineChart from "./components/Charts/LineChart";

import { Divider } from "@nextui-org/react";
import { NumberCard } from "./components/Cards";
import LightItem from "./components/Lights";
import { SensorData } from "../api/sensor/route";
import { DeviceStatus } from "../api/action/route";
import { parseUTC } from "../utils/parseUTCTime";

interface TemporatureColor {
    backgroundImage: string,
    boxShadow: string,
}

const Dashboard = () => {

    const [temperature, setTemperature] = useState<number>(0);
    const [temporatureColor, setTemperatureColor] = useState({
        backgroundImage: "linear-gradient(to right, #667eea, #764ba2, #6B8DD6, #8E37D7)",
        boxShadow: "0 4px 15px 0 rgba(116, 79, 168, 0.75)",
    })
    const [humidity, setHumidity] = useState<number>(0);
    const [light, setLight] = useState<number>(0);
    const [sensorDatas, setSensorDatas] = useState<SensorData[]>([]);
    const [deviceStatus, setDeviceStatus] = useState<DeviceStatus>({name: "", status: "", time: ""});
    const getTemperatureColor = useCallback((temporature: number): TemporatureColor => {
        if (temporature < 0) {
            return {
                backgroundImage: "linear-gradient(to right, #29323c, #485563, #2b5876, #4e4376)",
                boxShadow: "0 4px 15px 0 rgba(45, 54, 65, 0.75)"
            }
        }
        if (temporature < 9) {
            return {
                backgroundImage: "linear-gradient(to right, #667eea, #764ba2, #6B8DD6, #8E37D7)",
                boxShadow: "0 4px 15px 0 rgba(116, 79, 168, 0.75)",
            }
        }
        if (temporature < 20) {
            return {
                backgroundImage: "linear-gradient(to right, #25aae1, #4481eb, #04befe, #3f86ed)",
                boxShadow: '0 4px 15px 0 rgba(65, 132, 234, 0.75)',
            }
        }
        if (temporature < 30) {
            return {
                backgroundImage: "linear-gradient(to right, #f5ce62, #e43603, #fa7199, #e85a19)",
                boxShadow: "0 4px 15px 0 rgba(229, 66, 10, 0.75)"
            }
        }
        return {
            backgroundImage: "linear-gradient(to right, #eb3941, #f15e64, #fc9fa2, #f7686f)",
            boxShadow: "0 5px 15px rgba(242, 97, 103, .4)"
        }
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
            setTemperature(data[data.length - 1].temperature);
            setTemperatureColor(getTemperatureColor(data[data.length - 1].temperature));
            setHumidity(data[data.length - 1].humidity);
            setLight(data[data.length - 1].light);
            setSensorDatas(data);
        });
        fetch("/api/action", {
            method: "POST"
        });
    }, []);

    useEffect(() => {
        const socket = io();
        socket.on("action", (data) => {
            console.log("action", data);
        })
        socket.on("sensor", (data: SensorData) => {
            data.time = parseUTC(data.time);
            setTemperature(data.temperature);
            setTemperatureColor(getTemperatureColor(data.temperature));
            setHumidity(data.humidity);
            setLight(data.light);
            let datas = sensorDatas.slice(-9).concat([data]);
            setSensorDatas(datas);
        })

        // request page -> get current status -> action-request-get
        // click -> change stauts -> action-request-post
        // on message -> if(post) -> save to db -> change state

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
                            num={temperature}
                            icon="thermostat"
                            unit="°C"
                            backgroundImage={temporatureColor.backgroundImage}
                            boxShadow={temporatureColor.boxShadow}
                        />
                        <NumberCard
                            title="Độ ẩm"
                            num={humidity}
                            icon="water_drop"
                            unit="%"
                            backgroundImage="linear-gradient(to right, #25aae1, #4481eb, #04befe, #3f86ed)"
                            boxShadow="0 4px 15px 0 rgba(65, 132, 234, 0.75)"
                        />
                        <NumberCard
                            title="Độ sáng"
                            num={light}
                            icon="wb_sunny"
                            unit="%"
                            backgroundImage="linear-gradient(to right, #f5ce62, #e43603, #fa7199, #e85a19)"
                            boxShadow="0 4px 15px 0 rgba(229, 66, 10, 0.75)"
                        />
                    </div>
            <div className="md:flex md:flex-row-reverse md:justify-end md:pl-4">
                    <div className="flex justify-center md:w-2/6 md:block">
                        <div>
                            <LightItem
                                theme={theme}
                                icon="lightbulb"
                                active={deviceStatus.status === "on"}
                            />
                        </div>
                        <div>
                            <LightItem
                                theme={theme}
                                icon="wind_power"
                                active={deviceStatus.status === "on"}
                            />
                        </div>
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