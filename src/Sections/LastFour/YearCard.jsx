import React from 'react'

const YearCard = ({ text, ref }) => {
    return (
        <div ref={ref} className='w-[168px]  lg:h-[50px] h-[25px] border border-[#1E2C2D] flex justify-center items-center rounded-lg'>
            <p className='text-[#6C8374] mono lg:text-[15px] text-[10px] font-semibold'>{text}</p>
        </div>
    )
}

export default YearCard
