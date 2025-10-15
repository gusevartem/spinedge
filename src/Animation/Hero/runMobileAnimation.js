import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback } from "react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export const runMobileAnimation = (refs) => {
    const { overlayRef, ballRef, mainRef } = refs;


    const ctx = gsap.context(() => {

        gsap.to(overlayRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: 'power2.inOut',
            delay: 0.2,
        });

        gsap.fromTo(ballRef.current,
            { scale: 1 },
            {
                scale: 0.7,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ballRef.current,
                    start: "30% 20%",
                    endTrigger: mainRef.current,
                    end: "bottom 17%",
                    scrub: 1,
                    pin: false, // Уберите пин отсюда
                    anticipatePin: 0,
                    immediateRender: false
                }
            }
        );

        // Отдельный пин для родительского контейнера
        gsap.to(ballRef.current.parentElement, {
            scrollTrigger: {
                trigger: ballRef.current,
                start: "30% 20%",
                endTrigger: mainRef.current,
                end: "bottom 17%",
                pin: true,
                pinSpacing: false
            }
        });

    });

    return ctx;
};