import React from 'react';
import s from './styles.module.scss';

const FirstFone = React.forwardRef(({ children, id }, ref) => {
    return (
        <section
            ref={ref}
            id={id}
            className="bg-black w-screen p-[0_0_50px_0] relative FirstFoneBlock overflow-hidden overflow-x-hidden"
        >
            {/* Background images */}
            <img
                src="/Hero/morp.webp"
                loading="lazy"
                decoding="async"
                className="absolute lg:w-full w-[4432.25px] h-screen select-none pointer-events-none -translate-x-1/2 left-1/2 z-20 transform-gpu"
                alt=""
            />
            <img
                src="/Hero/blur.webp"
                loading="lazy"
                decoding="async"
                className="hidden lg:block absolute w-full select-none pointer-events-none z-0 transform-gpu"
                alt=""
            />
            <img
                src="/Hero/dots.webp"
                loading="lazy"
                decoding="async"
                className="hidden lg:block absolute -translate-x-1/2 left-1/2 select-none pointer-events-none z-0 transform-gpu"
                alt=""
            />
            <img
                src="/Hero/blur.webp"
                loading="lazy"
                decoding="async"
                className="block lg:hidden absolute w-full select-none pointer-events-none -translate-x-1/2 left-1/2 min-w-[860px] min-h-[276px] top-[30%] z-0 transform-gpu"
                alt=""
            />

            <div className="absolute w-[800px] h-[500px] top-[140px] left-1/2 -translate-x-1/2 blur-[80px] rounded-full bg-[#16CDDE] opacity-5 pointer-events-none z-0 transform-gpu FirstFoneBgSome" />

            <div className={s.HeroBottomShadow} />

            <img
                src="/Hero/Code.webp"
                loading="lazy"
                decoding="async"
                alt="code"
                className="block lg:hidden sm:left-[8%] absolute top-16 left-0 h-auto max-h-[400px] select-none pointer-events-none z-0 lastLast"
                style={{
                    WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskSize: '100% 100%',
                    maskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)',
                    maskRepeat: 'no-repeat',
                    maskSize: '100% 100%',
                    transform: 'translateZ(0)', // GPU слой
                    willChange: 'transform, opacity',
                }}
            />

            {children}
        </section>
    );
});

export default FirstFone;
