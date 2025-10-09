import React, { useRef, useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '/public/Ball/Spin3_500px_15fps_70comp';

const AnimatedImg = ({ customStyle, id }) => {
    const containerRef = useRef(null);
    const lottieRef = useRef(); // ссылка на саму Lottie-анимацию
    const [hasPlayed, setHasPlayed] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasPlayed) {
                    lottieRef.current?.play();
                    setHasPlayed(true); // блокируем повторный запуск
                    observer.disconnect(); // отключаем наблюдение
                }
            },
            { threshold: 0.5 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [hasPlayed]);

    return (
        <div
            id={id}
            ref={containerRef}
            className={`h-[350px] w-[350px] FourAnimka lg:h-[500px] lg:w-[500px] absolute lg:left-[63%] top-[25%] left-[70%] lg:top-[39%] 2xl:left-[70%] 2xl:top-[35%]  -translate-y-1/2 -translate-x-1/2
                object-contain z-0 ${customStyle || ""}`}
        >
            <Lottie
                lottieRef={lottieRef}
                animationData={animationData}
                loop={false}
                autoplay={false}
            />
        </div>
    );
};

export default AnimatedImg;
