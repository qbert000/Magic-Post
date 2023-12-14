export enum DeliveryStatus {
  Delivered = "delivered",
  Delivering = "delivering",
  Failed = "failed",
  NotDelivered = "not Delivered",
  NotDelivering = "not Delivering",
}

export enum GoodsType {
  Document = "document",
  Goods = "goods",
}

export interface IGoods {
  id: string;
  description: string;
  sentDate: Date;
  toDate?: Date;
  fromAddress: string;
  toAddress: string;
  status: DeliveryStatus;
  type: GoodsType;
  fromPhone: string;
  toPhone: string;
  fromName: string;
  toName: string;
  fromEmail: string;
  toEmail: string;
}
