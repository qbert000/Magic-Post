import { IoSettingsSharp } from "react-icons/io5"

const Setting = () => {
    return (
        <>
        <div className="flex items-center rounded-xl py-2 px-3 text-brand-500 text-heading4-medium space-x-3 hover:bg-brand-500 hover:text-white cursor-pointer">
        <IoSettingsSharp size="24" />
        <p className="pt-1">Setting</p>
      </div>
        </>
    )
}

export default Setting