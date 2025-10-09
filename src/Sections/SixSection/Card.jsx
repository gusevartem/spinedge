import React from 'react'

const Card = ({ img,
    text, ref }) => {
    return (
        <div ref={ref} className='flex flex-col justify-start items-start gap-3.5 z-50'>
            <img src={img} width={45} height={45} />
            <p className='mono md:text-[17px] text-[11px] lg:gradient-text-green text-[#758274] w-[165px] md:w-auto' dangerouslySetInnerHTML={{ __html: text }} />
        </div>
    )
}

export default Card
