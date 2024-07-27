'use client'

import { motion } from "framer-motion"
import Link from "next/link"

const page = () => {
    return (
        <div className='bg-[#010101]'>
            <div className="w-[80%] mx-auto text-[#eeeeee] py-20 md:w-[90%] sm:w-[90%] sm:py-10">
                <div className="text-center">
                    <h1 className="text-9xl uppercase p-0 sm:text-7xl">Kase</h1>
                    <p className="text-2xl text-[#8B8A98] mt-3 capitalize sm:text-xl">E-commerce project</p>
                </div>

                <div className='mt-6 rounded-2xl w-[70%] mx-auto overflow-hidden cursor-pointer md:w-full sm:mt-3 sm:rounded-lg'>
                    <motion.img whileHover={{ scale: 1.04 }} src='https://res.cloudinary.com/dgewamfyi/image/upload/v1721499412/My%20portfolio/Thumbnail__Kase_vcahl6.webp' alt="thumbnail" className='w-full' />
                </div>

                <div className="w-[70%] mt-14 mx-auto md:w-full md:mt-12 sm:mt-7">
                    <div>
                        <h1 className="text-5xl p-0 text-[#6558f2] md:text-4xl sm:text-4xl">Project Details</h1>
                        <p className="text-xl text-[#8B8A98] mt-6 md:mt-4 sm:text-[1rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore provident ab quia et in recusandae molestias consequuntur a hic, ipsa quae officia quaerat repellat tenetur exercitationem rerum officiis itaque corporis. Porro, corporis? Voluptatem architecto nulla officia quidem obcaecati beatae corrupti perferendis voluptatum minus, similique dolor placeat tempore ea facilis deleniti unde. Animi, illo recusandae obcaecati dolor aspernatur quos tempora placeat nisi suscipit facere consequatur, atque inventore cum eos. Quisquam incidunt, nesciunt maiores tempora numquam quae harum voluptatem quas mollitia.</p>
                    </div>
                    <div className="mt-14 md:mt-12 sm:mt-7">
                        <h1 className="text-5xl p-0 text-[#6558f2] md:text-4xl sm:text-4xl">Breakdown</h1>
                        <ul className="text-[#8B8A98] mt-6 md:mt-4">
                            <li><p className="text-xl sm:text-[1rem]">Animi, illo recusandae obcaecati dolor aspernatur quos tempora</p></li>
                            <li><p className="text-xl mt-4 sm:text-[1rem]">Ipsa quae officia quaerat repellat tenetur exercitationem rerum</p></li>
                            <li><p className="text-xl mt-4 sm:text-[1rem]">Ipsa quae officia quaerat repellat tenetur exercitationem rerum</p></li>
                            <li><p className="text-xl mt-4 sm:text-[1rem]">Ipsa quae officia quaerat repellat tenetur exercitationem rerum</p></li>
                        </ul>
                    </div>
                    <div className="mt-14 md:mt-12 sm:mt-7">
                        <h1 className="text-5xl p-0 text-[#6558f2] md:text-4xl sm:text-4xl">Tech Stack</h1>
                        <ul className="text-[#8B8A98] mt-6 md:mt-4">
                            <li><p className="text-xl">Animi, illo recusandae obcaecati dolor aspernatur quos tempora</p></li>
                            <li><p className="text-xl mt-4">Ipsa quae officia quaerat repellat tenetur exercitationem rerum</p></li>
                            <li><p className="text-xl mt-4">Ipsa quae officia quaerat repellat tenetur exercitationem rerum</p></li>
                            <li><p className="text-xl mt-4">Ipsa quae officia quaerat repellat tenetur exercitationem rerum</p></li>
                        </ul>
                    </div>
                    <motion.button
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.1, backgroundColor: '#E1602F', color: '#eeeeee', borderBlockColor: '#eeeeee' }}
                        whileTap={{ scale: 1.1 }}
                        className='flex text-white items-center gap-2 bg-[#010101] py-4 px-8 rounded-full border-4 border-[#60606b] whitespace-nowrap mt-14 capitalize md:mt-12 sm:mt-7 sm:py-4 sm:px-6 '
                    >
                        <Link href='#' target="_blank">view live project</Link>
                    </motion.button>
                </div>
            </div>
        </div>
    )
}

export default page