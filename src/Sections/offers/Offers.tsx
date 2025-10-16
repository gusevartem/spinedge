import React, { useEffect, useRef } from 'react'
import { type FC } from 'react'

import './offers.css'
import AnimatedCircle from '../../Components/AnimatedCircle'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

interface OffersProps { }

export const Offers: FC<OffersProps> = () => {
    const circleRef = useRef(null);
    const lightRef = useRef(null);

    useEffect(() => {
        let tl: any = null;

        const initAnimation = () => {
            if (!circleRef.current || !lightRef.current) return;

            tl = gsap.timeline({
                scrollTrigger: {
                    trigger: circleRef.current,
                    start: 'top center',
                    toggleActions: 'play none none reverse',
                    once: false,
                },
            });

            // Анимация круга
            tl.fromTo(
                circleRef.current,
                {
                    autoAlpha: 0,
                    scale: 0.8,
                },
                {
                    autoAlpha: 1,
                    scale: 1,
                    duration: 1,
                    ease: 'power2.out',
                }
            );

            // Анимация света с проверкой
            if (lightRef.current) {
                tl.fromTo(
                    lightRef.current,
                    {
                        autoAlpha: 0,
                        scale: 0.8,
                    },
                    {
                        autoAlpha: 1,
                        scale: 1,
                        duration: 1,
                        ease: 'power2.out',
                    },
                    '+=0.2'
                );
            }
        };

        // Инициализация анимации
        initAnimation();

        // Очистка при размонтировании
        return () => {
            if (tl) {
                tl.kill();
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            }
        };
    }, []);

    return (
        <div className='OffersSec' >
            <img loading='lazy' src='./shum.webp' className='tradShum1' />
            <div className='OffersShadow1'></div>
            <div className='OffersShadow2' ></div>
            <div className='OffersBody' >
                <div className='CenterShadow' ></div>
                <img loading='lazy' src='./Offers/corner.webp' className='Corner1' />
                <img loading='lazy' src='./Offers/corner.webp' className='Corner2' />
                <div className='LeftGroup' >
                    {/* <span className='Title'>
                        SpinEdge offers Universal <br /> AI Accelerator - <p>from <br /> Edge to Cloud, from <br /> Inference to training </p>
                    </span> */}
                    <p className='FirstInfoTitle'>
                        <span>SpinEdge offers Universal <br /> AI Accelerator &mdash;</span> from <br /> Edge to Cloud, from <br /> Inference to training
                    </p>
                    <span className='Text mono'>Handles a broad range of AI workloads — from computer vision to language models, from sensors to servers</span>
                </div>
            </div>

            <div className='PlataWrap' >
                <img loading='lazy' src='./Offers/plata.webp' className='Plata' />
                <AnimatedCircle id={''} lottieRef={circleRef} customStyle={`OffersSpin`} width={window.innerWidth < 640 ? 110 : 160} height={window.innerWidth < 640 ? 110 : 160} />
            </div>
        </div>
    )
}
