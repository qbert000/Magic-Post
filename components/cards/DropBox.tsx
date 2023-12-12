import { Check, ChevronsUpDown } from "lucide-react"
 
import { cn } from "@/lib/utils"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "../ui/button"
import { orderTableValue } from "@/client/contants/ColumnsTitle"
import { useState } from "react"
import { MenuDropBox } from "../../client/util/DataType"

interface Props {
    table : any,
    menu : MenuDropBox[],

}

const DropBox = ({table, menu} : Props) => {
    
    const select = (value : string) => {
        if(value === menu[0].value) {
            table.getColumn(orderTableValue.status)?.setFilterValue('')
        } else {
            table.getColumn(orderTableValue.status)?.setFilterValue(value)
        }
    }
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
 
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? menu.find((menu: any) => menu.value === value)?.label
            : menu[0].label}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandGroup>
            {menu.map((item: any) => (
                <CommandItem
                key={item.value}
                value={item.value}
                onSelect={(currentValue) => {
                  setValue(currentValue)
                  select(item.value)
                  setOpen(false)
                }}
                >
                    {item.label}
                </CommandItem>
            ))}
              
            
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default DropBox