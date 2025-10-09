import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SecondFone from '../Components/SecondFone';
import AnimatedCircle from "../Components/AnimatedCircle";
import Header from './NewSecond/Header';
import FixedRedCircle from './FixedRedCircle';
import ReactDOM from 'react-dom';
gsap.registerPlugin(ScrollTrigger);

const SecondSection = () => {
    const imgRef = useRef(null);     // Картинка in.png
    const finalRef = useRef(null);   // Картинка final.png
    const mainRef = useRef(null);    // Картинка main.png
    const circleRef = useRef(null);  // Реф для AnimatedCircle
    const redCircleRef = useRef(null);  // Реф для AnimatedCircle

    useGSAP(() => {
        const isMobile = window.innerWidth < 640;
        const mm = gsap.matchMedia();
        // Появление main.png
        gsap.fromTo(
            mainRef.current,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1.5,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: mainRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
            }
        );

        // in.png как эффект перекраски — появляется с blur
        gsap.fromTo(
            imgRef.current,
            { opacity: 0, filter: 'blur(8px)' },
            {
                opacity: 1,
                filter: 'blur(0px)',
                duration: 1.5,
                delay: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: imgRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none',

                },
            }
        );

        // Показ финального изображения (final.png)
        gsap.to(finalRef.current, {
            opacity: 1,
            duration: 1.5,
            delay: 2.3,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: finalRef.current,
                start: 'top 85%',
                toggleActions: 'play none none none',
            },
        });

        // Замена final.png на red.png при выходе шарика

        ScrollTrigger.create({
            trigger: circleRef.current,
            start: "top 20%",
            end: "top 10%",
            scrub: true,
            onEnter: () => {
                gsap.to(finalRef.current, { opacity: 0, duration: 0.5 });
                gsap.to(redCircleRef.current, { opacity: 1, duration: 0.5 });
            },
            onLeaveBack: () => {
                gsap.to(redCircleRef.current, { opacity: 0, duration: 0.5 });
                gsap.to(finalRef.current, { opacity: 1, duration: 0.5 });
            },
        });



        // Появление круга
        gsap.fromTo(
            circleRef.current,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1,
                delay: 2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: "#second",
                    start: "top 50%",
                    toggleActions: "play none none none",
                    once: true,
                },
            }
        );
        if (isMobile) {
            mm.add("(max-width: 768px) ", () => {

                gsap.to(circleRef.current, {
                    scrollTrigger: {
                        trigger: circleRef.current,
                        start: "top 25%",
                        endTrigger: "#card",
                        end: "90% center",
                        pin: true,
                        scrub: true,
                        anticipatePin: 1,

                    },
                });

                gsap.fromTo(
                    circleRef.current,
                    { filter: "blur(0px)" },
                    {
                        filter: "blur(10px)",
                        scrollTrigger: {
                            trigger: "#card",
                            start: "top 35%",
                            end: "top 25%",
                            scrub: true,
                        },
                    }
                )
            })
        }
        if (!isMobile) {
            mm.add("(min-width: 1536px)", () => {
                // Пин шарика
                gsap.to(circleRef.current, {
                    scrollTrigger: {
                        trigger: circleRef.current,
                        start: "top 26%",
                        endTrigger: "#stop",
                        end: "64% 10%",
                        pin: true,
                        scrub: true,
                        anticipatePin: 1

                    },
                });

                gsap.fromTo(
                    circleRef.current,
                    { filter: "blur(0px)" }, // начальное состояние
                    {
                        filter: "blur(10px)", // максимальный эффект блюра
                        scrollTrigger: {
                            trigger: "#card", // триггер, на котором срабатывает анимация
                            start: "top 47%", // начало анимации, когда верх элемента #card достигает 45% экрана
                            end: "bottom 30%", // конец анимации, когда верх элемента #card достигает 25% экрана
                            scrub: true, // плавное сглаживание при прокрутке
                            // для отладки, показывает маркеры начала и конца анимации
                            onLeave: () => { // отменяем блюр, когда элемент покидает триггер
                                gsap.to(circleRef.current, { filter: "blur(0px)", duration: 0.5 });
                            },
                            onEnter: () => { // восстановление эффекта блюра, когда элемент снова входит в область триггера
                                gsap.to(circleRef.current, { filter: "blur(10px)", duration: 0.5 });
                            }
                        }
                    }
                );
            });

            mm.add("(min-width: 1280px) and (max-width: 1535px)", () => {
                // Пин шарика
                gsap.to(circleRef.current, {
                    scrollTrigger: {
                        trigger: circleRef.current,
                        start: "top 30%",
                        endTrigger: "#stop",
                        end: "64% 10%",
                        pin: true,
                        scrub: true,
                        anticipatePin: 1,

                    },
                });

                // Устанавливаем начальный стиль явно
                gsap.set(circleRef.current, { filter: "blur(0px)" });
                // Анимация с scrub
                gsap.to(circleRef.current, {
                    scrollTrigger: {
                        trigger: "#card",
                        start: "top 47%",
                        end: "bottom 30%",
                        scrub: true,

                        // Фикс: отключаем авто-прогон при создании
                        immediateRender: false
                    }
                });
                // Состояния на вход/выход
                ScrollTrigger.create({
                    trigger: "#card",
                    start: "top 47%",
                    end: "bottom 30%",
                    onEnter: () => {
                        gsap.to(circleRef.current, { filter: "blur(10px)", duration: 0.5 });
                    },
                    onLeave: () => {
                        gsap.to(circleRef.current, { filter: "blur(0px)", duration: 0.5 });
                    },
                    onEnterBack: () => {
                        gsap.to(circleRef.current, { filter: "blur(10px)", duration: 0.5 });
                    },
                    onLeaveBack: () => {
                        gsap.to(circleRef.current, { filter: "blur(0px)", duration: 0.5 });
                    }
                });
            });
            mm.add("(max-width: 1279px) ", () => {

                gsap.to(circleRef.current, {
                    scrollTrigger: {
                        trigger: circleRef.current,
                        start: "top 25%",
                        endTrigger: "#card",
                        end: "bottom 70%",
                        pin: true,
                        scrub: true,
                        anticipatePin: 1,
                    },
                });

                gsap.fromTo(
                    circleRef.current,
                    { filter: "blur(0px)" },
                    {
                        filter: "blur(10px)",
                        scrollTrigger: {
                            trigger: "#card",
                            start: "top 45%",
                            end: "top 25%",
                            scrub: true,

                        },
                    }
                )
            })

        }


    }, []);



    return (

        <SecondFone id="second">
            <div className="flex flex-col gap-10 sm:pt-0 pt-[21%] z-30">

                <Header top={`AI’s Ticking Time Bomb`} mid={` The AI Energy Crisis:<br /> Why SpinEdge Matters`} bottom={`AI is suffocating. Here’s why.`}>

                </Header>
                <div className="flex justify-center items-center relative w-full h-full sm:mb-0 mb-[165px] z-[60]">
                    {/* Основная картинка */}
                    <img
                        ref={mainRef}


                        className="sm:max-w-full max-w-[213px] sm:max-h-full max-h-[222px] opacity-0  select-none pointer-events-none"
                        src="/Second/main.png"
                        alt="Main"
                    />
                    {/* Картинка in.png, которая появляется после main.png */}
                    <img
                        ref={imgRef}
                        className="absolute pt-2 top-1/2 left-1/2 transform md:scale-100 scale-50 -translate-x-1/2 -translate-y-1/2 opacity-0  select-none pointer-events-none"
                        src="/Second/in.png"
                        alt="In"
                    />
                    {/* Картинка final.png, которая появляется после in.png */}
                    <img
                        ref={finalRef}

                        className="absolute max-w-full max-h-full opacity-0 select-none pointer-events-none"
                        src="/Second/final.png"
                        alt="Final"
                    />
                    <img
                        ref={redCircleRef}
                        className="absolute max-w-full max-h-full opacity-0 select-none pointer-events-none"
                        src="/Second/red.png" // Твоя красная картинка
                        alt="Red Circle"
                    />
                    {/* Анимированный круг, который появляется в финале */}



                    <AnimatedCircle id={`fromTop`} customStyle={`z-30`} width={window.innerWidth < 640 ? 100 : 180} height={window.innerWidth < 640 ? 100 : 180} lottieRef={circleRef} />


                </div>


            </div>

        </SecondFone>

    );
};

export default SecondSection;