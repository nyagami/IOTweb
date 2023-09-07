import { useState } from "react";
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Pagination, getKeyValue } from "@nextui-org/react"
import { useTheme } from "@/app/hooks/useTheme";

export interface Column {
    key: string,
    label: string,
}

export interface HistoryTableProps {
    columns: Column[],
    records: Record<string, any>[],
}


const HistoryTable = ({
    columns,
    records
}: HistoryTableProps) => {
    const [displayRecords, setDisplayRecords] = useState(records.slice(0, 10));
    return (
        <div className="py-10">
            <div className="flex justify-center w-full mb-5">
                <Table aria-label="sensor table" className="w-full md:w-1/2">
                    <TableHeader columns={columns}>
                        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                    </TableHeader>
                    <TableBody emptyContent={"Chưa có dữ liệu"} items={displayRecords}>
                        {(record) => (
                            <TableRow key={record.id}>
                                {(columnKey) => <TableCell>{getKeyValue(record, columnKey)}</TableCell>}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex justify-center">
                <Pagination
                    total={Math.ceil(records.length / 10)}
                    initialPage={1}
                    onChange={(page) => {
                        setDisplayRecords(records.slice((page-1) * 10, page * 10));
                    }}
                />
            </div>
        </div>
    )
}

export default HistoryTable