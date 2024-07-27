'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const LetsChatCta = () => {
    return (
        <motion.button
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
            className='flex text-white items-center gap-2 bg-[#010101] py-4 px-8 rounded-full border-4 border-[#2F2F2F] whitespace-nowrap sm:py-4 sm:px-6 capitalize'
        >
            <div className='w-8 h-8 relative sm:w-6 sm:h-6'>
                <Image fill={true} src="https://res.cloudinary.com/dgewamfyi/image/upload/v1721499413/My%20portfolio/Chat_icon_pz2ras.png" alt="waving emoji" className='object-contain absolute' />
            </div>
            <Link href='/contact'>Let's chat</Link>
        </motion.button>
    )
}

export default LetsChatCta;