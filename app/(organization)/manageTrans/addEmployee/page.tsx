import { Career, TypeAdd } from "@/client/contants/enum";
import AddEmploy from "@/components/forms/AddEmploy";
import { fetchUser } from "@/lib/actions/user.action";
import { currentUser } from "@clerk/nextjs";

const Page = async () => {
    const user = await currentUser()
    if(!user) return;
    const userInfor = await fetchUser(user.id)
    const type = TypeAdd.new;

    const workPlace = userInfor._id.toString()
    return (
        <>
        <AddEmploy workPlace={workPlace} career={Career.employeeTrans} type={type} />

        </>
    )
}

export default Page;