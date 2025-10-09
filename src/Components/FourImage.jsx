import FourCard from './FourCard'
import AnimatedCircle from './AnimatedCircle'
import AnimatedImg from '../Sections/FourSection/AnimatedImg'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
import './styles.css'

gsap.registerPlugin(ScrollTrigger);
const FourImage = () => {
    const leftCards = useRef([])
    const rightCards = useRef([])
    const containerRef = useRef(null)
    const lightRef = useRef(null)
    const circleRef = useRef(null)

    useEffect(() => {
        const mm = gsap.matchMedia();
        mm.add("(min-width: 1281px)", () => {
            const triggerInstance = ScrollTrigger.create({
                trigger: "#stop",  // триггер — весь контейнер
                start: `${innerWidth > 1500 ? '19% center' : '14% center'}`,            // когда верх контейнера достигнет центра экрана
                end: "bottom top",           // когда низ контейнера достигнет центра экрана


                onEnter: () => {
                    gsap.to(lightRef.current, {
                        opacity: 1,
                        filter: "brightness(1) blur(0px)",
                        duration: 1,
                        delay: 0.8,
                    });
                    gsap.to(circleRef.current, {
                        opacity: 1,
                        duration: 1,
                        delay: 0.8,
                    });
                },
                onLeave: () => {
                    gsap.to(lightRef.current, {
                        opacity: 0,
                        filter: "brightness(0.3) blur(10px)",
                        duration: 1,
                    });
                    gsap.to(circleRef.current, {
                        opacity: 0,
                        duration: 1,
                    });
                },
                onEnterBack: () => {
                    gsap.to(lightRef.current, {
                        opacity: 1,
                        filter: "brightness(1) blur(0px)",
                        duration: 1,
                        delay: 1.5,
                    });
                    gsap.to(circleRef.current, {
                        opacity: 1,
                        duration: 1,
                        delay: 1.5,
                    });
                },
                onLeaveBack: () => {
                    gsap.to(lightRef.current, {
                        opacity: 0,
                        filter: "brightness(0.3) blur(10px)",
                        duration: 1,
                    });
                    gsap.to(circleRef.current, {
                        opacity: 0,
                        duration: 1,
                    });
                },
            });

            return () => triggerInstance.kill();
        });

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const globalDelay = 2;

                    mm.add("(max-width: 1280px)", () => {
                        if (lightRef.current) {
                            gsap.fromTo(lightRef.current, {
                                opacity: 0,
                                filter: 'brightness(0.3) blur(10px)',
                            }, {
                                opacity: 1,
                                filter: 'brightness(1) blur(0px)',
                                duration: 1.5,
                                ease: 'power2.out',
                                delay: globalDelay + 1.5,

                            });
                        }
                        if (circleRef.current) {
                            gsap.fromTo(circleRef.current, {
                                opacity: 0,
                            }, {
                                opacity: 1,
                                duration: 1.5,
                                ease: 'power2.out',
                                delay: globalDelay + 1.5,

                            });
                        }
                    })

                    // 🃏 Анимации карточек
                    leftCards.current.forEach((el, i) => {
                        if (el) {
                            gsap.fromTo(el, {
                                x: -100,
                                opacity: 0,
                            }, {
                                x: 0,
                                opacity: 1,
                                duration: 1.6,
                                ease: 'power2.out',
                                delay: globalDelay + i * 0.3,
                            });
                        }
                    });

                    rightCards.current.forEach((el, i) => {
                        if (el) {
                            gsap.fromTo(el, {
                                x: 100,
                                opacity: 0,
                            }, {
                                x: 0,
                                opacity: 1,
                                duration: 1.5,
                                ease: 'power2.out',
                                delay: globalDelay + i * 0.3,
                            });
                        }
                    });

                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (containerRef.current) observer.observe(containerRef.current);

        return () => observer.disconnect();
    }, []);
    return (


        <div ref={containerRef} className="relative FourImageWrap block md:sticky md:top-16 w-full h-[560px] sm:h-[700px] md:h-[752px]  ">


            <AnimatedImg />
            {/* FourCard — точно привязаны к точкам картинки */}

            <FourCard
                ref={el => leftCards.current[0] = el}
                customPosition="absolute opacity-0 AnalogData 2xl:top-[2%] xl:top-[6%] lg:top-[0%] md:top-[3%] -bottom-[22%]"
                text={`Analog inference<br /> through the Ohm’s<br /> law I = V G `}
            />
            <FourCard
                ref={el => rightCards.current[0] = el}
                customPosition="absolute opacity-0 AnalogInference 2xl:-top-[8%] xl:-top-[7%] lg:-top-[10%] md:-top-[2%] -bottom-[14%] "
                text={`Analog data<br/> (voltages)`}
            />
            <FourCard
                ref={el => rightCards.current[1] = el}
                customPosition="absolute opacity-0 AnalogOutput"
                text={`Analog output<br/> (currents) `}
            />
            <FourCard
                ref={el => leftCards.current[1] = el}
                customPosition="absolute opacity-0 IntegrationWith"
                text={`Integration with<br/> CMOS circuitry`}
            />
            <FourCard ref={el => leftCards.current[2] = el}
                customPosition={'!absolute opacity-0 hidden Spintronic md:block'} text={`Spintronic<br/> Synapse`} />
            <div className='absolute w-[350px] FourImageLine
                    2xl:rotate-2 
                    xl:rotate-4 
                    top-[200px] lg:rotate-2
                    right-[450px] rotate-2'>
                <img ref={lightRef} className='absolute left-[96px] w-[350px] lg:h-[200px] h-[195px] 2xl:h-[200px] xl:h-[202px] -top-[75px] xl:-top-[55px] opacity-0' src='/Four/light.webp' />
                <div
                    id="proxyTrigger"
                    className="absolute left-[96px] w-[350px] pointer-events-none"
                    style={{ top: 'calc(50% - 150px)', height: '300px' }}
                />

                <AnimatedCircle lottieRef={circleRef} customStyle={`relative block AnimatedCircle opacity-0`} width={`170`} height={`170`} />
            </div>

        </div >

    )
}

export default FourImage