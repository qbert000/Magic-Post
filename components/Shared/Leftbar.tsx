'use client'


import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  sidebarlink: Link[],
  pathnameRoot: string,
}

interface Link {
  label: string,
  value: string,
  link: string,
  sub : SubLink[],
}

interface SubLink {
  label: string,
  value:string,
  link: string,
}


const Leftbar = ({sidebarlink, pathnameRoot} :Props) => {
    const router = useRouter();
    const pathname = usePathname();

    const { userId } = useAuth();

   
    return (
    <>
    <section className='custom-scrollbar leftsidebar'>
      {/* side link bar  */}
      <div className='flex w-full flex-1 flex-col gap-6 px-6'>
        {sidebarlink.map((link) => {
          // khong co link con
          if(link.sub.length === 0) {
            const isActive = (pathname.includes(link.link) && link.link.length > 1) ||
            pathname === link.link;
            return(
              <>
              <Link
                href={`${pathnameRoot}${link.link}`}
                key={link.label}
                className={`leftsidebar_link ${isActive && "bg-pink-2 "}`}
              >
                <p className='text-pink-1 max-lg:hidden'>{link.label}</p>
              </Link>
              </>
            )
          } 
          // co link con 
          else {
            return (
            <>
            <p className='text-pink-1 max-lg:hidden'>{link.label}</p>
            {link.sub.map((sub) => {
              const isActive = (pathname.includes(sub.link) && sub.link.length > 1) ||
              pathname === sub.link;
              return (
                <>
                <Link
                  href={`${pathnameRoot}${sub.link}`}
                  key={sub.label}
                  className={`leftsidebar_link ${isActive && "bg-pink-2 "}`}
            >
              <p className='text-pink-1 max-lg:hidden'>{sub.label}</p>
                </Link>
                </>
              )
            })}
            </>
          )
          }
        })}
      </div>
      
      
      </section>
    </>
    )
}

export default Leftbar;