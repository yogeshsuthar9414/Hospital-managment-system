import React, { useState } from "react";
import { Search, NavArrowDown, NavArrowUp } from "iconoir-react";
// import Pagination from "../../../components/datatable/Pagination";
// import { Button } from "../../../components/ui/Button";
// import Checkbox from "../../../components/ui/Checkbox";
// import Badge from "../../../components/ui/Badge";
// import { Checkbox } from "antd";

type dataProps = {
    data?: any;
    columns?: any;
    path?: any;
    dataPerpage?: any;
    checkbox?: boolean;
    isSearchBar?: boolean;
    children: (child: any) => any;
    rowClick?: () => void;
    selectData?: any;
    setSelectData?: any;
};

export const Datatable: React.FC<dataProps> = ({
    data,
    columns,
    path,
    checkbox,
    isSearchBar,
    children,
    rowClick,
    selectData,
    setSelectData
}) => {

    const [searchTerm, setSearchTerm] = useState<string>("");
    // const [currentPage, setCurrentPage] = useState<number>(1);
    // const [itemsPerPage, setItemsPerPage] = useState<number>(10);
    const [sortColumn, setSortColumn] = useState<any>(null);
    const [sortDirection, setSortDirection] = useState<string | null>(null);
    // const [selectData, setSelectData] = React.useState<readonly number[]>([]);

    // Function to handle sorting
    const handleSort = (column: string) => {
        if (sortColumn === column) {
            setSortDirection((prevDirection: string | null) =>
                prevDirection === "asc" ? "desc" : "asc"
            );
        } else {
            setSortColumn(column);
            setSortDirection("asc");
        }
    };

    // Helper function to filter the data based on the search term
    const filterData = (data: string[]) => {
        return isSearchBar ? data.filter((item) =>
            Object.values(item).some((value) =>
                value.toString().toLowerCase().includes(searchTerm.toLowerCase())
            )
        ) : data;
    };

    // Sort the filtered data
    const sortedData = sortColumn
        ? filterData(data).sort((a, b) => {
            const aValue = a[sortColumn];
            const bValue = b[sortColumn];

            if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
            if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
            return 0;
        })
        : filterData(data);

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected = data.map((n: any) => n.id);
            setSelectData(newSelected);
            return;
        }
        setSelectData([]);
    };

    const isSelected = (id: number) => selectData?.indexOf(id) !== -1;

    const handleClick = (event: React.MouseEvent<unknown>, row: any) => {
        const selectedIndex = selectData?.indexOf(row);
        let newSelected: readonly number[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selectData, row);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selectData?.slice(1));
        } else if (selectedIndex === selectData?.length - 1) {
            newSelected = newSelected.concat(selectData?.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selectData?.slice(0, selectedIndex),
                selectData.slice(selectedIndex + 1)
            );
        }
        setSelectData(newSelected);
    };

    return (
        <div>
            <>
                {isSearchBar &&
                    <div className="table-heading flex items-center gap-2">
                        <div className="searchable-data float-start sm:float-end sm:mt-0 flex">
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    name="searchAgentGroup"
                                    className="searchTableRecord absolute"
                                    placeholder="Search"
                                    value={searchTerm}
                                    onChange={(e: any) => setSearchTerm(e.target.value)}
                                />
                                <div
                                    className="flex justify-center items-center absolute"
                                    style={{ width: 37, height: 37 }}
                                >
                                    <Search className="text-[var(--dark)]" />
                                </div>
                            </div>
                        </div>
                    </div>
                }

                <div className="overflow-x-auto mt-4">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden ">
                            <table className="min-w-full divide-y divide-slate-100 table-fixed ">
                                <thead className=" border-t border-slate-100">
                                    <tr className="bg-zinc-100 rounded-md">
                                        {checkbox && (
                                            <th className="w-[53px] p-3">
                                                {/* <Checkbox checked={selectData?.length === sortedData.length} onChange={(e: any) => handleSelectAllClick(e)} /> */}
                                            </th>
                                        )}
                                        {columns.map((column: any, index: number) => {
                                            return (
                                                <th
                                                    key={index}
                                                    onClick={() => handleSort(column.field)}
                                                    className="p-3 text-sm"
                                                >
                                                    <div className="flex justift-between items-center text-sm text-nowrap">
                                                        {column.header}
                                                        {sortColumn === column.field && (
                                                            <span className="ms-auto">
                                                                {sortDirection === "asc" ? (
                                                                    <NavArrowDown />
                                                                ) : (
                                                                    <NavArrowUp />
                                                                )}
                                                            </span>
                                                        )}
                                                    </div>
                                                </th>
                                            );
                                        })}
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-slate-100">
                                    {sortedData.map((row: any, rowIndex: number) => {
                                        const isItemSelected = isSelected(row.id);
                                        return (
                                            <tr key={rowIndex} style={{ cursor: "pointer" }}>
                                                {checkbox && (
                                                    <td className="p-3">
                                                        <div className="rowCheck text-center">
                                                            {/* <Checkbox
                                                                checked={isItemSelected}
                                                                value={isItemSelected}
                                                                onChange={(event: any) => {
                                                                    handleClick(event, row.id);
                                                                }}
                                                            /> */}
                                                        </div>
                                                    </td>
                                                )}
                                                {columns.map((column: any, colIndex: number) => {
                                                    return (
                                                        <td
                                                            key={colIndex}
                                                            className="p-3 text-sm text-[var(--dark)]"
                                                            onClick={rowClick}
                                                        >
                                                            {children({ row: row, column: column })}
                                                        </td>
                                                    );
                                                })}
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* <Pagination
                    itemsPerPage={itemsPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                    setItemsPerPage={setItemsPerPage}
                    totalPages={totalPages}
                /> */}
            </>
        </div>
    );
};
