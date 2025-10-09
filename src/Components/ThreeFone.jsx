import React, { useRef } from 'react'
import ThreeBigCard from './ThreeBigCard'

const ThreeFone = ({ children, id }) => {

    return (
        <section
            id={id}
            className="bg-black w-screen min-h-screen pb-20 h-full relative md:pb-30 overflow-x-hidden overflow-y-hidden pt-[8.5%]"
        >
            <img
                className="absolute inset-0 z-0 min-h-screen h-full m-auto select-none pointer-events-none rounded-4xl left-[60%] -translate-x-1/2"
                src="/Second/whiteblur.png"
                alt="White Blur"
            />
            <div className="grid 2xl:mx-[3%] z-0 grid-rows-4 gap-[50px] sm:gap-6 md:grid-cols-2 md:grid-rows-2 w-screen mb-[14%] min-h-screen h-full  md:h-[130vh] px-[20px] ">
                {children}
            </div>
            <ThreeBigCard />

            <div className="absolute opacity-50  top-0 left-0 w-full h-32 bg-gradient-to-t from-transparent to-black z-0 pointer-events-none" />
            <div className="absolute opacity-70  bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black z-0 pointer-events-none" />
        </section>
    )
}

export default ThreeFone
