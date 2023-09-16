"use client"
import { useState, useEffect } from 'react'
import HistoryTable from "../components/HistoryTable"
import { SensorData } from '@/app/api/sensor/route'

export default function SensorData(){
    const [sensorDatas, setSensorDatas] = useState<SensorData[]>();
    useEffect(() => {
        fetch('/api/sensor?num=100')
            .then(res => res.json())
            .then(data => setSensorDatas(data));
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
