'use server'

import { revalidatePath } from "next/cache";
import User from "../models/user.model";
import connectData from "../mongoose"

interface Params {
    id: string,
    firstName: string,
    lastName: string,
    image: string,
    path: string;
  }
  
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


export async function fetchUser(userId:string) {
    try {
        connectData();

        return await User.findOne({id:userId})
        //     .populate({
        //     path:'communities',
        //     model: Community
        // })
    } catch {
        // throw new Error('failed to fetch user')
    }
}

export async function fetchListOrderOfUser(id:string) {
  connectData()
  const user = await User.findById(id)
  return user.orders
}