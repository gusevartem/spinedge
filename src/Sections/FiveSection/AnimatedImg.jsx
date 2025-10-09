import React, { useRef, useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '/public/Ball/Spin4_0002_570_70';

const AnimatedImg = ({ customStyle }) => {
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
            ref={containerRef}
            className={`  ${customStyle || ""}`}
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