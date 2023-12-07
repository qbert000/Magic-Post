import { ClerkProvider, currentUser } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css"
import { fetchUser } from "@/lib/actions/user.action";



export const metadata : Metadata = {
    title: 'Magic Post',
    description: 'A Next.js 13 Meta Threads Application',
}

interface Props {
    children : React.ReactNode;
}

const inter = Inter({subsets:["latin"]})


async function RootLayout({children}: Props) {
    const user = await currentUser()
    if(!user) return

    const userInfor = await fetchUser(user.id)
    // if(!userInfor.isPostion) {
    //     return(
    //         <>
    //         trang khong huu hien
    //         </>
    //     )
    // }
    return (
        <>
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} `}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
        </>
    )
}


export default RootLayout;