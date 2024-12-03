"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const links = [
    {
        name:"home",
        path:"/",
    },
    {
        name:"services",
        path:"/services"
    },
    {
        name:"team",
        path:"/team"
    },
    {
        name:"works",
        path:"/works"
    },
    {
        name:"contact",
        path:"/contact"
    },
    {
        name:"blog",
        path:"/blog"
    },
];

const Nav = () => {
    const pathname = usePathname();
    console.log(pathname)
    return (
        <nav className='bg-white lg:bg-transparent  flex flex-col xl:flex-row gap-8 pl-10 pb-6'>
           {
            links.map((link,i)=>{
                return <Link href={link.path} key={i} className={`${link.path === pathname && "w-[70px] lg:w-full text-[#333] border-b-2 border-black"} capitalize font-medium hover:border-b-2  hover:border-black transition-all ease-linear cursor-pointer`}>{link.name}</Link>
            })
           }
        </nav>
    );
};

export default Nav;