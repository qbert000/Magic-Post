'use client'
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import { Input } from "@/components/ui/input"
import { OrderValidation } from "@/lib/validations/order";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateStatus, createNewOrder, fetchOrder, fetchStatus} from "@/lib/actions/order.action";
import {  ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { createNewTransformPoint } from "@/lib/actions/transformPoint.action";
import { address } from "@/contants/Address";
import { fetchListOrderOfUser } from "@/lib/actions/user.action";

const languages = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "Cầu giấy" },
  { label: "Chinese", value: "Thanh Trì" },
] as const

interface Props {
  user:{
    id: string,
  }
}

const Test =  ({user}: Props) => {
  const [open, setOpen] = useState(false)
  const [city, setCity] = useState(false)
  const [district, setDistrict] = useState(false)
  const [ward, setWard] = useState(false)

  const form = useForm<z.infer<typeof OrderValidation>>({
    resolver: zodResolver(OrderValidation),
  });


  const onSubmit = async (values: z.infer<typeof OrderValidation>) => {
    await createNewOrder({
      sender: user.id ,
      receiverName: values.receiverName,
      phone: values.phone,
      description: values.description,
      // typeOrder: values.typeOrder,
      // specailService: values.specialService,
      city: values.address.city,
      district: values.address.district,
      ward: values.address.ward,
    });

  };

  const click = async (id:string, des:String) => {
    await UpdateStatus(id,des)
  }
  const getstatus = async (id:String) => {
    const liststatus = await fetchStatus(id);
    console.log(liststatus.date)
    console.log(liststatus.option)
    console.log(liststatus.date.length)
  }
  const getorder = async (id : string) => {
    // const listOrder = await fetchListOrderOfUser(id)
    // // console.log(listOrder)
    // listOrder.map(async (order:string) => {
    //   const fo = await fetchOrder(order)
    //   console.log(fo)
    // })
    
  }
  const setallDistrict = async () => {
    address[0].district.map(async (address) => {
      await createNewTransformPoint(address.name)
    })
    
  }


  return (
    <>
    <Form {...form} >
    <form
      className='flex flex-col justify-start gap-10'
      onSubmit={form.handleSubmit(onSubmit)}
    >
      {/* // first name */}
      <FormField
        name='receiverName'
        control={form.control}
        render={({ field }) => (
          <FormItem className='flex w-full flex-col gap-3'>
            <FormLabel className='text-base-semibold text-light-2'>
              reciever
            </FormLabel>
            <FormControl>
              <Input
                type='text'
                className='account-form_input no-focus'
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {/* last name  */}
      <FormField
        name='phone'
        control={form.control}
        render={({ field }) => (
          <FormItem className='flex w-full flex-col gap-3'>
            <FormLabel className='text-base-semibold text-light-2'>
              phone number
            </FormLabel>
            <FormControl>
              <Input
                type='text'
                className='account-form_input no-focus'
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {/* last name  */}
      <FormField
        name='description'
        control={form.control}
        render={({ field }) => (
          <FormItem className='flex w-full flex-col gap-3'>
            <FormLabel className='text-base-semibold text-light-2'>
              description
            </FormLabel>
            <FormControl>
              <Input
                type='text'
                className='account-form_input no-focus'
                {...field}
              />
            </FormControl>
          </FormItem>
        )}
      />
      {/* address  */}
      <FormField
        name="address.city"
        control={form.control}
        render={({field}) => (
          <>
          <FormItem className="flex flex-col">
            <FormLabel>Language</FormLabel>
            <Popover open={city} onOpenChange={setCity}>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant="outline"
                    role="combobox"
                    className={cn(
                      "w-[200px] justify-between",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value
                      ? languages.find(
                          (language) => language.value === field.value
                        )?.label
                      : "Select language"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search language..." />
                  <CommandEmpty>No language found.</CommandEmpty>
                  <CommandGroup>
                    {languages.map((language) => (
                      <CommandItem
                        value={language.label}
                        key={language.value}
                        onSelect={() => {
                          form.setValue("address.city", language.value)
                          setCity(false)
                        }}
                      >
                        {language.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
              
          </FormItem>
          </>
        )}
      />
      <FormField
        name="address.district"
        control={form.control}
        render={({field}) => (
          <>
          <FormItem className="flex flex-col">
            <FormLabel>Language</FormLabel>
            <Popover open={district} onOpenChange={setDistrict}>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className={cn(
                      "w-[200px] justify-between",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value
                      ? languages.find(
                          (language) => language.value === field.value
                        )?.label
                      : "Select language"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search language..." />
                  <CommandEmpty>No language found.</CommandEmpty>
                  <CommandGroup>
                    {languages.map((language) => (
                      <CommandItem
                        value={language.label}
                        key={language.value}
                        onSelect={() => {
                          form.setValue("address.district", language.value)
                          setDistrict(false)
                        }}
                      >
                        {language.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
              
          </FormItem>
          </>
        )}
      />
      <FormField
        name="address.ward"
        control={form.control}
        render={({field}) => (
          <>
          <FormItem className="flex flex-col">
            <FormLabel>Language</FormLabel>
            <Popover open={ward} onOpenChange={setWard}>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className={cn(
                      "w-[200px] justify-between",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value
                      ? languages.find(
                          (language) => language.value === field.value
                        )?.label
                      : "Select language"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search language..." />
                  <CommandEmpty>No language found.</CommandEmpty>
                  <CommandGroup>
                    {languages.map((language) => (
                      <CommandItem
                        value={language.label}
                        key={language.value}
                        onSelect={() => {
                          form.setValue("address.ward", language.value)
                          setWard(false)
                        }}
                      >
                        {language.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
              
          </FormItem>
          </>
        )}
      />
      

      <Button type="submit" className='bg-primary-500'>
        oke
      </Button>
    </form>
    </Form>
    <Button onClick={()=> click("6563fca26c35f5a1c5f5d65f", "da toi")}>set status</Button>
    <Button onClick={()=> getstatus("6563fca26c35f5a1c5f5d65f")}>get status</Button>
    <Button onClick={() => getorder("6557df5244d6caecdccedb7a")}>get order by city</Button>
    <Button onClick={() => setallDistrict()}>Set all district</Button>
    </>
  )
}

export default Test