'use client'

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
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useMediaQuery } from "@uidotdev/usehooks";

import { employeeTableTitle, employeeTableValue } from "@/client/contants/ColumnsTitle"
import { Button } from "@/components/ui/button"
import { Trash2 } from 'lucide-react';
import { employee } from "@/client/util/ColumnsType"
import { Active, Career } from "@/client/contants/enum"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { ManagerTransRemoveEmployee } from "@/lib/actions/transformPoint.action";
import { useRouter } from "next/navigation";
import { RemoverEmploy, UpdateActive } from "@/lib/actions/user.action";
import { MoreHorizontal } from "lucide-react"




const convertCarrer = (career : string ) => {
  if(career === Career.employeeTrans) {
      return "Nhân viên"
  } else if (career === Career.employeeGather) {
      return "Nhân viên"
  } else if (career === Career.managerTrans) {
      return "Quản lý"
  } else if (career === Career.magegerGather) {
      return "Quản lý"
  } else if(career === Career.owner) {
      return "Quản lý cấp cao"
  }
}



export const UserColumns: ColumnDef<employee>[] = [
    { // ho va ten 
      accessorKey: employeeTableValue.name,
      header: ({ column }) => {
          // phan dau
        return (
          <div>
            {employeeTableTitle.name}
          </div>
        )
      },
      cell: ({ row }) => {
          // cac cot phia duoi
          return (
              <div className="lowercase">
                  {row.getValue(employeeTableValue.name)}
              </div>
          )
      },
    },{ // chuc vu
      accessorKey: employeeTableValue.career,
      header: () => {
          // phan dau
          return (
              <>
              {employeeTableTitle.career}
              </>
          )
      },
      cell: ({ row }) => {
          // cac cot phia duoi
          return (
              <div className="capitalize">
                  {convertCarrer(row.getValue(employeeTableValue.career))}
              </div>
          )
      }
    },
    {
        id: "actions",
        enableHiding: false,
        header: () => {
          return (
            <div className="">

            </div>
          )
        },
        cell: ({ row }) => {
          const employee = row.original
          const [open, setOpen] = React.useState(false)
          const isDesktop = useMediaQuery("(min-width: 768px)")
          const router = useRouter()

          const remove = async (id : string, workPlace : string) => {

            await ManagerTransRemoveEmployee(id, workPlace)
            
            
            setOpen(false)
            router.refresh()
          }

          if (isDesktop) {
            return (
              <div>
                {(row.original.career !== Career.magegerGather && row.original.career !== Career.managerTrans) 
                &&
                <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button variant="ghost" 
                        className="bg-white max-h-8"
                    >
                        <Trash2 />
                    </Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[425px]">
                <DialogHeader className="text-center">
                <div className="felx flex-col gap-3">
                  <div className="basis-1/4 flex justify-center">
                    <label>Xóa Nhân Viên: </label> 
                    <div className="font-bold ">{"  " + employee.name}</div>
                  </div>
                  <div className="basis-3/4 flex justify-center p-3">
                    <Button 
                      className="bg-delete"
                      onClick={()=> remove(employee.id, employee.workPlace)}>
                        Xóa
                      </Button>
                  </div>
                </div>
                </DialogHeader>
                </DialogContent>
                </Dialog>
              }
              </div>
            )
          }
     
          return (
            <div>
              {(row.original.career !== Career.magegerGather && row.original.career !== Career.managerTrans) 
                &&
              <Drawer open={open} onOpenChange={setOpen}>
                <DrawerTrigger asChild>
                  <Button variant="ghost" 
                        className="bg-white max-h-8"
                    >
                      <Trash2 />
                  </Button>
                </DrawerTrigger>

                <DrawerContent>
                <div className="felx flex-col min-h-40 gap-3">
                  <div className="basis-1/4 flex justify-center">
                    <label>Xóa Nhân Viên: </label> 
                    <div className="font-bold ">{"  " + employee.name}</div>
                  </div>
                  <div className="basis-3/4 flex justify-center p-3">
                    <Button 
                      className="bg-delete"
                      onClick={()=> remove(employee.id, employee.workPlace)}>
                        Xóa
                      </Button>
                  </div>
                </div>
                  
                  
                </DrawerContent>
              </Drawer>
              }
            </div>
          )
        },
      },
    
  ]

export const Owner : ColumnDef<employee>[] = [
  { // ho va ten 
    accessorKey: employeeTableValue.name,
    header: ({ column }) => {
        // phan dau
      return (
        <div>
          {employeeTableTitle.name}
        </div>
      )
    },
    cell: ({ row }) => {
        // cac cot phia duoi
        return (
            <div className="lowercase">
                {row.getValue(employeeTableValue.name)}
            </div>
        )
    },
  },{ // chuc vu
    accessorKey: employeeTableValue.career,
    header: () => {
        // phan dau
        return (
            <>
            {employeeTableTitle.career}
            </>
        )
    },
    cell: ({ row }) => {
        // cac cot phia duoi
        return (
            <div className="capitalize">
                {convertCarrer(row.getValue(employeeTableValue.career))}
            </div>
        )
    }
  },{ // dia diem lam viec
    accessorKey: "address",
    header: () => {
        // phan dau
        return (
            <>
            Địa Điểm
            </>
        )
    },
    cell: ({ row }) => {
        // cac cot phia duoi
        return (
            <div className="capitalize">
                {row.getValue("address")}
            </div>
        )
    }
  },  {
    id: "actions",
    enableHiding: false,
    header: () => {
      return (
        <div className="">

        </div>
      )
    },
    cell: ({ row }) => {
      const employee = row.original
      const [open, setOpen] = React.useState(false)
      const isDesktop = useMediaQuery("(min-width: 768px)")
      const router = useRouter()

      const remove = async (id : string, workPlace : string, career : string) => {
        await RemoverEmploy(id, workPlace, career)
        setOpen(false)
        router.refresh()
      }

      if (isDesktop) {
        return (
          <div>
            {(row.original.career !== Career.magegerGather && row.original.career !== Career.managerTrans) 
            &&
            <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="ghost" 
                    className="bg-white max-h-8"
                >
                    <Trash2 />
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
            <DialogHeader className="text-center">
            <div className="felx flex-col gap-3">
              <div className="basis-1/4 flex justify-center">
                <label>Xóa Nhân Viên: </label> 
                <div className="font-bold ">{"  " + employee.name}</div>
              </div>
              <div className="basis-3/4 flex justify-center p-3">
                <Button 
                  className="bg-delete"
                  onClick={()=> remove(employee.id, employee.workPlace, employee.career)}>
                    Xóa
                  </Button>
              </div>
            </div>
            </DialogHeader>
            </DialogContent>
            </Dialog>
          }
          </div>
        )
      }
 
      return (
        <div>
          {(row.original.career !== Career.magegerGather && row.original.career !== Career.managerTrans) 
            &&
          <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
              <Button variant="ghost" 
                    className="bg-white max-h-8"
                >
                  <Trash2 />
              </Button>
            </DrawerTrigger>

            <DrawerContent>
            <div className="felx flex-col min-h-40 gap-3">
              <div className="basis-1/4 flex justify-center">
                <label>Xóa Nhân Viên: </label> 
                <div className="font-bold ">{"  " + employee.name}</div>
              </div>
              <div className="basis-3/4 flex justify-center p-3">
                <Button 
                  className="bg-delete"
                  onClick={()=> remove(employee.id, employee.workPlace, employee.career)}>
                    Xóa
                  </Button>
              </div>
            </div>
              
              
            </DrawerContent>
          </Drawer>
          }
        </div>
      )
    },
  },{// trang thai hoan thanh hay huy don hang
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const [notadd, setNotadd] = React.useState(row.original.active== Active.notadd)
      const [lock, setLock] = React.useState(row.original.active === Active.lock)
      // const [cancel, setCancel] = React.useState(row.original.statusIsDone === Status.cancel)
      // const [paynot, setPaynot] = React.useState(row.original.statusIsDone === Status.paynot)
      const updateNotadd = async (value : boolean) => {
        if(value === false) {
          setNotadd(false)
        } else {
          setNotadd(true)
        }
        
        if(lock === true) {
          setLock(false)
        }
        const final = value ? Active.notadd : Active.normal
        await UpdateActive(final, row.original.id)
        console.log("sua o day ")
      }
      const updateLock = async (value :boolean) => {
        if(value === false) {
          setLock(false)
        } else {
          setLock(true)
        }
        if(notadd === true) {
          setNotadd(false)
        }
        const final = value ? Active.lock : Active.normal
        await UpdateActive(final, row.original.id)
        console.log("sua nek ")
        
      }
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Cấp Quyền</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Quyền</DropdownMenuLabel>
            {
              (row.original.career === Career.magegerGather || row.original.career === Career.managerTrans) 
              && 
              <DropdownMenuCheckboxItem
              checked={notadd}
              onClick={()=>updateNotadd(!notadd)}
              >
                Không được tuyển Nv
              </DropdownMenuCheckboxItem>
            }
            <DropdownMenuCheckboxItem
            checked={lock}
            onClick={()=>updateLock(!lock)}
            >
                Khóa Hoạt Động
            </DropdownMenuCheckboxItem>
            
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
},
]

