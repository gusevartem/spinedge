import gsap from "gsap";
import { useCallback } from "react";

export const runMobileAnimation = (refs) => {

    const { overlayRef, ballRef, mainRef } = refs;

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
                start: "50% 20%",
                endTrigger: mainRef.current,
                end: "bottom+=200 top",
                scrub: 1,
                pin: true,
                immediateRender: false,


            },

        }
    );

};