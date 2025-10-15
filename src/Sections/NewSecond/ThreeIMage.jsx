import React, { useEffect, useRef } from 'react'
import AnimatedCircle from '../../Components/AnimatedCircle'
import TagCloud from './TagCloud'
import MobileTag from './MobileTag'
import './ThreeImage.css'

const ThreeIMage = () => {
    const circleRef = useRef(null)
    const lightRef = useRef(null)
    const containerRef = useRef(null)

    useEffect(() => {
        const elements = [circleRef.current, lightRef.current]

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    } else {
                        entry.target.classList.remove('visible')
                    }
                })
            },
            { threshold: 0.1 }
        )

        elements.forEach(el => {
            if (el) observer.observe(el)
        })

        return () => {
            elements.forEach(el => {
                if (el) observer.unobserve(el)
            })
        }
    }, [])

    return (
        <div
            ref={containerRef}
            className='relative w-full h-full flex justify-center items-center'
        >
            <img
                ref={lightRef}
                src="/NewSecond/blur.png"
                alt="Blur Effect"
                className="fade-scale-up opacity-100 lg:opacity-0 WordsBlur absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none light"
            />
            <TagCloud customStyle={`hidden md:block`} />
            <MobileTag customStyle={`block md:hidden`} />
            <div className="absolute hidden lg:block w-[190px] h-[190px] -translate-y-1/2 top-1/2 left-1/2 -translate-x-1/2 blur-[120px] rounded-full bg-[#16CDDE] opacity-90 pointer-events-none z-0" />
            <AnimatedCircle
                lottieRef={circleRef}
                customStyle={`fade-scale-up mb-[4%] opacity-0`}
                width={window.innerWidth < 640 ? 110 : 200}
                height={window.innerWidth < 640 ? 110 : 200}
            />
        </div>
    )
}

export default ThreeIMage
