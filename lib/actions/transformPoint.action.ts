'use server'

import { Number } from "mongoose"
import TransPoint from "../models/transPoint.model"
import User from "../models/user.model"
import connectData from "../mongoose"

export async function createNewTransformPoint(address: string) {
    connectData()
    await TransPoint.create({
        address
    })
}

export async function fecthEmployee(number= 10) {
    connectData()
    await TransPoint.find()
    .sort({firstName: "desc"})
    .limit(number)
}

export async function fecthEmployeeByName(number = 10,name:string) {
    connectData()
    await TransPoint.find({firstName: {$in:[name]}})
    .sort({firstName: "desc"})
    .limit(number)
}

export async function CreateNewEmployee(id:string) {
    connectData()
    await User.findById(id, {
        $set :{
            isPostion : true,
            career: "employeeTransPoint"
        }
    })
}