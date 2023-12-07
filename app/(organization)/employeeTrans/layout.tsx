import { Header } from "@/components/Shared/Header";
import Leftbar from "@/components/Shared/Leftbar";
import LeftbarManager from "@/components/Shared/Leftbar";
import { Sidebar } from "@/components/Shared/Sidebar";
import { sideBarEmployeeTrans } from "@/components/Shared/Sidebar/constant";
import Topbar from "@/components/Shared/Topbar";
import { LeftbarLinkEmployeeTrans } from "@/contants/sidebarlink";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
// import "@/a"



export const metadata : Metadata = {
    title: 'Magic Post',
    description: 'A Next.js 13 Meta Threads Application',
}

interface Props {
    children : React.ReactNode;
}

const inter = Inter({subsets:["latin"]})


function RootLayout({children}: Props) {
    const pathnameroot = '/employeeTrans'
    return (
        <>
        <html lang="en">
                <body className={`${inter.className} `}>
                    <Header/>
                    <div className="float-left">
                      <Sidebar data={sideBarEmployeeTrans} />
                   </div>
                    {children}
                </body>
            </html>
        </>
    )
}


export default RootLayout;