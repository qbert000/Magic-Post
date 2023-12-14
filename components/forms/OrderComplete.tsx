import { useRouter } from "next/router";
import { Button } from "../ui/button";

interface Props {
    setComplete : () => void,
}

const OrderComplete = ({setComplete} : Props) => {
    const router = useRouter()

    const back =() => {
        router.push("/")
    }

    const go = () => {
        setComplete()
    }
    return (
        <>
        <div>
            Hoàn Thành Đơn Hàng. Đang chờ xử lý
        </div>

        <Button onClick={()=> back()}>Về Trang Chủ</Button>
        <Button onClick={() => go()} >Tạo Đơn mới</Button>
        </>
    )
}

export default OrderComplete;