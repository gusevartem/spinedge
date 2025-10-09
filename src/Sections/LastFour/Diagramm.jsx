import React, { useRef } from 'react'
import YearCard from './YearCard'
import MainCards from './MainCards'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const Diagramm = () => {
    const years = ["1", '2', '3', '4', '5', '6']
    const fromTopRef = useRef(null);
    const yearsRef = useRef([]);
    const btmRef = useRef([]);
    const rightRef = useRef([]);
    const leftRef = useRef([]);


    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.diagramm-wrapper', // добавим класс на обёртку
                start: 'top 80%',
                once: true
            }
        })

        tl.from(leftRef.current, {
            x: -100,
            opacity: 0,
            stagger: 0.15,
            duration: 0.5,
            ease: 'power3.out',
        })

        tl.from(rightRef.current, {
            x: 100,
            opacity: 0,
            stagger: 0.15,
            duration: 0.5,
            ease: 'power3.out',
        }, '-=0.3')

        tl.from(yearsRef.current, {
            y: 30,
            opacity: 0,
            rotate: 3,
            stagger: 0.1,
            duration: 0.5,
            ease: 'back.out(1.4)',
        }, '+=0.1')

        tl.from(btmRef.current, {
            opacity: 0,
            clipPath: 'inset(0% 50% 0% 50%)',
            duration: 0.5,
            ease: 'power2.out',
            stagger: 0.15,
        }, '+=0.1')

        tl.from(fromTopRef.current, {
            y: -40,
            scale: 0.95,
            opacity: 0,
            duration: 0.5,
            ease: 'power2.out',
        }, '+=0.1')
    })




    return (
        <div className='2xl:min-w-[1360px] lg:min-w-[1260px] lg:max-w-[1360px] lg:min-h-[452px] w-full flex flex-col lg:gap-[20px] gap-[12px] diagramm-wrapper lg:px-[50px]'>
            <div className='flex lg:gap-[20px] gap-[12px]'>
                <div className='flex flex-col w-full h-full'>
                    <div className='flex flex-col ' >
                        <div ref={el => rightRef.current[0] = el} className='flex justify-center items-center lg:h-[60px] h-[40px] border-t-0 border-2 border-[#455658] '>
                            <p className='lg:text-[19px] text-[12px] bg-[radial-gradient(circle,_#00DA90_0%,_#496758_100%)] bg-clip-text text-transparent font-bold'>
                                Seed Round: $7M
                            </p>
                        </div>
                        <div className='flex justify-center items-center lg:h-[60px] h-[40px] border-2 border-[#455658]  border-t-0  border-b-0'>

                        </div>
                        <div className='flex flex-col items-center lg:gap-[20px] gap-[12px]'>
                            <MainCards ref={el => rightRef.current[1] = el} text={`Digital Twin Release`} customStyles={`lg:-mt-[30px] -mt-[15px]`} />
                            <div className='flex lg:gap-[20px] gap-[12px]'>
                                <MainCards ref={el => rightRef.current[2] = el} text={`Modeling Proof, Core design`} />
                                <MainCards ref={el => rightRef.current[3] = el} text={`Silicon Proof – Test Chip 4Kb`} />
                            </div>
                        </div>
                    </div>

                    <div className='h-full'>
                    </div>

                    <div className=''>
                    </div>

                </div>
                <div ref={fromTopRef} className='flex  justify-center items-center w-[50px]'>
                    <div className='flex  transform origin-center  text-white  -rotate-90 w-fit'>
                        <div className='w-[320px] h-[50px] bg-[#0ACF83]/5 border border-[#4C7F6A] border-dashed flex justify-center items-center' >
                            <p className='mono mono text-[10px] lg:text-[15px] gradient-text-green '>
                                Round A / Strategic Partnership
                            </p>
                        </div>

                    </div>
                </div>
                <div className='w-full flex flex-col  gap-[55px]'>
                    <div ref={el => leftRef.current[0] = el} className='w-full flex flex-col lg:gap-[20px] gap-[12px]'>
                        <div className='w-full flex items-center justify-between pr-[10px]'>
                            <div className={`w-[230px] h-[50px] bg-[#0ACF83]/5 rounded-lg flex justify-center items-center `}>
                                <p className='mono mono text-[10px] lg:text-[15px] gradient-text-green '>
                                    Technology Licensing
                                </p>

                            </div>
                            <p className='font-bold lg:text-[19px] text-[12px] bg-[radial-gradient(circle,_#00DA90_0%,_#496758_100%)] bg-clip-text text-transparent'>Support</p>
                            <p className='font-bold lg:text-[19px] text-[12px] bg-[radial-gradient(circle,_#00DA90_0%,_#496758_100%)] bg-clip-text text-transparent'>Royalties</p>
                        </div>
                        <img src='/arrow.svg' />
                    </div>
                    <div ref={el => leftRef.current[1] = el} className='w-full flex flex-col lg:gap-[20px] gap-[12px]'>
                        <div className='w-full flex items-center gap-[45px] pr-[10px]'>
                            <div className={`w-[230px] h-[50px] bg-[#0ACF83]/5 rounded-lg flex justify-center items-center `}>
                                <p className='mono  text-[10px] lg:text-[15px] gradient-text-green '>
                                    Products
                                </p>

                            </div>

                            <p className='font-bold lg:text-[19px] text-[12px] bg-[radial-gradient(circle,_#00DA90_0%,_#496758_100%)] bg-clip-text text-transparent'>Sales</p>
                        </div>
                        <img src='/arrow.svg' />
                    </div>
                    <div ref={el => leftRef.current[2] = el} className='w-full flex justify-between' >
                        <div className={`2xl:w-[230px] w-[200px] h-[50px] bg-[#0ACF83]/5 rounded-lg flex justify-center items-center `}>
                            <p className='mono  text-[10px] lg:text-[15px] gradient-text-green '>
                                Inference Accelerator
                            </p>

                        </div>
                        <div className={`2xl:w-[230px] w-[200px] h-[50px] bg-[#0ACF83]/5 rounded-lg flex justify-center items-center `}>
                            <p className='mono  text-[10px] lg:text-[15px] gradient-text-green '>
                                Training Accelerator
                            </p>

                        </div>
                    </div>
                </div>

            </div>
            <div className='flex justify-between w-full min-w-[820px]'>
                {years.map((text, index) => (
                    <YearCard ref={el => yearsRef.current[index] = el} key={index} text={`YEAR ${text}`} />
                ))}
            </div>
            <div className='flex justify-between w-full min-w-[820px] lg:gap-[20px] gap-[12px]'>
                <div ref={el => btmRef.current[0] = el} className='h-[53px] flex justify-center items-center w-full border-t border-t-[#15D795]'>
                    <p className='text-center lg:text-[15px] text-[12px] font-bold bg-[radial-gradient(circle,_#00DA90_0%,_#496758_100%)] bg-clip-text text-transparent'>Funds raised</p>
                </div>
                <div ref={el => btmRef.current[1] = el} className='h-[53px] flex justify-center items-center w-full border-t border-t-[#3B4A42]'>
                    <p className='text-center lg:text-[15px] text-[12px] font-bold bg-[radial-gradient(circle,_#00DA90_0%,_#496758_100%)] bg-clip-text text-transparent'>High Volume Manufacturing Fab</p>
                </div>
            </div>
        </div>
    )
}

export default Diagramm



