import { status } from "@/client/contants/DropMenuTitle";
import { SearchColumns } from "@/client/contants/enum";
import { passOrderToClient } from "@/client/util/orderUtil";
import { orderWork } from "@/components/columns/OrderWork";
import TableMagic from "@/components/forms/TableMagic";
import { GetTransPoint, ManagerTransGetOrder } from "@/lib/actions/transformPoint.action";
import { fetchUser } from "@/lib/actions/user.action";
import { currentUser } from "@clerk/nextjs";

const Page = async () => {
    const user = await currentUser()  
    if(!user) return 
    const userInfor = await fetchUser(user.id)

    const transpoint = await GetTransPoint(userInfor.workPlace)
    if(!transpoint) return

    // lay order

    const orders = await ManagerTransGetOrder(userInfor.workPlace)

    const listOrder = passOrderToClient(orders?.orders, orders?.address)

    return (
        <>
        <div className="m-2 text-dark-1 text-8xl">
            {transpoint.address}
        </div>
        <TableMagic 
            listOrder={listOrder}
            columns={orderWork}
            searchColumns={SearchColumns.description}
            dropMenu={status}
            selectBox={null}
        />
        </>
    )
}

export default Page;

