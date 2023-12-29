'use client'
import { Address, city, district } from "@/client/contants/Address"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"
import AddEmployBox from "./AddEmployBox"
import { Career } from "@/client/contants/enum"
interface Props {


}

const convertCareer = (career : string) => {
    if(career === Career.employeeTrans) {
        return "Nhân viên"
    } else if (career === Career.employeeGather) {
        return "Nhân viên"
    } else if (career === Career.managerTrans) {
        return "Quản lý"
    } else if (career === Career.magegerGather) {
        return "Quản lý"
    }
}

const OwnerAddEmploy = () => {
    const address = Address
    const [opencity, setOpencity] = useState(false)
    const [city, setCity] = useState<city | null>()

    const [opendistrict, setOpendistrict] = useState(false)
    const [distrcit, setDistrcit] = useState<district | null> ()

    const [workpos, setWorkPos] = useState<string>()
    const [opencar, setOpenCar] = useState(false)
    const [career, setCareer] = useState<Career| null>()

    // const [selectedStatus, setSelectedStatus] = useState<Status | null>(
    null
    return (
        <>

        
        <div className="flex gap-4">

       
        <Popover open={opencity} onOpenChange={setOpencity} >
        <PopoverTrigger asChild >
        <div className="flex flex-col">
            <label>Thành Phố</label>
            <Button variant="outline" className="w-[150px] justify-start">
                {city ? <>{city.label}</> : <>Tập kết</>}
            </Button> 
        </div>
        </PopoverTrigger>

        <PopoverContent className="w-[200px] p-0" align="start">
                <Command>
                <CommandInput placeholder="Filter status..." />
                <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup>
                    {Address.map((city) => (
                    <CommandItem
                        key={city.value}
                        value={city.value}
                        onSelect={(value) => {
                            setCity(city)
                            setOpencity(false)
                            setDistrcit(null)
                            setWorkPos(city.label)
                        }}
                    >
                        {city.label}
                    </CommandItem>
                    ))}
                </CommandGroup>
                </CommandList>
            </Command>
        </PopoverContent>
        </Popover>

        <Popover open={opendistrict} onOpenChange={setOpendistrict}>
        
        <PopoverTrigger asChild>
        <div className="flex flex-col">
            <label>Quận</label>
            <Button variant="outline" className="w-[150px] justify-start">
                {distrcit ? <>{distrcit.label}</> : <>Giao dịch</>}
            </Button>  
        </div>
          
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
                <Command>
                <CommandInput placeholder="Filter status..." />
                <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup>
                    {city?.district.map((dis) => (
                    <CommandItem
                        key={dis.value}
                        value={dis.value}
                        onSelect={(value) => {
                            setDistrcit(dis)
                            setOpendistrict(false)
                            setWorkPos(dis.label)
                        }}
                    >
                        {dis.label}
                    </CommandItem>
                    ))}
                </CommandGroup>
                </CommandList>
            </Command>
        </PopoverContent>
        </Popover>

        <Popover open={opencar} onOpenChange={setOpenCar}>
        
        <PopoverTrigger asChild>
        <div className="flex flex-col">
            <label>Chức vụ</label>
            <Button variant="outline" className="w-[150px] justify-start">
                {career ? <>{convertCareer(career)}</> : <>Chức vụ</>}
            </Button>  
        </div>
          
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
                <Command>
                <CommandInput placeholder="Filter status..." />
                <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup>
                    
                    <CommandItem
                        value={distrcit? Career.employeeTrans : Career.employeeGather}
                        onSelect={(value) => {
                            setCareer(distrcit? Career.employeeTrans : Career.employeeGather)
                            setOpenCar(false)
                        }}
                    >
                        Nhân viên
                    </CommandItem>
                    <CommandItem
                        value={distrcit ? Career.managerTrans : Career.magegerGather}
                        onSelect={(value) => {
                            setCareer(distrcit? Career.managerTrans : Career.magegerGather)
                            setOpenCar(false)
                        }}
                    >
                        Quản lý
                    </CommandItem>
                    
                </CommandGroup>
                </CommandList>
            </Command>
        </PopoverContent>
        </Popover>
        
        {
            workpos && 
            <div>
            Tuyển Nhân viên vào chi nhánh <label>{city?.label}</label><label>{distrcit? `, ${distrcit.label}` : ""}</label>
            </div>
        }
        </div>

        {
            workpos && career && 
            <AddEmployBox workPlace={workpos} career={career} active={null} type={"owner"}/>
        }


        </> 
    )
}

export default OwnerAddEmploy;


