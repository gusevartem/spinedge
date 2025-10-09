import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Spirit = ({ customStyle }) => {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%", // когда 80% от вьюпорта достигает блока
                toggleActions: "play none none none", // проиграть один раз
            },
            defaults: { ease: "power2.out" },
        });

        tl.fromTo(
            ".spirit-image",
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 1, stagger: 0.2 }
        )
            .fromTo(
                ".spirit-text",
                { opacity: 0, x: -50 },
                { opacity: 1, x: 0, duration: 0.8, stagger: 0.2 },
                "<+0.2"
            )
            .fromTo(
                ".spirit-border",
                { height: 0 },
                { height: "100%", duration: 0.6, stagger: 0.2 },
                "<+0.2"
            );
    }, { scope: container });

    return (
        <div
            ref={container}
            className={`${customStyle || " "} flex relative flex-col md:flex-row bg-black/25 text-white p-6 md:p-10 rounded-lg w-[950px] h-[435px] mx-auto font-mono px-[25px] py-[35px]`}
        >
            <img
                className="absolute inset-0 w-full opacity-20  h-full m-auto select-none pointer-events-none z-0 rounded-4xl"
                src="/Second/whiteblur.png"
                alt="White Blur"
            />
            {/* LEFT – Today */}
            <div className="flex flex-1 relative pr-6 md:pr-4 pl-[20px]">
                {/* Animated border */}
                <div className="spirit-border absolute left-0 top-0 w-px bg-[#FF6286]" />

                <div className="flex flex-col flex-[1_1_50%] w-full z-10">
                    <h3 className="spirit-text text-[#FF6286] text-[14px] font-medium mb-4 tracking-widest mono">TODAY</h3>
                    <div className="spirit-text  w-full h-full items-end flex flex-col justify-end">
                        <div className=" text-transparent text-[46px] font-bold mb-2 w-full">
                            <span className="bg-[radial-gradient(circle_at_center,_#FF6286_0%,_rgba(255,98,134,0.25)_100%)] bg-clip-text">100</span><span className="bg-[radial-gradient(circle_at_center,_#FF6286_0%,_rgba(255,98,134,0.25)_100%)] bg-clip-text text-2xl">mw</span>
                        </div>
                        <p className="text-[#FF6286] text-[13px] mono leading-snug">
                            A single data center<br />
                            consumes up to 100 megawatts<br />
                            — like an entire city.
                        </p>
                    </div>
                </div>
                <div className="w-full flex-[1_1_50%] flex justify-start z-10">
                    <img
                        src="/NewSecond/SeconImg/red.png"
                        width={143}
                        height={240}
                        className="spirit-image w-[143px] h-[240px]"
                        alt="Red Chart"
                    />
                </div>
            </div>

            {/* RIGHT – With Spintronic */}
            <div className="flex flex-1 relative pr-6 md:pr-4 pl-[20px]">
                {/* Animated border */}
                <div className="spirit-border absolute left-0 top-0 w-px bg-[#00E599]" />

                <div className="flex flex-col flex-[1_1_50%] w-full h-full z-10">
                    <h3 className="spirit-text text-[#00E599] mb-4 text-[14px] font-medium mono tracking-widest">WITH SPINTRONIC</h3>
                    <div className="spirit-text w-full flex flex-col justify-end h-full items-start ">
                        <div className="text-[#00E599] text-[46px] font-bold mb-2">
                            <span className="bg-[radial-gradient(circle_at_center,_#00E599_0%,_rgba(0,229,153,0.25)_100%)] bg-clip-text text-transparent">
                                200</span><span className="text-2xl bg-[radial-gradient(circle_at_center,_#00E599_0%,_rgba(0,229,153,0.25)_100%)] bg-clip-text text-transparent">x less</span>
                        </div>
                        <p className="text-[#00E599] text-[13px] mono leading-snug max-w-xs">
                            Spintronic chips<br />
                            cut AI power usage<br />
                            by up to 200×
                        </p>
                    </div>
                </div>
                <div className="w-full flex-[1_1_50%] flex justify-end z-10">
                    <img
                        src="/NewSecond/SeconImg/green.png"
                        width={143}
                        height={240}
                        className="spirit-image w-[143px] h-[120px]"
                        alt="Green Chart"
                    />
                </div>
            </div>
        </div>
    );
};

export default Spirit;
