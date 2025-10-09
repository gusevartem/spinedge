import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const runMobileAnimation = (refs) => {
    const { overlayRef, ballRef, mainRef } = refs;

    if (!overlayRef?.current || !ballRef?.current || !mainRef?.current) return;

    // === Overlay: плавное исчезновение ===
    overlayRef.current.style.opacity = 0;
    overlayRef.current.style.display = "block";
    overlayRef.current.style.willChange = "opacity";

    gsap.to(overlayRef.current, {
        autoAlpha: 0, // opacity + visibility
        duration: 0.8,
        ease: "power2.inOut",
        delay: 0.2,
        force3D: true,
        overwrite: "auto",
        onComplete: () => {
            overlayRef.current.style.display = "none";
        },
    });

    // === Обёртка для ballRef для безопасного pin ===
    const ballWrapper = document.createElement("div");
    ballWrapper.style.position = "relative";
    ballRef.current.parentNode.insertBefore(ballWrapper, ballRef.current);
    ballWrapper.appendChild(ballRef.current);
    ballWrapper.style.willChange = "transform";

    ballRef.current.style.willChange = "transform, opacity";

    // === Анимация с ScrollTrigger ===
    gsap.fromTo(
        ballRef.current,
        { scale: 1, transformOrigin: "50% 50%" },
        {
            scale: 0.7,
            ease: "power2.out",
            force3D: true,
            overwrite: "auto",
            scrollTrigger: {
                trigger: ballWrapper,
                start: "50% 20%",
                endTrigger: mainRef.current,
                end: "bottom+=200 top",
                scrub: 1,
                pin: true,
                pinSpacing: false,       // важно для Safari
                anticipatePin: 2,        // повышаем anticipation
                invalidateOnRefresh: true,
                immediateRender: true,   // избегаем проблем с первой отрисовкой
            },
        }
    );

    return ScrollTrigger.getAll();
};
