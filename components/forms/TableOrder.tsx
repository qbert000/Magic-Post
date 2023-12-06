'use client'
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandSeparator,
    CommandDialog,
  } from "@/components/ui/command"
import Order from "../cards/Order";


interface Props {
    listOrder: any[]
}

const TableOrder =  ({listOrder} : Props) => {

    return (
        <>
        <div className="">
        <Command className="">
            <CommandInput 
                placeholder="Search order..."
                className="w-fit mx-0.5 p-5 rounded-xl border-2"
            />
            <div>
                noiw yeu cau cuar bang 
            </div>
            
            {listOrder.map((x:any) => {
              return (
                <Order 
                key={x.phone}
                
                id={x.phone}
                description={x.description}
                phone={x.phone}
                district={x.district}
                city={x.city}
                ward={x.ward}
                receiverName={x.receiverName}
                />
              )
            })}



        </Command>
        </div>  
        
        </>
    )
}

export default TableOrder;