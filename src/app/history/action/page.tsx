"use client"
import HistoryTable from "../components/HistoryTable"

interface ActionRecord { 
    id: string,
    device: string,
    status: string,
    time: string,
}

export default function Action(){ 
    const records: ActionRecord[] = [ 
        {
            id: 'a',
            device: 'xP-123',
            status: 'off',
            time: '20-10-2023'
        }
    ]
    return (
        <div>
            <HistoryTable
                columns={[
                    {key: 'id', label: "ID"},
                    {key: 'device', label: 'THIẾT BỊ'},
                    {key: 'status', label: 'TRẠNG THÁI'},
                    {key: 'time', label: 'THỜI GIAN'}
                ]}
                records={records}
            />
        </div>
    )
}