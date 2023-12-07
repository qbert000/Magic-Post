import { Header } from "@/components/Shared/Header";
import Leftbar from "@/components/Shared/Leftbar";
import LeftbarManager from "@/components/Shared/Leftbar";
import Rightbar from "@/components/Shared/Rightbar";
import { Sidebar } from "@/components/Shared/Sidebar";
import { sideBarManageTransform } from "@/components/Shared/Sidebar/constant";
import Topbar from "@/components/Shared/Topbar";
import { LeftbarLinkEmployeeTrans, LeftbarLinkManager, RightbarLinkNormal } from "@/contants/sidebarlink";
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
    const pathnameroot = '/manageTrans'
    return (
        <>
        <html lang="en">
                <body className={`${inter.className} `}>
                    <Header/>
                    <div className="float-left">
                      <Sidebar data={sideBarManageTransform} />
                   </div>
                    {children}
                </body>
            </html>
        </>
    )
}


export default RootLayout;