import React from 'react'

const Card = ({ num,
    text,
    customStyle }) => {
    return (
        <div className={`flex  flex-col gap-4 sm:w-[262px] w-[165px] items-center ${customStyle || " "}`}>
            <div className='lg:w-16 lg:h-11 w-[55px] bg-transparent relative text-center px-4 py-2.5'>
                <img src='/Four/miniRight.png' className='absolute top-0 right-0' />
                <img src='/Four/miniLeft.png' className='absolute bottom-0 left-0' />
                <p className='font-bold sm:text-lg text-sm  text-center gradient-text-green'>{num}</p>
            </div>
            <p
                className="lg:text-[15px] mono gradient-text-green text-[13px] "
                dangerouslySetInnerHTML={{ __html: text }}
            />
        </div>
    )
}

export default Card
