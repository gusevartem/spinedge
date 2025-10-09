import React, { useRef, useEffect, useMemo, useCallback } from 'react'
import Fone from "./Fone"
import Header from '../NewSecond/Header'
import Card from './Card'
import Table from './Table'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SevenSection = () => {
    const cardsRef = useRef([])
    const teamHeaderRef = useRef([])
    const handRef = useRef(null)

    // Мемоизируем текст для мобильных устройств
    const bottomText = useMemo(() =>
        window.innerWidth < 640
            ? `100+ years of combined experience at IBM, Google, and top research labs — now united to solve AI's hardest problem`
            : `100+ years of combined experience at IBM, Google, and top<br/> research labs — now united to solve AI's hardest problem`
        , []);

    // Мемоизируем функцию для создания анимации карточек
    const createCardAnimation = useCallback((card, index) => {
        if (!card) return;

        // Анимация появления
        const appearAnimation = gsap.fromTo(
            card,
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 2.2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            }
        );

        // Параллакс эффект
        const parallaxAnimation = gsap.to(card, {
            y: -50,
            ease: 'none',
            scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 3,
            },
        });

        return () => {
            appearAnimation.kill();
            parallaxAnimation.kill();
        };
    }, []);

    // Мемоизируем функцию для создания анимации заголовка
    const createHeaderAnimation = useCallback((header) => {
        if (!header) return;

        const animation = gsap.fromTo(
            header,
            { x: -160, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1.6,
                ease: 'power2.out',
                stagger: 0.3,
                scrollTrigger: {
                    trigger: header,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            }
        );

        return () => animation.kill();
    }, []);

    useEffect(() => {
        const cleanupFunctions = [];

        // Анимация карточек
        cardsRef.current.forEach((card, index) => {
            const cleanup = createCardAnimation(card, index);
            if (cleanup) cleanupFunctions.push(cleanup);
        });

        // Анимация заголовка
        if (teamHeaderRef.current) {
            const cleanup = createHeaderAnimation(teamHeaderRef.current);
            if (cleanup) cleanupFunctions.push(cleanup);
        }

        // Анимация руки
        const handAnimation = gsap.to(handRef.current, {
            x: 20,
            duration: 1.5,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true
        });

        cleanupFunctions.push(() => handAnimation.kill());

        // Очистка всех анимаций при размонтировании
        return () => {
            cleanupFunctions.forEach(cleanup => cleanup());
        };
    }, [createCardAnimation, createHeaderAnimation]);

    return (
        <Fone>
            <div className='w-full h-full flex flex-col pt-8'>
                <div className='w-full px-[21px]'>
                    <Header
                        top={`BEHIND THE BREAKTHROUGH`}
                        mid={`The Minds Rewriting<br/> AI's Future`}
                        bottom={bottomText}
                    />
                </div>

                <div className='w-full overflow-x-hidden sm:hidden block'>
                    <img
                        src='/Seven/Fone.png'
                        className='w-[1057px] h-[512px] object-center object-cover'
                        loading="lazy"
                        alt="Background"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[35px] md:gap-y-[0px] px-[20px] -mt-20 pb-10 md:-mt-0">
                    <div className="justify-self-start md:ml-[13%] md:mt-[17%]">
                        <Card
                            ref={el => (cardsRef.current[0] = el)}
                            img={`/Workers/dmitriy.png`}
                            name={`Dr. Dmitry<br/> Leshchiner`}
                            work={`Chief Technology Officer`}
                            desc={`AI algorithms & neuromorphic<br/> technologies; SW development:<br/> 20+ years @ Google, Yahoo, Yandex`}
                        />
                    </div>

                    <div className="justify-self-end md:mr-[12%] md:-mt-[29%]">
                        <Card
                            ref={el => (cardsRef.current[1] = el)}
                            img={`/Workers/konst.png`}
                            name={`Dr. Konstantin<br/> Zvezdin`}
                            work={`CEO`}
                            desc={`R&D MRAM and microwave<br/> spintronics: 20+ years @ Fiat,<br/> European Projects`}
                        />
                    </div>
                    <div className='hidden lg:block'></div>
                    <div className="justify-self-start md:justify-self-center self-start md:self md:-mt-[25%] ">
                        <Card
                            ref={el => (cardsRef.current[2] = el)}
                            img={`/Workers/nir.png`}
                            name={`Dr. Nir Karasikov`}
                            work={`Chairman`}
                            desc={`Senior leadership in the High-<br/>Tech industry and business: 25+<br/> year executive @ Nanomotion`}
                        />
                    </div>
                </div>

                <div className='pl-[6%] mt-[10px] pb-[5%]'>
                    <p
                        ref={el => teamHeaderRef.current[0] = el}
                        className='md:text-[13px] text-[10px] mono bg-[radial-gradient(circle,_#16F501,_#00DA90)] text-transparent bg-clip-text pt-[35px] pb-2'
                    >
                        AND ALSO
                    </p>
                    <div className='flex'>
                        <h2
                            ref={el => teamHeaderRef.current[1] = el}
                            className='gradient-text-green md:text-[37px] text-[19px] font-bold pb-[25px] flex-1'
                        >
                            Team members<br /> and Advisors
                        </h2>
                        <img
                            ref={handRef}
                            src='/hand.svg'
                            className='block lg:hidden'
                            alt="Hand pointer"
                        />
                    </div>

                    <div className='flex justify-start'>
                        <Table />
                    </div>
                </div>
            </div>
        </Fone>
    );
};

export default React.memo(SevenSection);
