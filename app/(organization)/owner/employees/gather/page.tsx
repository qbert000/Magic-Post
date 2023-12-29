import { SearchColumns } from "@/client/contants/enum";
import { tachnhanh } from "@/client/util/userUtil";
import { Owner } from "@/components/columns/UserColumns";
import TableMagic from "@/components/forms/TableMagic";
import { OwnerGetGatherPoint } from "@/lib/actions/gatherPoint.action";
import { fetchUser } from "@/lib/actions/user.action";
import { currentUser } from "@clerk/nextjs";

const Page = async () => {
    const user = await currentUser()
    if(!user) return;
    const userInfor = await fetchUser(user.id)


    const employ = await OwnerGetGatherPoint()
    if(!employ) return
    const newem = tachnhanh(employ)



    return (
        <>
        <TableMagic 
        listOrder={newem}
        columns={Owner}
        searchColumns={SearchColumns.description}
        dropMenu={null}
        selectBox={null}

        /> 
        {/* <Test2 user={newem}/> */}
        </>
    )
}

export default Page;