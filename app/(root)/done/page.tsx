import Test from "@/components/Shared/Test";
import Table from "@/components/forms/Post";
import { fetchUser } from "@/lib/actions/user.action";
import { UserButton, currentUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import TableGoods from "@/components/tables/TableGoods";
import { DeliveryStatus, GoodsType, IGoods } from "@/lib/types/goods.type";

const goods: IGoods[] = [
{
    id: "1",
    description: "description",
    fromAddress: "fromAddress",
    toAddress: "toAddress",
    sentDate: new Date(),
    fromEmail: "fromemail",
    toEmail: "toemail",
    fromName: "fromname",
    toName: "toname",
    status: DeliveryStatus.Confirmed,
    type: GoodsType.Document,
    toPhone: "023",
    fromPhone: "023"
},

{
    id: "2",
    description: "description1",
    fromAddress: "fromAddress1",
    toAddress: "toAddress1",
    sentDate: new Date(),
    fromEmail: "fromemail1",
    toEmail: "toemail1",
    fromName: "fromname1",
    toName: "toname1",
    status: DeliveryStatus.Failed,
    type: GoodsType.Goods,
    toPhone: "023",
    fromPhone: "023"
},

{
    id: "3",
    description: "description2",
    fromAddress: "fromAddress2",
    toAddress: "toAddress2",
    sentDate: new Date(),
    fromEmail: "fromemail2",
    toEmail: "toemail2",
    fromName: "fromname2",
    toName: "toname2",
    status: DeliveryStatus.Delivered,
    type: GoodsType.Document,
    toPhone: "023",
    fromPhone: "023"
},

{
    id: "4",
    description: "description3",
    fromAddress: "fromAddress3",
    toAddress: "toAddress3",
    sentDate: new Date(),
    fromEmail: "fromemail3",
    toEmail: "toemail3",
    fromName: "fromname3",
    toName: "toname3",
    status: DeliveryStatus.Delivering,
    type: GoodsType.Goods,
    toPhone: "023",
    fromPhone: "023"
},

{
    id: "5",
    description: "description4",
    fromAddress: "fromAddress4",
    toAddress: "toAddress4",
    sentDate: new Date(),
    fromEmail: "fromemail4",
    toEmail: "toemail4",
    fromName: "fromname4",
    toName: "toname4",
    status: DeliveryStatus.NotDelivered,
    type: GoodsType.Document,
    toPhone: "023",
    fromPhone: "023"
},

{
    id: "6",
    description: "description5",
    fromAddress: "fromAddress5",
    toAddress: "toAddress5",
    sentDate: new Date(),
    fromEmail: "fromemail5",
    toEmail: "toemail5",
    fromName: "fromname5",
    toName: "toname5",
    status: DeliveryStatus.NotDelivering,
    type: GoodsType.Goods,
    toPhone: "023",
    fromPhone: "023"
}
]

export default async function Home() {
    const user = await currentUser();
    if (!user) return;
    const userInfor = await fetchUser(user.id);

    const userdata = {
        // id: userInfor._id.toString()
    };
    return (
        <div>
            <section className="mt-9  p-10" style={{height:400}}>
                <TableGoods data={goods} />
            </section>
        </div>
    );
}
