import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import s from './styles.module.scss'

gsap.registerPlugin(ScrollTrigger)

const Head = () => {
    const containerRef = useRef(null)
    const elementsRef = useRef([])

    useLayoutEffect(() => {
        if (!containerRef.current) return

        // 🔥 Предварительная настройка для производительности
        gsap.set(elementsRef.current, {
            willChange: 'transform, opacity',
            opacity: 0,
            y: 50
        })

        const rafId = requestAnimationFrame(() => {
            gsap.fromTo(
                elementsRef.current,
                {
                    opacity: 0,
                    y: 50
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power2.out',
                    stagger: 0.1,
                    force3D: true,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 75%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none none',
                        markers: false,
                        anticipatePin: 1,
                        onEnter: () => {

                            ScrollTrigger.refresh()
                        }
                    },
                }
            )
        })

        return () => {
            cancelAnimationFrame(rafId)
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.trigger === containerRef.current) {
                    trigger.kill()
                }
            })
        }
    }, [])

    return (
        <div ref={containerRef}>
            <p
                ref={(el) => (elementsRef.current[0] = el)}
                className="mono text-[10px] sm:text-sm pb-3 bg-[radial-gradient(91.74%_158.57%_at_left_center,#AAAAAA_0%,#00DA90_50%,rgba(225,255,222,0.7)_100%)] bg-clip-text text-transparent md:pb-6"
            >
                SPINEDGE TECHNOLOGY
            </p>
            <div className="flex flex-col gap-2">
                <h2
                    ref={(el) => (elementsRef.current[1] = el)}
                    className="sm:text-[37px] text-[22px] font-bold gradient-text-green lg:text-nowrap leading-[120%] lg:w-auto w-[320px]"
                >
                    Neural network model is stored <br />
                    in memory, and input data is processed <br />
                    through it in analog domain.
                </h2>
                <p className={`${s.HeadText3} mono`} >SpinEdge embeds AI model weights directly into a dense array of {window.innerWidth > 1000 && <br />} spintronic memory cells – a crossbar architecture. Inputs are applied {window.innerWidth > 1000 && <br />} as voltages, and outputs are collected as currents — performing {window.innerWidth > 1000 && <br />} matrix multiplication <span>in real time via Ohm’s law (I = V × G), {window.innerWidth > 1000 && <br />} </span> avoiding the heavy computational overhead of digital arithmetic.                 </p>
            </div>
        </div>
    )
}

export default Head