import { SearchColumns } from "@/client/contants/enum";
import { passOrderToClient } from "@/client/util/orderUtil";
import { orderWork1 } from "@/components/columns/OrderWork";
import TableMagic from "@/components/forms/TableMagic";
import { GetGatherPoint, ManagerGatherGetOrder } from "@/lib/actions/gatherPoint.action";
import { fetchUser } from "@/lib/actions/user.action";
import { currentUser } from "@clerk/nextjs";
import { status } from "@/client/contants/DropMenuTitle";


const Page = async () => {
    const user = await currentUser()
    if(!user) return
    const userInfor = await fetchUser(user.id)

    const gatherpoint = await GetGatherPoint(userInfor.workPlace)
    if(!gatherpoint) return

    // lay order

    const orders = await ManagerGatherGetOrder(userInfor.workPlace)

    const listOrder = passOrderToClient(orders?.orders, orders?.address)

    return (
        <>
        <div className="m-2 text-dark-1 text-8xl">
            {gatherpoint.address}
        </div>
        <TableMagic 
            listOrder={listOrder}
            columns={orderWork1}
            searchColumns={SearchColumns.description}
            dropMenu={status}
            selectBox={null}
        />
        </>
    )
}

export default Page;