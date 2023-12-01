import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css"
import Topbar from "@/components/Shared/Topbar";
import { Children } from "react";
import LeftbarCustomer from "@/components/Shared/LeftbarCustomer";
import RightbarCustomer from "@/components/Shared/RightbarCustomer";



export const metadata : Metadata = {
    title: 'Magic Post',
    description: 'A Next.js 13 Meta Threads Application',
}

interface Props {
    children : React.ReactNode;
}

const inter = Inter({subsets:["latin"]})


function RootLayout({children}: Props) {
    return (
        <>
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} `}>
                    <Topbar/>
                    <main className="flex flex-row">
                        <LeftbarCustomer></LeftbarCustomer>
                        <section className='main-container'>
                            <div className='w-full '>
                                {children}
                            </div>
                        </section>
                        <RightbarCustomer/>
                    </main>
                </body>
            </html>
        </ClerkProvider>
        </>
    )
}


export default RootLayout;