import React, { useEffect, useRef } from 'react'
import AnimatedCircle from '../../Components/AnimatedCircle'
import TagCloud from './TagCloud'
import MobileTag from './MobileTag'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ThreeIMage = () => {
    const circleRef = useRef(null)
    const lightRef = useRef(null)
    const containerRef = useRef(null)

    useEffect(() => {
        let tl = null

        const initAnimation = () => {
            if (!circleRef.current || !lightRef.current) return

            tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom', // запуск, когда верх контейнера касается низа окна
                    toggleActions: 'play none none reverse',
                    once: false,
                },
            })

            // Анимация круга
            tl.fromTo(
                circleRef.current,
                {
                    autoAlpha: 0,
                    scale: 0.8,
                },
                {
                    autoAlpha: 1,
                    scale: 1,
                    duration: 1,
                    ease: 'power2.out',
                }
            )

            // Анимация света
            if (lightRef.current) {
                tl.fromTo(
                    lightRef.current,
                    {
                        autoAlpha: 0,
                        scale: 0.8,
                    },
                    {
                        autoAlpha: 1,
                        scale: 1,
                        duration: 1,
                        ease: 'power2.out',
                    },
                    '+=0.2'
                )
            }
        }

        initAnimation()

        return () => {
            if (tl) {
                tl.kill()
                ScrollTrigger.getAll().forEach(trigger => trigger.kill())
            }
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
                className="block lg:hidden WordsBlur absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            />
            <TagCloud customStyle={`hidden md:block`} />
            <MobileTag customStyle={`block md:hidden`} />
            <div className="absolute hidden lg:block w-[190px] h-[190px] -translate-y-1/2 top-1/2 left-1/2 -translate-x-1/2 blur-[120px] rounded-full bg-[#16CDDE] opacity-90 pointer-events-none z-0" />
            <AnimatedCircle
                lottieRef={circleRef}
                customStyle={`mb-[4%]`}
                width={window.innerWidth < 640 ? 110 : 200}
                height={window.innerWidth < 640 ? 110 : 200}
            />
        </div>
    )
}

export default ThreeIMage