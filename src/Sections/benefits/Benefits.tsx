import { type FC } from 'react';
import ThreeIMage from '../NewSecond/ThreeIMage';
import './benefits.css';

const items = [
    {
        title: "Offload MAC from GPUs",
        text: "Reduce GPU load and inference latency across data centers infrastructure"
    },
    {
        title: "Lower power, lower cooling",
        text: "Cut energy usage and operational costs at scale with ultra-efficient compute"
    },
    {
        title: "Local LLM capability",
        text: "Run distilled or quantized LLMs entirely on-site — no cloud dependency"
    },
];


interface BenefitsProps { }
export const Benefits: FC<BenefitsProps> = () => {


    return (
        <div className='BenefitsSec' id="why">
            <img loading='lazy' src='./Benefits/car1.webp' className='BenefitsCar1' />
            <img loading='lazy' src='./Case2/car2.png' className='BenefitsCar2' />
            <div className='benefitsCenterShadow'></div>
            <img
                src='/right.webp'
                className='absolute w-[960px] top-0 right-0 rounded-4xl'
                loading="lazy"
                alt="Right decoration"
            />
            <img
                src='/threeLeft.webp'
                className='absolute BenefitsShd top-[550px] left-0 rounded-4xl'
                loading="lazy"
                alt="Left decoration"
            />
            <div className='BenefitsBody'>
                <span className='BenefitsTitle'>Key Benefits</span>
                <span className='BenefitsText mono'>
                    From hyperscale inference to local intelligence {window.innerWidth > 1000 && <br />} — SpinEdge redefines where large models can run
                </span>
                <div className='BenefitsList'>
                    {items.map((item, ind) => (
                        <div className='BenefitsListItem' key={ind}>
                            <div className='BenefitsListItemNum'>
                                0{ind + 1}
                                <img loading='lazy' src='./Benefits/corner.png' className='BenefitsCorner1' />
                                <img loading='lazy' src='./Benefits/corner.png' className='BenefitsCorner2' />
                            </div>
                            <span className='BenefitsListItemTitle'>{item.title}</span>
                            <span className='BenefitsListItemText mono'>{item.text}</span>
                        </div>
                    ))}
                </div>

                <div className='w-full relative flex justify-center items-center pt-[1%] flex-col gap-[85px] lg:mb-50 mb-26'>
                    <p className='sm:text-[37px] text-[23px] text-center leading-[120%] font-bold gradient-text-green'>
                        — and these are just three<br /> sectors out of hundreds…
                    </p>
                    <ThreeIMage />
                </div>

                <div className="absolute opacity-70 bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black z-10 pointer-events-none" />

                <div

                    className="absolute w-screen h-[30px] bottom-0 left-1/2 -translate-x-1/2 blur-[80px] rounded-full bg-[#16CDDE] opacity-100 pointer-events-none z-20"
                    style={{ willChange: 'transform, opacity' }}
                />
            </div>
        </div>
    );
};
