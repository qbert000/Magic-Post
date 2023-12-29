import { Career } from "@/client/contants/enum";
import AddEmployBox from "@/components/forms/AddEmployBox";
import { GetGatherPoint } from "@/lib/actions/gatherPoint.action";
import { fetchUser } from "@/lib/actions/user.action";
import { currentUser } from "@clerk/nextjs";

const Page = async () => {
    const user = await currentUser()
    if(!user) return 
    const userInfor = await fetchUser(user.id)

    const gatherpoint = await GetGatherPoint(userInfor.workPlace)
    if(!gatherpoint) return

    const workPlace = userInfor._id.toString()
    const career = Career.employeeGather
    const active = userInfor.active

    
    return (
        <>
        <div className="w-full min-h-5 text-7xl font-bold flex justify-center">
            Tuyển Nhân Viên Vào Điểm Tập Kết : {gatherpoint.address}
        </div>
        <AddEmployBox  workPlace={workPlace} career={career} active={active} type={null}/>
        

        </>
    )
}

export default Page;