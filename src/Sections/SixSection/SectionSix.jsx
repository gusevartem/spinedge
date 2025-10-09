import React, { useEffect, useRef } from 'react'
import Card from './Card'
import MiniCard from './MiniCard'
import Head from './Head'
import AnimatedCircle from '../../Components/AnimatedCircle'
import { Group } from './Group'
import gsap from 'gsap'

const SectionSix = () => {
    const subRef = useRef([]);
    const groupRef = useRef(null);
    const ballRef = useRef(null);
    const lightRef = useRef(null);
    const leftBlur = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

        gsap.set(lightRef.current, { opacity: 0 })
        gsap.set(leftBlur.current, { opacity: 0 })
        gsap.set(ballRef.current, { scale: 0, opacity: 0 })

        tl.fromTo(subRef.current, {
            x: -300,
            opacity: 0,

        }, {
            x: 0,
            opacity: 1,
            stagger: 0.3,
            duration: 1.5
        })




        tl.to(ballRef.current, {
            scale: 1,
            opacity: 1,
            duration: 0.9
        });
        tl.to(lightRef.current, {
            opacity: 0.3,
            duration: 1
        })
        tl.to(leftBlur.current, {
            opacity: 1,
            duration: 1
        }, "<")
    }, [])

    return (
        <div className='w-screen h-full md:h-screen flex flex-row lg:pt-[10%]  pt-[25%] relative md:mb-[125px]'>
            <div className='flex-[0_0_72%] md:pl-[17%] pl-[5%] z-10'>
                <Head />
                <div className='flex flex-col  md:flex-row md:gap-14 gap-[35px] md:pt-18 pt-[35px]'>
                    <Card ref={el => subRef.current[0] = el} img={`/Six/left.png`} text={innerWidth > 640 ? `Multi-bit non-volatile<br/> resistive <br/>synapse using<br/> SOT MTJ cells` : `Multi-bit<br/> non-volatile<br/> resistive<br/>synapse using<br/> SOT MTJ cells`} />

                    <Card ref={el => subRef.current[1] = el} img={`/Six/right.png`} text={innerWidth > 640 ? `Proprietary algorithms<br/> that adapt neural networks<br/> to analog hardware physics` : `Proprietary algorithms<br/> that adapt neural<br/> networks to analog<br/> hardware physics`} />
                </div>
            </div>
            <div className='relative w-[670px] h-[710px] -ml-[11%] -mt-[4%] hidden md:block'>

                <img src={`/Six/bl.png`} className='absolute top-[40%] left-[25%]  w-[923px] h-[923px] -translate-y-1/2 -translate-x-1/2' />
                <div className='w-[582px] h-[710px] relative ml-0 mt-0 lg:-ml-[10%]  lg:mt-[6%]'>
                    <Group ref={groupRef} />
                    <AnimatedCircle lottieRef={ballRef} width={`180`} height={`180`} customStyle={`select-none pointer-events-none top-[342px] left-[230px] -translate-y-1/2 -translate-x-1/2  z-50`} />
                </div>

                <div ref={lightRef} className='absolute z-0 top-1/2 left-[25%] -translate-x-1/2 -translate-y-1/2 w-[425px] h-[425px] rounded-full bg-[#00DA90] blur-[200px] opacity-30' />
            </div>


            <div className='relative -ml-[55%] -mt-12'>

                <div className='w-[582px] h-[710px] relative ml-0 mt-0   block md:hidden'>
                    <img src='/Six/btm.png' className='absolute -translate-y-1/2 -translate-x-1/2 top-[350px]  left-[245px] w-[393px] h-[546px]' />


                    <AnimatedCircle width={`150`} height={`150`} customStyle={`select-none pointer-events-none top-[332px] left-[240px] -translate-y-1/2 -translate-x-1/2  z-50`} />
                    <img src='/Six/topLayer.png' className='absolute -translate-y-1/2 -translate-x-1/2 top-[350px] w-[240px] left-[245px] z-40' />
                    <div
                        className='w-[240px] h-[210px] rounded-[55px] bg-white/5 rounded-br-lg rounded-tl-2xl opacity-30 backdrop-blur-2xl absolute -translate-y-1/2 -translate-x-1/2 top-[350px] left-[240px]
   -skew-x-[24.5deg]  skew-y-[6deg] z-10'
                    />
                    <img src='/Six/mainBlur.png' className='absolute -ml-[10%]' />
                </div>
            </div>
            <img ref={leftBlur} src='/Six/LeftBigBlur.png' className='absolute w-[1004px] h-[1004px] -top-[25%] -left-[10%] z-1' />

        </div>
    )
}

export default SectionSix
