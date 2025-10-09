import React from 'react'

const ThreeCard = ({ img, mainText, subText, customStyles, ref }) => {
    return (
        <div ref={ref} className={`z-50 bg-transparent  flex grow-0 shrink-0 flex-col gap-6 sm:w-[294px] w-[235px] ${customStyles || ""}`}>
            <img className='select-none pointer-events-none  card-img ' width={294} height={294} src={img} alt='img' />
            <div className='flex flex-col gap-2'>
                <p className='sm:text-[23px] text-[15px] font-bold gradient-text-green card-title'>{mainText}</p>
                <p className='mono sm:text-[15px] text-[13px] text-[#638275] card-sub' >{subText}</p>
            </div>
        </div>
    )
}

export default ThreeCard
