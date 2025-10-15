import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const useOptimizedAnimation = (options = {}) => {
    const {
        animationType = 'fadeInUp',
        delay = 0,
        duration = 0.8,
        ease = 'power2.out',
        trigger = 'top 80%',
        once = true,
        enabled = true,
        stagger = 0
    } = options;

    const elementRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        if (!enabled || !elementRef.current) return;

        const element = elementRef.current;

        // Устанавливаем начальное состояние
        const initialProps = {
            opacity: 0,
            y: animationType === 'fadeInUp' ? 50 : animationType === 'fadeInDown' ? -50 : 0,
            x: animationType === 'fadeInLeft' ? -50 : animationType === 'fadeInRight' ? 50 : 0,
            scale: animationType === 'scaleIn' ? 0.9 : animationType === 'scaleOut' ? 1.1 : 1,
            rotation: animationType === 'rotateIn' ? -180 : animationType === 'rotateOut' ? 180 : 0,
        };

        gsap.set(element, initialProps);

        // Создаем анимацию
        animationRef.current = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: trigger,
                end: 'bottom 20%',
                toggleActions: once ? 'play none none none' : 'play none none reverse',
                once
            },
        });

        // Если есть stagger, анимируем дочерние элементы
        if (stagger > 0) {
            const children = element.children;
            if (children.length > 0) {
                animationRef.current.to(children, {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    scale: 1,
                    rotation: 0,
                    duration,
                    ease,
                    delay,
                    stagger: stagger
                });
            }
        } else {
            animationRef.current.to(element, {
                opacity: 1,
                y: 0,
                x: 0,
                scale: 1,
                rotation: 0,
                duration,
                ease,
                delay,
            });
        }

        return () => {
            if (animationRef.current) {
                animationRef.current.kill();
                animationRef.current = null;
            }
        };
    }, [animationType, delay, duration, ease, trigger, once, enabled, stagger]);

    return { elementRef };
};
