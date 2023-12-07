import TableOrder from "@/components/forms/TableOrder";
import { Status } from "@/contants/status";
import { GetOrderByStatus } from "@/lib/actions/user.action";
import { passOrderToClient } from "@/lib/util/orderUtil";
import { currentUser } from "@clerk/nextjs";

const Page = async () => {
    const user = await currentUser()
    if(!user) return 

    const listOrders = await GetOrderByStatus(user.id, Status.cancel)

    const orders = passOrderToClient(listOrders)

    return (
        <>
        <TableOrder listOrder={orders}/>
          
        </>
    )
}

export default Page;