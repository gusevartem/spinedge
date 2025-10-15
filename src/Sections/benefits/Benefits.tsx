import React, { useEffect, useMemo, useRef } from 'react'
import { type FC } from 'react'
import ThreeIMage from '../NewSecond/ThreeIMage'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './benefits.css'

const items = [
    {
        title: "Offload MAC from GPUs",
        text: "Reduce GPU load and inference latency across data centers infrastructure"
    },
    {
        title: "Lower power, lower cooling",
        text: "Cut energy usage and operational costs at scale with ultra-efficient compute"
    },
    {
        title: "Local LLM capability",
        text: "Run distilled or quantized LLMs entirely on-site — no cloud dependency"
    },
]

gsap.registerPlugin(ScrollTrigger)

interface BenefitsProps { }

export const Benefits: FC<BenefitsProps> = () => {

    const word = ["S", "P", "I", "N", "E", "D", "G", "E"];
    const headRef = useRef(null);
    const containerRef = useRef(null);
    const wordRef = useRef<any>(null);
    const lightRef = useRef(null);

    const animations = useMemo(() => {
        if (!containerRef.current || !wordRef.current || !lightRef.current || !headRef.current) return null;

        const headAnimation = gsap.fromTo(
            headRef.current,
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
        );

        const letters = wordRef.current.querySelectorAll('p');
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: wordRef.current,
                start: 'top 80%',
                end: 'bottom bottom',
                toggleActions: 'play none none none',
            }
        });

        tl.fromTo(letters,
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                stagger: 0.1,
                duration: 1,
                ease: 'power2.out',
            }
        );

        tl.fromTo(lightRef.current,
            {
                opacity: 0,
                y: 20,
            },
            {
                opacity: 0.7,
                y: 0,
                duration: 1,
                ease: 'power2.out',
            },
            '+=0.1'
        );

        return { headAnimation, tl };
    }, []);

    useEffect(() => {
        // Cleanup animations on unmount
        return () => {
            if (animations) {
                animations.headAnimation?.kill();
                animations.tl?.kill();
            }
        };
    }, [animations]);

    return (
        <div className='BenefitsSec' id="why" >
            <img src='./Benefits/car1.webp' className='BenefitsCar1' />
            <img src='./Case2/car2.png' className='BenefitsCar2' />
            <div className='benefitsCenterShadow' >

            </div>
            <img
                src='/right.webp'
                className='absolute w-[960px] top-0 right-0 rounded-4xl'
                loading="lazy"
                alt="Right decoration"
            />
            <img
                src='/threeLeft.webp'
                className='absolute BenefitsShd top-[550px] left-0 rounded-4xl'
                loading="lazy"
                alt="Left decoration"
            />
            <div className='BenefitsBody' >
                <span className='BenefitsTitle' >Key Benefits</span>
                <span className='BenefitsText mono'>From hyperscale inference to local intelligence {window.innerWidth > 1000 && <br />} — SpinEdge redefines where large models can run</span>
                <div className='BenefitsList' >
                    {
                        items.map((item, ind) => (
                            <div className='BenefitsListItem' key={ind} >
                                <div className='BenefitsListItemNum' >
                                    0{ind + 1}
                                    <img src='./Benefits/corner.png' className='BenefitsCorner1' />
                                    <img src='./Benefits/corner.png' className='BenefitsCorner2' />
                                </div>
                                <span className='BenefitsListItemTitle' >{item.title}</span>
                                <span className='BenefitsListItemText mono' >{item.text}</span>
                            </div>
                        ))
                    }
                </div>

                <div ref={containerRef} className='w-full relative flex justify-center items-center pt-[1%] flex-col gap-[85px] lg:mb-50 mb-26'>

                    <p ref={headRef} className='sm:text-[37px] text-[23px] text-center leading-[120%] font-bold gradient-text-green'>— and these are just three<br /> sectors out of hundreds…</p>
                    <ThreeIMage />
                </div>

                <div className="absolute opacity-70 bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black z-10 pointer-events-none" />

                <div
                    ref={lightRef}
                    className="absolute w-screen h-[30px] bottom-0 left-1/2 -translate-x-1/2 blur-[80px] rounded-full bg-[#16CDDE] opacity-100 pointer-events-none z-20"
                    style={{ willChange: 'transform, opacity' }}
                />
            </div>
        </div>
    )
}