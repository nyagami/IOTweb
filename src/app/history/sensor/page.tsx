"use client"
import { useState, useEffect } from 'react'
import HistoryTable from "../components/HistoryTable"
import { SensorData } from '@/app/api/sensor/route';
import { parseUTC } from '@/app/utils/parseUTCTime';

export default function SensorDataPage(){
    const [sensorDatas, setSensorDatas] = useState<SensorData[]>();
    useEffect(() => {
        fetch('/api/sensor?num=200')
            .then(res => res.json())
            .then((data: SensorData[]) => {
                data = data.map((sd) => {
                    return {
                        ...sd,
                        time: parseUTC(sd.time)
                    }
                })
                setSensorDatas(data);
            });
    }, []);
    return (
        <div>
            {
                sensorDatas ? 

                <HistoryTable
                    columns={[
                        {key: 'id', label: "ID"},
                        {key: 'temperature', label: "NHIỆT ĐỘ"},
                        {key: 'humidity', label: "ĐỘ ẨM"},
                        {key: 'light', label: "ĐỘ SÁNG"},
                        {key: 'time', label: "THỜI GIAN"},
                    ]}
                    records={sensorDatas}
                />
                : null
            }
        </div>
    )
}
