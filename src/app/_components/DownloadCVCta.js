'use client'

import jsPDF from 'jspdf'
import { motion } from 'framer-motion';

const DownloadCVCta = () => {
    const saveResume = () => {
        let doc = new jsPDF('portrait', 'px', false);
        doc.addImage('https://res.cloudinary.com/dgewamfyi/image/upload/v1721257157/My%20portfolio/CV_A4_a6mqps.png', 'PNG', 0, 0, 446, 575.5, 'MEDIUM');
        doc.save('kome_resume.pdf');
    }

    return (
        <motion.button
            initial={{ opacity: 0, x: 12, }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.1, backgroundColor: '#E1602F', color: '#ffffff' }}
            whileTap={{ scale: 1.1 }}
            className='py-4 px-8 rounded-full border-4 border-[#010101] text-[#010101] whitespace-nowrap sm:py-4 sm:px-6 capitalize'
            onClick={() => {
                saveResume()
            }}
        >
            See my CV
        </motion.button>
    )
}

export default DownloadCVCta;