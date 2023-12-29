'use server'

import TransPoint from "../models/transPoint.model"
import User from "../models/user.model"
import connectData from "../mongoose"
import Order from "../models/order.model"
import { PassOrderForEmployee, passOrderToClient } from "@/client/util/orderUtil"
import { PassTransPointToClient } from "@/client/util/pointUtil"
import { Career, Status } from "@/client/contants/enum"

// tao cac diem giao dich (cai nay phai viet truoc mot obejct luu tung dia danh mot)
export async function createNewTransformPoint(address: string) {
    connectData()
    await TransPoint.create({
        address
    })
}


//lay thong tin cua diem giao dich 
export async function GetTransPoint (id : string) {
    try{
        connectData()
        const transpoint = await TransPoint.findById(id)
        const transpointOver = PassTransPointToClient(transpoint)
        return transpointOver
    }catch {

    }
}

// lay nhan vien cua quan ly
export async function ManagerTransGetEmployee (_id : string) {
    try {
        connectData()
        const transPoint = await TransPoint.findById(_id ).populate ({
            path: "employeer",
            model: User
        }).populate({
            path: "manager",
            model: User,
        }).lean()

        const employees = (transPoint as any).employeer
        const manager = (transPoint as any).manager
        const list = employees.concat(manager)
        return list

    }catch {

    }
}


// quan ly lay don hang trong diem giao dich
export async function ManagerTransGetOrder (_id: string) {
    try {
        connectData();
        const transPoint = await TransPoint.findById(_id).populate({
            path: "order",
            model: Order
        }).sort({ statusDate: 1 }).lean()

        const orders = (transPoint as any).order

        return {
            orders : orders,
            address : (transPoint as any).address,
        }

    }catch {

    } 
}

// xoa nhan vien 
export async function ManagerTransRemoveEmployee (_id : string, workPlace : string,) {
    try {
        connectData()
        const transpoint = await TransPoint.findByIdAndUpdate({_id : workPlace}, {
            $pull : {
                employeer : _id
            }
        })

        const user = await User.findByIdAndUpdate({_id:_id}, {
            $set : {
                workPlace : _id,
                isPostion : false,
                career : "",
            }
        })

    } catch {

    }
}

// lay order theo trang thai do hang 
export async function TransPointGetOrderByStatus (
    workPlace : string,
    status: Status,
    address: string,) {
    try {
        connectData()
        const transPoint = await TransPoint.findOne({_id : workPlace}).populate({
            path : "order",
            model: Order,
        }).lean()

        const orders = (transPoint as any).order
        const newOrders = orders.filter((order:any) => order.statusIsDone === status)
        const orderExact = newOrders.filter((order: any)=> order.statusPoint[order.statusPoint.length-1] === address)

        const orderOver = PassOrderForEmployee(orderExact)
        return orderOver

    } catch {

    }
}

// them don hang vaof trans point 
export async function AddOrderToTranPoint(order : string, transpoint: string) {
    try {
        connectData()
        const trans = await TransPoint.findOneAndUpdate({_id: transpoint}, {
            $push : {
                order: order,
            }
        }).lean()

        const address = (trans as any).address
        const newOrder = await Order.findOneAndUpdate({_id : order}, {
            $push : {
                statusPoint : address,
            }
        })
    }catch {

    }
}



// lay order tu list
export async function EmployTransGetOrder(_id : string ) {
    try {
        connectData();
        const transPoint = await TransPoint.findById(_id).populate({
            path: "order",
            model: Order
        }).sort({ statusDate: 1 }).lean()

        const orders = (transPoint as any).order
        // const newOrder = orders.filter((order:any) => order.statusDate.length === status)

        return orders

    }catch {

    }

}


// lay all transport 
export async function OwnerGetTransPoint () {
    try {
        connectData()
        const transpoint =await TransPoint.find().populate({
            path: "employeer",
            model: User
        }).populate({
            path: "manager",
            model: User,
        }).lean()

        return transpoint

    }catch {

    }
}



