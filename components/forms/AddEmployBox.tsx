'use client'
import { useState } from "react";
import FindUser from "./FindUser";
import AddEmploy from "./AddEmploy";
import { Career } from "@/client/contants/enum";
import { fecthIsPostion } from "@/lib/actions/user.action";
import { CheckCircle2 } from 'lucide-react';

interface user {
    _id : string,
    name : string,
    isPostion : boolean,
}

interface Props {
    workPlace : string,  // addresss | id 
    career : Career,
    active : string | null,
    type : "owner" | null
}

const AddEmployBox = ({ active,workPlace, career, type} : Props) => {
    const [userData, setUserData] = useState<user>()
    const [complete, setComplete] = useState(false)

    const finduser = async (user : {id : string, email : string}) => {
        setComplete(false)
        const userInfor = await fecthIsPostion(user.id)
        if(userInfor)
        setUserData({
            _id : user.id,
            name : userInfor.name,
            isPostion : userInfor.isPostion,
        })
    }

    const Complete =() => {
        setComplete(true)
    }
    
    return (
        <> 
        {
            
            <>
            <FindUser finduser={finduser} />
            {
                complete ? 
                <div className="flex items-center flex-col h-full justify-center">
                    <div>
                        <CheckCircle2 color="#19c964" size={48} />
                    </div>
                    <div className="text-9xl">
                        Tuyển Thành Công
                    </div>
                    
                </div>
                :
                <>
                {
                    userData ? 
                    <AddEmploy 
                        workPlace={workPlace} 
                        career={career} 
                        userid={userData._id}
                        name={userData.name}
                        isPostion={userData.isPostion}
                        setComplete={Complete}
                        active={active}
                        type={type}
                    />
                    :
                    <></>
                }
                
                </> 
            }
            </>
            
        }

        </>
    )
}

export default AddEmployBox;