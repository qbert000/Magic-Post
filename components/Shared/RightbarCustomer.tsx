'use client'

import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Button, buttonVariants } from "../ui/button"
import Link from "next/link"


const RightbarCustomer = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return (
        <>
        <section className="custome-scrollbar rightsidebar ">
            <Link
                href={"/add"} 
                >
                <Button
                    className="bg-pink-1 md hover:bg-pink-2"
                    size = {"sm"}
                >
                    + add don
                </Button>
            </Link>
        
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

export default RightbarCustomer;