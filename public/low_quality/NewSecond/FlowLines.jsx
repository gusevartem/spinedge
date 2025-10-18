import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FlowLines = ({ id = "default" }) => {
    const maskRef = useRef(null);
    const svgRef = useRef(null);

    useEffect(() => {
        if (!maskRef.current) return;

        gsap.fromTo(
            maskRef.current,
            { height: 0 },
            {
                height: 263, // высота svg
                duration: 3,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: svgRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        );
    }, []);

    return (
        <svg
            ref={svgRef}
            width={1009}
            height={263}
            viewBox="0 0 1009 263"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden lg:block"
        >
            <defs>
                <radialGradient
                    id={`paint0_radial_${id}`}
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(504.5 131.5) rotate(89.6441) scale(161.003 60.2526)"
                >
                    <stop stopColor="#00E599" />
                    <stop offset={1} stopColor="#00E599" stopOpacity={0.25} />
                </radialGradient>

                <mask id={`mask_${id}`} x="0" y="0" width="1009" height="263" maskUnits="userSpaceOnUse">
                    <rect
                        ref={maskRef}
                        x="0"
                        y="0"
                        width="1009"
                        height="0"
                        fill="white"
                    />
                </mask>
            </defs>

            <path
                d="M2.5 263C2.5 227.098 32.6282 203.773 78.7373 186.25C124.77 168.756 186.171 157.262 247.722 144.721C309.206 132.193 370.831 118.621 417.086 96.9512C454.992 79.1928 482.788 55.8878 491.588 23.0938C488.757 55.1608 479.945 78.0014 467.886 95.4775C453.099 116.907 433.371 130.368 413.498 142.895C393.672 155.391 373.627 166.992 358.592 184.667C343.507 202.401 333.5 226.188 333.5 263H335.5C335.5 226.601 345.376 203.29 360.115 185.963C374.904 168.577 394.625 157.155 414.564 144.587C434.456 132.049 454.494 118.405 469.531 96.6133C481.86 78.7465 490.783 55.4674 493.608 22.9424C496.717 55.487 506.536 78.7791 520.099 96.6504C536.633 118.437 558.662 132.074 580.533 144.608C602.46 157.175 624.163 168.604 640.436 185.998C656.649 203.328 667.5 226.627 667.5 263H669.5C669.5 226.162 658.483 202.363 641.896 184.632C625.367 166.965 603.336 155.371 581.528 142.873C559.666 130.343 537.959 116.876 521.692 95.4414C508.436 77.973 498.749 55.1499 495.634 23.1113C504.83 55.9127 533.868 79.2096 573.44 96.958C621.747 118.624 686.107 132.194 750.33 144.722C814.619 157.262 878.763 168.758 926.853 186.255C950.894 195.002 970.832 205.219 984.747 217.748C998.634 230.253 1006.5 245.036 1006.5 263H1008.5C1008.5 244.359 1000.3 229.065 986.085 216.262C971.893 203.483 951.678 193.159 927.536 184.376C879.259 166.812 814.914 155.282 750.714 142.759C686.448 130.223 622.319 116.688 574.259 95.1328C526.975 73.9256 495.59 45.1216 494.57 2.16699C494.565 1.44867 494.562 0.726349 494.562 0H492.544L492.538 1.0332C492.069 44.6387 461.881 73.7568 416.238 95.1396C370.235 116.691 308.849 130.224 247.322 142.761C185.862 155.284 124.252 166.814 78.0264 184.381C31.8774 201.919 0.5 225.691 0.5 263H2.5Z"
                fill={`url(#paint0_radial_${id})`}
                mask={`url(#mask_${id})`}
            />
        </svg>
    );
};

export default FlowLines;
