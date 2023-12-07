import { currentUser } from "@clerk/nextjs";
interface Prop {
    user : string,
}

const Page = ({user}: Prop) => {
    // const user = currentUser()
    if(!user) return

    return (
        <>
        order to
        </>
    )
}

export default Page;