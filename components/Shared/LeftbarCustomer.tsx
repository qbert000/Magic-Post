"use client";

import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LeftbarLinkCustomer } from "@/contants/sidebarlink";

const LeftbarCustomer = () => {
    const router = useRouter();
    const pathname = usePathname();

    const { userId } = useAuth();
    return (
    <>
    <section className='custom-scrollbar leftsidebar'>
      <div className='flex w-full flex-1 flex-col gap-6 px-6'>
        {LeftbarLinkCustomer.map((link) => {
          const isActive =
            (pathname.includes(link.link) && link.link.length > 0) ||
            pathname === link.link;

          return (
            <Link
              href={`/${userId}${link.link}`}
              key={link.label}
              className={`leftsidebar_link ${isActive && "bg-pink-2 "}`}
            >
              <p className='text-pink-1 max-lg:hidden'>{link.label}</p>
            </Link>
          );
        })}
      </div>
      </section>
    </>
    )
}

export default LeftbarCustomer;