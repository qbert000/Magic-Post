'use server'

import Address from "../models/address.model";
import Order from "../models/order.model";
import User from "../models/user.model";
import connectData from "../mongoose"

interface Params {
    sender: string,
    receiver: string,
    sdt: string,
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
    receiver,   // ten nguoi gui
    city, // thanh pho
    district, // huyen/ quan
    ward,// xa
    sdt,// so dien thoai 
    description, // ghi chu 
    // typeOrder, // loai hang gui
    // specailService,// dich vu dac biet 
}: Params) {
    try{
        connectData();
        const createAt = new Date()

        let newAddress = await Address.findOne({
            city: city,
            district: district,
            ward: ward,
        })
        if(!newAddress) {
            newAddress = await Address.create({
                city,
                district,
                ward,
            })
        }

        const newOrder = await Order.create({
            sender: sender,
            receiver,
            createAt,
            address : newAddress,
            sdt,
            description,
            // typeOrder,
            // specailService,
            
        })
        await User.findByIdAndUpdate(sender, {
            $push: {orders: newOrder._id}
        })
    } catch {
        // throw new Error('asdasaasd')
    }
}

// update status 
export async function UpdateStatus(id:String, des:String)  {
    connectData();
    const date = new Date();
    await Order.findByIdAndUpdate(id,{
        $push: {
            statusDate: date,
            statusOption: des,
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


export async function fecthOrderByAddressCity() {
    connectData();
    const listOrder = Order.find({ address: " quyen"})
        .sort({createAt:"desc"})
        // .skip(30)
        .exec();

    return listOrder
    

}


export async function findAddressOfOrder(id:string) : Promise<any> {
    const address = await Order.findById(id)
    
    return address.sdt;
}