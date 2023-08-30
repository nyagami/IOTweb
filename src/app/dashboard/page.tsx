"use client";
import {NumberCard} from "./components/Cards";
import { useTheme } from "../hooks/useTheme";
import { useEffect, useState } from "react";
import { getRandom } from "../utils/getRandom";

import ApexLineColumnChart from "./components/Charts/LineColumeChart";
import ApexLineChart from "./components/Charts/LineChart";
import ApexColumnAreaChart from "./components/Charts/ColumnAreaChart";

import SwitchItem from "../components/Switch";

const Dashboard = () => {

    const [temporature, setTemporature] = useState(getRandom(0, 50));
    const [humidity, setHumidity] = useState(getRandom(0, 100));
    const [light, setLight] = useState(getRandom(0, 30));

    useEffect(() => {
        const randomInterval = setInterval(() => {
            setTemporature(getRandom(0, 50));
            setHumidity(getRandom(0, 100));
            setLight(getRandom(0, 30));
        }, 4000);

        return () => clearInterval(randomInterval);
    })
    const theme = useTheme();
    return (
        <div style={{
            backgroundColor: theme.background
        }}>
            <div className="flex w-full justify-evenly py-10">
                <NumberCard
                    title="Nhiệt độ"
                    num={temporature}
                    icon="thermostat"
                    unit="°C"
                />
                <NumberCard
                    title="Độ ẩm"
                    num={humidity}
                    icon="water_drop"
                    unit="%"
                />
                <NumberCard
                    title="Độ sáng"
                    num={light}
                    icon="wb_sunny"
                    unit="%"
                />
            </div>
            <div className="flex">
                <div className="w-4/5">
                    <div><ApexLineColumnChart/></div>
                    <div><ApexColumnAreaChart/></div>
                    <div><ApexLineChart/></div>
                </div>
                <div>
                    <div>
                        <SwitchItem
                            theme={theme}
                            label=""
                        />
                    </div>
                    <div>
                        <SwitchItem
                            theme={theme}
                            label=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;