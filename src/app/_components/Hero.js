'use client'

import { motion } from 'framer-motion'
import LetsChatCta from './LetsChatCta'
import DownloadCVCta from './DownloadCVCta'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='w-[80%] mx-auto mt-20 flex justify-between items-center gap-20 sm:w-[90%] md:w-[90%] md:flex-col sm:flex-col sm:mt-12 sm:gap-10'>
            <div>
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-white font-black text-6xl tracking-tight w-auto sm:text-4xl'
                >
                    <span className='flex gap-4 items-center'>
                        <p>Hi there,</p>
                        <div className='w-16 h-16 relative sm:w-12 sm:h-12'>
                            <Image fill={true} src="https://res.cloudinary.com/dgewamfyi/image/upload/v1721499412/My%20portfolio/Wave_emoji_vhxgfl.png" alt="waving emoji" className='object-contain absolute' />
                        </div>
                    </span>
                    <p>I'm Kome,
                        <span className='text-black capitalize'>your friendly neighborhood web developer & designer</span>
                        who's focused on learning and building great applications
                    </p>
                </motion.div>
                <div className='mt-12 flex gap-6 items-center sm:mt-8 sm:gap-4'>
                    <LetsChatCta />
                    <DownloadCVCta />
                </div>
            </div>
            <motion.div initial={{ scale: 0, y: 60 }} animate={{ scale: [1, 1.2, 1], y: 0 }}>
                <img src="https://res.cloudinary.com/dgewamfyi/image/upload/v1721499415/My%20portfolio/Hero_Image_rivmqt.png" alt="Hero-image" className='w-auto' />
            </motion.div>
        </div>
    )
}

export default Hero;