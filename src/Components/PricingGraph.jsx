import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const PricingGraph = ({ fText, sText, customStyle }) => {
    const graphRef = useRef(null);
    const fillRef = useRef(null);
    const containerRef = useRef(null);
    const imageRef = useRef(null);
    const dashedLineRefs = useRef([]);
    const dashedLineRefsVertical = useRef([]);
    const priceBlock1 = useRef(null);
    const priceBlock2 = useRef(null);
    const textRef = useRef([]);

    useGSAP(() => {
        if (!containerRef.current || !graphRef.current || !fillRef.current) return;

        const polyline = graphRef.current;
        const fill = fillRef.current;

        let length = 1000;
        try {
            length = polyline.getTotalLength?.() || 1000;
            gsap.set(polyline, {
                strokeDasharray: length,
                strokeDashoffset: length,
            });
        } catch (error) {
            console.warn("Graph polyline is not rendered or invalid:", error);
            return;
        }

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
            },
        });

        const img = imageRef.current;
        const text = textRef.current;
        const dashedLines = dashedLineRefs.current;
        const dashedLinesVertical = dashedLineRefsVertical.current;

        // ✅ График (линия + заливка + блоки)
        tl.to(polyline, {
            strokeDashoffset: 0,
            duration: 1.5,
            ease: "power2.inOut",
        })
            .fromTo(
                fill,
                { opacity: 0 },
                { opacity: 1, duration: 0.9, ease: "power2.inOut" },
                "-=1"
            )
            .fromTo(
                [priceBlock1.current, priceBlock2.current],
                { opacity: 0, scale: 0.8 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.4,
                    stagger: 0.15,
                    ease: "back.out(1.7)",
                },
                "+=0.2"
            );

        // ✅ Текст — почти одновременно, но чуть позже (например, на 0.2s позже начала графика)
        tl.fromTo(
            text,
            { x: -200, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                stagger: 0.2,
            },
            "-=1.3" // запуск текста через 0.2s после начала графика (график длится 1.5s)
        );

        dashedLines.forEach((line, index) => {
            let length = "470px";
            if (index === 0) length = "622px";

            tl.fromTo(
                line,
                { width: "0" },
                {
                    width: length,
                    duration: 0.6,
                    ease: "power2.out",
                },
                "-=0.6"
            );
        });

        dashedLinesVertical.forEach((line, index) => {
            let height = "346px";
            if (index === 0) height = "46px";

            tl.fromTo(
                line,
                { height: "0" },
                {
                    height,
                    duration: 0.6,
                    ease: "power2.out",
                },
                "-=0.6"
            );
        });

        tl.fromTo(
            img,
            { x: -300, rotate: -360, opacity: 0 },
            {
                x: 0,
                rotate: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power4.out",
            },
            "-=0.8"
        );
    }, []);

    return (
        <div
            ref={containerRef}
            className={`${customStyle || ""} relative bg-gradient-to-r from-[#001F18] via-[#061F1C] to-[#0D2A24]  w-[950px] h-[435px] overflow-hidden rounded-lg`}
        >
            <div ref={el => dashedLineRefs.current[0] = el} className="absolute top-[89.5%] w-[622px] border-t border-dashed border-[#00E599] z-50"></div>
            <div ref={el => dashedLineRefsVertical.current[0] = el} className="absolute left-[617px] h-[46px] top-[89.5%] border-l border-dashed border-[#00E599] z-50"></div>
            <div ref={el => dashedLineRefs.current[1] = el} className="absolute top-[27%] w-[470px] border-t border-dashed border-white/40 z-50"></div>
            <div ref={el => dashedLineRefsVertical.current[1] = el} className="absolute top-[27%] left-[465px] h-[346px] border-l border-dashed border-white/40 z-50"></div>

            <p ref={el => textRef.current[0] = el} className='absolute top-[10%] left-[4.5%] z-50 mono sm:text-sm text-[11px] leading-[150%] bg-[radial-gradient(circle,_#00E599,_#00E599)] text-transparent bg-clip-text' dangerouslySetInnerHTML={{ __html: fText }} />
            <p ref={el => textRef.current[1] = el} className='absolute bottom-[18%] left-[4.5%] z-50 mono sm:text-sm text-[11px] leading-[150%] bg-[radial-gradient(circle,_#00E599,_#00E599)] text-transparent bg-clip-text' dangerouslySetInnerHTML={{ __html: sText }} />

            <div ref={priceBlock1} className=" absolute -translate-y-1/2 -translate-x-1/2 bottom-[3%] left-[65%] flex flex-col items-center w-fit z-[51]">
                <div className="relative inline-block">
                    <div className="bg-white/10 mono text-[#00E599] font-extrabold text-[12px] px-3 py-1 rounded shadow-md z-50">
                        $0.0005
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white/10"></div>
                </div>

                <img width={15} height={15} src="/NewSecond/Ilutsr1/dot.png" className="mt-2" />
            </div>
            <div ref={priceBlock2} className=" absolute -translate-y-1/2 -translate-x-1/2 top-[23.5%] left-[49%] flex flex-col items-center w-fit z-[51]">
                <div className="relative inline-block">
                    <div className="bg-white/5 mono text-[#00E599] font-extrabold text-[12px] px-3 py-1 rounded shadow-md z-50">
                        $0.05
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white/5"></div>
                </div>

                <img width={15} height={15} src="/NewSecond/Ilutsr1/dot.png" className="mt-2" />
            </div>

            {/* Горизонтальные линии */}
            <div className="absolute top-1/3 w-full border-t border-white/10 z-50"></div>
            <div className="absolute top-3/5 w-full border-t border-white/10 z-50"></div>

            {/* Анимируемое изображение */}
            <img
                ref={imageRef}
                src="/gpt.png"
                className="absolute right-0 top-1/2 -translate-y-1/2 z-50"
                style={{ opacity: 0 }} // начальное скрытие
            />

            {/* Заливка графика */}
            <svg className="absolute inset-0 w-full h-full">
                <defs>
                    <linearGradient id="area2Gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#182322" stopOpacity="1" />
                        <stop offset="100%" stopColor="#182322" stopOpacity="0" />
                    </linearGradient>
                </defs>
                <polyline
                    ref={fillRef}
                    fill="url(#area2Gradient)"
                    stroke="#204D3B"
                    strokeWidth="1"
                    points="0,200 435,200 435,120 670,120 670,70 720,70 720,35 951,35 951,500 0,500 0,400"
                />
            </svg>

            {/* Линия графика */}
            <svg className="absolute inset-0 w-full h-full z-40">
                <defs>
                    <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#1C372E" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#1C372E" stopOpacity="0.2" />
                    </linearGradient>
                </defs>
                <polyline
                    ref={graphRef}
                    fill="url(#areaGradient)"
                    stroke="#00FF95"
                    strokeWidth="1"
                    points="0,400 475,400 475,410 590,410 590,390 700,390 700,375 850,375 850,395 951,395 951,500 0,500 0,400"
                />
            </svg>
        </div>
    );
};

export default PricingGraph;
