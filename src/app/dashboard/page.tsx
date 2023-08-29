"use client";
import Card, {NumberCard} from "./components/Card";
import { useTheme } from "../hooks/useTheme";
import { useState } from "react";
import { getRandom } from "../utils/getRandom";

const Dashboard = () => {

    const [temporature, setTemporature] = useState(getRandom(0, 50));
    const [humidity, setHumidity] = useState(getRandom(0, 100));
    const [light, setLight] = useState(getRandom(0, 30));

    // setInterval(() => {
    //     setTemporature(getRandom(0, 50));
    //     setHumidity(getRandom(0, 100));
    //     setLight(getRandom(0, 30));
    // }, 4000);
    const them = useTheme();
    return (
        <div>
            <div className="flex w-full justify-evenly mt-10 ">
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
        </div>
    )
}

export default Dashboard;