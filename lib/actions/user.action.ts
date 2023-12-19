'use server'

import { revalidatePath } from "next/cache";
import User from "../models/user.model";
import connectData from "../mongoose"
import Order from "../models/order.model";
import { Status } from "@/client/contants/enum";
import { PassOrderToInventory } from "@/client/util/orderUtil";

interface Params {
    id: string,
    firstName: string,
    lastName: string,
    image: string,
    path: string;
    email : string,
  }

// tao va sua doi user (khong dung nhieu dau) //done
export async function updateUser({
    id, firstName, lastName, image, path, email,
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
          email,
        },
        { upsert: true }
      );
  
      if (path === "/profile/edit") {
        revalidatePath(path);
      }
    } catch (error: any) {
      
    }
  }

// tim user bang id  //done
export async function fetchUser(userId:string) {
    try {
        connectData();

        return await User.findOne({id:userId}) // tra ve mot user
            
    } catch {
        // throw new Error('failed to fetch user')
    }
}

// tim uer bang email tra ve name
export async function getUserByEmail (email : string) {
  try{
    connectData()
    const user = await User.findOne({email: email})
    const id = (user as any)._id.toString()
    return {
      id : id,
      email : user.email,
    }
  } catch {

  }
}
// lay ra danh sach order cua nguoi dung  //done
export async function fetchListOrderOfUser(id:string)  {
  try {
    connectData();
    const user = await User.findOne({id :id}).populate({
      path: 'orders',
      model: Order
    }).sort({ statusDate: 1 }).lean()

    const orders = (user as any).orders
    
    return orders // tra vef mot array list order tat ca
  } catch {
  }
}

// lay order dang cho xet duyet cua nguoi dung
export async function GetOrderToInventory(id : string) {
  try {
    connectData()
    const user = await User.findOne({_id : id}).populate([{
      path:'orders',
      model: Order,
      populate : {
        path : "sender",
        model: User,
      }
    }]
    ).lean()
    const orders = (user as any).orders
    const newOrder = orders.filter((order:any) => order.statusIsDone === Status.wait)

    const orderOver = PassOrderToInventory(newOrder)
    
    return orderOver

  }catch {

  }
}

//lay danh sach order cua nguoi dung theo trang thai //done
export async function GetOrderByStatus(
  id:string, 
  status: Status)  {
  try {
    connectData();
    const user = await User.findOne({id :id}).populate({
      path: 'orders',
      model: Order
    }).sort({ statusDate: 1 }).lean()
    const orders = (user as any).orders

    if( status === Status.transporting) {
      const newOrder = orders.filter((order:any) => order.statusIsDone  < Status.done && order.statusIsDone > Status.inventoryted)
      return newOrder
    }

    const newOrder = orders.filter((order:any) => order.statusIsDone === status)
    return newOrder // tra ve mot array list order theo status
  } catch {
  }
}

interface Props {
  id : string,
  workPlace: string,
  carrer: string,
}
// add employee to ozigation 
export async function addEmployeetoOzigation({id, workPlace, carrer} : Props) {
  try {
    connectData();

    const user = await User.findOne({id: id}, {
      $set:{
        isPostion : true,
        career : carrer,
        workPlace: workPlace,
      }
    })
    return 1

  } catch {
    return 0

  }

}









export async function testUser(id :string) {
  connectData()

  await User.findByIdAndUpdate({_id: id},
  {
    $push : {orders: id}
  })
}
