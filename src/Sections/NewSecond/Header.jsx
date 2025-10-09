import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Header = ({ top, mid, bottom, customStyles, four = false }) => {
    const containerRef = useRef(null)
    const elementsRef = useRef([])

    useEffect(() => {
        if (!containerRef.current) return

        gsap.fromTo(
            elementsRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power2.out',
                stagger: 0.1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            }
        )
    }, [])

    return (
        <div
            ref={containerRef}
            className={`flex flex-col text-center gap-[25px] items-center justify-between ${customStyles || ""}`}
        >
            <p
                ref={el => (elementsRef.current[0] = el)}
                className={`${four ? "w-[500px]" : ""} bg-[radial-gradient(91.74%_158.57%_at_50%_50%,_#00DA90_0%,_rgba(225,255,222,0.7)_100%)] bg-clip-text text-transparent w-full mono lg:text-[13px] sm:text-[19px] text-[10px] font-normal`}
                dangerouslySetInnerHTML={{ __html: top.toUpperCase() }}
            />
            <h1
                ref={el => (elementsRef.current[1] = el)}
                className={`${four ? "w-[500px]" : ""} lg:text-[37px] sm:text-[35px] text-[23px] w-full leading-[120%] font-bold gradient-text-green`}
                dangerouslySetInnerHTML={{ __html: mid }}
            />
            <p
                ref={el => (elementsRef.current[2] = el)}
                className={`${four ? "w-[500px]" : ""} mono lg:text-[15px] text-[12px] sm:text-[19px] lg:text-[15px] gradient-text-green lg:leading-[150%] leading-[180%]`}
                dangerouslySetInnerHTML={{ __html: bottom }}
            />
        </div>
    )
}

export default Header