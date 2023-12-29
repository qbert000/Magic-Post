'use client'

import * as React from "react"
import {
  ColumnDef,
  
} from "@tanstack/react-table"
import { orderTableTitle, orderTableValue } from "@/client/contants/ColumnsTitle"
import {  orderOwner } from "@/client/util/ColumnsType"
import { Status } from "@/client/contants/enum"

const convertStatus = (
    status : number,
    point : boolean | null, 
    transpoint : boolean) => {
        if(status === Status.inventoryted) {
            return "Tiếp Nhận"
        } else if (status === Status.gatherChecked) {
            return "Đã gửi đi"
        } else if (status === Status.done  ) {
            return "Gửi Thành Công"
        } else if (status === Status.paynot ) {
            return "Chưa hoàn tiền"
        } else if (status === Status.cancel  ) {
            return "Đơn hủy"
        } 
        if (status === Status.gatherSend) {
            return "Tiếp Nhận"
        } else if (status === Status.gatherPassGatherCheck){
            return "Đã gửi đi"
        } else if (status === Status.gatherSendTrans) {
            return "Tiếp nhận"
        }else if (status === Status.gatherPassTransCheck) {
            return "Đã gửi đi"
        } else if (status === Status.transSendUser) {
            return "Tiếp nhận"
        } else {
            return "Đã gửi đi"
        }

    
}

export const orderOzi: ColumnDef<orderOwner>[] = [
    { // cot thong tin 
      accessorKey: orderTableValue.description,
      header: ({ column }) => {
          // phan dau
        return (
          <div>
            {orderTableTitle.description}
          </div>
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
    },{ // cot dia chi
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
    },{ // cot so dien thoai
      accessorKey :orderTableValue.phone,
      header : () => {
          return (
              <div className="text-center">
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
    },{ // cot nguoi nhan
      accessorKey: orderTableValue.receiverName,
      header: () => {
          // phan dau 
          return (
              <div className="text-center">
                  {orderTableTitle.recieverName}
              </div>
          )
      },
      cell: ({ row }) => {
          // cac cot phia duoi
          return (
              <div className="text-center ">
                  {row.getValue(orderTableValue.receiverName)}
              </div>
          )
      },
    },{ // cot dia diem
        accessorKey: "point",
        header: () => {
            // phan dau 
            return (
                <div className="text-center">
                    {"Địa Điểm"}
                </div>
            )
        },
        cell: ({ row }) => {
            // cac cot phia duoi
            return (
                <div className="text-center ">
                    {row.getValue("point")}
                </div>
            )
        },
      }, {// cot trang thai
        accessorKey : orderTableValue.status,
        header : () => {
            return (
                <div>
                    {orderTableTitle.status}
                </div>
            )
        },
        cell : ({row}) => {
            const status : string = convertStatus(row.getValue("status"),false, false )
            return (
                <div className="text-center">
                    {status}
                </div>
            )
        }
    }
    
]