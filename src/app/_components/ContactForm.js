'use client'

import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import SendIcon from "./icons/SendIcon";
import ResetIcon from "./icons/ResetIcon";

const ContactForm = () => {
    const [state, handleSubmit, reset] = useForm("xrbzebwg");
    if (state.succeeded) {
        return (
            <div>
                <img src="https://res.cloudinary.com/dgewamfyi/image/upload/v1721600604/My%20portfolio/Celebrate_jax0dz.gif" alt="image" />
                <p>Thanks for sending a message. I appreciate the effort, I'll get back to you shortly.</p>

                <motion.button
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.1, backgroundColor: '#E1602F', color: '#eeeeee', borderBlockColor: '#eeeeee' }}
                    whileTap={{ scale: 1.1 }}
                    type="submit"
                    className='flex text-white items-center gap-2 bg-[#010101] py-4 px-8 rounded-full border-4 border-[#60606b] whitespace-nowrap sm:py-4 sm:px-6 capitalize mt-14'
                    onClick={reset}
                >
                    <p>Back to form</p>
                    <ResetIcon />
                </motion.button>
            </div>)
    }

    return (
        <form onSubmit={handleSubmit}>

            {/* Your Message*/}
            <label htmlFor="name" className="text-xl text-[#eeeeee]">
                Full Name
            </label>
            <input
                id="name"
                type="text"
                name="name"
                className="block w-full border-b-4 border-[#60606b] h-16 focus:outline-none focus:border-[#eeeeee]"
                style={{ fill: 'none', backgroundColor: 'none', background: 'none' }}
                placeholder="Write your name..."
            />
            <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
            />

            {/* Email address*/}
            <label htmlFor="email" className="text-xl text-[#eeeeee] block mt-10">
                Email Address
            </label>
            <input
                id="email"
                type="email"
                name="email"
                className="block w-full border-b-4 border-[#60606b] h-16 focus:outline-none focus:border-[#eeeeee]"
                style={{ fill: 'none', backgroundColor: 'none', background: 'none' }}
                placeholder="Write your email..."
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />

            {/* Your Message */}
            <label htmlFor="message" className="text-xl text-[#eeeeee] block mt-10">
                Your Message
            </label>
            <textarea
                id="message"
                name="message"
                className="block w-full border-b-4 border-[#60606b] h-24 focus:outline-none focus:border-[#eeeeee] mt-4"
                style={{ fill: 'none', backgroundColor: 'none', background: 'none' }}
                placeholder="Write your message..."
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />

            {/* Cta */}
            <motion.button
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.1, backgroundColor: '#E1602F', color: '#eeeeee', borderBlockColor: '#eeeeee' }}
                whileTap={{ scale: 1.1 }}
                type="submit"
                disabled={state.submitting}
                className='flex text-white items-center gap-2 bg-[#010101] py-4 px-8 rounded-full border-4 border-[#60606b] whitespace-nowrap sm:py-4 sm:px-6 capitalize mt-14'
            >
                <p>{state.submitting === true ? 'Submiting...' : 'Submit'}</p>
                <SendIcon />
            </motion.button>
        </form>
    );
}

export default ContactForm;