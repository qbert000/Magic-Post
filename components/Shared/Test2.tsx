'use client'
import { createNewTransformPoint } from "@/lib/actions/transformPoint.action"
import { Button } from "../ui/button"
import { CreateNewGartherPoint } from "@/lib/actions/gatherPoint.action"



const Test2 = () => {

  const submit = async  () => {
    await createNewTransformPoint("Quận 1")
    await createNewTransformPoint("Quận 10")
    await createNewTransformPoint("Quận 11")

    // await CreateNewGartherPoint("Hà Nội")
    // await CreateNewGartherPoint("Đà Nẵng")
    // await CreateNewGartherPoint("Hồ Chí Minh")


  }

  return (
    <>

    <Button onClick={() => submit()}></Button>
    </>
  )
}

export default Test2;