import React from 'react'

const NewSecondFone = ({ children, id }) => {
    return (
        <section
            id={id}
            className="bg-black w-screen min-h-screen h-fit relative overflow-y-hidden  overflow-x-hidden lg:pt-[9%] pt-[20%] "
        >
            <img src='/right.png' className='ahidden lg:block absolute w-[960px] top-0 right-0' />
            <img src='/left.png' className='hidden lg:block absolute  w-[960px] top-0 left-0' />
            <img
                className="hidden lg:block absolute inset-0 min-h-screen h-full m-auto select-none pointer-events-none z-0 rounded-4xl"
                src="/Second/whiteblur.png"
                alt="White Blur"
            />
            <img src='/Four/heightBlut.png' className={`absolute block -translate-x-1/2 left-1/2 opacity-90 w-full lg:hidden  min-h-full select-none pointer-events-none z-0 rounded-4xl`}
                alt="White Blur" />
            <div className='flex flex-col w-full h-full justify-center items-center gap-[45px] relative'>
                {children}
            </div>

        </section>
    )
}

export default NewSecondFone
