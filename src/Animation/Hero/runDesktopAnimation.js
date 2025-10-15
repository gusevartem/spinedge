import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DURATION = 0.6;
const EASE = "power2.out";

export const runDesktopAnimation = (refs, getVisible) => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            const { overlayRef, firstElems, navbarRef, toumanRef, ballRef, lastLeft, lastRight, superLast, mainRef } = refs;

            // Функция для анимации массива элементов
            const animateElements = (elements, fromVars, toVars, stagger = 0) => {
                const elemsArray = gsap.utils.toArray(elements);
                if (elemsArray.length) {
                    tl.fromTo(
                        elemsArray,
                        { force3D: true, willChange: "transform, opacity", ...fromVars },
                        { ...toVars, stagger }
                    );
                }
            };

            // Анимации
            if (overlayRef.current) {
                tl.to(overlayRef.current, {
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.inOut",
                    delay: 0.2,
                    force3D: true,
                    willChange: "opacity",
                });
            }

            animateElements(firstElems.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: DURATION, ease: EASE }, 0.08);
            animateElements(navbarRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: DURATION, ease: EASE });
            animateElements(toumanRef.current, { opacity: 0, yPercent: -100, transform: "translateX(-50%)" }, { opacity: 1, yPercent: 0, transform: "translateX(-50%)", duration: DURATION, ease: EASE });
            animateElements(ballRef.current, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: DURATION, ease: EASE });

            animateElements(getVisible(lastLeft.current), { opacity: 0, xPercent: -40 }, { opacity: 1, xPercent: 0, duration: DURATION, ease: EASE }, 0.12);
            animateElements(getVisible(lastRight.current), { opacity: 0, xPercent: 40 }, { opacity: 1, xPercent: 0, duration: DURATION, ease: EASE }, 0.12);
            animateElements(getVisible(superLast.current), { opacity: 0, yPercent: 10 }, { opacity: 1, yPercent: 0, duration: DURATION, ease: EASE });

            // Анимация шара с ScrollTrigger
            if (ballRef.current && mainRef.current) {
                gsap.fromTo(
                    ballRef.current,
                    { scale: 1, force3D: true, willChange: "transform, opacity" },
                    {
                        scale: 0.7,
                        ease: EASE,
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
            }

            return tl;
        });

        return () => ctx.revert(); // автоматическая очистка всех анимаций и ScrollTrigger
    });

    return mm; // можно вызвать mm.revert() для полной очистки
};
