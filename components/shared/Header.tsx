import { UserButton } from "@clerk/nextjs";

function Header  () {
    return (
        <>
        <div className="bg-pink-1 flex">
            <div className="">
                logo
            </div>
            <div>
            <UserButton afterSignOutUrl='/'/>
            </div>

        </div>
        </>
    )
}
export default Header;