'use server'

import { address } from "@/contants/Address";
import Order from "../models/order.model";
import TransPoint from "../models/transPoint.model";
import User from "../models/user.model";
import connectData from "../mongoose"

interface Params {
    sender: string,
    receiverName: string,
    phone: string,
    description: string,
    // typeOrder: string,
    // specailService: string,
    city: string,
    district: string,
    ward: string,
}

// creat new order
export async function createNewOrder({
    sender, // sender id 
    receiverName,   // ten nguoi gui
    city, // thanh pho
    district, // huyen/ quan
    ward,// xa
    phone,// so dien thoai 
    description, // ghi chu 
    // typeOrder, // loai hang gui
    // specailService,// dich vu dac biet 
}: Params) {
    try{
        connectData();
        const createAt = new Date()

        const newOrder = await Order.create({
            sender,
            receiverName,
            city,
            district,
            ward,
            phone,
            description,
            statusDate: createAt,
            statusOption: "don hang duoc tao",
            statusIsDone: false,
            // typeOrder,
            // specailService,
            
        })
        await newOrder.$push({
            statusDate: createAt,
            statusOption: "don hang duoc tao",
            statusIsDone: false,
        })
        const user = await User.findById({
            id: sender
        })

        await TransPoint.findOneAndUpdate({
            address : city
        }, {
            $push: {order : newOrder._id}
        })
        await user.$push({
            order: newOrder._id
        })
    } catch {

    }
}


//fetch order 
export async function fetchOrder(id:string) {
    connectData()
    return await Order.findById(id)
}

// update status 
export async function UpdateStatus(id:String, des:String)  {
    connectData();
    const date = new Date();
    await Order.findByIdAndUpdate(id,{
        $push: {
            statusDate: date,
            statusOption: des,
            statusIsDone:{
                $each : [true],
                $position: -1,
            }
        },
    })
}
//return list date status and list option status
export async function fetchStatus(id:String) {
    connectData();

    const status = await Order.findById(id)
    return {
            date:status.statusDate,
            option: status.statusOption
        };
}








