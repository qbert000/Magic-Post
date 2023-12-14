export const address = [
    {
        city : "Hà Nội",
        district : [
            {
                name:'Ba Vì'
            },
            {
                name:"Chương Mĩ"
            },
            {
                name: "Gia lâm"
            },
            {
                name : "Hoài Đức"
            }, 
            {
                name: "Mê Linh"
            },
            {
                name:"Mỹ Đức"
            },
            {
               name:"Phú Xuyên" 
            },
            {
                name: "Phúc Thọ"
            },
            {
                name:"Quốc Oai"
            },
            {
                name: "Sóc Sơn"
            },
            {
                name: "Thanh Oai"
            },
            {
                name: "Thanh Trì"
            },
            {
                name: "Thường Tín"
            },
            {
               name: "Thạch Thất" 
            },
            {
                name: "Đông Anh"
            },
            {
                name: "Ba Đình"
            },
            {
                name: "Bắc Từ Liêm"
            },
            {
                name: "Nam Từ Liêm"
            },
            {
                name: "Hai Bà Trừng"
            },
            {
                name: "Hoàn Kiếm"
            },
            {
                name: "Hoàng Mai"
            },
            {
                name: "Hà Đông"
            },
            {
                name: "Long Biên"
            },
            {
                name: "Thanh Xuân"
            },
            {
                name: "Tây Hồ"
            },
            {
                name: "Đống Đa"
            }
        ]
    },
    {
        city: "Thanh Hóa",
        district : [
            {
                name: "Bỉm Sơn"
            }
        ]
    }
]


export const Address: city[] = [
    {
        label: "Hà Nội",
        value: "Hà Nội",
        district : [
            {
                label: "Cầu Giấy",
                value : "Cầu Giấy",
                ward : [
                    {
                        label: "Dịch Vọng Hậu",
                        value : "Dịch Vọng Hậu",
                    },
                    {
                        label : "Dương Quảng Hàm",
                        value : "Dương Quảng Hàm",
                    },
                    {
                        label : "Yên Hòa",
                        value : "Yên Hòa"
                    },
                ]
            },
            {
                label : "Hà Đông",
                value : "Hà Đông",
                ward : [
                    {
                        label : "Quang Trung",
                        value : "Quang Trung",
                    },
                    {
                        label : "Dương Nội",
                        value : "Dương Nội",
                    },
                    {
                        label : "Hà Cầu",
                        value : "Hà Cầu"
                    }
                ]
            },
            {
                label : "Đống Đa",
                value : "Đống Đa",
                ward : [
                    {
                        label : "Cát Linh",
                        value : "Cát Linh"
                    },
                    {
                        label : "Láng Hạ",
                        value : "Láng Hạ",
                    },
                    {
                        label : "Khương Thượng",
                        value : "Khương Thượng",
                    }
                ]
            }
        ]
    },
    {
        label: "Đà Nẵng",
        value : "Đã Nẵng",
        district :[
            {
                label : "Sơn Trà",
                value : "Sơn Trà",
                ward : [
                    {
                        label : "Hải Bắc",
                        value : "Hải Bắc",
                    },
                    {
                        label : "Hải Tây",
                        value : "Hải Tây",
                    },
                    {
                        label : "Hải Đông",
                        value : "Hải Đông",
                    }
                ]
            }, {
                label : "Hải Châu",
                value : "Hải Châu",
                ward : [
                    {
                        label : "Bình Hiên",
                        value : "Bình Hiên",
                    },
                    {
                        label : "Bình Thuận",
                        value : "Bình Thuận",
                    }, 
                    {
                        label : "Cường Bắc",
                        value : "Cường Bắc",
                    }
                ]
            }, {
                label : "Cẩm Lệ",
                value : "Cẩm Lệ",
                ward :[
                    {
                        label : "Hòa An",
                        value : "Hòa An",
                    },
                    {
                        label : "Hòa Phát",
                        value : "Hòa Phát",
                    }, 
                    {
                        label: "Hòa Xuân",
                        value : "Hòa Xuân",
                    }
                ]
            }
        ]
    },
    {
        label: "Hồ Chí Minh",
        value: "Hồ Chí Minh",
        district :[
            {
                label : "Quận 1",
                value : "Quận 1",
                ward : [
                    {
                        label : "Bến Thành",
                        value : "Bến Thành",
                    },
                    {
                        label : "Bến Nghé",
                        value : "Bến Nghé",
                    },
                    {
                        label : "Cô Giang",
                        value : "Cô Giang",
                    }
                ]
            },
            {
                label : "Quận 10",
                value : "Quânh 10",
                ward : [
                    {
                        label :"Phường 1",
                        value : "Phường 1", 
                    },
                    {
                        label : "Phường 2",
                        value : "Phường 2",
                    }, 
                    {
                        label : "Phường 3",
                        value : "Phường 3",
                    }
                ]
            }, 
            {
                label : "Quận 11",
                value : "Quânh 11",
                ward : [
                    {
                        label :"Phường 1",
                        value : "Phường 1", 
                    },
                    {
                        label : "Phường 2",
                        value : "Phường 2",
                    }, 
                    {
                        label : "Phường 3",
                        value : "Phường 3",
                    }
                ]
            }
        ]
    }
]


export interface city {
    label : string,
    value : string,
    district : district[]
}

export interface district {
    label : string,
    value : string,
    ward : ward[],
}

interface ward {
    label : string,
    value : string,
}

