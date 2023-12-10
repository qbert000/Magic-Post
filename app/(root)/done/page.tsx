import { Status } from "@/client/contants/enum";
import { passOrderToClient } from "@/client/util/orderUtil";
import TableOrder from "@/components/forms/TableOrder";
import { GetOrderByStatus } from "@/lib/actions/user.action";
import { currentUser } from "@clerk/nextjs";

const Page = async () => {
    const user = await currentUser()
    if(!user) return

    const listOrder = await GetOrderByStatus(user.id, Status.done)

    const orders = passOrderToClient(listOrder)
    return (
        <>
            <TableOrder listOrder={orders} />
        </>
    )
}

export default Page;