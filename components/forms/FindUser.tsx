'use client'
import { useForm } from "react-hook-form"
import { Input } from "../ui/input"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { z } from "zod"
import { UserFind } from "@/lib/validations/user"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../ui/button"
import { getUserByEmail } from "@/lib/actions/user.action"
import { useState } from "react"

interface user {
  id : string,
  email : string,
}

interface Props {
  finduser : (value : user) => void   // ham 
}

const FindUser = ({finduser} : Props) => {

  const [erro, setErro] = useState(true)

    const form = useForm<z.infer<typeof UserFind>>({
        resolver : zodResolver(UserFind),

    })

    const onSearch = async (value : z.infer<typeof UserFind>) => {
      const userfind = await getUserByEmail(value.name)
      if(!userfind) {
        setErro(false)
        return
      }
      setErro(true)
      finduser(userfind)
    }

    return (
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSearch)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>email</FormLabel>
              <FormControl>
                <Input  {...field} />
              </FormControl>

              {  // kiem tra xem email co hop le hay khong 
                !erro && 
              <FormDescription>
                emai không hợp lệ
              </FormDescription>
              }
            </FormItem>
          )}
        />
        <Button type="submit">Tìm Kiếm</Button>
        </form>
        </Form>
    )
}

export default FindUser;