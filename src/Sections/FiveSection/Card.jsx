import React from 'react'

const Card = ({ img, title, text }) => {
    return (
        <div className='md:px-[30px] py-[24px] px-[24px] md:py-[32px] bg-white/5 backdrop-blur-md flex flex-col gap-6 lg:w-[346px] w-[335px]  lg:h-[246px] h-[190px] md:h-fit md:w-fit z-50'
            style={{
                clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)'
            }}>
            <div className='w-16 h-11 bg-transparent relative text-center '>
                <img src={img} width={window.innerWidth < 640 ? 35 : 45} height={window.innerWidth < 640 ? 35 : 45} />
            </div>
            <div className='flex flex-col text-left gap-1.5 gradient-text-green'>
                <p className='font-bold lg:text-[23px] sm:text-[18px] text-[15px]'>{title}</p>
                <p className='font-medium mono lg:text-[15px] sm:text-[13px] text-[13px]' dangerouslySetInnerHTML={{ __html: text }} />
            </div>
            <img src='/Four/left.png' className='absolute  top-0 left-0 ' />
            <img src='/Four/right.png' className='absolute bottom-0 right-0 ' />
        </div>
    )
}

export default Card
