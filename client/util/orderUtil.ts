import { Date } from "mongoose"

export const passOrderToClient = (listOrder: any[])  => {
  if (!Array.isArray(listOrder)) return [];
  const order = listOrder.map((
      {
        description,
        receiverName,
        city,
        district,
        ward,
        phone,
        statusDate,
  
      } : {
        description: any,
        receiverName: any,
        city: any,
        district: any,
        ward: any,
        phone: string,
        statusDate: any[],
      })=> ({
        description,
        receiverName,
        address : city + ','+ district + ',' + ward,
        phone,
        statusDate: statusDate[0],
        status: statusDate.length.toString(),
      })
    )

    return order

}

