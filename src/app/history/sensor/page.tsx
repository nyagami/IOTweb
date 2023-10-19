"use client"
import { parseUTC } from "@/app/utils/parseUTCTime";
import HistoryTable from "../components/HistoryTable"

export default function SensorDataPage() {
    return (
        <div>
            <HistoryTable
                columns={[
                    { key: 'id', label: "ID" },
                    { key: 'dust', label: 'ĐỘ BỤI'},
                    { key: 'temperature', label: "NHIỆT ĐỘ" },
                    { key: 'humidity', label: "ĐỘ ẨM" },
                    { key: 'light', label: "ĐỘ SÁNG" },
                    { key: 'time', label: "THỜI GIAN" },
                ]}
                search={async (term: string) => {
                    const res = await fetch("/api/sensor?num=1000&key=" + term);
                    const records: any[] = await res.json();
                    const timedRecords = records.map(d => {
                        return {
                            ...d,
                            time: parseUTC(d.time)
                        }
                    })
                    return timedRecords;
                }}
            />
        </div>
    )
}
