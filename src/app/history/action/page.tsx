"use client"
import { useEffect, useState } from "react"
import HistoryTable from "../components/HistoryTable"
import { parseUTC } from "@/app/utils/parseUTCTime";

interface ActionHistory { 
    id: string,
    device: string,
    status: string,
    time: string,
}

export default function Action(){ 
    const [actionHistories, setActionHistories] = useState<ActionHistory[]>([]);
    useEffect(() => {
        fetch("/api/action?num=100")
            .then(res => res.json())
            .then((data: ActionHistory[]) => {
                data = data.map((ah) => {
                    return {
                        ...ah,
                        time: parseUTC(ah.time)
                    }
                });
                setActionHistories(data);
            })
    }, []);
    return (
        <div>
            <HistoryTable
                columns={[
                    {key: 'id', label: "ID"},
                    {key: 'device', label: 'THIẾT BỊ'},
                    {key: 'status', label: 'TRẠNG THÁI'},
                    {key: 'time', label: 'THỜI GIAN'}
                ]}
                records={actionHistories}
            />
        </div>
    )
}