import React from 'react'

const FiveFone = ({ id, children }) => {
    return (
        <div id={id} className='min-h-screen  w-screen relative flex justify-center  z-0 '>
            <img src='/right.png' className='absolute w-[960px] top-0 right-0' />
            <img src='/left.png' className='absolute  w-[960px] top-0 left-0' />

            <div className='w-full'>
                {children}
            </div>
            <div className="hidden lg:block absolute h-34 w-full bg-gradient-to-t to-black/0 via-black/85 from-black lg:-bottom-[5%] xl:-bottom-[11%] z-50" />
        </div>
    )
}

export default FiveFone
