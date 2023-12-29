export interface order {
    id : string,
    description : string,
    address: string,
    phone : string,
    receiverName : string,
    statusDate: Date,
    status : string,
    statusIsDone : number,
}

export interface orderManager {
    id : string,
    description : string,
    address: string,
    phone : string,
    receiverName : string,
    statusToPoint : Date,
    statusPointSend : Date,
    statusIsDone: number,
    statusPoint : boolean,
    status: Date,
}

export interface orderOwner {
    id : string,
    description : string,
    address: string,
    phone : string,
    receiverName : string,
    point : string,
    status : number,
}

export interface employee {
    name : string,
    career : string,
    id : string,
    workPlace : string,
    address : string,
    active : string,
  }