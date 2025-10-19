
export const runDesktopAnimation = async (refs, getVisible) => {
    const { gsap } = await import("gsap");
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");

    gsap.registerPlugin(ScrollTrigger);
    gsap.config({ force3D: false });

    requestIdleCallback(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            const ctx = gsap.context(() => {
                const tl = gsap.timeline();
                const { overlayRef, firstElems, navbarRef, toumanRef, ballRef, lastLeft, lastRight, superLast, mainRef } = refs;

                const animateElements = (elements, fromVars, toVars, stagger = 0) => {
                    const elemsArray = gsap.utils.toArray(elements);
                    if (elemsArray.length) {
                        tl.fromTo(
                            elemsArray,
                            { willChange: "transform, opacity", ...fromVars },
                            { ...toVars, stagger }
                        );
                    }
                };

                if (overlayRef.current) {
                    tl.to(overlayRef.current, {
                        opacity: 0,
                        duration: 0.8,
                        ease: "power2.inOut",
                        delay: 0.2,
                        willChange: "opacity",
                    });
                }

                animateElements(firstElems.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, 0.08);
                animateElements(navbarRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" });
                animateElements(toumanRef.current, { opacity: 0, yPercent: -100 }, { opacity: 1, yPercent: 0, duration: 0.6, ease: "power2.out" });
                animateElements(ballRef.current, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" });

                if (ballRef.current && mainRef.current) {
                    gsap.fromTo(
                        ballRef.current,
                        { scale: 1 },
                        {
                            scale: 0.7,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: ballRef.current,
                                start: "50% 20%",
                                endTrigger: mainRef.current,
                                end: "bottom 17%",
                                scrub: 1,
                                pin: true,
                                immediateRender: false,
                            },
                        }
                    );
                }

                return tl;
            });

            return () => ctx.revert();
        });

        return mm;
    });
};
