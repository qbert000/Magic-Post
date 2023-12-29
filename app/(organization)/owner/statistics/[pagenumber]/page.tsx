import { ReSize, SearchColumns } from "@/client/contants/enum";
import { passOrderToOwner } from "@/client/util/orderUtil";
import { orderOzi } from "@/components/columns/OrderOwer";
import PaginationTableMagic from "@/components/forms/PaginationTableMagic";
import TableMagic from "@/components/forms/TableMagic";
import { GetAllOrderByOwner, GetNumberPage } from "@/lib/actions/order.action";
import { fetchUser } from "@/lib/actions/user.action";
import { currentUser } from "@clerk/nextjs";


const Page = async ({params} : {params : {pagenumber: number}}) => {
    const user = await currentUser()
    if(!user) return;
    const userInfor = await fetchUser(user.id)
    

    const pageNumber = await GetNumberPage()

    const orders = await GetAllOrderByOwner(params.pagenumber,ReSize.pageSize)
    if(!orders) return
    const listorder = passOrderToOwner(orders)
    

    return (
        <>
        {

        <PaginationTableMagic 
            pageNumber={pageNumber} 
            pageNow={params.pagenumber}
        />
        }
        <div className="my-scrollbar">
        <TableMagic 
            listOrder={listorder}
            columns={orderOzi}
            searchColumns={null}
            dropMenu={null}
            selectBox={null}
        />
        </div>
        
            
            
        
        
        
        </>
    )
}

export default Page;