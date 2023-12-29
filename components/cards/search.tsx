import { orderTableValue } from "@/client/contants/ColumnsTitle";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
  } from "@tanstack/react-table"

interface Props {
    table : any,
    searchColumns : string,
}

const PlaceTitle = (searchColumns : string) => {
  if (searchColumns === "description") {
    return "Thông Tin"
  } else if (searchColumns === "name") {
    return "Họ Tên"
  }
  return ".."
}

const Search = ({table, searchColumns }: Props) => {
  const placehol = PlaceTitle(searchColumns)
    return (
        <>
        <div className="flex flex-col">
        <div className="ml-3">
          {"Tìm "+ placehol}
        </div>
        <Input
          placeholder= {placehol}
          // value={(table.getColumn(searchColumns)?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn(searchColumns)?.setFilterValue(event.target.value)
          }
          className="max-w-sm mt-1"
        />
        </div>
        </>
    )
}

export default Search;