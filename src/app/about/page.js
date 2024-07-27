'use client'

import { motion } from 'framer-motion'
import LetsChatCta from '../_components/LetsChatCta'
import DownloadCVCta from '../_components/DownloadCVCta'
import ExperienceCard from '../_components/ExperienceCard'
import Link from 'next/link'
import InfiniteScroll from '../_components/InfiniteScroll'

const AboutPage = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.1 }} className='text-white'>
            <div className='w-[80%] mx-auto mt-20 flex justify-between items-start gap-28 sm:w-[90%] md:w-[90%] md:flex-col md:gap-8 sm:flex-col sm:mt-12 sm:gap-5'>
                <div className='flex gap-6 items-start flex-grow sm:flex-col'>
                    <img src="https://res.cloudinary.com/dgewamfyi/image/upload/v1721499417/My%20portfolio/My_Avatar_n5umbd.png" alt="my avatar" />
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className='text-white font-black text-6xl tracking-tight w-auto sm:text-4xl'
                    >
                        <p>Hello, I’m Kome <br /> <span className='text-black capitalize'>your friendly neighborhood web developer & designer</span></p>
                    </motion.div>
                </div>

                <div className='text-white flex-grow about'>
                    <p className='text-3xl sm:text-2xl'>
                        Combining my expertise as a Developer and Designer, I craft visually appealing, user-centric digital experiences that drive business growth.
                    </p>
                    <p className='mt-4 text-xl sm:text-[1rem]'>
                        I've had experience in designing and building digital experiences by combining design and development. My skillset and roles encompass both full-time roles and freelance projects.
                    </p>
                    <div className='mt-12 flex gap-6 items-center md:mt-8 md:gap-4 sm:mt-8 sm:gap-4'>
                        <LetsChatCta />
                        <DownloadCVCta />
                    </div>
                </div>
            </div>

            <div className='bg-[#010101] py-24 mt-24 md:py-20 md:mt-20 sm:py-16 sm:mt-16'>
                <div>
                    <div className='w-[80%] mx-auto flex justify-between gap-20 sm:w-[90%] md:w-[90%] md:flex-col md:gap-10 sm:flex-col sm:gap-10'>
                        <div>
                            <h1 className='text-5xl font-black text-[#BFFF0A] sm:text-4xl'>Experience</h1>
                            <p className='mt-4 text-[#86858E] text-xl sm:text-[1rem] sm:mt-2'>I'm committed to continuous learning and improvement, constantly seeking innovative ways to deliver maximum value through my skills. I'm always excited to contribute my expertise to build remarkable products.</p>
                        </div>

                        <div className='flex flex-col gap-4'>
                            <ExperienceCard company='Pulse' position='Creative Designer' year='2022-Present' src='https://res.cloudinary.com/dgewamfyi/image/upload/v1721506476/My%20portfolio/EXP-Pulse_d588vu.png' />
                            <ExperienceCard company='Prime Video' position='Creative Designer' year='2022-2024' src='https://res.cloudinary.com/dgewamfyi/image/upload/v1721506476/My%20portfolio/EXP-PV_n9m1xk.png' />
                            <ExperienceCard company='Phreetech' position='UX Designer' year='2021-2022' src='https://res.cloudinary.com/dgewamfyi/image/upload/v1721506476/My%20portfolio/EXP-Phreetech_i1qopl.png' />
                        </div>
                    </div>
                </div>

                {/* Socials CTA */}
                <div className='w-[80%] mx-auto mt-20 sm:w-[90%] md:w-[90%] md:mt-3 sm:mt-2'>
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

        </motion.div>
    )
}

export default AboutPage;