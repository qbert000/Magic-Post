'use server'

import { PassOrderForEmployee,} from "@/client/util/orderUtil"
import GatherPoint from "../models/gatherPoint.model"
import Order from "../models/order.model"
import connectData from "../mongoose"
import { Career, Status } from "@/client/contants/enum"
import { PassGatherPointToClient } from "@/client/util/pointUtil"
import TransPoint from "../models/transPoint.model"
import User from "../models/user.model"


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
        const gartherpoint = await GatherPoint.findOneAndUpdate({_id : gatherPoint}, {
            $push : {
                order: order,
            }
        }).lean()

        const address = (gartherpoint as any).address
        const neworder = await Order.findOneAndUpdate({_id:order}, {
            $push : {
                statusPoint : address
            }
        })

    } catch {

    }
}


// lay don hang theo trang thai
export async function GatherPointGetOrderByStatus (
    workPlace : string, 
    status: Status,
    address : string,) {
    try {
        connectData()
        const gatherpoint = await GatherPoint.findOne({_id : workPlace}).populate({
            path : "order",
            model: Order,
        }).lean()
        const orders = (gatherpoint as any).order
        const newOrders = orders.filter((order:any) => order.statusIsDone === status)
        const orderExact = newOrders.filter((order:any) => order.statusPoint[order.statusPoint.length - 1] === address  )
        const orderOver = PassOrderForEmployee(orderExact)
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
        const gatherpoint = await GatherPoint.findOneAndUpdate({address : city},
            {
                $push : {
                    order : order
                }
            }).lean()

        const address = (gatherpoint as any).address
        const neworder = await Order.findOneAndUpdate({_id:order}, {
            $push : {
                statusPoint : address
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

        const trans = await TransPoint.findOneAndUpdate({_id : newtrans._id},
            {
                $push : {
                    order : order
                }
            }).lean()
        const newAddress = (trans as any).address
        const newOrder = await Order.findOneAndUpdate({_id : order}, {
            $push : {
                statusPoint : newAddress,
            }
        })
    } catch {

    }
}




// lay ra nhan vien
export async function ManagerGatherGetEmployee (_id :string) {
    try {
        connectData()
        const gatherPoint = await GatherPoint.findById(_id).populate({
            path: "employeer",
            model : User
        }).populate({
            path : "manager",
            model : User,
        }).lean()
        const employees = (gatherPoint as any).employeer
        const manager = (gatherPoint as any).manager
        const list = employees.concat(manager)
        return list
    } catch {

    }
}


// quan ly lay order
export async function ManagerGatherGetOrder(_id : string) {
    try {
        connectData()
        const gatherpoint = await GatherPoint.findById(_id).populate({
            path: "order",
            model : Order,
        }).lean()
        const orders = (gatherpoint as any).order

        return {
            orders : orders,
            address : (gatherpoint as any).address
        }
    } catch {

    }
}


// 
export async function OwnerGetGatherPoint () {
    try {
        connectData()
        const gatherPoint =await GatherPoint.find().populate({
            path: "employeer",
            model: User
        }).populate({
            path: "manager",
            model: User,
        }).lean()

        return gatherPoint

    }catch {

    }
}