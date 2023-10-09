import { useCallback, useEffect, useState } from "react";
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Pagination, getKeyValue, SortDescriptor, Input } from "@nextui-org/react"

export interface Column {
    key: string,
    label: string,
}

export interface HistoryTableProps {
    columns: Column[],
    search(term: string): Promise<Record<string, any>[]>,
}

const HistoryTable = ({
    columns,
    search,
}: HistoryTableProps) => {
    const [page, setPage] = useState(1);
    const [records, setRecords] = useState<Record<string, any>[]>([]);
    const [displayRecords, setDisplayRecords] = useState<Record<string, any>[]>([]);
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({column: 'id', direction: 'descending'});
    const [searchTerm, setSearchTerm] = useState('');
    const pageDisplay = useCallback((page: number, r: Record<string, any>[]) => {
        setPage(page);
        setDisplayRecords(r.slice((page - 1) * 10, page * 10));
    }, []);
    const onSearch = useCallback(async (term: string) => {
        const res = await search(term);
        setRecords(res);
        pageDisplay(1, res);
    }, []);
    useEffect(() => {
        onSearch(searchTerm);
    }, []);
    return (
        <div className="py-10">
            <div className="w-full mb-5 text-center">
                <Input
                    className="w-full md:w-1/2 px-2 mb-2 mx-auto"
                    placeholder="Nhập từ khoá..."
                    type="search"
                    size="lg"
                    startContent={(<span className="material-icons">search</span>)}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => {
                        if(e.key === 'Enter'){
                            onSearch(searchTerm);
                        }
                    }}
                />
                <Table aria-label="sensor table" className="mx-auto w-full md:w-1/2"
                    sortDescriptor={sortDescriptor}
                    onSortChange={(descriptor) => {
                        const sortedRecords = records.sort((a, b) => {
                            let first = a[descriptor.column || 'id'];
                            if(typeof first === 'string') first = first.replace(/[-\s:]/g, '');
                            let second = b[descriptor.column || 'id'];
                            if(typeof second === 'string') second = second.replace(/[-\s:]/g, '');
                            let cmp = (parseInt(first) || first) < (parseInt(second) || second) ? -1 : 1;
                            if (descriptor.direction === "descending") {
                                cmp *= -1;
                            }
                            return cmp
                        });
                        setRecords(sortedRecords);
                        setSortDescriptor(descriptor);
                        pageDisplay(page, sortedRecords);
                    }}
                >
                    <TableHeader columns={columns}>
                        {(column) =>
                            <TableColumn key={column.key} allowsSorting={true}>
                                {column.label}
                            </TableColumn>
                        }
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
                    page={page}
                    onChange={(p) => pageDisplay(p, records)}
                />
            </div>
        </div>
    )
}

export default HistoryTable