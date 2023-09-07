"use client"
import { useTheme } from "@/app/hooks/useTheme"
import HistoryTable from "../components/HistoryTable"

interface SensorRecord { 
    id: string,
    temporary: number,
    humidity: number,
    light: number,
    time: string,
}

export default function SensorData(){
    const records: SensorRecord[] = [
        {
            id: 'x',
            temporary: 20,
            humidity: 30,
            light: 80,
            time: '20-10-2023'
        }
    ]
    for(let i = 0; i < 32; i++){
        let recordx = {
            ...records[i],
            id: "x" + i,
        }
        records.push(recordx);
    }
    return (
        <div>
            <HistoryTable
                columns={[
                    {key: 'id', label: "ID"},
                    {key: 'temporary', label: "NHIỆT ĐỘ"},
                    {key: 'humidity', label: "ĐỘ ẨM"},
                    {key: 'light', label: "ĐỘ SÁNG"},
                    {key: 'time', label: "THỜI GIAN"},
                ]}
                records={records}
            />
        </div>
    )
}
