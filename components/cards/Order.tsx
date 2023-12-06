"use client"

import { ReactElement } from "react";



interface Props {
    id: string,
    // sender: string,
    receiverName: string,
    description: string,
    city: string,
    district: string,
    ward: string,
    phone: string,
    // postage: Number[],
}

const Order = ({
    id,
    // sender,
    receiverName,
    description,
    city,
    district,
    ward,
    phone,
    // postage
}: Props) => {
    return (
        <>
        <div className="flex flex-row border-b-2 border-pink-2">
            <div className="basis-1/12">
                #{id}
            </div>
            <div className="basis-2/12">
                {description}
            </div>
            <div className="basisi-5/12">
                {city}, {district},{ward}
            </div>
            <div className="basisi-2/12">
                {phone}
            </div>
            <div className="basisi-2/12">
                {receiverName}
            </div>

        </div>
        </>
    )
}

export default Order;