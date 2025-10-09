import React from 'react'

const LastCard = ({ customStyles, ref,
    Title,
    sub,
    img }) => {
    return (
        <div ref={ref} className={`flex flex-col gap-4  sm:w-80  w-full  h-60 ${customStyles || " "}`}>
            <div className='w-16 h-11 bg-transparent relative text-center '>
                <img src={img} />
            </div>
            <p className=' gradient-text-green font-bold sm:text-2xl text-[15px]' dangerouslySetInnerHTML={{ __html: Title }} />
            <p className=' gradient-text-green mono sm:text-base text-[11px]' dangerouslySetInnerHTML={{ __html: sub }} />
        </div>
    )
}

export default LastCard
