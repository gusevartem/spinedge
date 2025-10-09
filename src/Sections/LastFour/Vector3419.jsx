import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Vector3419.css';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export const Vector3419 = ({ customStyle }) => {
    const pathRef = useRef(null);

    useEffect(() => {
        if (pathRef.current) {
            const length = pathRef.current.getTotalLength();

            gsap.set(pathRef.current, {
                strokeDasharray: length,
                strokeDashoffset: length,
            });

            gsap.to(pathRef.current, {
                strokeDashoffset: 0,
                duration: 2,
                delay: 1,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: pathRef.current,
                    start: 'top 60%', // когда path попадает в 80% окна
                    toggleActions: 'play none none none',

                },
            });
        }
    }, []);

    return (
        <svg
            className={`${customStyle || ''} 2xl:w-[860px] xl:w-[860px] lg:w-[680px] vector-3419`}
            width="754"
            height="90"
            viewBox="0 0 754 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                ref={pathRef}
                d="M371 88.5V60.4264C371 52.4699 367.839 44.8393 362.213 39.2132L331.787 8.7868C326.161 3.16071 318.53 0 310.574 0H302.5M754 89.5V61.4264C754 53.4699 750.839 45.8393 745.213 40.2132L713.787 8.7868C708.161 3.16071 700.53 0 692.574 0L367 0H302.5M302.5 0H0"
                stroke="url(#paint0_radial_211_1223)"
                strokeWidth="3"
            />
            <defs>
                <radialGradient
                    id="paint0_radial_211_1223"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(529 0.000467427) rotate(143.043) scale(528.1 4460.83)"
                >
                    <stop stopColor="#00DA90" stopOpacity="0.1" />
                    <stop offset="1" stopColor="#00DA90" stopOpacity="0.25" />
                </radialGradient>
            </defs>
        </svg>
    );
};
