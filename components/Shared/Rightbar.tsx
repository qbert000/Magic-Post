'use client'

import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Button, buttonVariants } from "../ui/button"
import Link from "next/link"

interface Props {
    sidebarlink: Link[],
    pathnameRoot: string,
}

interface Link {
    label: string,
    value: string,
    link: string,
}


const Rightbar = ({sidebarlink, pathnameRoot} : Props) => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return (
        <>
        <section className="custome-scrollbar rightsidebar ">
            <div className='flex w-full flex-1 flex-col gap-6 px-6'>
                {sidebarlink.map((link) =>{
                    return (
                        <>
                        <Link
                            href={`${pathnameRoot}${link.link}`} 
                        >
                        <Button
                            className="bg-pink-1 md hover:bg-pink-2"
                            size = {"sm"}
                        >
                        {link.label}
                        </Button>
                        </Link>
                        </>
                    )
                })}
            </div>

            
        
            <div className="">
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                
                
                className=" text-pink-1"
                classNames={{
                    day_selected:
                    "bg-pink-2 text-pink-1 hover:bg-pink-2 hover:text-pink-1 focus:bg-pink-2 focus:text-pink-1",
                    day_today: "bg-pink-3 text-accent-foreground",
                }}
            />
            </div>
        </section>
        </>
    )
}

export default Rightbar;