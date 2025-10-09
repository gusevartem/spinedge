import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SecondFone = ({ children, id }) => {
    const sectionRef = useRef(null);
    const blurRef = useRef(null);
    const firstAnimation = useRef([]);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
            }
        });

        // Анимируем greenBlur (index 1)
        tl.fromTo(
            firstAnimation.current[1],
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 2, delay: 1, ease: 'power2.out' }
        );

        // Анимируем step2 (index 2)
        tl.fromTo(
            firstAnimation.current[2],
            { opacity: 0, scale: 0.95 },
            { opacity: 1, scale: 1, duration: 2, ease: 'power2.out' },
            '<' // немного перекрываем с предыдущей
        );


    }, []);

    return (
        <section
            ref={sectionRef}
            id={id}
            className="bg-black w-full md:w-screen sm:h-screen h-full relative z-50 flex  justify-center items-center  overflow-y-visible  pt-[8%]"
        >


            <img
                ref={el => firstAnimation.current[2] = el}
                className="absolute top-[7%] h-full max-h-screen min-w-[760px] max-w-full m-auto select-none pointer-events-none z-0"
                src="/Second/step2.png"
                alt="Step 2"
            />
            <img src='/right.webp' className='absolute w-[960px] top-0 right-0 select-none pointer-events-none' />
            <img src='/left.webp' className='absolute  w-[960px] top-0 left-0 select-none pointer-events-none' />
            <img
                className="absolute inset-0 h-full m-auto select-none pointer-events-none z-0 rounded-4xl"
                src="/Second/whiteblur.webp"
                alt="White Blur"
            />
            <img
                ref={el => firstAnimation.current[1] = el}
                className="absolute w-full select-none pointer-events-none z-1 opacity-40 "
                src="/Second/greenBlur.png"
                alt="Green Blur"
            />
            <img
                ref={blurRef}
                className="hidden select-none pointer-events-none" // если больше не нужен — можно убрать из DOM или скрыть
                alt="Hidden Blur"
            />
            {children}
            <div className="absolute opacity-70 bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black z-10 pointer-events-none" />
            <div className="absolute w-[90px] h-[300px] bottom-[20%] left-1/2 -translate-x-1/2 translate-y-1/2 top-[70%] blur-[120px] rounded-full bg-[#16CDDE] opacity-60 pointer-events-none z-50" />
        </section>
    );
};

export default SecondFone;
