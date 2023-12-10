import { HiHome } from "react-icons/hi2"

const HomeBar = () => {
    return (
        <>
        <div className="flex items-center rounded-xl py-2 px-3 text-brand-500 text-heading4-medium space-x-3 link_focus">
            <HiHome size="24" />
            <p className="pt-1">Home</p>
        </div>
        </>
    )
}

export default HomeBar;