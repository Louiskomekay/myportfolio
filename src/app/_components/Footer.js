'use client'

import CopyIcon from "./icons/CopyIcon";
import LetsChatCta from './LetsChatCta'
import toast from "react-hot-toast";

const Footer = () => {
    const date = new Date;
    const fullYear = date.getFullYear();

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
        <footer className="w-[80%] mx-auto sm:w-[90%] md:w-[90%] py-20 sm:py-10">
            <div className="flex justify-between items-start gap-24 md:flex-wrap sm:flex-wrap sm:gap-16">
                <div className="text-white">
                    <h1 className="text-8xl tracking-tighter font-bold max-w-[31rem] sm:text-7xl">Got a project in mind?</h1>
                    <div>
                        {/* Footer Copy and CTA */}
                        <div className="flex gap-4 items-center sm:flex-wrap mt-10">
                            <LetsChatCta />
                            <div><p className="font-bold text-xl">or</p></div>
                            <button
                                className="inline-flex gap-2 items-center font-bold text-xl cursor-pointer whitespace-nowrap hover:text-black ease-in-out duration-300 sm:gap-1"
                                onClick={() => {
                                    copyTextToClipboard('kome.works@gmail.com')
                                }}
                            >
                                <p className="whitespace-nowrap">Kome.works@gmail.com</p>
                                <CopyIcon />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Signature */}
                <div className="flex gap-4 items-center text-white">
                    <img src="https://res.cloudinary.com/dgewamfyi/image/upload/v1721499417/My%20portfolio/My_Avatar_n5umbd.png" alt="my avatar" className="w-24 object-contain" />
                    <div>
                        <p>Sincerely,</p>
                        <img src="https://res.cloudinary.com/dgewamfyi/image/upload/v1721499415/My%20portfolio/logo_r5x7rj.png" alt="logo" className="mt-2 w-32" />
                    </div>
                </div>
            </div>

            <p className="text-white mt-24 sm:mt-16">© {fullYear} Louiskome’s Portfolio</p>
        </footer>
    )
}

export default Footer;