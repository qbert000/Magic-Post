'use client'
import { createNewTransformPoint } from "@/lib/actions/transformPoint.action"
import { Button } from "../ui/button"
import { CreateNewGartherPoint } from "@/lib/actions/gatherPoint.action"

interface Props {
  user : any[],
}

const Test2 = ({user}: Props) => {

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

    {/* <Button onClick={() => submit()}></Button> */}

    <Button onClick={()=> console.log(user)}>click</Button>
    </>
  )
}

export default Test2;