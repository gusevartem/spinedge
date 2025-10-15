import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const runLeftAnimation = (refs) => {
    const { circleRef, lightRef, containerRef, firstLeft, leftCard } = refs;
    const ctx = gsap.context(() => {
        const mm = gsap.matchMedia();

        // --- Свет при прокрутке круга ---
        const lightTween = gsap.to(lightRef.current, {
            opacity: 0,
            duration: 0.5,
            paused: true,
        });

        ScrollTrigger.create({
            trigger: circleRef.current,
            start: 'center center',
            end: 'center center',
            onLeave: () => lightTween.play(),
            onEnterBack: () => lightTween.reverse(),
        });

        // --- Движение круга ---
        const container = containerRef.current;
        const circle = circleRef.current;
        const circleY = container.offsetHeight - 180;


        gsap.to(circle,
            {
                force3D: true,
                scrollTrigger: {
                    trigger: circle,
                    endTrigger: containerRef.current,
                    start: 'bottom center',
                    end: 'bottom center',
                    scrub: 1,
                    pin: true,
                    pinSpacing: false,
                    anticipatePin: 1,
                    immediateRender: false

                },
            }
        );
        // --- Анимации карточек ---
        mm.add('(min-width: 768px)', () => {
            const cards = leftCard.current;
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: cards[0]?.parentNode,
                    start: 'top center',
                },
                defaults: { ease: 'power2.out', duration: 1 },
            });

            cards.forEach((card, index) => {
                tl.fromTo(
                    card,
                    { x: -100, opacity: 0 },
                    { x: 0, opacity: 1, delay: index * 0.1 },
                    0 // запускаем все параллельно, но с внутренним delay
                );
            });
        });
    });

    return ctx;
};






















