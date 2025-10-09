import React, { useEffect, useRef, useMemo } from 'react'
import NewSecondFone from './NewSecondFone'
import MainImage from './MainImage'
import Header from './Header'
import SecondImage from './SecondImage'
import ThreeIMage from './ThreeIMage'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const NewSecondSection = () => {
    const word = ["S", "P", "I", "N", "E", "D", "G", "E"];
    const headRef = useRef(null);
    const containerRef = useRef(null);
    const wordRef = useRef(null);
    const lightRef = useRef(null);

    // Memoize animations to prevent recreation on each render
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
        <NewSecondFone id={`sec`}>
            <Header
                top={`Beyond Silicon. Beyond Limits.`}
                mid={`Imagine the True Potential<br /> Technology of Spintronics`}
                bottom={`Spintronic computing slashes costs, saves<br /> energy, and reshapes the future.`} />

            <MainImage />

            <Header top={`BThe Hidden Cost of Artificial Intelligence`}
                mid={`And Let's Talk About<br/> Data Centers`}
                bottom={`AI now consumes as much power as nations.`} />
            <SecondImage />
            <div ref={containerRef} className='w-full relative flex justify-center items-center pt-[1%] flex-col gap-[85px] lg:mb-50 mb-26'>
                <img
                    src='/right.png'
                    className='absolute w-[960px] top-0 right-0 rounded-4xl'
                    loading="lazy"
                    alt="Right decoration"
                />
                <img
                    src='/threeLeft.png'
                    className='absolute -top-[35%] left-0 rounded-4xl'
                    loading="lazy"
                    alt="Left decoration"
                />
                <p ref={headRef} className='sm:text-[37px] text-[23px] text-center leading-[120%] font-bold gradient-text-green'>— and these are just two<br /> sectors out of hundreds…</p>
                <ThreeIMage />
            </div>

            <div ref={wordRef} className='absolute xl:-bottom-[1%] -bottom-[15px] flex sm:max-w-[732px] max-w-[335px] w-full justify-between'>
                {word.map((w, index) => (
                    <p
                        className='sm:text-[77px] text-[35px] leading-[120%] font-bold gradient-text-green text-center'
                        key={index}
                    >
                        {w}
                    </p>
                ))}
            </div>
            <div className="absolute opacity-70 bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black z-10 pointer-events-none" />

            <div
                ref={lightRef}
                className="absolute w-screen h-[30px] bottom-0 left-1/2 -translate-x-1/2 blur-[80px] rounded-full bg-[#16CDDE] opacity-100 pointer-events-none z-20"
                style={{ willChange: 'transform, opacity' }}
            />
        </NewSecondFone>
    )
}

export default React.memo(NewSecondSection)
