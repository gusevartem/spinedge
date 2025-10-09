import React, { useEffect, useRef } from 'react'
import Header from "../NewSecond/Header"
import LastCard from '../../Components/LastCard'
import AnimatedCircle from '../../Components/AnimatedCircle'
import { Vector3419 } from '../LastFour/Vector3419'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FourLastSection = () => {
    const containerRef = useRef(null);


    const centerImgRef = useRef(null);
    const bigImgRef = useRef(null);
    const topCircle = useRef(null);
    const bottomCircle = useRef(null);
    const topImage = useRef(null);
    const btmImage = useRef(null);
    const circle = useRef(null);
    const cardsRef = useRef([]);

    // внутри компонента
    useEffect(() => {
        let ctx;
        // Добавляем небольшую задержку для гарантии, что DOM полностью загружен
        const timeoutId = setTimeout(() => {
            ctx = gsap.context(() => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 70%',
                        toggleActions: 'play none none none',
                    },
                    defaults: { ease: "power2.out" }
                });

                // bigImage появляется
                tl.fromTo(bigImgRef.current,
                    { opacity: 0, scale: 0.8 },
                    { opacity: 1, scale: 1, duration: 0.7 }
                );

                // круги и изображения сверху/снизу
                tl.fromTo(topCircle.current,
                    { y: -100, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.7 }, "-=0.35"
                );
                tl.fromTo(bottomCircle.current,
                    { y: 100, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.7 },
                );
                tl.fromTo(topImage.current,
                    { y: -100, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.7 }, "-=0.4"
                );
                tl.fromTo(btmImage.current,
                    { y: 100, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.7 }, "-=0.45"
                );
                tl.fromTo(cardsRef.current,
                    { x: 200, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.8, stagger: 0.14 }, "-=0.45"
                );
                // center image просто с opacity
                tl.fromTo(centerImgRef.current,
                    { opacity: 0 },
                    { opacity: 1, duration: 0.8 }, "-=0.3"
                );

                tl.fromTo(circle.current,
                    { opacity: 0 },
                    { opacity: 1, duration: 0.8 }, "-=0.2"
                );
            });

            ScrollTrigger.refresh();
        }, 100);


        return () => {
            clearTimeout(timeoutId);
            ctx?.revert(); // Очищаем контекст GSAP при размонтировании
        };
    }, []);
    return (
        <div className='w-screen min-h-screen h-full relative flex lg:justify-start lg:items-start items-center justify-center sm:pt-[3%] sm:px-[50px] pt-[20%] md:pb-[0] pb-[20%]'>

            <div ref={containerRef} className='absolute w-[1259px] h-[904px]  -top-[38%]  2xl:-left-[5%]  2xl:-top-[33%] xl:-left-[25%]  lg:-left-[25%] hidden lg:block '>
                <img ref={bigImgRef} src='/Four/bigLeft.png' className=' hidden lg:block ' width={1259} height={904} />

                <div className='absolute w-[654px] h-[1009px] top-1/2 mt-16 -translate-y-1/2 -translate-x-1/2 left-1/2'>
                    <img ref={topCircle} src='/Four/top.png' className='-mb-40 hidden lg:block relative' width={654} height={654} />
                    <img ref={bottomCircle} src='/Four/btm.png' className=' -mt-70 hidden lg:block ' width={654} height={654} />
                    <img ref={topImage} src='/Four/topImg.png' className='2xl:bottom-1/3 bottom-1/4 left-1/2 -translate-y-1/2 -translate-x-1/2 hidden lg:block relative' />
                    <img ref={btmImage} src='/Four/btmImg.png' className='absolute top-1/3 left-1/2 -translate-y-1/2 -translate-x-1/2 hidden lg:block ' />
                    <div className='w-[954px] h-[258px] absolute top-1/2 -translate-y-1/2 left-[29%] ' >
                        <div className='relative w-[284px] h-[258px]'>
                            <img ref={centerImgRef} width={284} height={258} src='/center.png' />
                            <div ref={circle} className={` select-none pointer-events-none hidden lg:block`}>
                                <AnimatedCircle customStyle={`!pt-0 select-none pointer-events-none top-[64%] left-1/2 -translate-y-1/2 -translate-x-1/2 hidden lg:block`} width={`100`} height={`100`} />
                            </div>


                        </div>


                    </div>
                </div>
            </div>




            <img src='/Four/mobLight.png' className='absolute  block md:hidden -translate-y-1/2 top-[40%] w-full' />

            <img src='/Four/Blur.png' className='absolute xl:-top-[25%] xl:-right-[15%] hidden lg:block' width={1442} height={815} />

            <div className='flex-[0_0_49%] w-0 hidden lg:block  '>

            </div>
            <div className='lg:flex-[0_0_51%] flex-[1_1_100%] w-full sm:items-start   items-start lg:px-0 px-5 flex flex-col  lg:gap-46'>
                <Header
                    four={innerWidth > 640}
                    customStyles={`lg:!text-left text-left lg:items-start items-center -mt-[14%] sm:w-[500px] w-[335px] `}
                    top={`THE QUANTUM LEAP IN AI HARDWARE`}
                    mid={`From Lab to Launch — No Fab Needed`}
                    bottom={`Our non-volatile memory and magnetic sensors are already built, tested, and production-ready. Spintronic components integrate seamlessly with existing microelectronics — no custom fabs, no exotic processes.`} />

                <div className='  w-[500px] h-[704px]  relative lg:hidden block -mt-[16%] right-[15%]'>
                    <img src='/Four/bigLeft.png' className=' absolute ' width={1259} height={904} />

                    <img src='/Four/leftLeft.png' className='absolute  w-full h-full object-none -left-[16%]' />

                    <img src='/Four/fone.png' className='absolute   -translate-y-1/2  -translate-x-1/2 left-[36%] top-[50%]' />
                    <AnimatedCircle width={`60`} height={`60`} customStyle={`!pt-0 select-none pointer-events-none top-[53%] left-[30%] -translate-y-1/2 `} />


                </div>
                <div className='flex  xl:gap-15 lg:gap-6 sm:gap-8 sm:pb-16  gap-3  pt-10 sm:-mt-[17%] -mt-[35%] lg:-mt-[0] w-full '>
                    <LastCard ref={el => cardsRef.current[0] = el} img={`/Four/cardLeft.png`} Title={`Non-Volatile<br/> Memory`} sub={`Spintronics non-volatile memory retains data without power, crucial for automotive and low-power AI applications`} />
                    <LastCard ref={el => cardsRef.current[1] = el} img={`/Four/cardRight.png`} Title={`Advanced Magnetic Sensors`} sub={`Spintronic sensors are<br/> the best fit for edge<br/> and IoT devices`} />

                </div>
            </div>

        </div>
    )
}

export default FourLastSection
