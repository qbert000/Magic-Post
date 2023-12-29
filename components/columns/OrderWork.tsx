'use client'

import * as React from "react"
import {
  ColumnDef,
  
} from "@tanstack/react-table"
import { orderTableTitle, orderTableValue } from "@/client/contants/ColumnsTitle"
import {  orderManager } from "@/client/util/ColumnsType"
import { Status } from "@/client/contants/enum"


const convertStatus = (status : number,point : boolean | null, transpoint : boolean) => {
    if (transpoint) {
        if(status === Status.inventoryted) {
            return "Tiếp Nhận"
        } else if (status === Status.gatherChecked) {
            return "Đã gửi đi"
        } else if (status === Status.done && !point ) {
            return "Gửi Thành Công"
        } else if (status === Status.paynot && !point ) {
            return "Chưa hoàn tiền"
        } else if (status === Status.cancel && !point ) {
            return "Đơn hủy"
        } else {
            return "Đã gửi đi"
        }
    } else {
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
    
}


// cho manager 
export const orderWork: ColumnDef<orderManager>[] = [
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
    }, { // cot ngay gui toi
        accessorKey: "statusToPoint",
        header : () => {
            return (
                <div>
                    {"Ngày Tới"}
                </div>
            )
        },
        cell : ({row}) => {
            const formattedDate : Date = row.getValue("statusToPoint");
            const s = formattedDate ? formattedDate.toLocaleDateString() : "";
            return (
                <div>
                    {s}
                </div>
            )
        },
    }, { // cot ngay gui di
        accessorKey: "statusPointSend",
        header : () => {
            return (
                <div>
                    {"Ngày Chuyển Phát"}
                </div>
            )
        },
        cell : ({row}) => {
            const formattedDate : Date = row.getValue("statusPointSend");
            const s = formattedDate ? formattedDate.toLocaleDateString() : ""; 
            return (
                <div>
                    {s==="" ? "Chưa gửi" : s}
                </div>
            )
        },
    },{ // cot so dien thoai
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
    },{ // cot nguoi nhan
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
              <div className="text-right ">
                  {row.getValue(orderTableValue.receiverName)}
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
            const status : string = convertStatus(row.getValue("statusIsDone"), row.original.statusPoint, true)
            return (
                <div className="text-center">
                    {status}
                </div>
            )
        }
    }
    
]
// cho quan ly tap ket
export const orderWork1: ColumnDef<orderManager>[] = [
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
    },{ // cot ngay gui toi
       accessorKey: "statusToPoint",
          header : () => {
              return (
                  <div>
                      {"Ngày Tới"}
                  </div>
              )
          },
          cell : ({row}) => {
              const formattedDate : Date = row.getValue("statusToPoint");
              const s = formattedDate ? formattedDate.toLocaleDateString() : "";
              return (
                  <div>
                      {s}
                  </div>
              )
          },
    }, { // cot ngay gui di
        accessorKey: "statusPointSend",
          header : () => {
              return (
                  <div>
                      {"Ngày Chuyển Phát"}
                  </div>
              )
          },
          cell : ({row}) => {
              const formattedDate : Date = row.getValue("statusPointSend");
              const s = formattedDate ? formattedDate.toLocaleDateString() : "";
              return (
                  <div>
                      {s==="" ? "Chưa gửi" : s}
                  </div>
              )
          },
    },{ // cot so dien thoai
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
    },{ // cot nguoi nhan
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
                <div className="text-right ">
                    {row.getValue(orderTableValue.receiverName)}
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
            const status : string = convertStatus(row.getValue("statusIsDone"), null, false)
            return (
                <div className="text-center">
                    {status}
                </div>
            )
        }
    }
    
]
  