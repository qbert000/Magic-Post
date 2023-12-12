import { SearchColumns } from "@/client/contants/enum";
import { convertUserToTable } from "@/client/util/userUtil";
import { UserColumns } from "@/components/columns/UserColumns";
import TableMagic from "@/components/forms/TableMagic";
import { fetchEmployeesTransPoint } from "@/lib/actions/transformPoint.action";
import { fetchUser } from "@/lib/actions/user.action";
import { currentUser } from "@clerk/nextjs";

const Page = async () => {
    const user = await currentUser()
    if(!user) return 

    const userInfor = await fetchUser(user.id)
    const transPoint = await fetchEmployeesTransPoint(userInfor.workPlace)

    const listEmploy = convertUserToTable(transPoint)
    // {name, career }

    return (
        <>
        <TableMagic
            listOrder={listEmploy}
            columns={UserColumns}
            searchColumns={SearchColumns.name}
            dropMenu={null}
        />
        
        </>
    )
}

export default Page;