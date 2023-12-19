import { Date } from "mongoose"

export const passOrderToClient = (listOrder: any[])  => {
  if (!Array.isArray(listOrder)) return [];
  const order = listOrder.map((
      {
        _id,
        description,
        receiverName,
        city,
        district,
        ward,
        phone,
        statusDate,
  
      } : {
        _id : any,
        description: any,
        receiverName: any,
        city: any,
        district: any,
        ward: any,
        phone: string,
        statusDate: any[],
      })=> ({
        id : _id.toString(),
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

export const PassOrderForEmployee = (listOrder: any[]) => {
  if (!Array.isArray(listOrder)) return [];
  const order = listOrder.map((
      {
        _id,
        description,
        receiverName,
        city,
        district,
        ward,
        phone,
        statusDate,
        statusIsDone,
  
      } : {
        _id : any,
        description: any,
        receiverName: any,
        city: any,
        district: any,
        ward: any,
        phone: string,
        statusDate: any[],
        statusIsDone: number,
      })=> ({
        id : _id.toString(),
        description,
        receiverName,
        address : city + ','+ district + ',' + ward,
        phone,
        statusDate: statusDate[0],
        status: statusDate.length.toString(),
        city : city,
        district : district,
        statusIsDone,
      })
    )

    return order
}

export const PassOrderToInventory = (listOrder : any[]) => {
  if (!Array.isArray(listOrder)) return [];
  const order = listOrder.map((
      {
        _id,
        description,
        receiverName,
        city,
        district,
        ward,
        phone,
        statusDate,
        sender : {
          firstName,
          lastName,
        },
        typeOrder,

      } : {
        _id : string,
        description: any,
        receiverName: any,
        city: any,
        district: any,
        ward: any,
        phone: string,
        statusDate: any[],
        sender : {
          firstName : string,
          lastName : string,
        },
        typeOrder : string,
      })=> ({
        id : _id.toString(),
        description ,
        address : city + "," + district + "," + ward,
        phone ,
        receiverName,
        senderName : firstName + " " + lastName,
        typeOrder,
      })
    )

    return order
}

