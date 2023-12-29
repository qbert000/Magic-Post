'use client'

import { Active, Career } from "@/client/contants/enum";
import { addEmployeetoOzigation, addEmployeetoOzigationSpe } from "@/lib/actions/user.action";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";


interface Props {
    workPlace : string,
    career: Career,
    userid: string,
    name : string,
    isPostion : boolean,
    active : string | null,
    setComplete : ()=> void,
    type : "owner" | null
}


const AddEmploy = ({workPlace, career, userid, name, isPostion, active,type, setComplete}: Props) => {
    const router = useRouter()
    const pathname = usePathname

    

    const onSubmit = async () => {
        if(type === null) {
           await addEmployeetoOzigation(userid, career, workPlace) 
           console.log(userid)
           console.log(career)
           console.log(workPlace)
        } else {
            await addEmployeetoOzigationSpe(userid, career, workPlace) 
            console.log(userid)
            console.log(career)
            console.log(workPlace)
        }
        // them nhan vien 
        
        setComplete()
        router.refresh()
    }


    return (
        <>
        {
            active === Active.notadd ?
            <><label className="mt-3 text-delete">Không có quyền tuyển nhân viên</label></>
            :

            <div className="flex flex-col gap-3 w-full mt-10">
            { isPostion ? 
                <div className="basis-1/4 justify-center">
                {name} : Đã Là Nhân Viên
                </div>
                :
                <div className="basis-1/4 justify-center">
                    Đồng ý tuyển nhân viên  : { name }

                </div>
            }
            <div className="mt-3 justify-center">
                <Button 
                disabled={isPostion}
                className="bg-brand-500"
                onClick={()=> onSubmit()}>
                    Đồng ý
                </Button>
            </div>
            
        </div>
        }
        
        
        </>
    )
}

export default AddEmploy;