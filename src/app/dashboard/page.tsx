"use client";
import { useTheme } from "../hooks/useTheme";
import { useEffect, useState } from "react";
import { getRandom } from "../utils/getRandom";

import ApexLineColumnChart from "./components/Charts/LineColumeChart";
import ApexLineChart from "./components/Charts/LineChart";
import ApexColumnAreaChart from "./components/Charts/ColumnAreaChart";

import { NumberCard } from "./components/Cards";
import SwitchItem from "../components/Switch";
import LightItem from "./components/Lights";

const Dashboard = () => {

    const [temporature, setTemporature] = useState(getRandom(30, 50));
    const [humidity, setHumidity] = useState(getRandom(50, 100));
    const [light, setLight] = useState(getRandom(10, 100));

    useEffect(() => {
        const randomInterval = setInterval(() => {
            setTemporature(getRandom(30, 50));
            setHumidity(getRandom(50, 100));
            setLight(getRandom(10, 30));
        }, 4000);

        return () => clearInterval(randomInterval);
    })
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
                    num={temporature}
                    icon="thermostat"
                    unit="°C"
                    backgroundImage="linear-gradient(to right, #eb3941, #f15e64, #fc9fa2, #f7686f)"
                    boxShadow="0 5px 15px rgba(242, 97, 103, .4)"
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
            <div className="flex flex-row-reverse justify-end">
                <div>
                    <div>
                        <LightItem
                            theme={theme}
                        />
                    </div>
                    <div>
                        <LightItem
                            theme={theme}
                        />
                    </div>
                </div>
                <div className="w-4/5">
                    <div><ApexLineColumnChart /></div>
                    <div><ApexColumnAreaChart /></div>
                    <div><ApexLineChart /></div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;