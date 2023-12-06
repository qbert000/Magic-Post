'use client'

import { useRouter } from "next/navigation";




const Page = () => {
    const router = useRouter()

    router.push("/owner/employees")
    
}

export default Page;