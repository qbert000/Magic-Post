import { FaUser } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Header() {
  return (
    <>
      <div className="bg-brand-500 py-6 flex items-center justify-between px-10">
        <div className="pl-2">
          <p className="text-white text-heading1-semibold">Magic Post</p>
        </div>
        <div className="flex space-x-6 ">
          <FaBell className="text-yellow-500 cursor-pointer" size="28" />
          <MdEmail className="text-yellow-500 cursor-pointer" size="28" />
          <FaUser className="text-gray-300 cursor-pointer" size="28" />
        </div>
      </div>
    </>
  );
}
export default Header;
