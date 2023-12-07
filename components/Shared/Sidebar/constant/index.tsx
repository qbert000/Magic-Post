import { ISidebarData } from "../types";
import { BsPeopleFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { PiShoppingCartBold } from "react-icons/pi";


 //export const sidebarManageGather : ISidebarData[] [


 //]

export const sideBarManageTransform: ISidebarData[] = [
  {
    id: 1,
    titleParent: "Employees",
    icon: <BsPeopleFill size="24" />,
    titleChildren: [
      {
        id: 1,
        title: "Trưởng điểm giao dịch",
      },
      {
        id: 2,
        title: "Trưởng điểm tập kết",
      },
    ],
  },
  {
    id: 2,
    icon: <MdLocationOn size="24" />,
    titleParent: "Statistics",
    titleChildren: [
      {
        id: 1,
        title: "Điểm giao dịch",
      },
      {
        id: 2,
        title: "Điểm tập kết",
      },
    ],
  },
];

// export const sidebarManageGather : ISidebarData[] [

// ]

export const sideBarEmployeeTrans: ISidebarData[] = [
  {
    id: 1,
    titleParent: "Đặt hàng",
    icon: <PiShoppingCartBold size="24" />,
    titleChildren: [
      {
        id: 1,
        title: "Đơn",
      },
      {
        id: 2,
        title: "Đơn gửi",
      },
    ],
  },
  {
    id: 2,
    icon: <CiDeliveryTruck size="24" />,
    titleParent: "Giao hàng",
    titleChildren: [
      {
        id: 1,
        title: "Giao hàng",
      },
      {
        id: 2,
        title: "Đã giao",
      },
    ],
  },
];


