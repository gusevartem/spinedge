import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '/public/Ball/compBall.json';


const AnimatedCircle = ({ lottieRef, customStyle, width, height, id }) => {
    const animContainerRef = useRef(null);

    useEffect(() => {
        if (!animContainerRef.current) return;

        // Глобально понизим качество в пользу производительности
        try { lottie.setQuality('medium'); } catch {}

        const anim = lottie.loadAnimation({
            container: animContainerRef.current,
            renderer: 'canvas',
            loop: true,
            autoplay: true,
            animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid meet',
                clearCanvas: true,
                progressiveLoad: true,
                hideOnTransparent: true,
            },
        });

        // Меньше вычислений на кадр
        try { anim.setSubframe(false); } catch {}

        return () => {
            try { anim.destroy(); } catch {}
        };
    }, []);

    return (
        <div
            id={id}
            ref={lottieRef}
            className={`absolute pt-[2%] select-none pointer-events-none ${customStyle || ""}`}
            style={{
                width: `${width}px`,
                height: `${height}px`,
                transform: 'translateZ(0)',
                willChange: 'transform',
                backfaceVisibility: 'hidden',
                WebkitFontSmoothing: 'antialiased',
            }}
        >
            <div ref={animContainerRef} style={{ width: '100%', height: '100%' }} />
        </div>
    );
};

export default AnimatedCircle;