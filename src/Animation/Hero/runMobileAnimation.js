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
                force3D: true,
                scrollTrigger: {
                    trigger: ballRef.current,
                    start: "50% 20%",
                    endTrigger: mainRef.current,
                    end: "bottom 17%",
                    scrub: 1,
                    pin: true,
                    pinSpacing: false,
                    anticipatePin: 1,
                    immediateRender: false,

                },
            }
        );

    });

    return ctx;
};