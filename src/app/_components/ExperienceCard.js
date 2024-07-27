
const ExperienceCard = ({ company, position, year, src }) => {
    return (
        <div className='flex items-start justify-between gap-72 bg-[#0E0E0E] p-6 rounded-xl cursor-pointer hover:drop-shadow-[-4px_4px_0_#BFFF0A] ease-in-out duration-500 sm:p-4 sm:gap-0'>
            <div className='inline-flex justify-between gap-4 items-center'>
                <img src={src} alt={company} className='w-20 sm:w-16' />
                <div>
                    <h2 className='text-2xl text-[#ADACBD] whitespace-nowrap sm:text-xl'>{company}</h2>
                    <p className='text-[#86858E] whitespace-nowrap sm:text-[12px]'>{position}</p>
                </div>
            </div>
            <p className='text-[#86858E] whitespace-nowrap sm:text-[12px]'>{year}</p>
        </div>
    )
}

export default ExperienceCard;