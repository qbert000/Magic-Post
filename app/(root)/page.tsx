import Test from '@/components/Shared/Test'
import { fetchUser } from '@/lib/actions/user.action'
import { UserButton, currentUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const user = await currentUser()
  if(!user) return;
  const userInfor = await fetchUser(user.id)

  const userdata = {
    id: 'ádfsdfdfdf'
  }
  return (
    <div className='text-pink-2 '>
      
      home page ádassdafuisdnfisnfisenrqnn
    </div>
  )
}
