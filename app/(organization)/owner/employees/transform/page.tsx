import { Company } from "@/client/contants/enum";
import { fetchUser } from "@/lib/actions/user.action";
import { currentUser } from "@clerk/nextjs";

const Page = async () => {
    const user = await currentUser()
    if(!user) return;

    const userInfor = await fetchUser(user.id)
    if(!userInfor.isPostion) return

    if((userInfor.career === Company.owner)) return 

    return (
        <>
        transform  
        </>
    )
}

export default Page;