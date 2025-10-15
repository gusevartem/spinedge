import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const runLeftAnimation = (refs) => {
    const { circleRef, lightRef, containerRef, firstLeft, leftCard } = refs;
    const ctx = gsap.context(() => {
        const mm = gsap.matchMedia();
        ScrollTrigger.create({
            trigger: circleRef.current,
            start: 'center center',
            end: 'center center',
            onLeave: () => {
                gsap.to(lightRef.current, {
                    opacity: 0,
                    duration: 0.5,
                    ease: 'power2.out',
                });
            },
            onEnterBack: () => {
                gsap.to(lightRef.current, {
                    opacity: 1,
                    duration: 0.5,
                    ease: 'power2.out',
                });
            },
        });


        gsap.to(circleRef.current, {
            y: () => {
                const height = containerRef.current.offsetHeight;
                return height - 180;
            },
            ease: 'none',
            scrollTrigger: {
                trigger: containerRef.current,
                start: '20% center',
                end: '85% center',
                scrub: 1.5,
            },
        });


        gsap.fromTo(firstLeft.current, {
            x: -350,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 1.5,
            ease: 'power2.inOut',
        });
        mm.add("(min-width: 768px)", () => {
            leftCard.current.forEach((card, index) => {
                gsap.fromTo(card, {
                    x: -100,
                    opacity: 0
                }, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top center",
                    },
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power2.out',
                    delay: index * 0.1
                });
            });
        })


    });

    return ctx;
};






















