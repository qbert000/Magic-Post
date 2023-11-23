import { ClerkProvider } from "@clerk/nextjs";
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


function RootLayout({children}: Props) {
    return (
        <>
        <html lang="en">
            <body className={`${inter.className} `}>
                {children}
            </body>
        </html>
        </>
    )
}


export default RootLayout;