import CreateBox from '@/components/forms/CreateBox';
import CreateOrder from '@/components/forms/CreateOrder';
import { fetchUser } from '@/lib/actions/user.action';
import { currentUser } from '@clerk/nextjs';
const Page = async () => {
    
    const user = await currentUser()
    if(!user) return 

    const userInfor = await fetchUser(user.id)

    

    const email = userInfor.email

    const userData = {
        email : userInfor.email,
        id : userInfor._id,
    }

    return (
        <>
        <CreateBox user={userData} findUser={false}/>
        
        </>
    )
}

export default Page;