import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

import NavBar from '../Components/NavBar';
import AnimatedCircle from '../Components/AnimatedCircle';
import FirstFone from '../Components/FirstFone';
import Code from './Code';

import { runDesktopAnimation } from '../Animation/Hero/runDesktopAnimation';
import { runMobileAnimation } from '../Animation/Hero/runMobileAnimation';

import s from './styles.module.scss';

const HeroSection = () => {
    const mainRef = useRef(null);
    const overlayRef = useRef(null);
    const ballRef = useRef(null);
    const navbarRef = useRef(null);
    const toumanRef = useRef(null);

    const firstElems = useRef([]);
    const lastLeft = useRef([]);
    const lastRight = useRef([]);
    const superLast = useRef([]);

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [isVisible, setIsVisible] = useState(false); // 👈 новое состояние

    const getVisible = useCallback((arr) => arr.filter(el => el && el.offsetParent !== null), []);
    const circleSize = useMemo(() => (isMobile ? 100 : 190), [isMobile]);

    const handleResize = useCallback(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    // Отслеживаем resize
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

    // 👇 Intersection Observer — следит за видимостью секции
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 1, // процент видимости элемента (можно отрегулировать)
            }
        );

        if (mainRef.current) observer.observe(mainRef.current);
        return () => {
            if (mainRef.current) observer.unobserve(mainRef.current);
        };
    }, []);

    // 👇 Запуск анимации ТОЛЬКО когда секция видима
    useGSAP(() => {
        if (!isVisible) return; // не запускаем пока не видно

        let mm;
        if (isMobile) {
            mm = runMobileAnimation({ overlayRef, ballRef, mainRef });
        } else {
            mm = runDesktopAnimation(
                { overlayRef, firstElems, navbarRef, toumanRef, ballRef, lastLeft, lastRight, superLast, mainRef },
                getVisible
            );
        }

        // Очистка
        return () => {
            mm && mm.revert();
        };
    }, [isMobile, isVisible]); // 👈 добавили зависимость от видимости

    // Тест фпса
    useEffect(() => {
        let lastTime = performance.now();
        let frames = 0;
        const logFPS = () => {
            frames++;
            const now = performance.now();
            const delta = (now - lastTime) / 1000;
            if (delta >= 1) {
                console.log(`FPS: ${(frames / delta).toFixed(1)}`);
                frames = 0;
                lastTime = now;
            }
        };
        gsap.ticker.add(logFPS);
    }, []);

    return (
        <FirstFone ref={mainRef} id="main">
            <div ref={overlayRef} className="absolute inset-0 bg-black z-[150] pointer-events-none" />
            <img src="./shum.webp" className="heroShum absolute" />
            <NavBar ref={navbarRef} />
            <OptimizedImage
                ref={toumanRef}
                className="absolute z-0 FirstFoneBgSome top-2 left-1/2 max-w-full h-auto select-none pointer-events-none min-w-[485px] min-h-[520px]"
                src="/Hero/touman.webp"
                alt="Touman"
                style={{ transform: 'translateX(-50%)' }}
            />

            <div className="relative flex flex-col items-center sm:text-[35px] text-center pb-32 sm:pt-30 pt-26 2xl:pb-40 w-full mx-auto">
                <p
                    ref={(el) => (firstElems.current[0] = el)}
                    className={`${s.HeroText} gradient-text-green font-bold sm:text-3xl text-[23px]  leading-[120%] first`}
                >
                    <span>Unlease the AI future -</span> <br /> solving the power and <br /> perfomance trade-offs
                </p>
                <div className="reltive w-full h-full">
                    <AnimatedCircle
                        lottieRef={ballRef}
                        width={circleSize}
                        height={circleSize}
                        customStyle={`sm:mt-0 mt-[12%] -translate-x-1/2 left-1/2 `}
                    />
                </div>
                <Code ref={(el) => (lastRight.current[0] = el)} />
            </div>

            <Code ref={(el) => (lastRight.current[1] = el)} customStyle="absolute left-[7%] top-100" />

            <div className="font-bold flex flex-col justify-center items-center w-screen gap-7 sm:pt-[5%] pt-[8%]">
                <div className="w-full flex justify-center">
                    <div className="w-full max-w-[87%] flex flex-col items-center sm:gap-7">
                        <div className="flex w-full justify-center gap-[30px] first" ref={(el) => (firstElems.current[2] = el)}>
                            <p className={s.Title}>SPINEDGE</p>
                        </div>
                        <p className={s.Text1}>
                            Traditional hardware wasn’t <br /> built for modern AI.
                        </p>
                        <p className={`${s.Text2} mono`}>
                            SpinEdge delivers what’s been missing <br /> in AI compute - high performance with <br /> breakthrough energy efficiency
                        </p>
                    </div>
                </div>
            </div>
        </FirstFone>
    );
};

export default React.memo(HeroSection);

const OptimizedImage = React.memo(({ src, alt, className, style, ref }) => (
    <img ref={ref} className={className} src={src} alt={alt} style={style} loading="lazy" decoding="async" />
));
