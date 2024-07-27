'use client'

import { motion } from "framer-motion";
import { projects } from "../_util/data";
import Link from "next/link";
import ArrowIcon from "../_components/icons/ArrowIcon";

const Projects = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.1 }} className='text-white'>
            <div className='w-[80%] mx-auto mt-20 sm:w-[90%] md:w-[90%] sm:mt-12'>
                <div className="w-[40rem] sm:w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className='font-black text-6xl tracking-tight w-auto capitalize sm:text-4xl'
                    >
                        <p>my work</p>
                    </motion.div>
                    <p className="text-xl mt-4">My aim with any project is to create a seamless process to deliver design and development that is frictionless and leads to a process of discovery to produce web apps that effectively solve problems while providing a level of design that allows for functional UX experience.</p>
                </div>
            </div>
            <div className='bg-[#010101] py-20 mt-24 md:py-20 md:mt-20 sm:py-10 sm:mt-16 text-white'>
                {/* project highlight */}
                <div className='w-[80%] mx-auto md:w-[90%] sm:w-[90%]'>
                    {projects.map((project) => {
                        const { title, snippet, thumbnail, route } = project;
                        return (
                            <div key={title} className='mb-14 sm:mb-7'>
                                <div className='cursor-pointer'>
                                    <div className='flex justify-between items-center'>
                                        <Link href={route} className='flex items-end gap-4  sm:flex-wrap sm:gap-1'>
                                            <h2 className='text-2xl text-white sm:text-xl hover:text-[#E1602F] transition-all ease-in-out duration-100'>{title}</h2>
                                            <p className='text-[#8B8A98]'>{snippet}</p>
                                        </Link>
                                        <Link href={route} className='flex items-center gap-1 hover:gap-3 transition-all ease-in-out duration-100 md:hidden sm:hidden'>
                                            <p className='text-[#E1602F] uppercase'>view project</p>
                                            <ArrowIcon />
                                        </Link>
                                    </div>
                                    <div className='mt-6 rounded-2xl overflow-hidden sm:mt-3 sm:rounded-lg'>
                                        <motion.img whileHover={{ scale: 1.04 }} src={thumbnail} alt="thumbnail" className='w-full' />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </motion.div>
    )
}

export default Projects;