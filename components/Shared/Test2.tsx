"use client"

import * as React from "react"
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
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { orderTableInCustom } from "@/client/util/DataType"
import { orderTableTitle, orderTableValue } from "@/client/contants/OrderOption"

const data: orderTableInCustom[] = [
  {
    description : "tui xach",
    address: "ha noi",
    phone : "123456",
    receiverName : "quyen",
  },
  {
    description : "tui xach",
    address: "ha noi",
    phone : "123456",
    receiverName : "quyen",
  },
  {
    description : "tui xach",
    address: "ha noi",
    phone : "123456",
    receiverName : "quyen",
  },
  {
    description : "chuot khong day",
    address: "ha noi",
    phone : "123456",
    receiverName : "quyen",
  },
  {
    description : "tui xach",
    address: "ha noi",
    phone : "123456",
    receiverName : "quyen",
  },
]



export const columns: ColumnDef<orderTableInCustom>[] = [
  {
    accessorKey: orderTableValue.description,
    header: ({ column }) => {
        // phan dau
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
            {orderTableTitle.address}
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
        // cac cot phia duoi
        return (
            <div className="lowercase">
                {row.getValue(orderTableValue.description)}
            </div>
        )
    },
  },{
    accessorKey: orderTableValue.address,
    header: () => {
        // phan dau
        return (
            <>
            {orderTableTitle.address}
            </>
        )
    },
    cell: ({ row }) => {
        // cac cot phia duoi
        return (
            <div className="capitalize">
                {row.getValue(orderTableValue.address)}
            </div>
        )
    }
  },{
    accessorKey :orderTableValue.phone,
    header : () => {
        return (
            <div>
                {orderTableTitle.phone}
            </div>
        )
    },
    cell: ({row}) => {
        return (
            <div>
                {row.getValue(orderTableValue.phone)}
            </div>
        )
    }
  },
  {
    accessorKey: orderTableValue.receiverName,
    header: () => {
        // phan dau 
        return (
            <div className="text-right">
                {orderTableTitle.recieverName}
            </div>
        )
    },
    cell: ({ row }) => {
        // cac cot phia duoi
        return (
            <div className="text-right font-medium">
                {row.getValue(orderTableValue.receiverName)}
            </div>
        )
    },
  },
  
]

export  default function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="thong tin..."
          value={(table.getColumn("description")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("description")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                    {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                    )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) 
            : 
            (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      
    </div>
  )
}
