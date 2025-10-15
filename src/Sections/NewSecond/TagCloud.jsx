import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const TagCloud = ({ customStyle }) => {
    const blurRef = useRef([]);
    const normalRef = useRef([]);
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            const ctx = gsap.context(() => {
                gsap.fromTo(
                    blurRef.current,
                    {
                        opacity: 0,
                        y: 50,
                    },
                    {
                        opacity: 0.6,
                        y: 0,
                        duration: 0.6,
                        ease: "power1.out",
                        stagger: 0.1,
                        willChange: "transform, opacity",
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: "20% 50%",
                            toggleActions: "play none none none",
                        },
                    }
                );

                gsap.fromTo(
                    normalRef.current,
                    {
                        opacity: 0,
                        y: 50,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        delay: 0.1,
                        ease: "power1.out",
                        stagger: 0.15,
                        willChange: "transform, opacity",
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: "10% 50%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            });

            return () => ctx.revert();
        });

        return () => mm.revert();
    }, []);

    return (
        <div ref={containerRef} className={`${customStyle || " "} h-[563px] relative !gradient-text-green !mono !text-[16px] !font-medium`}>
            <div
                ref={el => normalRef.current[0] = el}
                className="text-center mono text-[16px] leading-normal font-normal uppercase absolute left-[calc(50%_-_318.16px)] top-[98.01px]"
                style={{
                    background:
                        "radial-gradient(closest-side, rgba(225, 255, 222, 1.00) 0%,rgba(225, 255, 222, 0.7) 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
                Computer vision{" "}
            </div>
            <div
                ref={el => normalRef.current[1] = el}
                className="text-center mono text-[16px] leading-normal font-normal uppercase absolute left-[calc(50%_-_-208.05px)] top-[173.86px]"
                style={{
                    background:
                        "radial-gradient(closest-side, rgba(225, 255, 222, 1.00) 0%,rgba(225, 255, 222, 0.7) 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
                Automotive{" "}
            </div>
            <div
                ref={el => normalRef.current[1] = el}
                className="text-center mono text-[16px] leading-normal font-normal uppercase absolute left-[calc(50%_-_50.41px)] top-[82.74px]"
                style={{
                    background:
                        "radial-gradient(closest-side, rgba(225, 255, 222, 1.00) 0%,rgba(225, 255, 222, 0.7) 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    whiteSpace: "nowrap"
                }}
            >
                Data centers{" "}
            </div>
            <div
                ref={el => blurRef.current[0] = el}
                className="text-center mono text-[16px] leading-normal font-normal uppercase absolute left-[calc(50%_-_-118.29px)] top-[229px]"
                style={{
                    background:
                        "radial-gradient(closest-side, rgba(225, 255, 222, 1.00) 0%,rgba(225, 255, 222, 0.7) 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    opacity: "0.6",
                    filter: "blur(3.27px)",
                }}
            >
                HR-РєРѕРЅСЃР°Р»С‚РёРЅРі{" "}
            </div>
            <div
                ref={el => blurRef.current[1] = el}
                className="text-center mono text-[16px] leading-normal font-normal uppercase absolute left-[calc(50%_-_1.19px)] top-[54.62px]"
                style={{
                    background:
                        "radial-gradient(closest-side, rgba(225, 255, 222, 1.00) 0%,rgba(225, 255, 222, 0.7) 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    opacity: "0.6",
                    filter: "blur(3.27px)",
                }}
            >
                C-level РїРѕРёСЃРє{" "}
            </div>
            <div
                ref={el => blurRef.current[2] = el}
                className="text-center mono text-[16px] leading-normal font-normal uppercase absolute left-[calc(50%_-_233.71px)] top-[416px]"
                style={{
                    background:
                        "radial-gradient(closest-side, rgba(225, 255, 222, 1.00) 0%,rgba(225, 255, 222, 0.7) 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    opacity: "0.6",
                    filter: "blur(3.27px)",
                }}
            >
                Talent Mapping{" "}
            </div>
            <div
                ref={el => blurRef.current[3] = el}
                className="text-center mono text-[16px] leading-normal font-normal uppercase absolute left-[calc(50%_-_329.41px)] top-[132.74px]"
                style={{
                    background:
                        "radial-gradient(closest-side, rgba(225, 255, 222, 1.00) 0%,rgba(225, 255, 222, 0.7) 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    opacity: "0.6",
                    filter: "blur(3.27px)",
                }}
            >
                HR-Р°РІС‚РѕРјР°С‚РёР·Р°С†РёСЏ{" "}
            </div>
            <div
                ref={el => normalRef.current[3] = el}
                className="text-center mono text-[16px] leading-normal font-normal uppercase absolute left-[calc(50%_-_325.07px)] top-[176.09px]"
                style={{
                    background:
                        "radial-gradient(closest-side, rgba(225, 255, 222, 1.00) 0%,rgba(225, 255, 222, 0.7) 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
                Smart City{" "}
            </div>
            <div
                ref={el => blurRef.current[4] = el}
                className="text-center mono text-[16px] leading-normal font-normal uppercase absolute left-[calc(50%_-_238.71px)] top-[307px]"
                style={{
                    background:
                        "radial-gradient(closest-side, rgba(225, 255, 222, 1.00) 0%,rgba(225, 255, 222, 0.7) 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    opacity: "0.6",
                    filter: "blur(3.27px)",
                }}
            >
                Scrum-СЂРµРєСЂСѓС‚РёРЅРі{" "}
            </div>
            <div
                ref={el => normalRef.current[4] = el}
                className="text-center mono text-[16px] leading-normal font-normal uppercase absolute left-[calc(50%_-_45.71px)] top-[539px]"
                style={{
                    background:
                        "radial-gradient(closest-side, rgba(225, 255, 222, 1.00) 0%,rgba(225, 255, 222, 0.7) 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    whiteSpace: "nowrap"
                }}
            >
                AI agents{" "}
            </div>
            <div
                ref={el => blurRef.current[5] = el}
                className="text-center mono text-[16px] leading-normal font-normal uppercase absolute left-[calc(50%_-_342.84px)] top-[235.31px]"
                style={{
                    background:
                        "radial-gradient(closest-side, rgba(225, 255, 222, 1.00) 0%,rgba(225, 255, 222, 0.7) 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    opacity: "0.6",
                    filter: "blur(3.27px)",
                    whiteSpace: "nowrap"
                }}
            >
                HR Tech{" "}
            </div>
            <div
                ref={el => blurRef.current[6] = el}
                className="text-center mono text-[16px] leading-normal font-normal uppercase absolute left-[calc(50%_-_-280.71px)] top-[304.41px]"
                style={{
                    background:
                        "radial-gradient(closest-side, rgba(225, 255, 222, 1.00) 0%,rgba(225, 255, 222, 0.7) 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    opacity: "0.6",
                    filter: "blur(3.27px)",
                    whiteSpace: "nowrap"
                }}
            >
                HR Tech{" "}
            </div>
            <div
                ref={el => blurRef.current[7] = el}
                className="text-center mono text-[16px] leading-normal font-normal uppercase absolute left-[calc(50%_-_-92.29px)] top-[339px]"
                style={{
                    background:
                        "radial-gradient(closest-side, rgba(225, 255, 222, 1.00) 0%,rgba(225, 255, 222, 0.7) 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    opacity: "0.6",
                    filter: "blur(3.27px)",
                    whiteSpace: "nowrap"
                }}
            >
                HR Tech{" "}
            </div>
            <div
                ref={el => blurRef.current[8] = el}
                className="text-center mono text-[16px] leading-normal font-normal uppercase absolute left-[calc(50%_-_-238.59px)] top-[139.24px]"
                style={{
                    background:
                        "radial-gradient(closest-side, rgba(225, 255, 222, 1.00) 0%,rgba(225, 255, 222, 0.7) 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    opacity: "0.6",
                    filter: "blur(3.27px)",
                    whiteSpace: "nowrap"
                }}
            >
                HR Tech{" "}
            </div>
            <div
                ref={el => blurRef.current[9] = el}
                className="text-center mono text-[16px] leading-normal font-normal uppercase absolute left-[calc(50%_-_-211.29px)] top-[52px]"
                style={{
                    background:
                        "radial-gradient(closest-side, rgba(225, 255, 222, 1.00) 0%,rgba(225, 255, 222, 0.7) 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    opacity: "0.6",
                    filter: "blur(3.27px)",
                    whiteSpace: "nowrap"
                }}
            >
                HR Tech{" "}
            </div>
            <div
                ref={el => blurRef.current[10] = el}
                className="text-center mono text-[16px] leading-normal font-normal uppercase absolute left-[calc(50%_-_344.71px)] top-[373px]"
                style={{
                    background:
                        "radial-gradient(closest-side, rgba(225, 255, 222, 1.00) 0%,rgba(225, 255, 222, 0.7) 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    opacity: "0.6",
                    filter: "blur(3.27px)",
                    whiteSpace: "nowrap"
                }}
            >
                HR Tech{" "}
            </div>
            <div
                ref={el => normalRef.current[5] = el}
                className="text-center mono text-[16px] leading-normal font-normal uppercase absolute left-[calc(50%_-_119.71px)] top-44"
                style={{
                    background:
                        "radial-gradient(closest-side, rgba(225, 255, 222, 1.00) 0%,rgba(225, 255, 222, 0.7) 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    opacity: "0.6",
                    filter: "blur(3.27px)",
                    whiteSpace: "nowrap"
                }}
            >
                HR Tech{" "}
            </div>
            <div
                ref={el => blurRef.current[11] = el}
                className="text-center mono text-[16px] leading-normal font-normal uppercase absolute left-[calc(50%_-_265.41px)] top-[460.74px]"
                style={{
                    background:
                        "radial-gradient(closest-side, rgba(225, 255, 222, 1.00) 0%,rgba(225, 255, 222, 0.7) 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
                AR/VR glasses{" "}
            </div>
            <div
                ref={el => normalRef.current[6] = el}
                className="text-center mono text-[16px] leading-normal font-normal uppercase absolute left-[calc(50%_-_59.71px)] top-[392px]"
                style={{
                    background:
                        "radial-gradient(closest-side, rgba(225, 255, 222, 1.00) 0%,rgba(225, 255, 222, 0.7) 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    opacity: "0.6",
                    filter: "blur(3.27px)",
                    whiteSpace: "nowrap"
                }}
            >
                HR-РїСЂРѕС†РµСЃСЃС‹{" "}
            </div>
            <div
                ref={el => blurRef.current[12] = el}
                className="text-center mono text-[16px] leading-normal font-normal uppercase absolute left-[calc(50%_-_-219.29px)] top-[404px]"
                style={{
                    background:
                        "radial-gradient(closest-side, rgba(225, 255, 222, 1.00) 0%,rgba(225, 255, 222, 0.7) 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    opacity: "0.6",
                    filter: "blur(3.27px)",
                    whiteSpace: "nowrap"
                }}
            >
                HR-РїСЂРѕС†РµСЃСЃС‹{" "}
            </div>
            <div
                ref={el => blurRef.current[13] = el}
                className="text-center mono text-[16px] leading-normal font-normal uppercase absolute left-[calc(50%_-_-92.29px)] top-[506px]"
                style={{
                    background:
                        "radial-gradient(closest-side, rgba(225, 255, 222, 1.00) 0%,rgba(225, 255, 222, 0.7) 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    opacity: "0.6",
                    filter: "blur(3.27px)",
                    whiteSpace: "nowrap"
                }}
            >
                HR-РїСЂРѕС†РµСЃСЃС‹{" "}
            </div>
            <div
                ref={el => normalRef.current[7] = el}
                className="text-center mono text-[16px] leading-normal font-normal uppercase absolute left-[calc(50%_-_-25.29px)] top-[155.74px]"
                style={{
                    background:
                        "radial-gradient(closest-side, rgba(225, 255, 222, 1.00) 0%,rgba(225, 255, 222, 0.7) 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    whiteSpace: "nowrap"
                }}
            >
                Cloud services{" "}
            </div>
            <div
                ref={el => normalRef.current[8] = el}
                className="text-center mono text-[16px] leading-normal font-normal uppercase absolute left-[calc(50%_-_-148.98px)] top-[104.36px]"
                style={{
                    background:
                        "radial-gradient(closest-side, rgba(225, 255, 222, 1.00) 0%,rgba(225, 255, 222, 0.7) 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
                Robotics{" "}
            </div>
            <div
                ref={el => normalRef.current[9] = el}
                className="text-center mono text-[16px] leading-normal font-normal uppercase absolute left-[calc(50%_-_-226.59px)] top-[350.74px]"
                style={{
                    background:
                        "radial-gradient(closest-side, rgba(225, 255, 222, 1.00) 0%,rgba(225, 255, 222, 0.7) 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
                Aviation{" "}
            </div>
            <div
                ref={el => normalRef.current[10] = el}
                className="text-center mono text-[16px] leading-normal font-normal uppercase absolute left-[calc(50%_-_349.71px)] top-[304px]"
                style={{
                    background:
                        "radial-gradient(closest-side, rgba(225, 255, 222, 1.00) 0%,rgba(225, 255, 222, 0.7) 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
                GRADING{" "}
            </div>
            <div
                ref={el => blurRef.current[14] = el}
                className="text-center mono text-[16px] leading-normal font-normal uppercase absolute left-[calc(50%_-_133.71px)] top-[115px]"
                style={{
                    background:
                        "radial-gradient(closest-side, rgba(225, 255, 222, 1.00) 0%,rgba(225, 255, 222, 0.7) 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    opacity: "0.6",
                    filter: "blur(3.27px)",
                }}
            >
                РњРѕС‚РёРІР°С†РёСЏ{" "}
            </div>
            <div
                ref={el => blurRef.current[15] = el}
                className="text-center mono text-[16px] leading-normal font-normal uppercase absolute left-[calc(50%_-_62.39px)] top-[465.62px]"
                style={{
                    background:
                        "radial-gradient(closest-side, rgba(225, 255, 222, 1.00) 0%,rgba(225, 255, 222, 0.7) 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    opacity: "0.6",
                    filter: "blur(3.27px)",
                }}
            >
                Onboarding{" "}
            </div>
            <div
                ref={el => blurRef.current[16] = el}
                className="text-center mono text-[16px] leading-normal font-normal uppercase absolute left-[calc(50%_-_186.71px)] top-[512px]"
                style={{
                    background:
                        "radial-gradient(closest-side, rgba(225, 255, 222, 1.00) 0%,rgba(225, 255, 222, 0.7) 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    opacity: "0.6",
                    filter: "blur(3.27px)",
                }}
            >
                Onboarding{" "}
            </div>
            <div
                ref={el => blurRef.current[17] = el}
                className="text-center mono text-[16px] leading-normal font-normal uppercase absolute left-[calc(50%_-_201.89px)] top-[33.56px]"
                style={{
                    background:
                        "radial-gradient(closest-side, rgba(225, 255, 222, 1.00) 0%,rgba(225, 255, 222, 0.7) 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    opacity: "0.6",
                    filter: "blur(3.27px)",
                }}
            >
                РљР°РґСЂРѕРІС‹Р№ Р°СѓРґРёС‚{" "}
            </div>
            <div
                ref={el => normalRef.current[11] = el}
                className="text-center mono text-[16px] leading-normal font-normal uppercase absolute left-[calc(50%_-_-137.59px)] top-[276.74px]"
                style={{
                    background:
                        "radial-gradient(closest-side, rgba(225, 255, 222, 1.00) 0%,rgba(225, 255, 222, 0.7) 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    whiteSpace: "nowrap"
                }}
            >
                Smart factories{" "}
            </div>
            <div
                ref={el => normalRef.current[12] = el}
                className="text-center mono text-[16px] leading-normal font-normal uppercase absolute left-[calc(50%_-_-63.29px)] top-[437px]"
                style={{
                    background:
                        "radial-gradient(closest-side, rgba(225, 255, 222, 1.00) 0%,rgba(225, 255, 222, 0.7) 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    whiteSpace: "nowrap"
                }}
            >
                Next-gen telecom{" "}
            </div>
            <div
                ref={el => normalRef.current[13] = el}
                className="mono text-[16px] leading-normal font-normal uppercase absolute"
                style={{
                    left: "50%",
                    top: 0,
                    transform: "translateX(-50%)",
                    background:
                        "radial-gradient(closest-side, rgba(225, 255, 222, 1.00) 0%,rgba(225, 255, 222, 0.7) 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    whiteSpace: "nowrap",
                }}
            >
                Voice assistants
            </div>
            <div
                ref={el => normalRef.current[14] = el}
                className="text-center mono text-[16px] leading-normal font-normal uppercase absolute left-[calc(50%_-_193.71px)] top-[357px]"
                style={{
                    background:
                        "radial-gradient(closest-side, rgba(225, 255, 222, 1.00) 0%,rgba(225, 255, 222, 0.7) 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    whiteSpace: "nowrap"
                }}
            >
                Healthcare / Biotech{" "}
            </div>
            <div
                ref={el => normalRef.current[15] = el}
                className="text-center mono text-[16px] leading-normal font-normal uppercase absolute left-[calc(50%_-_238.41px)] top-[242.74px]"
                style={{
                    background:
                        "radial-gradient(closest-side, rgba(225, 255, 222, 1.00) 0%,rgba(225, 255, 222, 0.7) 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
                Image processing{" "}
            </div>
        </div>
    );
};

export default TagCloud;
