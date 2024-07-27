'use client'

import { motion } from "framer-motion";
import ContactForm from '../_components/ContactForm'
import CopyIcon from "../_components/icons/CopyIcon";
import toast from "react-hot-toast";
import Link from "next/link";

const Contact = () => {
    async function copyTextToClipboard(textToCopy) {
        try {
            if (navigator?.clipboard?.writeText) {
                await navigator.clipboard.writeText(textToCopy);
                toast.success('Copied!')
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.1 }} className='text-white'>
            <div className='w-[80%] mx-auto mt-20 flex justify-between items-start gap-28 sm:w-[90%] md:w-[90%] md:flex-col md:gap-8 sm:flex-col sm:mt-12 sm:gap-5'>
                <div className='flex gap-6 items-start flex-grow sm:flex-col'>
                    <img src="https://res.cloudinary.com/dgewamfyi/image/upload/v1721499417/My%20portfolio/My_Avatar_n5umbd.png" alt="my avatar" />
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className='font-black text-6xl tracking-tight w-auto sm:text-4xl'
                    >
                        <p>Let's create something remarkable together</p>
                    </motion.div>
                </div>

                <div className='text-white flex-grow about'>
                    <p className='text-3xl sm:text-2xl'>
                        Send me a message so we can start working together. Tell me your vision and goals and I will create extraordinary website for you I'm looking forward to our cooperation.
                    </p>
                </div>
            </div>

            <div className='bg-[#010101] py-24 mt-24 md:py-20 md:mt-20 sm:py-10 sm:mt-16 text-white'>
                <div className='w-[80%] mx-auto flex justify-between gap-96 sm:w-[90%] md:w-[90%] md:flex-col md:gap-10 sm:flex-col sm:gap-10'>
                    <div className="w-full">
                        <h1 className="text-white text-6xl mb-14">Contact Form</h1>
                        <ContactForm />
                    </div>

                    <div className="aboutcs">
                        {/* Email */}
                        <div>
                            <p className="text-[#878795]">Email address</p>
                            <button
                                className="inline-flex gap-2 mt-1 items-center font-bold text-xl text-[#eeeeee] cursor-pointer whitespace-nowrap hover:text-[#E1602F] ease-in-out duration-300 sm:gap-1"
                                onClick={() => {
                                    copyTextToClipboard('kome.works@gmail.com')
                                }}
                            >
                                <p className="whitespace-nowrap underline">Kome.works@gmail.com</p>
                                <CopyIcon />
                            </button>
                        </div>
                        {/* Timezone */}
                        <div className="mt-12">
                            <p className="text-[#878795]">Local time</p>
                            <p className="whitespace-nowrap font-bold text-xl text-[#eeeeee] mt-1">UTC+1 West Africa Time (WAT), Lagos</p>
                        </div>
                        {/* Socials */}
                        <div className="mt-12">
                            <p className="text-[#878795]">Socials</p>
                            <div className='inline-flex gap-6 mt-4 sm:gap-2'>
                                <motion.div whileHover={{ scale: 1.1, rotate: 35 }} whileTap={{ scale: 1.1 }}
                                >
                                    <Link href='https://www.instagram.com/louiskomekay/' target='_blank'>
                                        <img src="https://res.cloudinary.com/dgewamfyi/image/upload/v1721499415/My%20portfolio/IG_icon_gk5vqe.png" className='w-24 sm:w-32' alt="instagram-icon" />
                                    </Link>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.1, rotate: 35 }} whileTap={{ scale: 1.1 }}
                                >
                                    <Link href='https://www.tiktok.com/@louiskomekay' target='_blank'>
                                        <img src="https://res.cloudinary.com/dgewamfyi/image/upload/v1721499412/My%20portfolio/TK_icon_ep8ans.png" className='w-24 sm:w-32' alt="tiktok-icon" />
                                    </Link>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.1, rotate: 35 }} whileTap={{ scale: 1.1 }}
                                >
                                    <Link href='https://www.linkedin.com/in/louiskome' target='_blank'>
                                        <img src="https://res.cloudinary.com/dgewamfyi/image/upload/v1721499415/My%20portfolio/LKDN_icon_roso1m.png" className='w-24 sm:w-32' alt="linkedin-icon" />
                                    </Link>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.1, rotate: 35 }} whileTap={{ scale: 1.1 }}
                                >
                                    <Link href='https://github.com/Louiskomekay' target='_blank'>
                                        <img src="https://res.cloudinary.com/dgewamfyi/image/upload/v1721856103/My%20portfolio/Git_Icon_tl95ju.png" className='w-24 sm:w-32' alt="linkedin-icon" />
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Contact;