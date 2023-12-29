'use server'

import { revalidatePath } from "next/cache";
import User from "../models/user.model";
import connectData from "../mongoose"
import Order from "../models/order.model";
import { Active, Career, Status } from "@/client/contants/enum";
import { PassOrderToInventory } from "@/client/util/orderUtil";
import TransPoint from "../models/transPoint.model";
import GatherPoint from "../models/gatherPoint.model";
import { connect } from "http2";

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

export async function fecthIsPostion(userId:string) {
  try {
      connectData();

      const user = await User.findOne({_id:userId}).lean() // tra ve mot user
      return {
        isPostion :(user as any).isPostion,
        name : (user as any).firstName + " " + (user as any).lastName
      }
          
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


// add employee to ozigation 
export async function addEmployeetoOzigation(
  userid : string,
  career : Career,
  workPlace : string,
) {
  try {
    connectData();

    const user = await User.findByIdAndUpdate({_id: userid}, {
      $set : {
        isPostion : true,
        career : career,
        workPlace: workPlace,
      }
    })

    if(career === Career.employeeTrans) {
      await TransPoint.findByIdAndUpdate({_id : workPlace}, {
          $push : {
              employeer : userid
          }
      })
  } else if(career === Career.managerTrans) {
      await TransPoint.findByIdAndUpdate({_id : workPlace}, {
          $push : {
              manager : userid
          }
      })
  } else if (career === Career.employeeGather) {
    await GatherPoint.findByIdAndUpdate({_id : workPlace}, {
      $push : {
        employeer : userid
      }
    })
  } else if (career = Career.magegerGather) {
    await GatherPoint.findByIdAndUpdate({_id : workPlace}, {
      $push : {
        manager : userid
      }
    })
  }

  } catch {

  }

}

export async function addEmployeetoOzigationSpe(
  userid : string,
  career : Career,
  workPlace : string,
) {
  try {
    connectData();

  if(career === Career.employeeTrans) {
      const trans = await TransPoint.findOneAndUpdate({address: workPlace}, {
          $push : {
              employeer : userid
          }
      }).lean()
      const work = (trans as any)._id
      await User.findByIdAndUpdate({_id: userid}, {
        $set:{
          isPostion : true,
          career : career,
          workPlace: work,
        }
      })

  } else if(career === Career.managerTrans) {
      const trans = await TransPoint.findOneAndUpdate({address : workPlace}, {
          $push : {
              manager : userid
          }
      }).lean()
      const work = (trans as any)._id
      await User.findByIdAndUpdate({_id: userid}, {
        $set:{
          isPostion : true,
          career : career,
          workPlace: work,
        }
      })
  } else if (career === Career.employeeGather) {
    const gather = await GatherPoint.findOneAndUpdate({address : workPlace}, {
      $push : {
        employeer : userid
      }
    }).lean()
    const work = (gather as any)._id
    await User.findByIdAndUpdate({_id: userid}, {
      $set:{
        isPostion : true,
        career : career,
        workPlace: work,
      }
    })
  } else if (career = Career.magegerGather) {
    const gather = await GatherPoint.findOneAndUpdate({address : workPlace}, {
      $push : {
        manager : userid
      }
    }).lean()
    const work = (gather as any)._id
    await User.findByIdAndUpdate({_id: userid}, {
      $set:{
        isPostion : true,
        career : career,
        workPlace: work,
      }
    })
  }

  } catch {

  }

}


// chu tich action

// owner duoi nhan vien 
export async function RemoverEmploy (
  userid : string,
  workPlace : string,
  career : string,
) {
  try {
    connectData()

    const user = await User.findByIdAndUpdate({_id : userid}, {
      $set : {
        workPlace : userid,
        isPostion : false,
        career : ""
      }
    })

    if (career === Career.magegerGather ) {
       await GatherPoint.findByIdAndUpdate({_id : workPlace}, {
        $pull : {
          manager : userid
        }
      })
    } else if (career === Career.employeeGather) {
      await GatherPoint.findByIdAndUpdate({_id : workPlace}, {
        $pull : {
            employeer : userid
        }
      })
    } else if (career === Career.employeeTrans) {
      await TransPoint.findByIdAndUpdate({_id : workPlace}, {
        $pull : {
            employeer : userid
        }
      })
    } else {
      await TransPoint.findByIdAndUpdate({_id : workPlace}, {
        $pull : {
          manager : userid
        }
      })
    }

  } catch {

  }
}


// sua active nguoi dung
export async function UpdateActive (active : Active, userid : string) {
  try {
    connectData()
    const user = await User.findOneAndUpdate({_id : userid}, {
      $set : {
        active : active,
      }
    })
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
