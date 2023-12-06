'use server'

import { Number } from "mongoose"
import TransPoint from "../models/transPoint.model"
import User from "../models/user.model"
import connectData from "../mongoose"

// tao cac diem giao dich (cai nay phai viet truoc mot obejct luu tung dia danh mot)
export async function createNewTransformPoint(address: string) {
    connectData()
    await TransPoint.create({
        address
    })
}

// lay du lieu nhan vien
export async function fecthEmployee(number= 10) {
    connectData()
    await TransPoint.find()
    .sort({firstName: "desc"})
    .limit(number)
}

//search nhan vien bang ten
export async function fecthEmployeeByName(number = 10,name:string) {
    connectData()
    await TransPoint.find({firstName: {$in:[name]}})
    .sort({firstName: "desc"})
    .limit(number)
}

// them moi nhan vien
export async function CreateNewEmployee(id:string) {
    connectData()
    await User.findById(id, {
        $set :{
            isPostion : true,
            career: "employeeTransPoint"
        }
    })
}

// them order vao list 
export async function TransPointAddOrder(city:string, order:string) {
    await TransPoint.findOneAndUpdate({
        address: city,
    }, {
        $push : {order: order}
    })
}