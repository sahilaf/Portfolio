"use client"
import {Sheet,SheetContent,SheetTrigger} from "../components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {CiMenuFries} from 'react-icons/ci'
const MobileNav = () => {
    const links=[
        {
            name:"home",
            path:"/"
        },
        {
            name:"projects",
            path:"/projects"
        },
        {
            name:"about",
            path:"/about"
        },
        {
            name:"contact",
            path:"/contact"
        },
    ];
    const pathname=usePathname();
  return <Sheet>
    <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent"/>
    </SheetTrigger>
    <SheetContent className="flex flex-col">
        <div className="mt-24 mb-28 text-center text-2xl">
            <Link href="/">
            <h1 className="text-4xl font-semibold">
                Sahil<span className="text-accent">.</span>
            </h1>
            </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
            {links.map((link,index)=>{
                return (
                    <Link href={link.path} key={index} 
                    className={`${link.path ===pathname&&"text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}>
                    {link.name}
                    </Link>
                )
            })}
        </nav>
        </SheetContent>
  </Sheet>
}

export default MobileNav