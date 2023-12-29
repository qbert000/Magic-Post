import { Date } from "mongoose"
import { order, orderManager, orderOwner } from "./ColumnsType";

// cho quan ly
export const passOrderToClient = (listOrder: any[], address : string)  => {
  if (!Array.isArray(listOrder)) return [];
  const order : orderManager[]= listOrder.map((
      {
        _id,
        description,
        receiverName,
        city,
        district,
        ward,
        phone,
        statusDate,
        statusPoint,
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
        statusPoint : string[],
        statusIsDone: number,
      })=> ({
        id : _id.toString(),
        description,
        receiverName,
        address : city + ','+ district + ',' + ward,
        phone,
        statusToPoint : statusDate[1],
        statusPointSend : statusDate[statusPoint.indexOf(address) * 2],
        statusIsDone: statusIsDone,
        statusPoint : statusPoint[0] === address,
        status : statusDate[0],
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

export const PassOrderToTableStatus = (order : any) => {
  const newOrder : orderStatus = {
    email : order.email,
    phone : order.phone,
    receiverName : order.receiverName,
    senderName: order.sender.firstName + " " + order.sender.lastName,
    address : order.city + ", " + order.district + ", " + order.ward,
    description : order.description,
    status : order.statusIsDone,
    statusDate : order.statusDate,
    statusOption : order.statusOption,
    statusLength : order.statusDate.length
  }

  return newOrder
}

interface orderStatus {
  email : string,
  phone : string,
  receiverName : string,
  senderName : string,
  address : string,
  description : string,
  status : string,
  statusDate : Date[],
  statusOption : string[],
  statusLength : number,
}


export const PassOrderToManaGer = (
  listOrder : any[],
   dateto : number, 
   datesend : number) => {
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
        Dateto : statusDate[dateto],
        DateSend : statusDate[datesend],
        status: statusDate.length.toString(),
        statusIsDone: statusIsDone
      })
    )

    return order
}

export const passOrderToOwner = (listOrder: any[])  => {
  if (!Array.isArray(listOrder)) return [];
  const order : orderOwner[] = listOrder.map((
      {
        _id,
        description,
        receiverName,
        city,
        district,
        ward,
        phone,
        statusDate,
        statusPoint,
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
        statusPoint : string[],
        statusIsDone: number,
      })=> ({
        id : _id.toString(),
        description,
        receiverName,
        address : city + ','+ district + ',' + ward,
        phone,
        point : statusPoint[statusPoint.length-1],
        status : statusIsDone,
        
      })
    )

    return order
}
