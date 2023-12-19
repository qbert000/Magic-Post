'use server'

import { PassOrderForEmployee,} from "@/client/util/orderUtil"
import GatherPoint from "../models/gatherPoint.model"
import Order from "../models/order.model"
import connectData from "../mongoose"
import { Status } from "@/client/contants/enum"
import { PassGatherPointToClient } from "@/client/util/pointUtil"
import TransPoint from "../models/transPoint.model"


// tao diem tap ket bang dia chi 
export async function CreateNewGartherPoint(address : string) {
    try{
        connectData()
        await GatherPoint.create({
            address
        })
    } catch {

    }
}

// them don hang vao gather point 
export async function AddOrderToGatherPoint (
    order : string, 
    gatherPoint: string) {
    try {
        connectData()
        await GatherPoint.findOneAndUpdate({_id : gatherPoint}, {
            $push : {
                order: order,
            }
        })

    } catch {

    }
}


// lay don hang theo trang thai
export async function GatherPointGetOrderByStatus (
    workPlace : string, 
    status: Status) {
    try {
        connectData()
        const gatherpoint = await GatherPoint.findOne({_id : workPlace}).populate({
            path : "order",
            model: Order,
        }).lean()
        const orders = (gatherpoint as any).order
        const newOrders = orders.filter((order:any) => order.statusIsDone === status)

        const orderOver = PassOrderForEmployee(newOrders)
        return orderOver
    }catch {

    }
}


// lay thong tin cua diem tap ket
export async function GetGatherPoint (id : string) {
    try {
        connectData()
        const gatherpoint = await GatherPoint.findById(id)
        const gatherpointOver = PassGatherPointToClient(gatherpoint)
        return gatherpointOver
    } catch {

    }
}


// tim gather point roi them don hang vao
export async function FindGatherAndAddOrder (
    order :string,
    city : string,) {
    try {
        connectData()
        await GatherPoint.findOneAndUpdate({address : city},
            {
                $push : {
                    order : order
                }
            })
    }catch {

    }
}

// tim transpoint bang dia chi roi gui don hang toi do 
export async function FindTransPointAndAddOrder (
    order : string,
    address : string,
    gapoint : string,
) {
    try {
        connectData()
        const gatherpoint = await GatherPoint.findOne(
            {
                address : gapoint
            }
        ).populate({
            path: "listTransformPoint",
            model: TransPoint
        }).lean()

        const transPoints = (gatherpoint as any).listTransformPoint
        const newtrans = transPoints.find((transpoint : any) => transpoint.address === address)

        await TransPoint.findOneAndUpdate({_id : newtrans._id},
            {
                $push : {
                    order : order
                }
            })
    } catch {

    }
}