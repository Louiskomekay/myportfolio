'use client'

import StarIcon from "./icons/StarIcon";

const InfiniteScroll = ({ text }) => {
    return (
        <div className="ctaTicker flex gap-[2.5rem] text-white text-2xl uppercase py-12 border-b-2 overflow-hidden select-none sm:text-xl sm:py-8">
            <ul className="flex justify-between items-center gap-[2.5rem] flex-shrink-0 min-[100%]">
                <li className="whitespace-nowrap">{text}</li>
                <li><StarIcon /></li>
                <li className="whitespace-nowrap text-[#8B8A98]">{text}</li>
                <li><StarIcon /></li>
                <li className="whitespace-nowrap">{text}</li>
                <li><StarIcon /></li>
                <li className="whitespace-nowrap text-[#8B8A98]">{text}</li>
                <li><StarIcon /></li>
            </ul>
            <ul className="flex justify-between items-center gap-[2.5rem] flex-shrink-0 min-[100%]" aria-hidden='true'>
                <li className="whitespace-nowrap">{text}</li>
                <li><StarIcon /></li>
                <li className="whitespace-nowrap text-[#8B8A98]">{text}</li>
                <li><StarIcon /></li>
                <li className="whitespace-nowrap">{text}</li>
                <li><StarIcon /></li>
                <li className="whitespace-nowrap text-[#8B8A98]">{text}</li>
                <li><StarIcon /></li>
            </ul>
        </div>
    )
}

export default InfiniteScroll;