import { Career, TypeAdd } from "@/client/contants/enum";
import AddEmploy from "@/components/forms/AddEmploy";
import { GetTransPoint } from "@/lib/actions/transformPoint.action";
import { fetchUser } from "@/lib/actions/user.action";
import { currentUser } from "@clerk/nextjs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AddEmployBox from "@/components/forms/AddEmployBox";


const Page = async () => {
    const user = await currentUser()
    if(!user) return;
    const userInfor = await fetchUser(user.id)

    const transpoint = await GetTransPoint(userInfor.workPlace)
    if(!transpoint) return


    const workPlace = userInfor._id.toString()
    const career = Career.employeeTrans
    const active = userInfor.active
    return (
        <>
        <div className="w-full min-h-5 text-7xl font-bold flex justify-center">
            Tuyển Nhân Viên Vào Điểm Giao Dịch : {transpoint.address}
        </div>
        
        <AddEmployBox active={active} type={null} workPlace={workPlace} career={career}/>




        </>
    )
}

export default Page;