import { LeftbarLinkOwner, RightbarLinkNormal } from "@/client/contants/sidebarlink";
import Leftbar from "@/components/Shared/Leftbar";
import Rightbar from "@/components/Shared/Rightbar";
import Topbar from "@/components/Shared/Topbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "@/a"



export const metadata : Metadata = {
    title: 'Magic Post',
    description: 'A Next.js 13 Meta Threads Application',
}

interface Props {
    children : React.ReactNode;
}

const inter = Inter({subsets:["latin"]})


async function RootLayout ({children}: Props) {
    const pathnameroot = '/owner'
    return (
        <>
        <html lang="en">
                <body className={`${inter.className} `}>
                    <Topbar/>
                    <main className="flex flex-row">
                        <Leftbar sidebarlink={LeftbarLinkOwner} pathnameRoot={pathnameroot}/>
                        <section className='main-container'>
                            <div className='w-full '>
                                {children}
                            </div>
                        </section>
                        <Rightbar sidebarlink={RightbarLinkNormal} pathnameRoot= {pathnameroot}/>
                    </main>
                </body>
            </html>
        </>
    )
}


export default RootLayout;