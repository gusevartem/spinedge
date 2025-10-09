import React from 'react'
import s from './styles.module.scss'

const FirstFone = ({ children, id, ref }) => {
    return (
        <section ref={ref} id={id} className='bg-black w-screen p-[0_0_50px_0] relative FirstFoneBlock overflow-hidden overflow-x-hidden'>
            <img className='absolute lg:w-full w-[4432.25px]  h-screen select-none pointer-events-none -translate-x-1/2 left-1/2  z-20' src='/Hero/morp.webp' />
            <img className='hidden lg:block absolute w-full select-none pointer-events-none z-0' src='/Hero/blur.webp' />
            <img className='hidden lg:block absolute -translate-x-1/2 left-1/2 select-none pointer-events-none z-0' src='/Hero/dots.webp' />
            <img className='block lg:hidden absolute w-full select-none pointer-events-none -translate-x-1/2 left-1/2 min-w-[860px] min-h-[276px] top-[30%] z-0' src='/Hero/blur.webp' />
            <div className="absolute w-[800px] FirstFoneBgSome h-[500px] top-[140px] left-1/2 -translate-x-1/2  blur-[80px] rounded-full bg-[#16CDDE] opacity-5 pointer-events-none z-0" />
            <div className={s.HeroBottomShadow} > </div>
            <img

                className="block lg:hidden sm:left-[8%] absolute top-16 left-0 h-auto max-h-[400px] select-none pointer-events-none z-0 lastLast"
                src="/Hero/Code.webp"
                alt="code"
                style={{
                    WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskSize: '100% 100%',
                    maskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)',
                    maskRepeat: 'no-repeat',
                    maskSize: '100% 100%',
                }}
            />
            {children}
        </section>
    )
}

export default FirstFone
