'use client'
import { createNewTransformPoint } from "@/lib/actions/transformPoint.action"
import { Button } from "../ui/button"



const Test2 = () => {

  const submit = async  () => {
    await createNewTransformPoint("Cầu Giấy")
  }

  return (
    <>

    <Button onClick={() => submit()}></Button>
    </>
  )
}

export default Test2;