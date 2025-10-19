export const runMobileAnimation = async (refs) => {
    const { gsap } = await import("gsap");
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);

    requestIdleCallback(() => {
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
                    scrollTrigger: {
                        trigger: ballRef.current,
                        start: "30% 20%",
                        endTrigger: mainRef.current,
                        end: "bottom 17%",
                        scrub: 1,
                        pin: true,
                        pinSpacing: false,
                        anticipatePin: 1,
                    },
                }
            );
        });

        return ctx;
    });
};
