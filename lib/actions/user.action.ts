'use server'

import { revalidatePath } from "next/cache";
import User from "../models/user.model";
import connectData from "../mongoose"

interface Params {
    userId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
    path: string;
  }
  
export async function updateUser({
    userId,
    bio,
    name,
    path,
    username,
    image,
  }: Params): Promise<void> {
    try {
      connectData();
  
      await User.findOneAndUpdate(
        { id: userId },
        {
          username: username.toLowerCase(),
          name,
          bio,
          image,
          onboarded: true,
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
        throw new Error('failed to fetch user')
    }
}