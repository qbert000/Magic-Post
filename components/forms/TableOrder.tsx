'use client'

import { orderTableTitle } from "@/client/contants/OrderOption"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

interface Props {
    listOrder: any[]
}

const TableOrder =  ({listOrder} : Props) => {

    return (
        <>
        <Table>
        <TableHeader>
            <TableRow>
            <TableHead className="w-[100px]">{orderTableTitle.description}</TableHead>
            <TableHead>{orderTableTitle.address}</TableHead>
            <TableHead>{orderTableTitle.phone}</TableHead>
            <TableHead className="">{orderTableTitle.recieverName}</TableHead>
            </TableRow>
        </TableHeader>
        
        <TableBody>
        { listOrder.map((order:any) => {
            return (
                <TableRow>
                    <TableCell>{order.description}</TableCell>
                    <TableCell>{order.city},{order.district},{order.ward}</TableCell>
                    <TableCell>{order.phone}</TableCell>
                    <TableCell>{order.receiverName}</TableCell>
                </TableRow>
            )
        })}
            
        </TableBody>
        </Table>
        
        
        </>
    )
}

export default TableOrder;