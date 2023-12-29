import OwnerAddEmploy from "@/components/forms/ownerAddEmploy"
import { fetchUser } from "@/lib/actions/user.action"
import { currentUser } from "@clerk/nextjs"


const Page = async () => {
    const user = await currentUser()
    if(!user) return
    const userInfor = fetchUser(user.id)

    return (
        <>
        <OwnerAddEmploy/>
        </>
    )
}

export default Page