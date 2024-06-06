"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import AuthButton from "@/components/AuthBtn";
import { FaRegListAlt,FaChartBar, FaRegUserCircle  } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";




const navLinks = [
  {
    href: "/dashboard",
    label: <p className="flex gap-4 items-center text-md">Dashboard <FaChartBar className="text-xl"/></p>
  },
  {
    href: "/dashboard/add-transaction",
    label: <p className="flex gap-4 items-center text-md">Add Transaction <IoMdAdd  className="text-xl"/></p>,
  },
  {
    href: "/dashboard/all-transactions",
    label: <p className="flex gap-4 items-center text-md">Show Transactions <FaRegListAlt className="text-xl"/></p>  

  },
  {
    href: "/dashboard/profile",
    label: <p className="flex gap-4 items-center text-md"> Profile <FaRegUserCircle  className="text-xl"/></p>  

  },

 
];




const SideNavBar = () => {
    const pathName = usePathname();
  return (
    <nav className='max-w-[300px] w-full p-12 min-h-screen  bg-blue-500/15'>
          <ul className="flex flex-col gap-12  ">
        {navLinks.map((link,i) => (
          <li
            className={
              pathName === link.href
                ? `capitalize text-yellow-500 font-semibold`
                : "capitalize hover:text-yellow-500 font-semibold"
            }
            key={i}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
        
      </ul>
      <div className="pt-56">
      <AuthButton />
      </div>
     
      
    </nav>
  )
}

export default SideNavBar