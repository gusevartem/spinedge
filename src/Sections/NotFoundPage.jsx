import React, { useEffect, useRef, useState, useMemo, useCallback, Suspense } from 'react';
import NavBar from '../Components/NavBar';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import AnimatedCircle from '../Components/AnimatedCircle';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import FirstFone from '../Components/FirstFone';
import Code from './Code';
import { ScrollTrigger } from 'gsap/all';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

// Оптимизированный компонент для изображений
const OptimizedImage = React.memo(({ src, alt, className, style, ref }) => (
    <img
        ref={ref}
        className={className}
        src={src}
        alt={alt}
        style={style}
        loading="lazy"
        decoding="async"
    />
));

const NotFoundPage = ({ isThanks }) => {

    const mainRef = useRef(null);
    const overlayRef = useRef(null);
    const firstElems = useRef([]);
    const lastLeft = useRef([]);
    const ballRef = useRef(null);
    const lastRight = useRef([]);
    const superLast = useRef([]);
    const navbarRef = useRef(null);
    const toumanRef = useRef(null);

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [reorderedSubText, setReorderedSubText] = useState(["200x faster", "1000x cheaper", "500W → 2W per chip", ">$1.2M saving"]);

    const getVisible = useCallback((arr) => arr.filter(el => el && el.offsetParent !== null), []);

    const circleSize = useMemo(() => isMobile ? 100 : 190, [isMobile]);

    const handleResize = useCallback(() => {
        const mobile = window.innerWidth < 768;
        setIsMobile(mobile);
        setReorderedSubText(mobile
            ? ["200x faster", "500W → 2W per chip", ">$1.2M saving"]
            : ["200x faster", "1000x cheaper", "500W → 2W per chip", ">$1.2M saving"]);
    }, []);

    useEffect(() => {
        let timeout;
        const debouncedResize = () => {
            clearTimeout(timeout);
            timeout = setTimeout(handleResize, 200);
        };

        window.addEventListener('resize', debouncedResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', debouncedResize);
            clearTimeout(timeout);
        };
    }, [handleResize]);

    const runDesktopAnimation = useCallback(() => {
        const mm = gsap.matchMedia();
        mm.add("(min-width: 768px)", () => {
            const tl = gsap.timeline();

            tl.to(overlayRef.current, {
                opacity: 0,
                duration: 0.8,
                ease: 'power2.inOut',
                delay: 0.2,
            });

            tl.fromTo(
                firstElems.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power2.out',
                    stagger: 0.08,
                },
                '-=0.2'
            );

            tl.fromTo(
                navbarRef.current,
                { opacity: 0, y: -20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power2.out',
                },
                '-=0.4'
            );

            tl.fromTo(
                toumanRef.current,
                {
                    opacity: 0,
                    yPercent: -100,
                    transform: 'translateX(-50%)',
                },
                {
                    opacity: 1,
                    yPercent: 0,
                    duration: 0.6,
                    ease: 'power2.out',
                    transform: 'translateX(-50%)',
                },
                '-=0.6'
            );

            tl.fromTo(
                ballRef.current,
                {
                    opacity: 0,
                    scale: 0.5,
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    ease: 'power2.out',
                },
                '-=0.6'

            );

            const visibleLastLeft = getVisible(lastLeft.current);
            if (visibleLastLeft.length) {
                tl.fromTo(
                    visibleLastLeft,
                    { opacity: 0, xPercent: -40 },
                    {
                        opacity: 1,
                        xPercent: 0,
                        duration: 0.6,
                        ease: 'power2.out',
                        stagger: 0.12,
                    }
                );
            }

            const visibleLastRight = getVisible(lastRight.current);
            if (visibleLastRight.length) {
                tl.fromTo(
                    visibleLastRight,
                    { opacity: 0, xPercent: 40 },
                    {
                        opacity: 1,
                        xPercent: 0,
                        duration: 0.6,
                        ease: 'power2.out',
                        stagger: 0.12,
                    }
                );
            }

            const visibleSuperLast = getVisible(superLast.current);
            if (visibleSuperLast.length) {
                tl.fromTo(
                    visibleSuperLast,
                    { opacity: 0, yPercent: 10 },
                    {
                        opacity: 1,
                        yPercent: 0,
                        duration: 0.6,
                        ease: 'power2.out',
                    }
                );
            }

            gsap.fromTo(ballRef.current,
                { scale: 1 },
                {
                    scale: 0.7,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ballRef.current,
                        start: "50% 20%",
                        endTrigger: mainRef.current,
                        end: "bottom top",
                        scrub: 1,
                        pin: true,
                        immediateRender: false,


                    }
                }
            );


        });

    }, [getVisible]);

    const runMobileAnimation = useCallback(() => {
        gsap.to(overlayRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: 'power2.inOut',
            delay: 0.2,

        });
        gsap.fromTo(ballRef.current,
            { scale: 1 },
            {
                scale: 0.7,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ballRef.current,
                    start: "50% 20%",
                    endTrigger: mainRef.current,
                    end: "bottom top",
                    scrub: 1,
                    pin: true,
                    immediateRender: false,


                },

            }
        );

    }, []);

    useGSAP(() => {
        if (isMobile) {
            runMobileAnimation();
        } else {
            runDesktopAnimation();
        }
    }, [isMobile, runMobileAnimation, runDesktopAnimation]);
    const navigate = useNavigate();
    const handleScrollToSecond = useCallback(() => {
        navigate('/');

    }, []);

    const word = useMemo(() => ["S", "P", "I", "N", "E", "D", "G", "E"], []);

    useEffect(() => {
        console.log('mainRef:', mainRef.current);
    }, []);

    return (
        <FirstFone ref={mainRef} id='main'>
            <div ref={overlayRef} className="absolute inset-0 bg-black z-[150] pointer-events-none" />

            <NavBar ref={navbarRef} />

            <Suspense fallback={<div className="min-w-[485px] min-h-[520px]" />}>
                <OptimizedImage
                    ref={toumanRef}
                    className="absolute z-0 top-2 left-1/2 max-w-full h-auto select-none pointer-events-none min-w-[485px] min-h-[520px] "
                    src="/Hero/touman.webp"
                    alt="Touman"
                    style={{ transform: 'translateX(-50%)' }}
                />
            </Suspense>

            <div className="relative flex flex-col items-center sm:text-[35px] text-center pb-32 sm:pt-30 pt-26 2xl:pb-40 w-full mx-auto">
                <p ref={el => firstElems.current[0] = el} className="gradient-text-green font-bold sm:text-3xl text-[30px]  leading-[120%] first">
                    {isThanks ? "Thank You for Connecting " : '404: Quantum Spin'}
                </p>
                <p ref={el => firstElems.current[1] = el} className="gradient-text-green font-bold sm:text-3xl text-[30px] leading-[120%] first">
                    {isThanks ? "with SpinEdge! " : 'Not Found'}

                </p>
                <div className='reltive w-full h-full'>
                    <AnimatedCircle lottieRef={ballRef} width={circleSize} height={circleSize} customStyle={`sm:mt-0 mt-[12%] -translate-x-1/2 left-1/2 `} />
                </div>
                <Code ref={el => lastRight.current[0] = el} />
                <p ref={el => lastLeft.current[0] = el} className="hidden lg:block  text-[15px] absolute top-[83.5%] 2xl:left-[7%] xl:left-[88px] lg:left-[7%] h-auto max-h-[400px] select-none pointer-events-none z-0 text-left mono gradient-text-green lastLeft">
                    {isThanks ? "Redefining AI Hardware " : "Oops! The page you're looking for seems"} <br />
                    {isThanks ? "with Spintronics " : "to have entered a superposition state."}

                </p>
            </div>

            <div className="font-bold flex flex-col justify-center items-center w-screen gap-7 sm:pt-[5%] pt-[8%]">
                <div className="w-full flex justify-center">
                    <div className="w-full max-w-[87%] flex flex-col items-center sm:gap-7 ">
                        <div className='flex w-full justify-between first' ref={el => firstElems.current[2] = el}>
                            {word.map((w, index) => (
                                <p className='sm:text-5xl text-[35px] lg:text-7xl 2xl:text-8xl gradient-text-green text-center' key={index}>
                                    {w}
                                </p>
                            ))}
                        </div>

                        <div className='flex w-full justify-between mono pt-[5px]' ref={el => firstElems.current[3] = el}>
                            {reorderedSubText.map((w, index) => (
                                <p
                                    className={`gradient-text-green sm:text-[12px] text-[11px] lg:text-sm sm:w-44 w-fit text-center 
                                    ${index === 0 && "text-start"} 
                                    ${index === 3 && "text-end"}`}
                                    key={index}
                                >
                                    {w}
                                </p>
                            ))}
                        </div>
                        <p className='mono gradient-text-green text-[13px] text-center pt-18 sm:hidden'>
                            {isThanks ? "Redefining AI Hardware " : "Oops! The page you're looking for seems"} <br />
                            {isThanks ? "with Spintronics " : "to have entered a superposition state."}


                        </p>
                        <div className='flex w-full sm:flex-col lg:flex-row  justify-between items-start pt-12 sm:gap-16 lg:gap-0'>
                            <div ref={el => lastLeft.current[1] = el} className="hidden mt-[8px] lg:block relative w-[30%] text-sm lastLeft">
                                <div className="gradient-text-green opacity-40 font-bold text-transparent bg-clip-text mono">
                                    AI's Energy Diet<br />Starts Here
                                </div>
                            </div>
                            <p className=' mono text-center gradient-text-green w-full opacity-85 text-[19px] hidden md:block lg:hidden'>
                                The world's first
                                spintronic<br /> AI accelerator
                            </p>
                            <div ref={el => superLast.current[0] = el} className={`${isThanks ? "hidden" : "block"} w-full lg:w-[30%] sm:pt-0 pt-4 sm:text-[23px] text-center gradient-text-green md:text-lg super opacity-45`}>


                                Find your way back with one click:
                            </div>
                            <div ref={el => lastRight.current[1] = el} className="hidden lg:flex mt-[8px] relative w-[30%] text-left text-sm justify-end">
                                <div className="gradient-text-green opacity-40 font-bold text-transparent bg-clip-text mono">
                                    <p>The Last Chip Humanity Will<br /> Ever Need. Where GPUs Sweat,<br /> SpinEdge Thrives.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {!isThanks ?
                <p
                    onClick={handleScrollToSecond}
                    ref={el => superLast.current[1] = el}
                    className='cursor-pointer
                 flex justify-center items-center w-full absolute bottom-24  sm:bottom-12
                 bg-[radial-gradient(circle,_#00DA90_0%,_#E1FFDE_100%)] bg-clip-text text-transparent mono text-sm font-normal super'
                >
                    Return to Homepage ↓
                </p>

                :
                <div ref={el => superLast.current[0] = el} className={`flex justify-center items-center w-full absolute bottom-24  sm:bottom-12   sm:text-[23px] text-center gradient-text-green md:text-[17px] super opacity-45 font-normal`}>
                    YOUR MESSAGE HAS BEEN SUCCESSFULLY<br /> RECEIVED BY OUR TEAM.
                </div>

            }


            <Suspense fallback={<div className="w-full h-auto" />}>
                <OptimizedImage
                    className="absolute z-1 bottom-10 w-full h-auto select-none pointer-events-none"
                    src="/Hero/bottom.webp"
                    alt="bottom"
                />
                <OptimizedImage
                    className="absolute z-10 bottom-0 -translate-x-1/2 left-[50%] select-none pointer-events-none"
                    src="/Hero/btmBlur.webp"
                    alt="bottom blur"
                />
            </Suspense>
        </FirstFone>
    );
};

export default React.memo(NotFoundPage)