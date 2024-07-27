'use client'

import ArrowIcon from './icons/ArrowIcon';
import InfiniteScroll from './InfiniteScroll';
import Link from 'next/link';
import { projects, stackIcons } from '../_util/data';
import { motion } from 'framer-motion';

const RestOfTheHomepage = () => {
    return (
        <div className='bg-[#010101] mt-24 sm:mt-16'>
            {/* scroll animation */}
            <InfiniteScroll text='latest projects' />

            {/* project highlight */}
            <div className='w-[80%] mx-auto mt-20 pb-20 md:w-[90%] sm:w-[90%] sm:mt-10 sm:pb-10'>
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
                <motion.button
                    initial={{ opacity: 0, x: 12, }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.2, backgroundColor: '#E1602F', color: '#ffffff' }}
                    whileTap={{ scale: 1.1 }}
                    className='flex gap-2 py-4 px-8 rounded-full border-4 border-[#2F2F2F] text-[#eeeeee] whitespace-nowrap sm:py-3 sm:px-6'
                >
                    <Link href='/projects'><span className='capitalize'>See more great projects</span></Link>
                </motion.button>
            </div>

            {/* tech stack */}
            <div className=' bg-[#5547FF]'>
                <div className='w-[80%] mx-auto py-20 sm:w-[90%] sm:py-10'>
                    <h1 className='text-3xl text-white text-center sm:text-2xl'>Tech stack</h1>
                    <div className='bg-[#BFFF0A] p-8 rounded-2xl flex gap-4 mt-6 w-auto items-center drop-shadow-[-24px_28px_0_#4B3EE0] sm:flex-wrap sm:drop-shadow-[-12px_14px_0_#4B3EE0]'>
                        {stackIcons.map((item) => {
                            return (
                                <div className='grow w-24 bg-black p-6 rounded-xl'>
                                    <img src={item} alt='icon' className='w-24 mx-auto' />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* More about me and services */}
            <div className='w-[80%] mx-auto md:w-[90%] sm:w-[90%] text-white pt-20 pb-32 sm:py-14'>
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='flex items-center justify-between gap-16 text-[#eeeeee] font-black tracking-tight w-auto md:flex-wrap md:gap-0 md:text-center sm:flex-wrap sm:gap-0 sm:text-center'
                >
                    <p className='text-6xl sm:text-3xl md:order-2 sm:order-2'>
                        As your <span className='text-[#6558f2] capitalize'>friendly neighborhood web developer & designer,</span>  I'm keen on creating awesome web apps that are functional and visually appealing. Think of me as Spider-Man, but instead of webs, I sling pixels & code!
                    </p>
                    <img src="https://res.cloudinary.com/dgewamfyi/image/upload/v1721499419/My%20portfolio/pirate_h4n7ji.gif" alt="pirate image" className='w-[40rem] md:order-1 sm:order-1' />
                </motion.div>

                <div className='mt-32 sm:mt-20'>
                    <h1 className='text-3xl text-[#eeeeee] sm:text-2xl sm:text-center'>What web-slinging skills do I offer?</h1>
                    <div className='mt-8 flex md:flex-wrap sm:flex-wrap gap-6 justify-between items-center sm:mt-6'>
                        <motion.div whileHover={{ scale: 1.05 }} className='bg-[#0f0f0f] p-10 rounded-xl cursor-pointer hover:drop-shadow-[-8px_8px_0_#BFFF0A] ease-in-out duration-500 sm:p-7'>
                            <img src="https://res.cloudinary.com/dgewamfyi/image/upload/v1721499418/My%20portfolio/Pen_icon_jsdx8g.png" className='w-36 sm:w-24' alt="pen-icon" />
                            <div className='mt-8 sm:mt-6'>
                                <h3 className='text-3xl text-[#eeeeee]'>UX Design</h3>
                                <p className='mt-4 text-[#8B8A98] text-xl sm:text-[1rem]'>
                                    Fear not! Your friendly neighborhood dev & designer is here with UX design superpowers! I can craft interfaces that are as intuitive as Professor X and user experiences smoother than Wolverine's adamantium claws.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.03 }} className='bg-[#0f0f0f] p-10 rounded-xl cursor-pointer hover:drop-shadow-[-8px_8px_0_#BFFF0A] ease-in-out duration-500 sm:p-7'>
                            <img src="https://res.cloudinary.com/dgewamfyi/image/upload/v1721499414/My%20portfolio/Frontend_icon_ouallk.png" className='w-36 sm:w-24' alt="frontend-icon" />
                            <div className='mt-8 sm:mt-6'>
                                <h3 className='text-3xl text-[#eeeeee]'>Frontend Development</h3>
                                <p className='mt-4 text-[#8B8A98] text-xl sm:text-[1rem]'>
                                    Forget special effects studios, I'm your frontend development powerhouse! I craft user interfaces that are as stunning as Iron Man's suit and as user-friendly as Captain America's shield.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} className='bg-[#0f0f0f] p-10 rounded-xl cursor-pointer hover:drop-shadow-[-8px_8px_0_#BFFF0A] ease-in-out duration-500 sm:p-7'>
                            <img src="https://res.cloudinary.com/dgewamfyi/image/upload/v1721499412/My%20portfolio/Backend_icon_c3d1pu.png" className='w-36 sm:w-24' alt="backend-icon" />
                            <div className='mt-8 sm:mt-6'>
                                <h3 className='text-3xl text-[#eeeeee]'>Backend Development</h3>
                                <p className='mt-4 text-[#8B8A98] text-xl sm:text-[1rem]'>
                                    For the backend, we always need to ensure that everything runs like clockwork, so you can focus on what matters most.
                                    I'm the unseen hero behind the scenes, making sure your API run smoothly and efficiently, data is protected and your web app's performance is optimized.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Socials CTA */}
                <div className='mt-16 md:mt-3 sm:mt-6'>
                    {/* scroll animation */}
                    <InfiniteScroll text='follow me on socials' />
                    {/* socials */}
                    <div className='mx-auto mt-16 grid place-items-center sm:mt-10'>
                        <div className='inline-flex gap-20 sm:gap-4'>
                            <motion.div whileHover={{ scale: 1.1, rotate: 35 }} whileTap={{ scale: 1.1 }}
                            >
                                <Link href='https://www.instagram.com/louiskomekay/' target='_blank'>
                                    <img src="https://res.cloudinary.com/dgewamfyi/image/upload/v1721499415/My%20portfolio/IG_icon_gk5vqe.png" className='w-56 sm:w-40' alt="instagram-icon" />
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.1, rotate: 35 }} whileTap={{ scale: 1.1 }}
                            >
                                <Link href='https://www.tiktok.com/@louiskomekay' target='_blank'>
                                    <img src="https://res.cloudinary.com/dgewamfyi/image/upload/v1721499412/My%20portfolio/TK_icon_ep8ans.png" className='w-56 sm:w-40' alt="tiktok-icon" />
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.1, rotate: 35 }} whileTap={{ scale: 1.1 }}
                            >
                                <Link href='https://www.linkedin.com/in/louiskome' target='_blank'>
                                    <img src="https://res.cloudinary.com/dgewamfyi/image/upload/v1721499415/My%20portfolio/LKDN_icon_roso1m.png" className='w-56 sm:w-40' alt="linkedin-icon" />
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.1, rotate: 35 }} whileTap={{ scale: 1.1 }}
                            >
                                <Link href='https://github.com/Louiskomekay' target='_blank'>
                                    <img src="https://res.cloudinary.com/dgewamfyi/image/upload/v1721856103/My%20portfolio/Git_Icon_tl95ju.png" className='w-56 sm:w-40' alt="linkedin-icon" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default RestOfTheHomepage;