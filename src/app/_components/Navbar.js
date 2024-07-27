'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import MenuIcon from "./icons/MenuIcon"
import CancelIcon from "./icons/CancelIcon"
import { motion } from "framer-motion"
import { useState } from "react"

const links = [{ title: 'about me', url: '/about' }, { title: 'projects', url: '/projects' }, { title: 'contact me', url: '/contact' }]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="bg-[#010101] sticky top-0 z-[1000]">
            <div className="py-7 sm:py-6">
                {/* ------------Desktop nav------------ */}
                <div className="block sm:hidden w-[80%] mx-auto md:w-[90%]">
                    <div className="flex justify-between">
                        <Link href='/' className="cursor-pointer">
                            <img src="https://res.cloudinary.com/dgewamfyi/image/upload/v1721499416/My%20portfolio/logo_orange_ocwd0o.png" alt="logo" className="w-28" />
                        </Link>

                        <ul className="flex items-center gap-20 capitalize text-white md:gap-14">
                            {links.map((link) => {
                                const { title, url } = link;
                                const isActive = pathname.startsWith(url);

                                return (
                                    <motion.div
                                        whileHover={isActive ? { scale: 1 } : { scale: 1.2 }}
                                        whileTap={isActive ? { scale: 1 } : { scale: 1.1 }}
                                        key={title}
                                    >
                                        <li
                                            className={`${isActive ? 'text-[#E1602F] hover:none' : 'hover:text-[#6558f2] transition ease-in-out duration-450 cursor-pointer'} h-full block`}
                                        >
                                            <Link href={url}>{title}</Link>
                                        </li>
                                    </motion.div>)
                            })}
                        </ul>
                    </div>
                </div>

                {/* ------------Mobile nav------------ */}
                <div className="hidden sm:block">
                    <div className="relative">
                        <div className="flex justify-between mx-auto sm:w-[90%]">
                            {/* logo */}
                            <button onClick={() => { setIsOpen(!isOpen) }}>
                                <Link href='/' className="cursor-pointer">
                                    <img src="https://res.cloudinary.com/dgewamfyi/image/upload/v1721499416/My%20portfolio/logo_orange_ocwd0o.png" alt="logo" className="w-28" />
                                </Link>
                            </button>

                            <button className="flex items-center" onClick={() => { setIsOpen(!isOpen) }}>
                                {!isOpen ?
                                    (<div>
                                        <div className="text-white flex items-center gap-1 border-4 py-2 px-4 rounded-full cursor-pointer">
                                            <MenuIcon />
                                            <p>Menu</p>
                                        </div>
                                    </div>)
                                    :
                                    (<div className="text-white"><CancelIcon /></div>)}
                            </button>
                        </div>

                        {/* Links */}
                        <ul className={`${!isOpen ? 'left-[-80rem]' : 'left-[0rem]'} bg-white absolute w-full h-[100vh] top-[4.5rem] text-center capitalize pt-[25rem] ease-in-out duration-700`}>
                            {links.map((link) => {
                                const { title, url } = link;

                                return (
                                    <li key={title} className="h-16 text-4xl mb-8">
                                        <button className="capitalize" onClick={() => setIsOpen(!isOpen)}>
                                            <Link href={url} >{title}</Link>
                                        </button>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar