import React, { useRef } from 'react'
import FourCard from './FourCard'
import ThreeMiniSect from './ThreeMiniSect'
import Head from '../Sections/FourSection/Head'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import AnimatedImg from '../Sections/FourSection/AnimatedImg'
import AnimatedCircle from './AnimatedCircle'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FourImage from './FourImage'
import { runLeftAnimation } from '../Animation/FourSection/runLeftAnimation'

const FourLeft = () => {
    const circleRef = useRef(null);
    const firstLeft = useRef(null);
    const leftCard = useRef([])
    const containerRef = useRef(null);
    const lightRef = useRef(null);
    useGSAP(() => {
        const refs = {
            circleRef,
            lightRef,
            containerRef,
            firstLeft,
            leftCard
        };
        runLeftAnimation(refs);

    }, [])
    return (
        <div ref={containerRef} className='flex w-full FourBottomGroup mt-[85px] gap-6 2xl:mb-[30%] xl:mb-[35%] lg:mb-[35%] md:mb-[20%]' >
            {
                window.innerWidth < 767 && (
                    <>
                        <div className='relative h-full block'>
                            <AnimatedImg customStyle={`!w-[250px] !h-[250px] !top-20 !left-[75%]`} />


                            <FourCard

                                customPosition="absolute -top-14 -right-[12%] "
                                text={`Analog data<br/> (voltages)`}
                            />
                            <FourCard

                                customPosition="absolute -right-[77%] -top-28 "
                                text={`Analog inference<br /> through the Ohm’s<br /> law I = V G`}
                            />
                            <FourCard

                                customPosition="absolute   top-3 -right-[75%] "
                                text={`Analog output<br/> (currents) `}
                            />
                            <FourCard

                                customPosition="absolute   left-[28%] -bottom-[20%] "
                                text={`Integration with<br/> CMOS circuitry`}
                            />
                            <FourCard
                                customPosition={'!absolute block SpintronicMob md:hidden'} text={`Spintronic<br/> Synapse`} />
                            <div className='relative MobLight top-[-150px] left-[10px] '>
                                <img ref={lightRef} className='absolute MobLightLine left-[80px] w-[150px] -top-[28px]' src='/Four/light.webp' />
                                <AnimatedCircle lottieRef={circleRef} customStyle={`sticky MobLightCircle left-[45px]`} width={`100`} height={`100`} />
                            </div>
                        </div>
                    </>
                )
            }

            <div className='flex flex-col gap-[60px] md:gap-[90px] md:items-start items-end FourListWrap'>

                <ThreeMiniSect ref={el => leftCard.current[0] = el} num={`01`} Title={`No neural weight movement `} sub={`Enables faster AI inference with dramatically lower energy consumption`} />
                <ThreeMiniSect ref={el => leftCard.current[1] = el} num={`02`} Title={`Non-volatile spintronic memory `} sub={`Retains model weights without power, enabling instant-on performance and minimizing standby energy.`} />
                <ThreeMiniSect ref={el => leftCard.current[2] = el} num={`03`} Title={`Smart quantisation `} sub={`Delivers reliable analog compute precision comparable to conventional digital hardware.`} />
                <ThreeMiniSect ref={el => leftCard.current[3] = el} num={`04`} Title={`Architecture-agnostic`} sub={`Supports standard neural networks without requiring changes to model structure or training pipelines.`} />
            </div>
            {window.innerWidth > 767 && <FourImage />}
        </div>
    )
}

export default FourLeft
