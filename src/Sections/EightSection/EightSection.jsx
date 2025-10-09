import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { gsap } from 'gsap';
import Fone from './Fone';
import Header from '../NewSecond/Header';
import Card from './Card';

const EightSection = () => {
    const [open, setIsOpen] = useState(false);
    const containerRef = useRef(null);
    const firstRef = useRef(null);
    const secondRef = useRef(null);
    const handRef = useRef(null)
    // Мемоизируем начальную высоту контейнера
    const initialHeight = useMemo(() => innerWidth < 640 ? 425 : 515, []);

    // Мемоизируем функцию для анимации открытия/закрытия
    const animateContainer = useCallback((isOpen) => {
        if (!containerRef.current) return;

        const fullHeight = containerRef.current.scrollHeight;
        const animations = [];

        // Анимация высоты контейнера
        const containerAnimation = gsap.to(containerRef.current, {
            height: isOpen ? fullHeight : initialHeight,
            duration: 1,
            ease: "power2.inOut"
        });
        animations.push(containerAnimation);

        // Анимация прозрачности для первого блока
        const firstAnimation = gsap.to(firstRef.current, {
            opacity: isOpen ? 100 : 0,
            duration: 1,
            ease: "power2.inOut"
        });
        animations.push(firstAnimation);

        // Анимация прозрачности для второго блока
        const secondAnimation = gsap.to(secondRef.current, {
            opacity: isOpen ? 100 : 0,
            duration: 1,
            ease: "power2.inOut"
        });
        animations.push(secondAnimation);

        // Возвращаем функцию очистки
        return () => {
            animations.forEach(animation => animation.kill());
        };
    }, [initialHeight]);

    useEffect(() => {
        const cleanup = animateContainer(open);
        gsap.to(handRef.current, {
            x: 20,
            duration: 1.5,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true
        });
        return () => {
            if (cleanup) cleanup();
        };
    }, [open, animateContainer]);

    // Мемоизируем стили для контейнера
    const containerStyles = useMemo(() => ({
        height: `${initialHeight}px`
    }), [initialHeight]);

    // Мемоизируем стили для кнопки
    const buttonStyles = useMemo(() => ({
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        border: '2px solid rgba(0, 218, 145, 0.19)',
        borderRadius: '0.5rem',
        padding: '13px 22px',
        marginTop: innerWidth < 640 ? "20px" : '50px',
        width: '120px',
        height: '50px'
    }), []);

    return (
        <Fone id="eight">
            <Header
                top="INSIGHTS & INNOVATION"
                mid="Read also:"
                bottom="Cutting-edge research, industry trends,<br/> and SpinEdge breakthroughs"
            />
            <div
                ref={containerRef}
                className="flex z-50 pt-[4%] px-[6%] gap-8 xl:justify-center flex-wrap overflow-y-hidden overflow-x-visible relative"
                style={containerStyles}
            >
                <div className={`flex ${open ? 'sm:flex-row flex-col gap-y-12' : 'flex-row'}`}>
                    <Card
                        top="Category"
                        mid="Blog title heading will go here 1"
                        bottom="Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Suspendisse varius enim in eros."
                        img="/Eight/one.png"
                    />
                    <Card
                        top="Category"
                        mid="Blog title heading will go here 2"
                        bottom="Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Suspendisse varius enim in eros."
                        img="/Eight/two.png"
                    />
                    <Card
                        top="Category"
                        mid="Blog title heading will go here 3"
                        bottom="Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Suspendisse varius enim in eros."
                        img="/Eight/three.png"
                    />
                </div>
                <div ref={firstRef} className='flex sm:flex-row flex-col gap-y-12'>
                    <Card
                        top="Category"
                        mid="Blog title heading will go here"
                        bottom="Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Suspendisse varius enim in eros."
                        img="/Eight/three.png"
                    />
                    <Card
                        top="Category"
                        mid="Blog title heading will go here"
                        bottom="Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Suspendisse varius enim in eros."
                        img="/Eight/three.png"
                    />
                    <Card
                        top="Category"
                        mid="Blog title heading will go here"
                        bottom="Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Suspendisse varius enim in eros."
                        img="/Eight/three.png"
                    />
                </div>
                <div ref={secondRef} className='flex sm:flex-row flex-col gap-y-12'>
                    <Card
                        top="Category"
                        mid="Blog title heading will go here"
                        bottom="Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Suspendisse varius enim in eros."
                        img="/Eight/three.png"
                    />
                    <Card
                        top="Category"
                        mid="Blog title heading will go here"
                        bottom="Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Suspendisse varius enim in eros."
                        img="/Eight/three.png"
                    />
                    <Card
                        top="Category"
                        mid="Blog title heading will go here"
                        bottom="Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Suspendisse varius enim in eros."
                        img="/Eight/three.png"
                    />
                </div>

            </div>


            <div className='flex w-full justify-center items-center relative  z-[150]'>
                <button
                    onClick={() => setIsOpen(!open)}
                    style={buttonStyles}
                >
                    <p className='bg-[radial-gradient(circle,_#16F501,_#00DA90)] text-transparent bg-clip-text font-bold text-[15px]'>
                        {open ? 'Hide' : 'View all'}
                    </p>
                </button>
                <img
                    ref={handRef}
                    src='/hand.svg'
                    className={`${open ? "hidden" : "block"}  block lg:hidden absolute top-[50%] right-[15%]`}
                    alt="Hand pointer"
                />
            </div>
        </Fone>
    );
};

export default React.memo(EightSection);