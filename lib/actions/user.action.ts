'use server'

import { revalidatePath } from "next/cache";
import User from "../models/user.model";
import connectData from "../mongoose"
import Order from "../models/order.model";
import { Status } from "@/contants/status";

interface Params {
    id: string,
    firstName: string,
    lastName: string,
    image: string,
    path: string;
  }

// tao va sua doi user (khong dung nhieu dau)
export async function updateUser({
    id, firstName, lastName, image, path
  }: Params): Promise<void> {
    try {
      connectData();
  
      await User.findOneAndUpdate(
        { id: id },
        {
          firstName,
          lastName,
          image,
          path,
        },
        { upsert: true }
      );
  
      if (path === "/profile/edit") {
        revalidatePath(path);
      }
    } catch (error: any) {
      
    }
  }

// tim user bang id
export async function fetchUser(userId:string) {
    try {
        connectData();

        return await User.findOne({id:userId}) // tra ve mot user
            
    } catch {
        // throw new Error('failed to fetch user')
    }
}
// lay ra danh sach order cua nguoi dung
export async function fetchListOrderOfUser(id:string)  {
  try {
    connectData();
    const user = await User.findOne({id :id}).populate({
      path: 'orders',
      model: Order
    }).lean()

    const orders = (user as any).orders
    
    return orders // tra vef mot array list order tat ca
  } catch {
  }
}

//lay danh sach hang cua nguoi dung theo dieu kien
export async function GetOrderByStatus(id:string, status: number)  {
  try {
    connectData();
    const user = await User.findOne({id :id}).populate({
      path: 'orders',
      model: Order
    }).lean()
    const orders = (user as any).orders
    if( status === Status.transporting) {
      const newOrder = orders.filter((order:any) => order.statusDate.length >= status && order.statusDate.length < Status.payNot)
      return newOrder
    }
    const newOrder = orders.filter((order:any) => order.statusDate.length === status)
    
    
    return newOrder // tra ve mot array list order theo status
  } catch {
  }
}









export async function testUser(id :string) {
  connectData()

  await User.findByIdAndUpdate({_id: id},
  {
    $push : {orders: id}
  })
}


