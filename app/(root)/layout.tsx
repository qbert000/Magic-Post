import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css"
import Topbar from "@/components/Shared/Topbar";
import { Children } from "react";
import { LeftbarLinkCustomer, RightbarLinkCustomer } from "@/client/contants/sidebarlink";
import Leftbar from "@/components/Shared/Leftbar";
import Rightbar from "@/components/Shared/Rightbar";
import Provider from "../(Provider)/NextUiProvider";



export const metadata : Metadata = {
    title: 'Magic Post',
    description: 'A Next.js 13 Meta Threads Application',
}

interface Props {
    children : React.ReactNode;
}

const inter = Inter({subsets:["latin"]})


function RootLayout({children}: Props) {
    const pathnameRoot = ''
    return (
        <>
        <ClerkProvider>
            <html lang="en"><Provider>
                <body className={`${inter.className} `}>
                    <Topbar/>
                    <main className="flex flex-row">
                        <Leftbar sidebarlink={LeftbarLinkCustomer} pathnameRoot={pathnameRoot} />
                        <section className='main-container '>
                            <div className='w-full '>
                                {children}
                            </div>
                        </section>
                        <Rightbar sidebarlink={RightbarLinkCustomer} pathnameRoot={pathnameRoot}/>
                    </main>
                </body></Provider>
            </html>
        </ClerkProvider>
        </>
    )
}


export default RootLayout;