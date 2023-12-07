
export const LeftbarLinkCustomer = [
    {
        label: "Tất cả",
        value: "all",
        link:'/',
        sub:[],
    },
    {
        label: "Chưa thanh toán",
        value: "payNot",
        link:'/payNot',
        sub:[],
    },
    {
        label: "Đang vận chuyển",
        value: "transport",
        link: '/transport',
        sub:[],
    },
    {
        label: "Chờ vận chuyển",
        value: "wait",
        link: "/wait",
        sub: [],
    },
    {
        label: "Hoàn Thành",
        value: "done",
        link:'/done',
        sub:[],
    },
    {
        label: "Trả hàng",
        value: "cancel",
        link:'/cancel',
        sub:[],
    }
]


export const LeftbarLinkManager = [
    {
        label: "Nhân Viên",
        link: "/employees",
        value: "employees",
        sub: [],

    },
    {
        label: "Thống Kê",
        link: "/statistics",
        value: "statistics",
        sub:[]
    }
]

export const LeftbarLinkEmployeeTrans = [
    {
        label: "Đặt Hàng",
        value: "order",
        link: "/order/orderTo",
        sub: [
            {
                label: "Đơn",
                value: "orderTo",
                link: "/order/orderTo",
            },
            {
                label: "Đơn Gửi",
                value: "orderGo",
                link: "/order/orderGo",
            }
        ]
    },
    {
        label: "Chuyển Phát",
        value: "shiper",
        link: "/shiper/shipGo",
        sub: [
            {
                label: "Giao Hàng",
                value: "shipGo",
                link: "/shiper/shipGo",
            },
            {
                label: "Thống Kê",
                value: "shipOver",
                link: "/shiper/shipOver"
            }
        ]
    }
]

export const LeftbarLinkEmployeeGather = [
    {
        label: "Điểm Giao Dịch",
        value: "neighPoints",
        link: "/neighPoints/receive",
        sub: [
            {
                label: "Hàng Đến",
                value: "receive",
                link: "/neighPoints/receive",
            },
            {
                label: "Hàng Gửi",
                value: "send",
                link: "/neighPoints/send",
            }
        ]
    },
    {
        label: "Điểm Tập Kết",
        value: "finalPoint",
        link: "/finalPoint/receive",
        sub: [
            {
                label: "Hàng Đến",
                value: "receive",
                link: "/finalPoint/receive",
            },
            {
                label: "Hàng Gửi",
                value: "send",
                link: "/finalPoint/send",
            }
        ]
    }
]

export const LeftbarLinkOwner =[
    {
        label: "Nhân Viên",
        value: "employee",
        link: "/employees/gather",
        sub: [
            {
                label: "Điểm Tập Kết",
                value: "employGarther",
                link:"/employees/gather",
            },
            {
                label: "Điểm Giao Dịch",
                value: "employeeTrans",
                link: "/employees/transform",
            }
        ]
    },
    {
        label: "Thống Kê",
        value : "statistics",
        link: "/statistics",
        sub: [
            {
                label:"Tập Kết",
                value: "gather",
                link: "/statistics/gather",
            },
            {
                label: "Giao Dịch",
                value: "trans",
                link: "/statistics/transform"
            }
        ]
    }
]

export const RightbarLinkCustomer =[
    {
        label: "Tạo Đơn",
        value: "add",
        link: "/add",
    }
]

export const RightbarLinkNormal = [
    {
        label: "Thêm Nhân Viên",
        value : "add employee",
        link: "",
    }
]

export const RightbarLinkEmployeeTrans = [
    {
        label: "Tạo Đơn",
        value: "addOrder",
        link: "",
    },
    {
        label: "Thống Kê"
    }
]
  