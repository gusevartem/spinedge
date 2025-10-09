import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const Fone = ({ id, children }) => {
    const word = ["S", "P", "I", "N", "E", "D", "G", "E"];
    const lightRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#body',
                start: "top center",
                end: "bottom center",
                toggleActions: "play none none reverse"
            },
        })
        gsap.set(lightRef.current, { opacity: 0 })
        tl.to(lightRef.current, {
            opacity: 1,
            delay: 1.5,

            duration: 1,
            ease: "power3.out"
        })
        return () => {
            tl.kill()
        }
    }, [])
    return (
        <div id={id} className='w-screen NineSec min-h-screen h-full relative pt-[30px] overflow-hidden'>


            <img src='/Nine/Fone.webp' className='absolute hidden lg:block  2xl:-left-[33%] lg:-left-[36%] -bottom-[32%] z-0 ' />
            <img src='/Nine/Fone.webp' className='absolute hidden lg:block -bottom-[32%] 2xl:-right-[33%] lg:-right-[36%] z-0 ' />
            <img src='/Nine/Fone.webp' className='absolute hidden lg:block bottom-[10%] 2xl:-left-[44%] lg:-left-[64%] z-0 ' />
            <img src='/Nine/Fone.webp' className='absolute hidden lg:block bottom-[10%] 2xl:-right-[44%] lg:-right-[64%] z-0 ' />

            <img
                ref={lightRef}
                className="absolute lg:-top-[13%] z-[10] lg:-left-[13%] -left-[15%] -top-[5%]"
                src="/Nine/Blur.webp"
            />
            <img
                className="block md:hidden absolute min-w-[762px] -bottom-[30%] -translate-y-1/2 -translate-x-1/2 left-1/2 m-auto select-none pointer-events-none"
                src="/Nine/Fone.webp"
            />


            <img src='/Seven/Blur.webp' className='absolute hidden lg:block top-[10%]  w-screen' />
            <img src='/Nine/LeftDirBlur.webp' className='absolute z-20 rotate-90 select-none top-0 -right-[30%] pointer-events-none' />
            <img src='/Seven/Blur.webp' className='absolute hidden lg:block top-[30%]' />
            <img src='/nine.webp' className='block md:hidden absolute w-[760px] bottom-[15%]' />
            <img src='/Nine/Blur.webp' className=' hidden lg:block absolute z-20 rotate-90 select-none top-[10%] -right-[30%] pointer-events-none' />
            {children}
            <div className='absolute BottomTitle px-5 flex sm:max-w-[732px] bottom-0 w-full justify-between -translate-x-1/2 left-1/2 z-20' >
                {word.map((w, index) => (
                    <p
                        className='sm:text-[77px] text-[35px] leading-[120%] font-bold gradient-text-green text-center'
                        key={index}
                    >
                        {w}
                    </p>
                ))}
            </div>



            <div className="absolute bottom-0 left-0 w-full lg:h-32  h-13 bg-gradient-to-b from-transparent to-black z-40 pointer-events-none" />



            <svg
                width={1725}
                height={632}
                viewBox="0 0 1725 632"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=' absolute 2xl:-bottom-[360px] xl:-bottom-[260px] bottom-0 w-[1725px] h-[632px] select-none pointer-events-none z-40 w-full '
            >
                <g filter="url(#filter0_f_341_398)">
                    <ellipse
                        cx={862.5}
                        cy={316}
                        rx={632.5}
                        ry={86}
                        fill="#01FFFF"
                        fillOpacity={0.2}
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_f_341_398"
                        x={0}
                        y={0}
                        width={1725}
                        height={632}
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                        />
                        <feGaussianBlur
                            stdDeviation={115}
                            result="effect1_foregroundBlur_341_398"
                        />
                    </filter>
                </defs>
            </svg>

            <svg
                width={375}
                height={271}
                viewBox="0 0 375 271"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className='absolute bottom-0  z-40 block md:hidden w-full'

            >
                <g filter="url(#filter0_f_319_4127)">
                    <ellipse
                        cx={187.5}
                        cy={271}
                        rx={167.5}
                        ry={41}
                        fill="#01FFFF"
                        fillOpacity={0.6}
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_f_319_4127"
                        x={-210}
                        y={0}
                        width={795}
                        height={542}
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                        />
                        <feGaussianBlur
                            stdDeviation={115}
                            result="effect1_foregroundBlur_319_4127"
                        />
                    </filter>
                </defs>
            </svg>

            <div className="absolute w-[90px] h-[500px] bottom-[30%] left-1/2 -translate-x-1/2  blur-[120px] rounded-full bg-[#16CDDE] opacity-60 pointer-events-none z-0" />
        </div>
    )
}

export default Fone