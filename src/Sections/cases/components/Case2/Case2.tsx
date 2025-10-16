import React, { useEffect, useRef } from 'react'
import { type FC } from 'react'
import './case2.css'

import { HeaderText } from '../HeaderText/HeaderText'
import AnimatedCircle from '../../../../Components/AnimatedCircle'

interface Case2Props { }

export const Case2: FC<Case2Props> = () => {
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
        <div className='Case2Block' >
            <HeaderText num={2} title='Driving mission-critical decisions — in real time' text='' />
            <div className='CaseBody' >
                <div className='Case3CenterShadow' ></div>
                <img loading='lazy' src='./Cases/corner.png' className='Case2Corner1' />
                <img loading='lazy' src='./Cases/corner.png' className='Case2Corner2' />
                <div className='TextGroup' >
                    <p className={`Case2Text Case2Text1 mono`} >SpinEdge delivers ultra-low-latency AI for autonomous systems — from drones and delivery robots to ADAS-equipped vehicles</p>
                    <ul className='Case2Text2' >
                        <li className='Case2Text mono' >Our spintronic coprocessor enables real-time perception without relying on high-power GPUs or cloud connectivity</li>
                        <li className='Case2Text mono' >The spintronic analog core is inherently EMI-immune, radiation-hardened, and operates across extended temperature ranges, making it ideal for harsh and mission-critical environments</li>
                    </ul>
                </div>
                <div className='Case2ImagesGroup' >
                    <img loading='lazy' src='./Case2/drone.webp' className='Drone' />
                    <img loading='lazy' src='./Case2/droneMob.webp' className='DroneMob' />
                    <img loading='lazy' src='./Case2/car1.webp' className='Case2Car1' />
                    <img loading='lazy' src='./Case2/car1Mob.png' className='Case2Car1Mob' />
                    <img loading='lazy' src='./Case2/car2.png' className='Case2Car2' />
                    <img loading='lazy' src='./Case2/car2Mob.png' className='Case2Car2Mob' />
                    <div className='Case2CenterImgWrap' >
                        <img loading='lazy' src='./Case2/line1.webp' className='Case2Line1' />
                        <img loading='lazy' src='./Case2/line2.webp' className='Case2Line2' />
                        <img loading='lazy' src='./Case2/line3.webp' className='Case2Line3' />
                        <AnimatedCircle id={''} lottieRef={circleRef} customStyle={`Case2Spin`} width={80} height={80} />
                        <img loading='lazy' src='./Case2/lineTopMob.webp' className='Case2Line1Mob' />
                        <img loading='lazy' src='./Case2/lineRightMob.webp' className='Case2Line2Mob' />
                        <img loading='lazy' src='./Case2/lineLeftMob.webp' className='Case2Line3Mob' />

                        <img loading='lazy' src='./Case2/plata.webp' className='Case2Plata' />
                    </div>
                </div>
                <ul className='Case2Text2 CaseText2Clone' >
                    <li className='Case1Text mono' >Our spintronic coprocessor enables real-time perception without relying on high-power GPUs or cloud connectivity</li>
                    <li className='Case1Text mono' >The spintronic analog core is inherently EMI-immune, radiation-hardened, and operates across extended temperature ranges, making it ideal for harsh and mission-critical environments</li>
                </ul>
            </div>
        </div>
    )
}