'use client'
import Table, { IColumn } from "@/components/ui/table";
import { IGoods } from "@/lib/types/goods.type";
import {
    TrashIcon
} from "@heroicons/react/24/solid";
import moment from "moment";
import { FC } from "react";


interface Props {
    data: IGoods[]
}

const columns: IColumn[] = [
    {
        name: "id",
        header: "ID",
        width: 100
    },
    {
        name: "description",
        header: "Description",
        width: 200
    },
    {
        name: "fromAddress",
        header: "From Address",
        width: 200
    },
    {
        name: "toAddress",
        header: "To Address",
        width: 200
    },
    {
        name: "sentDate",
        header: "To Date",
        width: 300,
        bodyRender: (value: Date) => {
            return (
                moment(value).format("DD/MM/YYYY HH:mm")
            )
        }
    },
    {
        name: "fromPhone",
        header: "From Phone",
        width: 200
    },

    {
        name: "fromEmail",
        header: "From Email",
        width: 200
    },
    {
        name: "toEmail",
        header: "To Email",
        width: 200
    },
    {
        name: "fromName",
        header: "From Name",
        width: 200
    },
    {
        name: "toName",
        header: "To Name",
        width: 200
    },
    {
        name: "status",
        header: "Status",
        width: 200
    },
    {
        name: "",
        header: "Action",
        width: 200,
        bodyRender: () => {
            return (
                <TrashIcon className="h-6 w-6 text-red-500 hover:bg-black" />
            )
        }
    }
]

const TableGoods: FC<Props> = ({ data }) => {
    return (
        <Table data={data} columns={columns} />
    )
}

export default TableGoods
