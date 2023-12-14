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
import { UpdateStatus, createNewOrder, fetchOrder, fetchStatus, testfetch} from "@/lib/actions/order.action";
import {  ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { createNewTransformPoint, fetchEmployeesTransPoint } from "@/lib/actions/transformPoint.action";
import { GetOrderByStatus, fetchListOrderOfUser, fetchUser, testUser } from "@/lib/actions/user.action";
import { address } from "@/client/contants/Address";
import { useToast } from "@/components/ui/use-toast"


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
    workPlace : string,
    // order: any
  }
}

const Test =  ({user}: Props) => {
  
  const { toast } = useToast()
 
  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          description: "Your message has been sent.",
        })
      }}
    >
      Show Toast
    </Button>
  )
}

export default Test