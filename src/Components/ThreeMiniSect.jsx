import React from 'react'
import SmartImage from '../Utils/SmartImage'

const ThreeMiniSect = ({ num, ref = null,
    Title,
    sub }) => {
    return (
        <div ref={ref} className='flex flex-col gap-4 sm:w-80 w-[235px]'>
            <div className='text-[15px] gradient-text-green gap-[15px] flex items-center font-bold sm:text-[23px] leading-[150%]'>
                <div className='MiniSectNum'>
                    <img src='/Four/miniRight.webp' className='absolute top-0 right-0' />
                    <img src='/Four/miniLeft.webp' className='absolute bottom-0 left-0' />
                    <p className='font-bold text-center bg-[radial-gradient(circle,_#00E599,_#00E599)] text-transparent bg-clip-text'>{num}</p>
                </div>
                {Title}
            </div>
            <p className='text-[13px] gradient-text-green font-normal mono sm:text-[15px] leading-[150%]'>
                {sub}
            </p>
        </div>
    )
}

export default ThreeMiniSect
