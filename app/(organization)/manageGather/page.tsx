'use client'

import { useRouter } from "next/navigation";




const Page = () => {
    const router = useRouter()

    router.push("/manageGather/employees")
    
}

export default Page;