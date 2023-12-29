import { SearchColumns } from "@/client/contants/enum";
import { convertUserToTable } from "@/client/util/userUtil";
import { UserColumns } from "@/components/columns/UserColumns";
import TableMagic from "@/components/forms/TableMagic";
import { ManagerGatherGetEmployee } from "@/lib/actions/gatherPoint.action";
import { fetchUser } from "@/lib/actions/user.action";
import { currentUser } from "@clerk/nextjs";

const Page = async () => {
    const user = await currentUser()
    if(!user) return 
    const userInfor = await fetchUser(user.id)

    const employ = await ManagerGatherGetEmployee(userInfor.workPlace)
    const listEmploy = convertUserToTable(employ)

    return (
        <>
       <TableMagic
            listOrder={listEmploy}
            columns={UserColumns}
            searchColumns={SearchColumns.name}
            dropMenu={null}
            selectBox={null}
        />
        </>
    )
}

export default Page;