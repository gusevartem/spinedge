// Head.jsx
import React, { useEffect, useRef, useState } from 'react'
import s from './styles.module.scss'

const Head = () => {
    const containerRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        // Проверяем мобильное устройство
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 1000)
        }

        checkMobile()
        window.addEventListener('resize', checkMobile)

        // Intersection Observer для отслеживания появления в viewport
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true)
                }
            },
            {
                threshold: 0.25,
                rootMargin: '0px 0px -25% 0px'
            }
        )

        if (containerRef.current) {
            observer.observe(containerRef.current)
        }

        return () => {
            observer.disconnect()
            window.removeEventListener('resize', checkMobile)
        }
    }, [isVisible])

    const renderText = () => {
        if (isMobile) {
            return (
                <>
                    SpinEdge embeds AI model weights directly into a dense array of spintronic
                    memory cells – a crossbar architecture. Inputs are applied as voltages, and
                    outputs are collected as currents — performing matrix multiplication{' '}
                    <span>in real time via Ohm's law (I = V × G),</span> avoiding the heavy
                    computational overhead of digital arithmetic.
                </>
            )
        }
        return (
            <>
                SpinEdge embeds AI model weights directly into a dense array of <br />
                spintronic memory cells – a crossbar architecture. Inputs are applied <br />
                as voltages, and outputs are collected as currents — performing <br />
                matrix multiplication <span>in real time via Ohm's law (I = V × G), <br /></span>
                avoiding the heavy computational overhead of digital arithmetic.
            </>
        )
    }

    return (
        <div ref={containerRef} className={s.headContainer}>
            <p
                className={`${s.headElement} ${isVisible ? s.animated : ''} ${s.mono} ${s.gradientText}`}
            >
                SPINEDGE TECHNOLOGY
            </p>
            <div className={`${s.textContent} `}>
                <h2
                    className={`${s.headElement} ${isVisible ? s.animated : ''} ${s.responsiveText} sm:text-[37px] text-[22px] font-bold gradient-text-green lg:text-nowrap leading-[120%] lg:w-auto w-[320px]`}
                >
                    Neural network model is stored <br />
                    in memory, and input data is processed <br />
                    through it in analog domain.
                </h2>
                <p className={`${s.headElement} ${isVisible ? s.animated : ''} ${s.HeadText3} mono gradient-text-green font-bold`}>
                    {renderText()}
                </p>
            </div>
        </div>
    )
}

export default Head