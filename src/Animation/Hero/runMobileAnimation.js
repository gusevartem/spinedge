import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const runMobileAnimation = (refs) => {
    const { overlayRef, ballRef, mainRef } = refs;

    if (!overlayRef.current || !ballRef.current || !mainRef.current) return;
    gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
        delay: 0.2,
        force3D: true,
        overwrite: "auto",
        onComplete: () => {
            overlayRef.current.style.display = "none";
        },
    });

    gsap.fromTo(
        ballRef.current,
        { scale: 1, transformOrigin: "50% 50%" },
        {
            scale: 0.7,
            ease: "power2.out",
            force3D: true,
            overwrite: "auto",
            scrollTrigger: {
                trigger: ballRef.current,
                start: "50% 20%",
                endTrigger: mainRef.current,
                end: "bottom+=200 top",
                scrub: 1,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                immediateRender: false,
            },
        }
    );

    ballRef.current.style.willChange = "transform, opacity";
    overlayRef.current.style.willChange = "opacity";
};
