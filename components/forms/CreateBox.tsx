'use client'
import { use, useState } from "react";
import CreateOrder from "./CreateOrder";
import OrderComplete from "./OrderComplete";

interface Props {
    user : {
        id : string,
    },
}

const CreateBox = ({user} : Props) => {
    const [complete, setComplete] = useState(false)

    const dosome =() => {
        setComplete(true)
    }

    const run = ()=> {
        setComplete(false)
    }
    return (
        <>
        {
            complete ?
            <OrderComplete setComplete={run}/>
            : 
            <CreateOrder user={user}  setcomplete={dosome}/>
        }
        
        </>
    )
}


export default CreateBox;