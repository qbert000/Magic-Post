import { status } from "@/client/contants/DropMenuTitle";
import { SearchColumns } from "@/client/contants/enum";
import { passOrderToClient } from "@/client/util/orderUtil";
import { columns } from "@/components/columns/Order";
import { orderWork } from "@/components/columns/OrderWork";
import TableMagic from "@/components/forms/TableMagic";
import { ManagerTransGetOrder } from "@/lib/actions/transformPoint.action";
import { fetchUser } from "@/lib/actions/user.action";
import { currentUser } from "@clerk/nextjs";

const Page = async () => {
    const user = await currentUser()  // tắt cái này đi thì được này 
    // ong share server nma toi k vao dc y 
    // hay thoi ultra mia di:)
    // gui toi IDhơp lý
    // ong reload vai lan xem con loi k
    // ong tat liveshare di
    
    if(!user) return <div></div>

    // ong muon xem xem co user hay khong r ms cho vao dk  ukm

    const userInfor = await fetchUser(user.id)

    const orders = await ManagerTransGetOrder(userInfor.workPlace)

    const listOrder = passOrderToClient(orders)

    return (
        <>
        <TableMagic 
            listOrder={listOrder}
            columns={orderWork}
            searchColumns={SearchColumns.description}
            dropMenu={status}
        />
        </>
    )
}

export default Page;

//no bao loi o dau 
// cai div y
// nó thông báo vậy, chứ đôi khi suất hiện 
// thế chắc do mangj ấy, k lo
// xuất hiện hơi nhiều ý 
// bọn ô làm xong web r ak 
// vcl chua lam ti nao:))
// speedrun 2 tuan vl 
// nó bị lỗi là hay quay lâu lắm 
// nếu v kiuer nó bị lag luôn cái tab ấy ý
// ô tắt đi cho ành