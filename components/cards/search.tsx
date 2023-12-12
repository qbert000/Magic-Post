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
    return "Thong tin"
  } else if (searchColumns === "name") {
    return "ten"
  }
  return ".."
}

const Search = ({table, searchColumns }: Props) => {
  const placehol = PlaceTitle(searchColumns)
    return (
        <>
        <Input
          placeholder= {placehol}
          // value={(table.getColumn(searchColumns)?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn(searchColumns)?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        </>
    )
}

export default Search;