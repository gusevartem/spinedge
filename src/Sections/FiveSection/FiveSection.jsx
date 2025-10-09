import React, { useRef, useEffect, useState } from 'react'
import FiveFone from './FiveFone'
import Header from '../NewSecond/Header'
import Card from './Card'
import Table from './Table'
import AnimatedImg from './AnimatedImg'
import { gsap } from 'gsap'

const FiveSection = () => {
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const containerRef = useRef(null); // отслеживаем только эту часть
    const [top, setTop] = useState("Benchmark Results:<br/>Digital → Analog → Spintronic");
    const [mid, seMid] = useState("Outperforming the Giants");
    const [bottom, setBottom] = useState("SpinEdge delivers 200x better efficiency than industry<br/> leaders — with seamless integration");
    useEffect(() => {

    }, [])
    useEffect(() => {
        if (innerWidth < 640) {
            setTop(`Benchmark Results:<br/>Digital → Analog → Spintronic`);
            seMid(`Outperforming<br/> the Giants`)
            setBottom(`SpinEdge delivers 200x better<br/> efficiency than industry leaders<br/> — with seamless integration`)
        }
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const delay = 0.3;

                    // Animate left card
                    if (leftRef.current) {
                        gsap.fromTo(leftRef.current, {
                            x: -100,
                            opacity: 0,
                        }, {
                            x: 0,
                            opacity: 1,
                            duration: 1,
                            ease: 'power2.out',
                            delay,
                        });
                    }

                    // Animate right card
                    if (rightRef.current) {
                        gsap.fromTo(rightRef.current, {
                            x: 100,
                            opacity: 0,
                        }, {
                            x: 0,
                            opacity: 1,
                            duration: 1,
                            ease: 'power2.out',
                            delay,
                        });
                    }

                    observer.disconnect(); // анимация 1 раз
                }
            },
            { threshold: 0.3 }
        );

        if (containerRef.current) observer.observe(containerRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <FiveFone id="five">
            <Header

                top={top}
                mid={mid}
                bottom={bottom}
            />

            {/* Только эту часть мы анимируем */}
            <div ref={containerRef} className='flex flex-col lg:flex-row gap-4 sm:gap-8 mt-4 min-h-[500px] md:mb-[0] mb-[20%] px-8 '>

                {/* Картинка — первая на мобилках, в центре на десктопе */}
                <div className='flex-[0_0_40%] flex justify-center lg:order-2 order-1'>
                    <AnimatedImg customStyle={`z-40`} />
                </div>

                {/* Левая карточка */}
                <div ref={leftRef} className='flex-[0_0_30%] z-50 opacity-0 flex justify-center lg:justify-end md:pt-[3%] lg:order-1 order-2 lg:-mt-0 sm:-mt-[15%] -mt-[15%]'>
                    <Card
                        img={`/Five/Left.png`}
                        text={innerWidth > 640 ? `Delivers up to 1000 TOPS/W, 20 TOPS/mm², and unparalleled cost-effectiveness` : `Delivers up to 1000 TOPS/W, 20<br/> TOPS/mm², and unparalleled<br/> cost-effectiveness`}
                        title={`Superior Performance`}
                    />
                </div>

                {/* Правая карточка */}
                <div ref={rightRef} className='flex-[0_0_30%] flex lg:items-end lg:justify-start items-center justify-center opacity-0 lg:order-3 order-3'>
                    <Card
                        img={`/Five/Right.png`}
                        text={innerWidth > 640 ? `Can be deployed as a chiplet or IP core, compatible with existing AI chips` : `Can be deployed as a chiplet or<br /> IP core, compatible with<br/> existing AI chips`}
                        title={`Flexible Integration`}
                    />
                </div>

            </div>

            <h3 className='flex justify-center items-center font-bold sm:text-[23px] text-[16px]  gradient-text-green text-center sm:pt-[4%] pt-[8%]'>
                Boosting client AI chips energy<br /> efficiency (TOPS/W)
            </h3>

            <h3 className='flex justify-center items-center font-medium mono sm:text-[13px] text-[10px] gradient-text-green text-center pt-[1.5%]'>
                * SpinEdge Digital twin modeling
            </h3>

            <div className='flex justify-center items-center sm:pt-[2%] pt-[6%] px-2 '>
                <Table />
            </div>
        </FiveFone>
    )
}

export default FiveSection
