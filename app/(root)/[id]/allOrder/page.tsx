

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandSeparator,
    CommandDialog,
  } from "@/components/ui/command"
const Page = () => {
    return (
        <>
        <div className="">
        <Command>
            <CommandInput 
                placeholder="Search order..."
                className="w-fit mx-0.5 p-5 rounded-xl border-2"
            />
            <div>
                asdawdaeacasfsddgdfgd
            </div>
            
            <CommandGroup>
            <CommandItem>
                ngân hàng phẩm mak tôi không biết 
            </CommandItem>
            <CommandItem>
                túi ba gang mang đi mak đựng 
            </CommandItem>
            <CommandSeparator />
            <CommandItem>
                cặp sách nách mạng 
            </CommandItem>
            <CommandItem>
                ggaf chiên giòn sảo ớt 
            </CommandItem>
            </CommandGroup>
            <CommandEmpty>No language found.</CommandEmpty>

        </Command>
        </div>
        </>
    )
}

export default Page;