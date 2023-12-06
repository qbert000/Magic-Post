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
    // addressSender: string,
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
    // addressSender // dia chi nguoi gui
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
            // addressSender,
            
        }) 

        // add order into user
        await User.findByIdAndUpdate({
            _id: sender
        },{
            $push : {orders: newOrder._id}
        }) 

        //add order into transPoint
        await TransPoint.findOneAndUpdate({
        address: city,
        }, {
            $push : {order: newOrder._id}
        })

    } catch {

    }
    
}


//fetch order 
export async function fetchOrder(id:string) {
    connectData();
    
    return await Order.findById(id)
}

// update status 
export async function UpdateStatus(id:String, des:String)  {
    connectData();
    const date = new Date();
    await Order.findByIdAndUpdate({_id:id},{
        $push: {
            statusDate: date,
            statusOption: des,
            statusIsDone:{
                $each : [true],
                $position: -1,
            }
        }
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


//find all order 
export async function finall() {
    connectData();
    const order = await Order.find({_id :"656cf94768975fe51d167d7e"})


    return order
}


export async function testfetch () {
    connectData();
    const listorder = await Order.find({receiverName: "quyen"}, 
    {
        // id:1, 
        // _id:0,
        receiverName:1,
        description: 1,
        city:1,
        district:1,
        ward:1,
        phone: 1,
        "statusDate.lenght":1
    }).sort({description: "desc"})
        .limit(5);

        return listorder;
}











